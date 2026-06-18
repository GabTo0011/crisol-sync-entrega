import { Test, TestingModule } from '@nestjs/testing';
import { ExpensesController } from './expenses.controller';
import { ExpensesService } from './expenses.service';
import { PrismaService } from '../../prisma/prisma.service';

const mockService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  cancel: jest.fn(),
  remove: jest.fn(),
};

const mockPrisma = {
  business: { findUnique: jest.fn().mockResolvedValue({ id: 'biz-1' }) },
};

describe('ExpensesController', () => {
  let controller: ExpensesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpensesController],
      providers: [
        { provide: ExpensesService, useValue: mockService },
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    controller = module.get<ExpensesController>(ExpensesController);
    jest.clearAllMocks();
  });

  it('debe estar definido', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('debe llamar a service.create con el DTO', async () => {
      const dto = { businessId: 'biz-1', amountTotal: 10000, issueDate: '2026-01-01' } as any;
      mockService.create.mockResolvedValue({ id: '1', monto: 10000 });
      const result = await controller.create(dto);

      expect(mockService.create).toHaveBeenCalledWith(dto);
      expect(result).toHaveProperty('id');
    });
  });

  describe('findAll', () => {
    it('debe llamar a findAll sin paginación por defecto', async () => {
      mockService.findAll.mockResolvedValue([]);
      const result = await controller.findAll('biz-1', undefined, undefined);
      expect(mockService.findAll).toHaveBeenCalledWith('biz-1', undefined, undefined);
      expect(result).toEqual([]);
    });

    it('debe parsear page y limit como números', async () => {
      mockService.findAll.mockResolvedValue({ data: [], meta: {} });
      await controller.findAll('biz-1', '2', '25');
      expect(mockService.findAll).toHaveBeenCalledWith('biz-1', 2, 25);
    });

    it('debe clampear limit a máximo 100', async () => {
      mockService.findAll.mockResolvedValue({ data: [], meta: {} });
      await controller.findAll('biz-1', '1', '200');
      expect(mockService.findAll).toHaveBeenCalledWith('biz-1', 1, 100);
    });

    it('debe clampear page a mínimo 1', async () => {
      mockService.findAll.mockResolvedValue({ data: [], meta: {} });
      await controller.findAll('biz-1', '0', '20');
      expect(mockService.findAll).toHaveBeenCalledWith('biz-1', 1, 20);
    });
  });

  describe('findOne', () => {
    it('debe llamar a service.findOne con id y businessId', async () => {
      mockService.findOne.mockResolvedValue({ id: '1', monto: 5000 });
      const result = await controller.findOne('exp-1', 'biz-1');
      expect(mockService.findOne).toHaveBeenCalledWith('exp-1', 'biz-1');
      expect(result).toHaveProperty('id');
    });
  });

  describe('update', () => {
    it('debe llamar a service.update con id, businessId y dto', async () => {
      const dto = { supplierName: 'Nuevo' } as any;
      mockService.update.mockResolvedValue({ id: '1', comercio: 'Nuevo' });
      const result = await controller.update('exp-1', 'biz-1', dto);
      expect(mockService.update).toHaveBeenCalledWith('exp-1', 'biz-1', dto);
      expect(result).toHaveProperty('comercio', 'Nuevo');
    });
  });

  describe('cancel', () => {
    it('debe llamar a service.cancel con id, businessId y reason', async () => {
      mockService.cancel.mockResolvedValue({ id: '1', estado: 'anulada' });
      const result = await controller.cancel('1', 'biz-1', { reason: 'Error' });
      expect(mockService.cancel).toHaveBeenCalledWith('1', 'biz-1', 'Error');
      expect(result.estado).toBe('anulada');
    });
  });

  describe('remove', () => {
    it('debe llamar a service.remove con id y businessId', async () => {
      mockService.remove.mockResolvedValue({ success: true });
      const result = await controller.remove('exp-1', 'biz-1');
      expect(mockService.remove).toHaveBeenCalledWith('exp-1', 'biz-1');
      expect(result).toEqual({ success: true });
    });
  });
});
