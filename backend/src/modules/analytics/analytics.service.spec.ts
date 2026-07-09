import { Test, TestingModule } from '@nestjs/testing';
import { AnalyticsService } from './analytics.service';
import { PrismaService } from '../../prisma/prisma.service';

const mockPrisma = {
  expense: {
    aggregate: jest.fn(),
    findMany: jest.fn(),
    groupBy: jest.fn(),
  },
  invoiceSii: {
    count: jest.fn(),
  },
  category: {
    findMany: jest.fn(),
  },
};

describe('AnalyticsService', () => {
  let service: AnalyticsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AnalyticsService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<AnalyticsService>(AnalyticsService);
    jest.clearAllMocks();
  });

  it('debe estar definido', () => {
    expect(service).toBeDefined();
  });

  describe('getDashboard', () => {
    it('debe retornar métricas completas del dashboard', async () => {
      mockPrisma.expense.aggregate
        .mockResolvedValueOnce({ _sum: { amountTotal: 1250000 } }) // totalExpenses
        .mockResolvedValueOnce({ _sum: { amountTotal: 348000 } }) // monthlyExpenses
        .mockResolvedValueOnce({ _sum: { amountVat: 66120 } }); // vatCredit

      mockPrisma.invoiceSii.count.mockResolvedValue(3);

      mockPrisma.expense.findMany.mockResolvedValue([
        {
          id: '1',
          supplierName: 'Test',
          amountTotal: 48990,
          issueDate: new Date('2026-05-20'),
          status: 'REGISTERED',
          category: { name: 'Insumos' },
        },
      ]);

      mockPrisma.expense.groupBy.mockResolvedValue([
        {
          categoryId: 'cat-1',
          _sum: { amountTotal: 550000 },
          _count: { id: 5 },
        },
      ]);

      mockPrisma.category.findMany.mockResolvedValue([
        { id: 'cat-1', name: 'Insumos' },
      ]);

      const result = await service.getDashboard('biz-1');

      expect(result.totalExpenses).toBe(1250000);
      expect(result.monthlyExpenses).toBe(348000);
      expect(result.vatCredit).toBe(66120);
      expect(result.pendingInvoices).toBe(3);
      expect(result.recentExpenses).toHaveLength(1);
      expect(result.recentExpenses[0].category).toBe('Insumos');
      expect(result.expensesByCategory).toHaveLength(1);
      expect(result.expensesByCategory[0].category).toBe('Insumos');
      expect(result.expensesByCategory[0].total).toBe(550000);
    });

    it('debe manejar negocio sin datos', async () => {
      mockPrisma.expense.aggregate
        .mockResolvedValueOnce({ _sum: { amountTotal: null } })
        .mockResolvedValueOnce({ _sum: { amountTotal: null } })
        .mockResolvedValueOnce({ _sum: { amountVat: null } });

      mockPrisma.invoiceSii.count.mockResolvedValue(0);
      mockPrisma.expense.findMany.mockResolvedValue([]);
      mockPrisma.expense.groupBy.mockResolvedValue([]);

      const result = await service.getDashboard('biz-empty');

      expect(result.totalExpenses).toBe(0);
      expect(result.monthlyExpenses).toBe(0);
      expect(result.vatCredit).toBe(0);
      expect(result.pendingInvoices).toBe(0);
      expect(result.recentExpenses).toEqual([]);
      expect(result.expensesByCategory).toEqual([]);
    });
  });
});
