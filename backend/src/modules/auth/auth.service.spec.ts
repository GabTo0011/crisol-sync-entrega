import {
  BadRequestException,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
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
        id: '1',
        email: 'test@x.cl',
        passwordHash: hash,
        businessId: 'biz-1',
        role: 'OWNER',
        name: 'Test',
        status: 'activo',
      });
      mockPrisma.user.update.mockResolvedValue({});

      const result = await service.login({
        email: 'test@x.cl',
        password: 'miClave123',
      });

      expect(result.access_token).toBe('mock-jwt-token');
      expect(result.user.email).toBe('test@x.cl');
      expect(result.user.role).toBe('OWNER');
      expect(result.user.businessId).toBe('biz-1');
    });

    it('debe actualizar lastLoginAt al loguearse', async () => {
      const hash = await bcrypt.hash('clave', 10);
      mockPrisma.user.findUnique.mockResolvedValue({
        id: '1',
        email: 'test@x.cl',
        passwordHash: hash,
        businessId: 'biz-1',
        role: 'OWNER',
        name: 'T',
        status: 'activo',
      });
      mockPrisma.user.update.mockResolvedValue({});

      await service.login({ email: 'test@x.cl', password: 'clave' });

      expect(mockPrisma.user.update).toHaveBeenCalledWith(
        expect.objectContaining({ data: { lastLoginAt: expect.any(Date) } }),
      );
    });

    it('debe normalizar email a minúsculas', async () => {
      mockPrisma.user.findUnique.mockResolvedValue(null);
      await expect(
        service.login({ email: '  TEST@X.CL  ', password: '123' }),
      ).rejects.toThrow(UnauthorizedException);
      expect(mockPrisma.user.findUnique).toHaveBeenCalledWith({
        where: { email: 'test@x.cl' },
      });
    });

    it('debe lanzar UnauthorizedException si email no existe', async () => {
      mockPrisma.user.findUnique.mockResolvedValue(null);
      await expect(
        service.login({ email: 'no@x.cl', password: '123456' }),
      ).rejects.toThrow(UnauthorizedException);
    });

    it('debe lanzar UnauthorizedException si usuario no tiene passwordHash', async () => {
      mockPrisma.user.findUnique.mockResolvedValue({
        id: '1',
        email: 'google@x.cl',
        passwordHash: null,
        businessId: 'biz-1',
        role: 'OWNER',
        status: 'activo',
      });
      await expect(
        service.login({ email: 'google@x.cl', password: 'algo' }),
      ).rejects.toThrow(UnauthorizedException);
    });

    it('debe lanzar UnauthorizedException si contraseña es incorrecta', async () => {
      const hash = await bcrypt.hash('correcta', 10);
      mockPrisma.user.findUnique.mockResolvedValue({
        id: '1',
        email: 'test@x.cl',
        passwordHash: hash,
        businessId: 'biz-1',
        role: 'OWNER',
        status: 'activo',
      });
      await expect(
        service.login({ email: 'test@x.cl', password: 'incorrecta' }),
      ).rejects.toThrow(UnauthorizedException);
    });

    it('debe lanzar UnauthorizedException si usuario está bloqueado', async () => {
      const hash = await bcrypt.hash('miClave123', 10);
      mockPrisma.user.findUnique.mockResolvedValue({
        id: '1',
        email: 'test@x.cl',
        passwordHash: hash,
        businessId: 'biz-1',
        role: 'OWNER',
        status: 'bloqueado',
      });
      await expect(
        service.login({ email: 'test@x.cl', password: 'miClave123' }),
      ).rejects.toThrow(UnauthorizedException);
    });
  });

  describe('register', () => {
    it('debe crear usuario y negocio si no se proporciona businessId', async () => {
      mockPrisma.user.findUnique.mockResolvedValue(null);
      mockPrisma.business.create.mockResolvedValue({ id: 'new-biz' });
      mockPrisma.user.create.mockResolvedValue({
        id: '2',
        name: 'Nuevo',
        email: 'nuevo@x.cl',
        role: 'OWNER',
        businessId: 'new-biz',
      });

      const result = await service.register({
        name: 'Nuevo',
        email: 'nuevo@x.cl',
        password: 'miClave123',
        businessName: 'Mi Empresa',
        businessRut: '76.000.000-0',
      });

      expect(result.access_token).toBe('mock-jwt-token');
      expect(result.user.businessId).toBe('new-biz');
    });

    it('debe usar businessId existente si se proporciona', async () => {
      mockPrisma.user.findUnique.mockResolvedValue(null);
      mockPrisma.business.findUnique.mockResolvedValue({ id: 'existing-biz' });
      mockPrisma.user.create.mockResolvedValue({
        id: '3',
        name: 'Emp',
        email: 'emp@x.cl',
        role: 'OWNER',
        businessId: 'existing-biz',
      });

      const result = await service.register({
        name: 'Emp',
        email: 'emp@x.cl',
        password: '123456',
        businessId: 'existing-biz',
      });

      expect(result.user.businessId).toBe('existing-biz');
      expect(mockPrisma.business.create).not.toHaveBeenCalled();
    });

    it('debe lanzar BadRequestException si businessId no existe', async () => {
      mockPrisma.user.findUnique.mockResolvedValue(null);
      mockPrisma.business.findUnique.mockResolvedValue(null);

      await expect(
        service.register({
          name: 'X',
          email: 'x@x.cl',
          password: '123',
          businessId: 'fake-biz',
        }),
      ).rejects.toThrow(BadRequestException);
    });

    it('debe lanzar ConflictException si email ya existe', async () => {
      mockPrisma.user.findUnique.mockResolvedValue({ id: '1' });
      await expect(
        service.register({ name: 'X', email: 'dup@x.cl', password: '123456' }),
      ).rejects.toThrow(ConflictException);
    });

    it('debe hashear la contraseña antes de guardar', async () => {
      mockPrisma.user.findUnique.mockResolvedValue(null);
      mockPrisma.business.create.mockResolvedValue({ id: 'biz' });
      mockPrisma.user.create.mockResolvedValue({
        id: '4',
        name: 'H',
        email: 'h@x.cl',
        role: 'OWNER',
        businessId: 'biz',
      });

      await service.register({
        name: 'H',
        email: 'h@x.cl',
        password: 'plaintext123',
      });

      const createCall = mockPrisma.user.create.mock.calls[0][0];
      expect(createCall.data.passwordHash).not.toBe('plaintext123');
      expect(createCall.data.passwordHash.startsWith('$2b$')).toBe(true);
    });
  });

  describe('getMe', () => {
    it('debe retornar perfil del usuario con datos del negocio', async () => {
      mockPrisma.user.findUnique.mockResolvedValue({
        id: 'u1',
        name: 'Camila',
        email: 'camila@x.cl',
        role: 'OWNER',
        status: 'activo',
        businessId: 'biz-1',
        lastLoginAt: new Date('2026-05-20'),
        createdAt: new Date('2026-01-01'),
        business: { name: 'Crysol SpA', rut: '76.123.456-K' },
      });

      const result = await service.getMe('u1');

      expect(result.id).toBe('u1');
      expect(result.name).toBe('Camila');
      expect(result.businessName).toBe('Crysol SpA');
      expect(result.businessRut).toBe('76.123.456-K');
      expect(result.lastLoginAt).toContain('2026');
    });

    it('debe lanzar UnauthorizedException si usuario no existe', async () => {
      mockPrisma.user.findUnique.mockResolvedValue(null);
      await expect(service.getMe('fake')).rejects.toThrow(
        UnauthorizedException,
      );
    });

    it('debe retornar lastLoginAt null si nunca logueó', async () => {
      mockPrisma.user.findUnique.mockResolvedValue({
        id: 'u2',
        name: 'X',
        email: 'x@x.cl',
        role: 'OWNER',
        status: 'activo',
        businessId: 'biz-1',
        lastLoginAt: null,
        createdAt: new Date(),
        business: { name: 'B', rut: '1-9' },
      });

      const result = await service.getMe('u2');
      expect(result.lastLoginAt).toBeNull();
    });
  });

  describe('googleAuth', () => {
    it('debe lanzar BadRequestException si GOOGLE_CLIENT_ID no está configurado', async () => {
      mockConfigService.get.mockReturnValue(undefined);
      await expect(
        service.googleAuth({ credential: 'fake-token' }),
      ).rejects.toThrow(BadRequestException);
    });
  });
});
