import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtPayload } from './strategies/jwt.strategy';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email.trim().toLowerCase() },
    });

    if (!user || !user.passwordHash) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const isPasswordValid = await bcrypt.compare(dto.password, user.passwordHash);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    if (user.status === 'bloqueado') {
      throw new UnauthorizedException('Tu cuenta está bloqueada. Contacta al administrador.');
    }

    // Actualizar lastLoginAt
    await this.prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() },
    });

    const token = this.generateToken(user);

    return {
      access_token: token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        businessId: user.businessId,
      },
    };
  }

  async register(dto: RegisterDto) {
    const normalizedEmail = dto.email.trim().toLowerCase();

    // Verificar si el email ya existe
    const existing = await this.prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (existing) {
      throw new ConflictException('El email ya está registrado');
    }

    // Hash de la contraseña
    const passwordHash = await bcrypt.hash(dto.password, 10);

    // Crear o usar business existente
    let businessId = dto.businessId;

    if (businessId) {
      // Validar que el business existe
      const existingBusiness = await this.prisma.business.findUnique({
        where: { id: businessId },
      });
      if (!existingBusiness) {
        throw new BadRequestException(`El negocio con id "${businessId}" no existe`);
      }
    } else {
      // Crear nuevo business
      const business = await this.prisma.business.create({
        data: {
          name: dto.businessName || 'Mi Negocio',
          rut: dto.businessRut || `temp-${Date.now()}`,
        },
      });
      businessId = business.id;
    }

    // Crear usuario
    const user = await this.prisma.user.create({
      data: {
        businessId,
        name: dto.name.trim(),
        email: normalizedEmail,
        passwordHash,
        role: 'OWNER',
        status: 'activo',
      },
    });

    const token = this.generateToken(user);

    return {
      access_token: token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        businessId: user.businessId,
      },
    };
  }

  async getMe(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { business: true },
    });

    if (!user) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
      businessId: user.businessId,
      businessName: user.business.name,
      businessRut: user.business.rut,
      lastLoginAt: user.lastLoginAt?.toISOString() ?? null,
      createdAt: user.createdAt.toISOString(),
    };
  }

  private generateToken(user: { id: string; email: string; businessId: string; role: string }): string {
    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      businessId: user.businessId,
      role: user.role,
    };

    return this.jwtService.sign(payload);
  }
}
