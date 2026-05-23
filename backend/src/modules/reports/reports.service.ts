import { Injectable } from '@nestjs/common';
import { ReportFormat, ReportType } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { GenerateReportDto } from './dto/generate-report.dto';

/** Tipos de reporte disponibles — compatible con reportTypesMock del frontend */
const REPORT_TYPES = [
  { id: 'f29', label: 'IVA proyectado (F29)' },
  { id: 'deuda', label: 'Deuda tributaria' },
  { id: 'documentos', label: 'Boletas y facturas' },
];

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  /** Retorna los tipos de reporte disponibles */
  getTypes() {
    return REPORT_TYPES;
  }

  /** Retorna el historial de reportes generados para un negocio */
  async getHistory(businessId: string) {
    const reports = await this.prisma.report.findMany({
      where: { businessId },
      orderBy: { createdAt: 'desc' },
    });

    // Mapear al formato del frontend: { id, tipo, formato, fecha, generadoPor }
    return reports.map((r) => ({
      id: r.id,
      tipo: r.type.toLowerCase(),
      formato: r.format,
      fecha: r.createdAt.toISOString().slice(0, 10),
      generadoPor: r.generatedBy,
      downloadUrl: r.downloadUrl,
    }));
  }

  /** Genera un nuevo reporte y lo persiste en la base de datos */
  async generate(dto: GenerateReportDto) {
    // TODO: Implementar generación real de archivos (PDF/CSV/Excel)
    // Por ahora se crea el registro y se retorna una URL placeholder

    const report = await this.prisma.report.create({
      data: {
        businessId: dto.businessId,
        type: dto.tipo as unknown as ReportType,
        format: dto.formato as unknown as ReportFormat,
        dateFrom: dto.desde ? new Date(dto.desde) : null,
        dateTo: dto.hasta ? new Date(dto.hasta) : null,
        generatedBy: dto.generadoPor ?? 'Sistema',
        downloadUrl: '#', // TODO: URL real del archivo generado
      },
    });

    return {
      id: report.id,
      tipo: report.type.toLowerCase(),
      formato: report.format,
      desde: dto.desde ?? null,
      hasta: dto.hasta ?? null,
      createdAt: report.createdAt.toISOString(),
      downloadUrl: report.downloadUrl,
    };
  }
}
