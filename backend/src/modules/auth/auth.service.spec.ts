import { ConflictException, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';
import { PrismaService } from '../../prisma/prisma.service';

const mockPrisma = {
  user: {
    findUnique: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  },
  business: {
    findUnique: jest.fn(),
    create: jest.fn(),
  },
};

const mockJwtService = {
  sign: jest.fn().mockReturnValue('mock-jwt-token'),
};

const mockConfigService = {
  get: jest.fn().mockReturnValue(undefined),
};

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: PrismaService, useValue: mockPrisma },
        { provide: JwtService, useValue: mockJwtService },
        { provide: ConfigService, useValue: mockConfigService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    jest.clearAllMocks();
  });

  it('debe estar definido', () => {
    expect(service).toBeDefined();
  });

  describe('login', () => {
    it('debe retornar token si credenciales son válidas', async () => {
      const hash = await bcrypt.hash('miClave123', 10);
      mockPrisma.user.findUnique.mockResolvedValue({
        id: '1', email: 'test@x.cl', passwordHash: hash, businessId: 'biz-1', role: 'OWNER', name: 'Test', status: 'activo',
      });
      mockPrisma.user.update.mockResolvedValue({});

      const result = await service.login({ email: 'test@x.cl', password: 'miClave123' });

      expect(result.access_token).toBe('mock-jwt-token');
      expect(result.user.email).toBe('test@x.cl');
    });

    it('debe lanzar UnauthorizedException si email no existe', async () => {
      mockPrisma.user.findUnique.mockResolvedValue(null);
      await expect(service.login({ email: 'no@x.cl', password: '123456' })).rejects.toThrow(UnauthorizedException);
    });

    it('debe lanzar UnauthorizedException si contraseña es incorrecta', async () => {
      const hash = await bcrypt.hash('correcta', 10);
      mockPrisma.user.findUnique.mockResolvedValue({
        id: '1', email: 'test@x.cl', passwordHash: hash, businessId: 'biz-1', role: 'OWNER', status: 'activo',
      });

      await expect(service.login({ email: 'test@x.cl', password: 'incorrecta' })).rejects.toThrow(UnauthorizedException);
    });

    it('debe lanzar UnauthorizedException si usuario está bloqueado', async () => {
      const hash = await bcrypt.hash('miClave123', 10);
      mockPrisma.user.findUnique.mockResolvedValue({
        id: '1', email: 'test@x.cl', passwordHash: hash, businessId: 'biz-1', role: 'OWNER', status: 'bloqueado',
      });

      await expect(service.login({ email: 'test@x.cl', password: 'miClave123' })).rejects.toThrow(UnauthorizedException);
    });
  });

  describe('register', () => {
    it('debe crear usuario y negocio si no se proporciona businessId', async () => {
      mockPrisma.user.findUnique.mockResolvedValue(null);
      mockPrisma.business.create.mockResolvedValue({ id: 'new-biz' });
      mockPrisma.user.create.mockResolvedValue({
        id: '2', name: 'Nuevo', email: 'nuevo@x.cl', role: 'OWNER', businessId: 'new-biz', createdAt: new Date(),
      });

      const result = await service.register({
        name: 'Nuevo', email: 'nuevo@x.cl', password: 'miClave123', businessName: 'Mi Empresa', businessRut: '76.000.000-0',
      });

      expect(result.access_token).toBe('mock-jwt-token');
      expect(result.user.businessId).toBe('new-biz');
    });

    it('debe lanzar ConflictException si email ya existe', async () => {
      mockPrisma.user.findUnique.mockResolvedValue({ id: '1' });
      await expect(service.register({ name: 'X', email: 'dup@x.cl', password: '123456' })).rejects.toThrow(ConflictException);
    });
  });
});
