import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  AzureKeyCredential,
  DocumentAnalysisClient,
  DocumentField,
} from '@azure/ai-form-recognizer';
import { ExpenseSource } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { mapExpenseToFrontend } from '../../common/mappers';

/** Estructura de respuesta OCR compatible con el frontend (processBoletaOcr) */
export interface OcrResult {
  comercio: string;
  fecha: string;
  monto: number;
  categoria: string;
  ocrConfidence: number;
}

@Injectable()
export class OcrService {
  private azureClient?: DocumentAnalysisClient;

  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {}

  /**
   * Procesa una imagen de boleta/factura y extrae datos.
   * Retorna formato compatible con frontend: { comercio, fecha, monto, categoria, ocrConfidence }
   */
  async processReceipt(file: Express.Multer.File): Promise<OcrResult> {
    if (!file) {
      throw new BadRequestException('Archivo no proporcionado');
    }

    // Validar tipo de archivo
    const allowedMimes = ['image/jpeg', 'image/png', 'image/tiff', 'application/pdf'];
    if (!allowedMimes.includes(file.mimetype)) {
      throw new BadRequestException(
        `Tipo de archivo no soportado: ${file.mimetype}. Formatos permitidos: JPG, PNG, TIFF, PDF`,
      );
    }

    // Validar tamaño (max 10MB)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      throw new BadRequestException('El archivo excede el tamaño máximo de 10MB');
    }

    return this.analyzeWithAzure(file.buffer);
  }

  private async analyzeWithAzure(buffer: Buffer): Promise<OcrResult> {
    const client = this.getAzureClient();
    const poller = await client.beginAnalyzeDocument(
      'prebuilt-receipt',
      buffer,
    );
    const result = await poller.pollUntilDone();
    const document = result.documents?.[0];

    if (!document) {
      throw new BadRequestException(
        'No se pudo extraer informacion del documento',
      );
    }

    const fields = document.fields ?? {};
    const comercio =
      this.getStringValue(fields.MerchantName) ?? 'Comercio no identificado';
    const fecha =
      this.getDateValue(fields.TransactionDate) ??
      new Date().toISOString().slice(0, 10);
    const monto = this.getAmountValue(fields.Total);

    if (monto === null) {
      throw new BadRequestException(
        'No se pudo extraer el monto total del documento',
      );
    }

    return {
      comercio,
      fecha,
      monto,
      categoria: this.inferCategory(comercio),
      ocrConfidence: this.getConfidence(document.confidence, fields),
    };
  }

  private getAzureClient(): DocumentAnalysisClient {
    if (this.azureClient) {
      return this.azureClient;
    }

    const endpoint = this.configService.get<string>('AZURE_OCR_ENDPOINT');
    const key = this.configService.get<string>('AZURE_OCR_KEY');

    if (!endpoint || !key) {
      throw new InternalServerErrorException(
        'Configuracion de Azure OCR incompleta. Verifica AZURE_OCR_ENDPOINT y AZURE_OCR_KEY en .env',
      );
    }

    this.azureClient = new DocumentAnalysisClient(
      endpoint,
      new AzureKeyCredential(key),
    );
    return this.azureClient;
  }

  private getStringValue(field?: DocumentField): string | null {
    if (!field) return null;
    if ('value' in field && typeof field.value === 'string') return field.value.trim();
    return field.content?.trim() || null;
  }

  private getDateValue(field?: DocumentField): string | null {
    if (!field) return null;
    if ('value' in field && field.value instanceof Date) return field.value.toISOString().slice(0, 10);
    return field.content?.trim() || null;
  }

  private getAmountValue(field?: DocumentField): number | null {
    if (!field) return null;
    if (field.kind === 'currency') return Math.round(field.value?.amount ?? 0);
    if ('value' in field && typeof field.value === 'number') return Math.round(field.value);
    const parsed = Number(field.content?.replace(/[^\d.-]/g, ''));
    return Number.isFinite(parsed) ? Math.round(parsed) : null;
  }

  private getConfidence(
    documentConfidence: number | undefined,
    fields: Record<string, DocumentField>,
  ): number {
    const confidences = [
      documentConfidence,
      fields.MerchantName?.confidence,
      fields.TransactionDate?.confidence,
      fields.Total?.confidence,
    ].filter((value): value is number => typeof value === 'number');

    if (!confidences.length) return 0;

    const average = confidences.reduce((total, value) => total + value, 0) / confidences.length;
    return Math.max(0, Math.min(1, Number(average.toFixed(2))));
  }

  /** Infiere categoría basándose en el nombre del comercio */
  inferCategory(comercio: string): string {
    const normalized = comercio.toLowerCase();
    if (/farmacia|salud/.test(normalized)) return 'Servicios';
    if (/ferreter|construccion|herramient/.test(normalized)) return 'Insumos';
    if (/librer|papeler|oficina/.test(normalized)) return 'Oficina';
    if (/servicentro|bencina|combustible|ruta/.test(normalized)) return 'Transporte';
    if (/market|super|minimarket|almacen|restaur|cafe/.test(normalized)) return 'Alimentacion';
    return 'Otros';
  }

  /**
   * Procesa OCR y persiste el resultado como Expense en un solo flujo.
   * imagen → Azure AI → parseo → Prisma → response frontend
   */
  async processAndSave(file: Express.Multer.File, businessId: string) {
    const ocrResult = await this.processReceipt(file);

    // Resolver categoría por nombre (crear si no existe)
    let categoryId: string | null = null;
    if (ocrResult.categoria && ocrResult.categoria !== 'Otros') {
      const category = await this.prisma.category.upsert({
        where: { businessId_name: { businessId, name: ocrResult.categoria } },
        update: {},
        create: { businessId, name: ocrResult.categoria },
      });
      categoryId = category.id;
    }

    // Persistir como Expense
    const expense = await this.prisma.expense.create({
      data: {
        businessId,
        categoryId,
        amountTotal: ocrResult.monto,
        issueDate: new Date(ocrResult.fecha),
        supplierName: ocrResult.comercio,
        ocrConfidence: ocrResult.ocrConfidence,
        isManual: false,
        source: ExpenseSource.OCR,
      },
      include: { category: true },
    });

    return mapExpenseToFrontend(expense);
  }
}
