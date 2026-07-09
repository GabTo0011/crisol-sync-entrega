import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { OAuth2Client } from 'google-auth-library';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../prisma/prisma.service';
import { GoogleAuthDto } from './dto/google-auth.dto';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtPayload } from './strategies/jwt.strategy';

@Injectable()
export class AuthService {
  private googleClient: OAuth2Client;

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
    const googleClientId = this.configService.get<string>('GOOGLE_CLIENT_ID');
    if (googleClientId) {
      this.googleClient = new OAuth2Client(googleClientId);
    }
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email.trim().toLowerCase() },
    });

    if (!user || !user.passwordHash) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const isPasswordValid = await bcrypt.compare(
      dto.password,
      user.passwordHash,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    if (user.status === 'bloqueado') {
      throw new UnauthorizedException(
        'Tu cuenta está bloqueada. Contacta al administrador.',
      );
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
        throw new BadRequestException(
          `El negocio con id "${businessId}" no existe`,
        );
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

  async googleAuth(dto: GoogleAuthDto) {
    const googleClientId = this.configService.get<string>('GOOGLE_CLIENT_ID');
    console.log('GOOGLE_CLIENT_ID from config:', googleClientId);
    console.log('googleClient exists:', !!this.googleClient);

    if (!this.googleClient) {
      throw new BadRequestException(
        'Google OAuth no está configurado. Falta GOOGLE_CLIENT_ID en .env',
      );
    }

    // Verificar el token con Google
    const ticket = await this.googleClient.verifyIdToken({
      idToken: dto.credential,
      audience: this.configService.get<string>('GOOGLE_CLIENT_ID'),
    });

    const payload = ticket.getPayload();
    if (!payload || !payload.email) {
      throw new UnauthorizedException('Token de Google inválido');
    }

    const email = payload.email.toLowerCase();
    const name = payload.name || 'Usuario Google';
    const googleId = payload.sub;

    // Buscar usuario existente por email o por googleId
    let user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (user) {
      // Usuario existe, actualizar si es necesario
      if (user.status === 'bloqueado') {
        throw new UnauthorizedException(
          'Tu cuenta está bloqueada. Contacta al administrador.',
        );
      }

      // Actualizar lastLoginAt
      await this.prisma.user.update({
        where: { id: user.id },
        data: { lastLoginAt: new Date() },
      });
    } else {
      // Usuario nuevo, crearlo
      // Crear un business por defecto
      const business = await this.prisma.business.create({
        data: {
          name: `${name}'s Business`,
          rut: `temp-${Date.now()}`,
        },
      });

      user = await this.prisma.user.create({
        data: {
          businessId: business.id,
          name: name.trim(),
          email,
          googleId,
          role: 'OWNER',
          status: 'activo',
        },
      });
    }

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

  private generateToken(user: {
    id: string;
    email: string;
    businessId: string;
    role: string;
  }): string {
    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      businessId: user.businessId,
      role: user.role,
    };

    return this.jwtService.sign(payload);
  }
}
