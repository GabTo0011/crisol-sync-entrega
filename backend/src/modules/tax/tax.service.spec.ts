import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TaxService } from './tax.service';
import { PrismaService } from '../../prisma/prisma.service';

const mockInvoice = {
  id: '1', businessId: 'biz-1', folio: 'F-001', supplierRut: '76.111.222-3',
  supplierName: 'Test Ltda', amountNet: 100000, amountVat: 19000, amountTotal: 119000,
  issuedAt: new Date('2026-04-01'), receivedAt: new Date('2026-04-03'),
  status: 'PENDING_ACCEPTANCE', actionReason: null, actionAt: null,
  createdAt: new Date(), updatedAt: new Date(),
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
      providers: [
        TaxService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
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
  });

  describe('accept', () => {
    it('debe cambiar estado a aceptada', async () => {
      mockPrisma.invoiceSii.findFirst.mockResolvedValue(mockInvoice);
      mockPrisma.invoiceSii.update.mockResolvedValue({ ...mockInvoice, status: 'ACCEPTED' });

      const result = await service.accept('1', 'biz-1', 'OK');
      expect(result.estado).toBe('aceptada');
    });

    it('debe lanzar BadRequestException si ya fue aceptada', async () => {
      mockPrisma.invoiceSii.findFirst.mockResolvedValue({ ...mockInvoice, status: 'ACCEPTED' });
      await expect(service.accept('1', 'biz-1')).rejects.toThrow(BadRequestException);
    });
  });

  describe('reject', () => {
    it('debe cambiar estado a rechazada', async () => {
      mockPrisma.invoiceSii.findFirst.mockResolvedValue(mockInvoice);
      mockPrisma.invoiceSii.update.mockResolvedValue({ ...mockInvoice, status: 'REJECTED' });

      const result = await service.reject('1', 'biz-1', 'Datos incorrectos');
      expect(result.estado).toBe('rechazada');
    });
  });

  describe('sync', () => {
    it('debe crear facturas simuladas si no existen', async () => {
      mockPrisma.invoiceSii.count.mockResolvedValue(0);
      mockPrisma.invoiceSii.create.mockResolvedValue({});

      const result = await service.sync('biz-1');
      expect(result.newInvoices).toBe(3);
    });

    it('no debe crear si ya existen', async () => {
      mockPrisma.invoiceSii.count.mockResolvedValue(5);
      const result = await service.sync('biz-1');
      expect(result.newInvoices).toBe(0);
      expect(mockPrisma.invoiceSii.create).not.toHaveBeenCalled();
    });
  });
});
