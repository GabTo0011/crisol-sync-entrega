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
  });

  it('debe estar definido', () => {
    expect(controller).toBeDefined();
  });

  it('debe llamar a findAll sin paginación por defecto', async () => {
    mockService.findAll.mockResolvedValue([]);
    const result = await controller.findAll('biz-1', undefined, undefined);
    expect(mockService.findAll).toHaveBeenCalledWith('biz-1', undefined, undefined);
    expect(result).toEqual([]);
  });

  it('debe llamar a findAll con paginación cuando se pasan params', async () => {
    mockService.findAll.mockResolvedValue({ data: [], meta: { total: 0, page: 1, limit: 20, totalPages: 0 } });
    const result = await controller.findAll('biz-1', '1', '20');
    expect(mockService.findAll).toHaveBeenCalledWith('biz-1', 1, 20);
  });

  it('debe llamar a cancel con id, businessId y reason', async () => {
    mockService.cancel.mockResolvedValue({ id: '1', estado: 'anulada' });
    const result = await controller.cancel('1', 'biz-1', { reason: 'Error' });
    expect(mockService.cancel).toHaveBeenCalledWith('1', 'biz-1', 'Error');
    expect(result.estado).toBe('anulada');
  });
});
