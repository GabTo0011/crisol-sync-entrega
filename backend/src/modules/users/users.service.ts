import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { InviteUserDto } from './dto/invite-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  /** Retorna todos los usuarios de un negocio, ordenados por nombre */
  async findAll(businessId: string) {
    const users = await this.prisma.user.findMany({
      where: { businessId },
      orderBy: { name: 'asc' },
    });

    // Mapear al formato del frontend
    return users.map((u) => ({
      id: u.id,
      name: u.name,
      email: u.email,
      role: u.role,
      status: u.status,
      lastLoginAt: u.lastLoginAt?.toISOString() ?? null,
      createdAt: u.createdAt.toISOString(),
    }));
  }

  /** Invita un nuevo usuario al negocio */
  async invite(dto: InviteUserDto) {
    const normalizedEmail = dto.email.trim().toLowerCase();

    // Verificar si ya existe
    const existing = await this.prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (existing) {
      throw new ConflictException('El usuario ya existe con ese email');
    }

    const user = await this.prisma.user.create({
      data: {
        businessId: dto.businessId,
        name: dto.name.trim(),
        email: normalizedEmail,
        role: dto.role,
        status: 'invitado',
      },
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
      lastLoginAt: null,
      createdAt: user.createdAt.toISOString(),
    };
  }

  /** Alterna el estado del usuario entre 'activo' y 'bloqueado' */
  async toggleStatus(id: string, businessId: string) {
    const user = await this.prisma.user.findFirst({
      where: { id, businessId },
    });

    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    const nextStatus = user.status === 'bloqueado' ? 'activo' : 'bloqueado';

    const updated = await this.prisma.user.update({
      where: { id },
      data: { status: nextStatus },
    });

    return {
      id: updated.id,
      name: updated.name,
      email: updated.email,
      role: updated.role,
      status: updated.status,
      lastLoginAt: updated.lastLoginAt?.toISOString() ?? null,
      createdAt: updated.createdAt.toISOString(),
    };
  }
}
