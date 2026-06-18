import { NotFoundException, BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ExpensesService } from './expenses.service';
import { PrismaService } from '../../prisma/prisma.service';

const mockExpense = {
  id: '1',
  businessId: 'biz-1',
  amountTotal: 48990,
  amountNet: 41168,
  amountVat: 7822,
  issueDate: new Date('2026-05-20'),
  supplierName: 'Ferretería San José',
  supplierRut: '76.123.456-K',
  status: 'REGISTERED',
  ocrConfidence: 0.92,
  documentUrl: null,
  description: 'Compra materiales',
  category: { id: 'cat-1', businessId: 'biz-1', name: 'Insumos', createdAt: new Date(), updatedAt: new Date() },
  categoryId: 'cat-1',
  source: 'MANUAL',
  isManual: true,
  createdAt: new Date(),
  updatedAt: new Date(),
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
    // Restaurar mocks por defecto
    mockPrisma.expense.create.mockResolvedValue(mockExpense);
    mockPrisma.expense.findMany.mockResolvedValue([mockExpense]);
    mockPrisma.expense.findFirst.mockResolvedValue(mockExpense);
    mockPrisma.expense.update.mockResolvedValue(mockExpense);
    mockPrisma.expense.delete.mockResolvedValue(mockExpense);
    mockPrisma.expense.count.mockResolvedValue(1);
  });

  it('debe estar definido', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('debe crear un gasto y retornarlo en formato frontend', async () => {
      const dto = {
        businessId: 'biz-1',
        amountTotal: 48990,
        issueDate: '2026-05-20',
        supplierName: 'Ferretería San José',
        isManual: true,
      };

      const result = await service.create(dto as any);

      expect(mockPrisma.expense.create).toHaveBeenCalledTimes(1);
      expect(result).toHaveProperty('fecha', '2026-05-20');
      expect(result).toHaveProperty('comercio', 'Ferretería San José');
      expect(result).toHaveProperty('monto', 48990);
      expect(result).toHaveProperty('estado', 'registrada');
    });

    it('debe asignar source MANUAL si isManual es true', async () => {
      const dto = { businessId: 'biz-1', amountTotal: 1000, issueDate: '2026-01-01', isManual: true };
      await service.create(dto as any);

      const createCall = mockPrisma.expense.create.mock.calls[0][0];
      expect(createCall.data.source).toBe('MANUAL');
      expect(createCall.data.isManual).toBe(true);
    });

    it('debe asignar source OCR si isManual es false', async () => {
      const dto = { businessId: 'biz-1', amountTotal: 1000, issueDate: '2026-01-01', isManual: false };
      await service.create(dto as any);

      const createCall = mockPrisma.expense.create.mock.calls[0][0];
      expect(createCall.data.source).toBe('OCR');
    });
  });

  describe('findAll', () => {
    it('debe retornar array plano sin paginación (compatibilidad frontend)', async () => {
      const result = await service.findAll('biz-1');

      expect(Array.isArray(result)).toBe(true);
      expect((result as any[])[0]).toHaveProperty('fecha', '2026-05-20');
      expect((result as any[])[0]).toHaveProperty('comercio', 'Ferretería San José');
      expect((result as any[])[0]).toHaveProperty('estado', 'registrada');
    });

    it('debe filtrar por businessId', async () => {
      await service.findAll('biz-1');
      expect(mockPrisma.expense.findMany).toHaveBeenCalledWith(
        expect.objectContaining({ where: { businessId: 'biz-1' } }),
      );
    });

    it('debe retornar paginado cuando se pasan page y limit', async () => {
      const result = await service.findAll('biz-1', 1, 20);

      expect((result as any).data[0]).toHaveProperty('fecha', '2026-05-20');
      expect((result as any).meta).toEqual({ total: 1, page: 1, limit: 20, totalPages: 1 });
    });

    it('debe calcular totalPages correctamente', async () => {
      mockPrisma.expense.count.mockResolvedValue(45);
      const result = await service.findAll('biz-1', 1, 20);
      expect((result as any).meta.totalPages).toBe(3);
    });
  });

  describe('findOne', () => {
    it('debe retornar gasto en formato frontend', async () => {
      const result = await service.findOne('1', 'biz-1');
      expect(result).toHaveProperty('comercio', 'Ferretería San José');
      expect(result).toHaveProperty('estado', 'registrada');
      expect(result).toHaveProperty('monto', 48990);
    });

    it('debe lanzar NotFoundException si no existe', async () => {
      mockPrisma.expense.findFirst.mockResolvedValue(null);
      await expect(service.findOne('fake-id', 'biz-1')).rejects.toThrow(NotFoundException);
    });

    it('debe filtrar por id Y businessId', async () => {
      await service.findOne('exp-1', 'biz-1');
      expect(mockPrisma.expense.findFirst).toHaveBeenCalledWith(
        expect.objectContaining({ where: { id: 'exp-1', businessId: 'biz-1' } }),
      );
    });
  });

  describe('update', () => {
    it('debe actualizar campos y retornar formato frontend', async () => {
      const updatedExpense = { ...mockExpense, supplierName: 'Nuevo Nombre' };
      mockPrisma.expense.update.mockResolvedValue(updatedExpense);

      const result = await service.update('1', 'biz-1', { supplierName: 'Nuevo Nombre' } as any);
      expect(mockPrisma.expense.update).toHaveBeenCalledTimes(1);
      expect(result).toHaveProperty('comercio', 'Nuevo Nombre');
    });

    it('debe lanzar NotFoundException si el gasto no existe', async () => {
      mockPrisma.expense.findFirst.mockResolvedValue(null);
      await expect(service.update('fake', 'biz-1', {} as any)).rejects.toThrow(NotFoundException);
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

    it('debe lanzar NotFoundException si no existe', async () => {
      mockPrisma.expense.findFirst.mockResolvedValue(null);
      await expect(service.cancel('fake', 'biz-1')).rejects.toThrow(NotFoundException);
    });

    it('debe concatenar razón de anulación en la descripción', async () => {
      await service.cancel('1', 'biz-1', 'Monto incorrecto');
      const updateCall = mockPrisma.expense.update.mock.calls[0][0];
      expect(updateCall.data.description).toContain('[Anulado: Monto incorrecto]');
    });
  });

  describe('remove', () => {
    it('debe eliminar y retornar success', async () => {
      const result = await service.remove('1', 'biz-1');
      expect(result).toEqual({ success: true });
      expect(mockPrisma.expense.delete).toHaveBeenCalledWith({ where: { id: '1' } });
    });

    it('debe lanzar NotFoundException si no existe', async () => {
      mockPrisma.expense.findFirst.mockResolvedValue(null);
      await expect(service.remove('fake', 'biz-1')).rejects.toThrow(NotFoundException);
    });
  });
});
