import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

export interface DashboardMetrics {
  totalExpenses: number;
  monthlyExpenses: number;
  vatCredit: number;
  pendingInvoices: number;
  recentExpenses: Array<{
    id: string;
    supplierName: string | null;
    amountTotal: number;
    issueDate: string;
    status: string;
    category: string | null;
  }>;
  expensesByCategory: Array<{
    category: string;
    total: number;
    count: number;
  }>;
}

@Injectable()
export class AnalyticsService {
  constructor(private readonly prisma: PrismaService) {}

  async getDashboard(businessId: string): Promise<DashboardMetrics> {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    // Ejecutar queries en paralelo para eficiencia
    const [
      totalExpensesAgg,
      monthlyExpensesAgg,
      vatCreditAgg,
      pendingInvoicesCount,
      recentExpenses,
      expensesByCategory,
    ] = await Promise.all([
      // Total acumulado de gastos del negocio
      this.prisma.expense.aggregate({
        where: { businessId },
        _sum: { amountTotal: true },
      }),

      // Gastos del mes actual
      this.prisma.expense.aggregate({
        where: {
          businessId,
          issueDate: { gte: startOfMonth },
        },
        _sum: { amountTotal: true },
      }),

      // Crédito IVA: suma de amountVat de gastos del mes
      this.prisma.expense.aggregate({
        where: {
          businessId,
          issueDate: { gte: startOfMonth },
          amountVat: { not: null },
        },
        _sum: { amountVat: true },
      }),

      // Facturas pendientes de aceptación
      this.prisma.invoiceSii.count({
        where: {
          businessId,
          status: 'PENDING_ACCEPTANCE',
        },
      }),

      // Últimos 10 gastos
      this.prisma.expense.findMany({
        where: { businessId },
        orderBy: { issueDate: 'desc' },
        take: 10,
        include: { category: true },
      }),

      // Gastos agrupados por categoría
      this.prisma.expense.groupBy({
        by: ['categoryId'],
        where: { businessId },
        _sum: { amountTotal: true },
        _count: { id: true },
      }),
    ]);

    // Resolver nombres de categorías
    const categoryIds = expensesByCategory
      .map((g) => g.categoryId)
      .filter((id): id is string => id !== null);

    const categories =
      categoryIds.length > 0
        ? await this.prisma.category.findMany({
            where: { id: { in: categoryIds } },
            select: { id: true, name: true },
          })
        : [];

    const categoryMap = new Map(categories.map((c) => [c.id, c.name]));

    return {
      totalExpenses: totalExpensesAgg._sum.amountTotal ?? 0,
      monthlyExpenses: monthlyExpensesAgg._sum.amountTotal ?? 0,
      vatCredit: vatCreditAgg._sum.amountVat ?? 0,
      pendingInvoices: pendingInvoicesCount,
      recentExpenses: recentExpenses.map((e) => ({
        id: e.id,
        supplierName: e.supplierName,
        amountTotal: e.amountTotal,
        issueDate: e.issueDate.toISOString().slice(0, 10),
        status: e.status,
        category: e.category?.name ?? null,
      })),
      expensesByCategory: expensesByCategory.map((g) => ({
        category: g.categoryId
          ? (categoryMap.get(g.categoryId) ?? 'Sin categoría')
          : 'Sin categoría',
        total: g._sum.amountTotal ?? 0,
        count: g._count.id,
      })),
    };
  }
}
