import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class NotificationsService {
  constructor(private readonly prisma: PrismaService) {}

  /** Retorna todas las notificaciones de un negocio, ordenadas por fecha descendente */
  async findAll(businessId: string) {
    const notifications = await this.prisma.notification.findMany({
      where: { businessId },
      orderBy: { createdAt: 'desc' },
    });

    // Mapear al formato del frontend: { id, tipo, titulo, mensaje, fecha, leida, prioridad }
    return notifications.map((n) => ({
      id: n.id,
      tipo: n.type,
      titulo: n.title,
      mensaje: n.message,
      fecha: n.createdAt.toISOString(),
      leida: n.read,
      prioridad: n.priority,
    }));
  }

  /** Marca una notificación como leída */
  async markAsRead(id: string, businessId: string) {
    const notification = await this.prisma.notification.findFirst({
      where: { id, businessId },
    });

    if (!notification) {
      throw new NotFoundException('Notificación no encontrada');
    }

    const updated = await this.prisma.notification.update({
      where: { id },
      data: { read: true },
    });

    return {
      id: updated.id,
      tipo: updated.type,
      titulo: updated.title,
      mensaje: updated.message,
      fecha: updated.createdAt.toISOString(),
      leida: updated.read,
      prioridad: updated.priority,
    };
  }
}
