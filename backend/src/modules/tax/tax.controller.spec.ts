import { Test, TestingModule } from '@nestjs/testing';
import { TaxController } from './tax.controller';
import { TaxService } from './tax.service';
import { PrismaService } from '../../prisma/prisma.service';

const mockService = {
  findAll: jest.fn(),
  findOne: jest.fn(),
  accept: jest.fn(),
  reject: jest.fn(),
  sync: jest.fn(),
};

const mockPrisma = {
  business: { findUnique: jest.fn().mockResolvedValue({ id: 'biz-1' }) },
};

describe('TaxController', () => {
  let controller: TaxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaxController],
      providers: [
        { provide: TaxService, useValue: mockService },
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    controller = module.get<TaxController>(TaxController);
  });

  it('debe estar definido', () => {
    expect(controller).toBeDefined();
  });

  it('debe llamar a findAll con businessId', async () => {
    mockService.findAll.mockResolvedValue([]);
    const result = await controller.findAll('biz-1');
    expect(mockService.findAll).toHaveBeenCalledWith('biz-1');
    expect(result).toEqual([]);
  });

  it('debe llamar a accept con id, businessId y reason', async () => {
    mockService.accept.mockResolvedValue({ id: '1', estado: 'aceptada' });
    const result = await controller.accept('1', 'biz-1', { reason: 'OK' });
    expect(mockService.accept).toHaveBeenCalledWith('1', 'biz-1', 'OK');
    expect(result.estado).toBe('aceptada');
  });

  it('debe llamar a sync con businessId', async () => {
    mockService.sync.mockResolvedValue({ syncedAt: '2026-05-23', totalInvoices: 3, newInvoices: 3 });
    const result = await controller.sync({ businessId: 'biz-1' });
    expect(mockService.sync).toHaveBeenCalledWith('biz-1');
    expect(result.newInvoices).toBe(3);
  });
});
