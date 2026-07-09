import { Injectable } from '@nestjs/common';
import { ExpenseSource, SyncStatus } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { SyncExpenseItem, SyncPayloadDto } from './dto/sync-payload.dto';

export interface SyncResult {
  id: string;
  status: string;
  itemCount: number;
  processed: number;
  failed: number;
  errors: Array<{ localId: string; error: string }>;
  processedAt: string;
}

@Injectable()
export class SyncService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Procesa un payload de gastos registrados offline.
   * 1. Persiste el payload completo como registro de auditoría.
   * 2. Intenta crear cada gasto individualmente.
   * 3. Retorna resumen con éxitos y errores por item.
   */
  async processOfflinePayload(dto: SyncPayloadDto): Promise<SyncResult> {
    // 1. Guardar payload como registro de auditoría
    const syncRecord = await this.prisma.syncPayload.create({
      data: {
        businessId: dto.businessId,
        itemCount: dto.items.length,
        payload: dto.items as any,
        status: SyncStatus.PROCESSING,
      },
    });

    // 2. Procesar cada item
    let processed = 0;
    const errors: Array<{ localId: string; error: string }> = [];

    for (const item of dto.items) {
      try {
        await this.processItem(dto.businessId, item);
        processed++;
      } catch (err) {
        errors.push({
          localId: item.localId,
          error: err instanceof Error ? err.message : 'Error desconocido',
        });
      }
    }

    // 3. Actualizar registro de sync
    const finalStatus =
      errors.length === 0
        ? SyncStatus.COMPLETED
        : processed === 0
          ? SyncStatus.FAILED
          : SyncStatus.COMPLETED;

    await this.prisma.syncPayload.update({
      where: { id: syncRecord.id },
      data: {
        status: finalStatus,
        processedAt: new Date(),
        errorLog: errors.length > 0 ? JSON.stringify(errors) : null,
      },
    });

    return {
      id: syncRecord.id,
      status: finalStatus,
      itemCount: dto.items.length,
      processed,
      failed: errors.length,
      errors,
      processedAt: new Date().toISOString(),
    };
  }

  private async processItem(
    businessId: string,
    item: SyncExpenseItem,
  ): Promise<void> {
    // Resolver categoría por nombre (crear si no existe)
    let categoryId: string | null = null;

    if (item.categoryName) {
      const category = await this.prisma.category.upsert({
        where: {
          businessId_name: { businessId, name: item.categoryName },
        },
        update: {},
        create: {
          businessId,
          name: item.categoryName,
        },
      });
      categoryId = category.id;
    }

    // Crear el gasto con source OFFLINE_SYNC
    await this.prisma.expense.create({
      data: {
        businessId,
        categoryId,
        amountTotal: item.amountTotal,
        amountNet: item.amountNet ?? null,
        amountVat: item.amountVat ?? null,
        issueDate: new Date(item.issueDate),
        supplierRut: item.supplierRut ?? null,
        supplierName: item.supplierName ?? null,
        description: item.description ?? null,
        isManual: false,
        source: ExpenseSource.OFFLINE_SYNC,
      },
    });
  }
}
