import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ExpenseSource, ExpenseStatus } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { mapExpenseToFrontend, mapExpensesToFrontend } from '../../common/mappers';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';

@Injectable()
export class ExpensesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateExpenseDto) {
    const expense = await this.prisma.expense.create({
      data: {
        businessId: dto.businessId,
        categoryId: dto.categoryId,
        amountTotal: dto.amountTotal,
        amountNet: dto.amountNet,
        amountVat: dto.amountVat,
        issueDate: new Date(dto.issueDate),
        supplierRut: dto.supplierRut,
        supplierName: dto.supplierName,
        description: dto.description,
        documentUrl: dto.documentUrl,
        ocrConfidence: dto.ocrConfidence,
        isManual: dto.isManual ?? true,
        source: dto.isManual === false ? ExpenseSource.OCR : ExpenseSource.MANUAL,
      },
      include: { category: true },
    });

    return mapExpenseToFrontend(expense);
  }

  async findAll(businessId: string, page?: number, limit?: number) {
    // Si no se pide paginación explícita, retornar array plano (compatibilidad frontend)
    if (!page && !limit) {
      const expenses = await this.prisma.expense.findMany({
        where: { businessId },
        orderBy: { issueDate: 'desc' },
        include: { category: true },
      });
      return mapExpensesToFrontend(expenses);
    }

    const pageNum = page ?? 1;
    const limitNum = limit ?? 50;
    const skip = (pageNum - 1) * limitNum;

    const [expenses, total] = await Promise.all([
      this.prisma.expense.findMany({
        where: { businessId },
        orderBy: { issueDate: 'desc' },
        include: { category: true },
        skip,
        take: limitNum,
      }),
      this.prisma.expense.count({ where: { businessId } }),
    ]);

    return {
      data: mapExpensesToFrontend(expenses),
      meta: {
        total,
        page: pageNum,
        limit: limitNum,
        totalPages: Math.ceil(total / limitNum),
      },
    };
  }

  async findOne(id: string, businessId: string) {
    const expense = await this.prisma.expense.findFirst({
      where: { id, businessId },
      include: { category: true },
    });

    if (!expense) {
      throw new NotFoundException('Gasto no encontrado');
    }

    return mapExpenseToFrontend(expense);
  }

  async update(id: string, businessId: string, dto: UpdateExpenseDto) {
    // Verificar existencia
    await this.findOneRaw(id, businessId);

    const expense = await this.prisma.expense.update({
      where: { id },
      data: {
        categoryId: dto.categoryId,
        amountTotal: dto.amountTotal,
        amountNet: dto.amountNet,
        amountVat: dto.amountVat,
        issueDate: dto.issueDate ? new Date(dto.issueDate) : undefined,
        supplierRut: dto.supplierRut,
        supplierName: dto.supplierName,
        description: dto.description,
        documentUrl: dto.documentUrl,
        isManual: dto.isManual,
      },
      include: { category: true },
    });

    return mapExpenseToFrontend(expense);
  }

  async cancel(id: string, businessId: string, reason?: string) {
    const expense = await this.findOneRaw(id, businessId);

    if (expense.status === ExpenseStatus.CANCELLED) {
      throw new BadRequestException('El gasto ya está anulado');
    }

    const updated = await this.prisma.expense.update({
      where: { id },
      data: {
        status: ExpenseStatus.CANCELLED,
        description: reason
          ? `${expense.description ?? ''} [Anulado: ${reason}]`.trim()
          : expense.description,
      },
      include: { category: true },
    });

    return mapExpenseToFrontend(updated);
  }

  async remove(id: string, businessId: string) {
    await this.findOneRaw(id, businessId);

    await this.prisma.expense.delete({
      where: { id },
    });

    return { success: true };
  }

  /** Retorna el expense raw de Prisma (sin mapear) — uso interno */
  private async findOneRaw(id: string, businessId: string) {
    const expense = await this.prisma.expense.findFirst({
      where: { id, businessId },
      include: { category: true },
    });

    if (!expense) {
      throw new NotFoundException('Gasto no encontrado');
    }

    return expense;
  }
}
