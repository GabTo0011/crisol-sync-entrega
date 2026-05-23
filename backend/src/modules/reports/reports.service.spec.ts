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
      expect(types[0]).toHaveProperty('id');
      expect(types[0]).toHaveProperty('label');
    });
  });

  describe('getHistory', () => {
    it('debe retornar historial mapeado al formato frontend', async () => {
      mockPrisma.report.findMany.mockResolvedValue([
        { id: '1', type: 'F29', format: 'PDF', createdAt: new Date('2026-04-12'), generatedBy: 'Contabilidad', downloadUrl: '#' },
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
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('tipo', 'f29');
      expect(result).toHaveProperty('formato', 'PDF');
      expect(result).toHaveProperty('downloadUrl');
    });
  });
});
