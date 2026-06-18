import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsService } from './notifications.service';
import { PrismaService } from '../../prisma/prisma.service';

const mockNotification = {
  id: '1', type: 'vencimiento', title: 'Factura por vencer',
  message: 'Quedan 2 dias', createdAt: new Date('2026-04-17T09:10:00Z'),
  read: false, priority: 'alta', businessId: 'biz-1',
};

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
      mockPrisma.notification.findMany.mockResolvedValue([mockNotification]);

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

    it('debe filtrar por businessId', async () => {
      mockPrisma.notification.findMany.mockResolvedValue([]);
      await service.findAll('biz-1');
      expect(mockPrisma.notification.findMany).toHaveBeenCalledWith(
        expect.objectContaining({ where: { businessId: 'biz-1' } }),
      );
    });

    it('debe ordenar por fecha descendente', async () => {
      mockPrisma.notification.findMany.mockResolvedValue([]);
      await service.findAll('biz-1');
      expect(mockPrisma.notification.findMany).toHaveBeenCalledWith(
        expect.objectContaining({ orderBy: { createdAt: 'desc' } }),
      );
    });

    it('debe retornar array vacío si no hay notificaciones', async () => {
      mockPrisma.notification.findMany.mockResolvedValue([]);
      const result = await service.findAll('biz-1');
      expect(result).toEqual([]);
    });
  });

  describe('markAsRead', () => {
    it('debe marcar como leída y retornar formato frontend', async () => {
      mockPrisma.notification.findFirst.mockResolvedValue(mockNotification);
      mockPrisma.notification.update.mockResolvedValue({ ...mockNotification, read: true });

      const result = await service.markAsRead('1', 'biz-1');
      expect(result.leida).toBe(true);
      expect(result).toHaveProperty('tipo', 'vencimiento');
    });

    it('debe lanzar NotFoundException si no existe', async () => {
      mockPrisma.notification.findFirst.mockResolvedValue(null);
      await expect(service.markAsRead('fake', 'biz-1')).rejects.toThrow(NotFoundException);
    });

    it('debe filtrar por id Y businessId', async () => {
      mockPrisma.notification.findFirst.mockResolvedValue(mockNotification);
      mockPrisma.notification.update.mockResolvedValue({ ...mockNotification, read: true });

      await service.markAsRead('1', 'biz-1');
      expect(mockPrisma.notification.findFirst).toHaveBeenCalledWith(
        expect.objectContaining({ where: { id: '1', businessId: 'biz-1' } }),
      );
    });
  });
});
