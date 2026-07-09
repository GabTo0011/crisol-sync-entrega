import { Test, TestingModule } from '@nestjs/testing';
import { ReportsService } from './reports.service';
import { PrismaService } from '../../prisma/prisma.service';

const mockPrisma = {
  report: {
    findMany: jest.fn(),
    create: jest.fn(),
  },
};

describe('ReportsService', () => {
  let service: ReportsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReportsService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<ReportsService>(ReportsService);
    jest.clearAllMocks();
  });

  it('debe estar definido', () => {
    expect(service).toBeDefined();
  });

  describe('getTypes', () => {
    it('debe retornar 3 tipos de reporte', () => {
      const types = service.getTypes();
      expect(types).toHaveLength(3);
    });

    it('debe incluir F29, DEUDA y DOCUMENTOS', () => {
      const types = service.getTypes();
      const ids = types.map((t) => t.id);
      expect(ids).toContain('f29');
      expect(ids).toContain('deuda');
      expect(ids).toContain('documentos');
    });

    it('cada tipo debe tener id y label', () => {
      const types = service.getTypes();
      for (const type of types) {
        expect(type).toHaveProperty('id');
        expect(type).toHaveProperty('label');
        expect(typeof type.id).toBe('string');
        expect(typeof type.label).toBe('string');
      }
    });
  });

  describe('getHistory', () => {
    it('debe retornar historial mapeado al formato frontend', async () => {
      mockPrisma.report.findMany.mockResolvedValue([
        {
          id: '1',
          type: 'F29',
          format: 'PDF',
          createdAt: new Date('2026-04-12'),
          generatedBy: 'Contabilidad',
          downloadUrl: '#',
        },
      ]);

      const result = await service.getHistory('biz-1');

      expect(result[0]).toEqual({
        id: '1',
        tipo: 'f29',
        formato: 'PDF',
        fecha: '2026-04-12',
        generadoPor: 'Contabilidad',
        downloadUrl: '#',
      });
    });

    it('debe filtrar por businessId', async () => {
      mockPrisma.report.findMany.mockResolvedValue([]);
      await service.getHistory('biz-1');
      expect(mockPrisma.report.findMany).toHaveBeenCalledWith(
        expect.objectContaining({ where: { businessId: 'biz-1' } }),
      );
    });

    it('debe retornar array vacío si no hay historial', async () => {
      mockPrisma.report.findMany.mockResolvedValue([]);
      const result = await service.getHistory('biz-1');
      expect(result).toEqual([]);
    });
  });

  describe('generate', () => {
    it('debe crear un reporte y retornar formato compatible', async () => {
      mockPrisma.report.create.mockResolvedValue({
        id: 'rep-1',
        type: 'F29',
        format: 'PDF',
        createdAt: new Date('2026-05-23'),
        downloadUrl: '#',
      });

      const result = await service.generate({
        businessId: 'biz-1',
        tipo: 'F29' as any,
        formato: 'PDF' as any,
        desde: '2026-04-01',
        hasta: '2026-04-30',
        generadoPor: 'Contabilidad',
      });

      expect(result).toHaveProperty('id', 'rep-1');
      expect(result).toHaveProperty('tipo', 'f29');
      expect(result).toHaveProperty('formato', 'PDF');
      expect(result).toHaveProperty('desde', '2026-04-01');
      expect(result).toHaveProperty('hasta', '2026-04-30');
      expect(result).toHaveProperty('downloadUrl');
    });

    it('debe persistir el reporte en la base de datos', async () => {
      mockPrisma.report.create.mockResolvedValue({
        id: 'rep-2',
        type: 'DEUDA',
        format: 'CSV',
        createdAt: new Date(),
        downloadUrl: '#',
      });

      await service.generate({
        businessId: 'biz-1',
        tipo: 'DEUDA' as any,
        formato: 'CSV' as any,
      });

      expect(mockPrisma.report.create).toHaveBeenCalledTimes(1);
      const createCall = mockPrisma.report.create.mock.calls[0][0];
      expect(createCall.data.businessId).toBe('biz-1');
    });
  });
});
