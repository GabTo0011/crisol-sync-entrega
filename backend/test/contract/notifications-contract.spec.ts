/**
 * Contract Tests — Notifications
 *
 * Shape esperado por frontend:
 * { id, tipo, titulo, mensaje, fecha, leida, prioridad }
 */
import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsService } from '../../src/modules/notifications/notifications.service';
import { PrismaService } from '../../src/prisma/prisma.service';

const mockNotification = {
  id: 'n-1', type: 'vencimiento', title: 'Factura F-58312 por vencer',
  message: 'Quedan 2 dias para aceptar o rechazar.',
  createdAt: new Date('2026-04-17T09:10:00Z'), read: false,
  priority: 'alta', businessId: 'biz-1',
};

const mockPrisma = {
  notification: { findMany: jest.fn() },
};

describe('Contract: Notifications Response Shape', () => {
  let service: NotificationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NotificationsService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();
    service = module.get(NotificationsService);
  });

  it('debe retornar shape con todos los campos del contrato', async () => {
    mockPrisma.notification.findMany.mockResolvedValue([mockNotification]);
    const result = await service.findAll('biz-1');

    const requiredFields = ['id', 'tipo', 'titulo', 'mensaje', 'fecha', 'leida', 'prioridad'];
    for (const field of requiredFields) {
      expect(result[0]).toHaveProperty(field);
    }
  });

  it('tipo debe ser string (no usar nombre del campo interno "type")', async () => {
    mockPrisma.notification.findMany.mockResolvedValue([mockNotification]);
    const result = await service.findAll('biz-1');
    expect(result[0].tipo).toBe('vencimiento');
    expect(result[0]).not.toHaveProperty('type');
  });

  it('leida debe ser boolean', async () => {
    mockPrisma.notification.findMany.mockResolvedValue([mockNotification]);
    const result = await service.findAll('biz-1');
    expect(typeof result[0].leida).toBe('boolean');
  });

  it('fecha debe ser string ISO 8601', async () => {
    mockPrisma.notification.findMany.mockResolvedValue([mockNotification]);
    const result = await service.findAll('biz-1');
    expect(result[0].fecha).toMatch(/^\d{4}-\d{2}-\d{2}T/);
  });
});
