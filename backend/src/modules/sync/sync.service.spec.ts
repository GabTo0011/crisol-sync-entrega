import { Test, TestingModule } from '@nestjs/testing';
import { SyncService } from './sync.service';
import { PrismaService } from '../../prisma/prisma.service';

const mockPrisma = {
  syncPayload: {
    create: jest.fn(),
    update: jest.fn(),
  },
  category: {
    upsert: jest.fn(),
  },
  expense: {
    create: jest.fn(),
  },
};

describe('SyncService', () => {
  let service: SyncService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SyncService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<SyncService>(SyncService);
    jest.clearAllMocks();
  });

  it('debe estar definido', () => {
    expect(service).toBeDefined();
  });

  describe('processOfflinePayload', () => {
    it('debe procesar todos los items exitosamente', async () => {
      mockPrisma.syncPayload.create.mockResolvedValue({ id: 'sync-1' });
      mockPrisma.syncPayload.update.mockResolvedValue({});
      mockPrisma.category.upsert.mockResolvedValue({ id: 'cat-1' });
      mockPrisma.expense.create.mockResolvedValue({});

      const result = await service.processOfflinePayload({
        businessId: 'biz-1',
        items: [
          {
            localId: 'local-1',
            amountTotal: 10000,
            issueDate: '2026-05-20',
            categoryName: 'Insumos',
          },
          { localId: 'local-2', amountTotal: 20000, issueDate: '2026-05-21' },
        ],
      });

      expect(result.status).toBe('COMPLETED');
      expect(result.processed).toBe(2);
      expect(result.failed).toBe(0);
      expect(result.errors).toEqual([]);
    });

    it('debe reportar errores por item sin detener el proceso', async () => {
      mockPrisma.syncPayload.create.mockResolvedValue({ id: 'sync-2' });
      mockPrisma.syncPayload.update.mockResolvedValue({});
      mockPrisma.category.upsert.mockResolvedValue({ id: 'cat-1' });
      mockPrisma.expense.create
        .mockResolvedValueOnce({})
        .mockRejectedValueOnce(new Error('Duplicate key'));

      const result = await service.processOfflinePayload({
        businessId: 'biz-1',
        items: [
          { localId: 'local-1', amountTotal: 10000, issueDate: '2026-05-20' },
          { localId: 'local-2', amountTotal: 20000, issueDate: '2026-05-21' },
        ],
      });

      expect(result.processed).toBe(1);
      expect(result.failed).toBe(1);
      expect(result.errors[0].localId).toBe('local-2');
      expect(result.errors[0].error).toContain('Duplicate key');
    });

    it('debe marcar como FAILED si todos los items fallan', async () => {
      mockPrisma.syncPayload.create.mockResolvedValue({ id: 'sync-3' });
      mockPrisma.syncPayload.update.mockResolvedValue({});
      mockPrisma.expense.create.mockRejectedValue(new Error('DB error'));

      const result = await service.processOfflinePayload({
        businessId: 'biz-1',
        items: [
          { localId: 'local-1', amountTotal: 10000, issueDate: '2026-05-20' },
        ],
      });

      expect(result.status).toBe('FAILED');
      expect(result.processed).toBe(0);
      expect(result.failed).toBe(1);
    });
  });
});
