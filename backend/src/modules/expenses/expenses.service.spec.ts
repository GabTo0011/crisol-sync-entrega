import { NotFoundException, BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ExpensesService } from './expenses.service';
import { PrismaService } from '../../prisma/prisma.service';

const mockExpense = {
  id: '1',
  businessId: 'biz-1',
  amountTotal: 48990,
  issueDate: new Date('2026-05-20'),
  supplierName: 'Ferretería',
  status: 'REGISTERED',
  ocrConfidence: 0.92,
  documentUrl: null,
  description: 'Test',
  category: { name: 'Insumos' },
  categoryId: 'cat-1',
  amountNet: null,
  amountVat: null,
  supplierRut: null,
  source: 'MANUAL',
  isManual: true,
  createdAt: new Date(),
};

const mockPrisma = {
  expense: {
    create: jest.fn().mockResolvedValue(mockExpense),
    findMany: jest.fn().mockResolvedValue([mockExpense]),
    findFirst: jest.fn().mockResolvedValue(mockExpense),
    update: jest.fn().mockResolvedValue(mockExpense),
    delete: jest.fn().mockResolvedValue(mockExpense),
    count: jest.fn().mockResolvedValue(1),
  },
};

describe('ExpensesService', () => {
  let service: ExpensesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExpensesService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<ExpensesService>(ExpensesService);
    jest.clearAllMocks();
    mockPrisma.expense.findFirst.mockResolvedValue(mockExpense);
  });

  it('debe estar definido', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('debe retornar array plano sin paginación (compatibilidad frontend)', async () => {
      mockPrisma.expense.findMany.mockResolvedValue([mockExpense]);
      const result = await service.findAll('biz-1');

      expect(Array.isArray(result)).toBe(true);
      expect((result as any[])[0]).toHaveProperty('fecha', '2026-05-20');
      expect((result as any[])[0]).toHaveProperty('comercio', 'Ferretería');
      expect((result as any[])[0]).toHaveProperty('estado', 'registrada');
    });

    it('debe retornar paginado cuando se pasan page y limit', async () => {
      mockPrisma.expense.findMany.mockResolvedValue([mockExpense]);
      mockPrisma.expense.count.mockResolvedValue(1);
      const result = await service.findAll('biz-1', 1, 20);

      expect((result as any).data[0]).toHaveProperty('fecha', '2026-05-20');
      expect((result as any).meta.total).toBe(1);
      expect((result as any).meta.page).toBe(1);
    });
  });

  describe('findOne', () => {
    it('debe lanzar NotFoundException si no existe', async () => {
      mockPrisma.expense.findFirst.mockResolvedValue(null);
      await expect(service.findOne('fake-id', 'biz-1')).rejects.toThrow(NotFoundException);
    });

    it('debe retornar gasto en formato frontend', async () => {
      const result = await service.findOne('1', 'biz-1');
      expect(result).toHaveProperty('comercio');
      expect(result).toHaveProperty('estado', 'registrada');
    });
  });

  describe('cancel', () => {
    it('debe cambiar estado a anulada', async () => {
      mockPrisma.expense.update.mockResolvedValue({ ...mockExpense, status: 'CANCELLED' });
      const result = await service.cancel('1', 'biz-1', 'Error');
      expect(result.estado).toBe('anulada');
    });

    it('debe lanzar BadRequestException si ya está anulado', async () => {
      mockPrisma.expense.findFirst.mockResolvedValue({ ...mockExpense, status: 'CANCELLED' });
      await expect(service.cancel('1', 'biz-1')).rejects.toThrow(BadRequestException);
    });
  });

  describe('remove', () => {
    it('debe eliminar y retornar success', async () => {
      const result = await service.remove('1', 'biz-1');
      expect(result).toEqual({ success: true });
    });
  });
});
