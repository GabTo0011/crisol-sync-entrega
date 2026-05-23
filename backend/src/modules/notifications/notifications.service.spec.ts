import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsService } from './notifications.service';
import { PrismaService } from '../../prisma/prisma.service';

const mockPrisma = {
  notification: {
    findMany: jest.fn(),
    findFirst: jest.fn(),
    update: jest.fn(),
  },
};

describe('NotificationsService', () => {
  let service: NotificationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NotificationsService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<NotificationsService>(NotificationsService);
    jest.clearAllMocks();
  });

  it('debe estar definido', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('debe retornar notificaciones mapeadas al formato frontend', async () => {
      mockPrisma.notification.findMany.mockResolvedValue([
        { id: '1', type: 'vencimiento', title: 'Factura por vencer', message: 'Quedan 2 dias', createdAt: new Date('2026-04-17T09:10:00Z'), read: false, priority: 'alta' },
      ]);

      const result = await service.findAll('biz-1');

      expect(result[0]).toEqual({
        id: '1',
        tipo: 'vencimiento',
        titulo: 'Factura por vencer',
        mensaje: 'Quedan 2 dias',
        fecha: '2026-04-17T09:10:00.000Z',
        leida: false,
        prioridad: 'alta',
      });
    });
  });

  describe('markAsRead', () => {
    it('debe marcar como leída y retornar formato frontend', async () => {
      mockPrisma.notification.findFirst.mockResolvedValue({ id: '1', businessId: 'biz-1' });
      mockPrisma.notification.update.mockResolvedValue({
        id: '1', type: 'vencimiento', title: 'Test', message: 'Msg', createdAt: new Date('2026-04-17'), read: true, priority: 'alta',
      });

      const result = await service.markAsRead('1', 'biz-1');
      expect(result.leida).toBe(true);
    });

    it('debe lanzar NotFoundException si no existe', async () => {
      mockPrisma.notification.findFirst.mockResolvedValue(null);
      await expect(service.markAsRead('fake', 'biz-1')).rejects.toThrow(NotFoundException);
    });
  });
});
