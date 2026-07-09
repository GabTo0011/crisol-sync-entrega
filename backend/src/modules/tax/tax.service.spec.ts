import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TaxService } from './tax.service';
import { PrismaService } from '../../prisma/prisma.service';

const mockInvoice = {
  id: '1',
  businessId: 'biz-1',
  folio: 'F-001',
  supplierRut: '76.111.222-3',
  supplierName: 'Test Ltda',
  amountNet: 100000,
  amountVat: 19000,
  amountTotal: 119000,
  issuedAt: new Date('2026-04-01'),
  receivedAt: new Date('2026-04-03'),
  status: 'PENDING_ACCEPTANCE',
  actionReason: null,
  actionAt: null,
  createdAt: new Date(),
  updatedAt: new Date(),
};

const mockPrisma = {
  invoiceSii: {
    findMany: jest.fn(),
    findFirst: jest.fn(),
    update: jest.fn(),
    create: jest.fn(),
    count: jest.fn(),
  },
};

describe('TaxService', () => {
  let service: TaxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaxService, { provide: PrismaService, useValue: mockPrisma }],
    }).compile();

    service = module.get<TaxService>(TaxService);
    jest.clearAllMocks();
  });

  it('debe estar definido', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('debe retornar facturas en formato frontend', async () => {
      mockPrisma.invoiceSii.findMany.mockResolvedValue([mockInvoice]);
      const result = await service.findAll('biz-1');

      expect(result[0]).toHaveProperty('rutEmisor', '76.111.222-3');
      expect(result[0]).toHaveProperty('razonSocial', 'Test Ltda');
      expect(result[0]).toHaveProperty('fechaEmision', '2026-04-01');
      expect(result[0]).toHaveProperty('fechaRecepcion', '2026-04-03');
      expect(result[0]).toHaveProperty('estado', 'pendiente');
      expect(result[0]).toHaveProperty('diasRestantes');
    });

    it('debe filtrar por businessId', async () => {
      mockPrisma.invoiceSii.findMany.mockResolvedValue([]);
      await service.findAll('biz-1');
      expect(mockPrisma.invoiceSii.findMany).toHaveBeenCalledWith(
        expect.objectContaining({ where: { businessId: 'biz-1' } }),
      );
    });

    it('debe retornar array vacío si no hay facturas', async () => {
      mockPrisma.invoiceSii.findMany.mockResolvedValue([]);
      const result = await service.findAll('biz-1');
      expect(result).toEqual([]);
    });
  });

  describe('findOne', () => {
    it('debe retornar factura en formato frontend', async () => {
      mockPrisma.invoiceSii.findFirst.mockResolvedValue(mockInvoice);
      const result = await service.findOne('1', 'biz-1');
      expect(result).toHaveProperty('folio', 'F-001');
      expect(result).toHaveProperty('estado', 'pendiente');
    });

    it('debe lanzar NotFoundException si no existe', async () => {
      mockPrisma.invoiceSii.findFirst.mockResolvedValue(null);
      await expect(service.findOne('fake', 'biz-1')).rejects.toThrow(
        NotFoundException,
      );
    });

    it('debe filtrar por id Y businessId', async () => {
      mockPrisma.invoiceSii.findFirst.mockResolvedValue(mockInvoice);
      await service.findOne('inv-1', 'biz-1');
      expect(mockPrisma.invoiceSii.findFirst).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { id: 'inv-1', businessId: 'biz-1' },
        }),
      );
    });
  });

  describe('accept', () => {
    it('debe cambiar estado a aceptada', async () => {
      mockPrisma.invoiceSii.findFirst.mockResolvedValue(mockInvoice);
      mockPrisma.invoiceSii.update.mockResolvedValue({
        ...mockInvoice,
        status: 'ACCEPTED',
      });

      const result = await service.accept('1', 'biz-1', 'OK');
      expect(result.estado).toBe('aceptada');
    });

    it('debe guardar actionReason y actionAt', async () => {
      mockPrisma.invoiceSii.findFirst.mockResolvedValue(mockInvoice);
      mockPrisma.invoiceSii.update.mockResolvedValue({
        ...mockInvoice,
        status: 'ACCEPTED',
      });

      await service.accept('1', 'biz-1', 'Verificada');
      const updateCall = mockPrisma.invoiceSii.update.mock.calls[0][0];
      expect(updateCall.data.actionReason).toBe('Verificada');
      expect(updateCall.data.actionAt).toBeInstanceOf(Date);
    });

    it('debe lanzar BadRequestException si ya fue aceptada', async () => {
      mockPrisma.invoiceSii.findFirst.mockResolvedValue({
        ...mockInvoice,
        status: 'ACCEPTED',
      });
      await expect(service.accept('1', 'biz-1')).rejects.toThrow(
        BadRequestException,
      );
    });

    it('debe lanzar BadRequestException si ya fue rechazada', async () => {
      mockPrisma.invoiceSii.findFirst.mockResolvedValue({
        ...mockInvoice,
        status: 'REJECTED',
      });
      await expect(service.accept('1', 'biz-1')).rejects.toThrow(
        BadRequestException,
      );
    });

    it('debe lanzar NotFoundException si no existe', async () => {
      mockPrisma.invoiceSii.findFirst.mockResolvedValue(null);
      await expect(service.accept('fake', 'biz-1')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('reject', () => {
    it('debe cambiar estado a rechazada', async () => {
      mockPrisma.invoiceSii.findFirst.mockResolvedValue(mockInvoice);
      mockPrisma.invoiceSii.update.mockResolvedValue({
        ...mockInvoice,
        status: 'REJECTED',
      });

      const result = await service.reject('1', 'biz-1', 'Datos incorrectos');
      expect(result.estado).toBe('rechazada');
    });

    it('debe lanzar BadRequestException si ya fue aceptada', async () => {
      mockPrisma.invoiceSii.findFirst.mockResolvedValue({
        ...mockInvoice,
        status: 'ACCEPTED',
      });
      await expect(service.reject('1', 'biz-1')).rejects.toThrow(
        BadRequestException,
      );
    });

    it('debe lanzar BadRequestException si ya fue rechazada', async () => {
      mockPrisma.invoiceSii.findFirst.mockResolvedValue({
        ...mockInvoice,
        status: 'REJECTED',
      });
      await expect(service.reject('1', 'biz-1')).rejects.toThrow(
        BadRequestException,
      );
    });

    it('debe lanzar NotFoundException si no existe', async () => {
      mockPrisma.invoiceSii.findFirst.mockResolvedValue(null);
      await expect(service.reject('fake', 'biz-1')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('sync', () => {
    it('debe crear facturas simuladas si no existen', async () => {
      mockPrisma.invoiceSii.count.mockResolvedValue(0);
      mockPrisma.invoiceSii.create.mockResolvedValue({});

      const result = await service.sync('biz-1');
      expect(result.newInvoices).toBe(3);
      expect(result.totalInvoices).toBe(3);
      expect(result).toHaveProperty('syncedAt');
    });

    it('no debe crear si ya existen facturas', async () => {
      mockPrisma.invoiceSii.count.mockResolvedValue(5);
      const result = await service.sync('biz-1');
      expect(result.newInvoices).toBe(0);
      expect(result.totalInvoices).toBe(5);
      expect(mockPrisma.invoiceSii.create).not.toHaveBeenCalled();
    });
  });
});
