import { ConflictException, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from '../../prisma/prisma.service';

const mockUser = {
  id: '1',
  name: 'Test User',
  email: 'test@x.cl',
  role: 'admin',
  status: 'activo',
  lastLoginAt: new Date('2026-04-20'),
  createdAt: new Date('2025-11-08'),
  businessId: 'biz-1',
};

const mockPrisma = {
  user: {
    findMany: jest.fn(),
    findUnique: jest.fn(),
    findFirst: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  },
};

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    jest.clearAllMocks();
  });

  it('debe estar definido', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('debe retornar usuarios mapeados al formato frontend', async () => {
      mockPrisma.user.findMany.mockResolvedValue([mockUser]);

      const result = await service.findAll('biz-1');
      expect(result[0]).toHaveProperty('id', '1');
      expect(result[0]).toHaveProperty('name', 'Test User');
      expect(result[0]).toHaveProperty('email', 'test@x.cl');
      expect(result[0]).toHaveProperty('status', 'activo');
      expect(result[0].lastLoginAt).toContain('2026');
    });

    it('debe filtrar por businessId', async () => {
      mockPrisma.user.findMany.mockResolvedValue([]);
      await service.findAll('biz-1');
      expect(mockPrisma.user.findMany).toHaveBeenCalledWith(
        expect.objectContaining({ where: { businessId: 'biz-1' } }),
      );
    });

    it('debe retornar array vacío si no hay usuarios', async () => {
      mockPrisma.user.findMany.mockResolvedValue([]);
      const result = await service.findAll('biz-1');
      expect(result).toEqual([]);
    });
  });

  describe('invite', () => {
    it('debe crear usuario con estado invitado', async () => {
      mockPrisma.user.findUnique.mockResolvedValue(null);
      mockPrisma.user.create.mockResolvedValue({
        id: '2',
        name: 'Nuevo',
        email: 'nuevo@x.cl',
        role: 'operador',
        status: 'invitado',
        lastLoginAt: null,
        createdAt: new Date(),
      });

      const result = await service.invite({
        businessId: 'biz-1',
        name: 'Nuevo',
        email: 'nuevo@x.cl',
        role: 'operador' as any,
      });
      expect(result.status).toBe('invitado');
      expect(result.email).toBe('nuevo@x.cl');
    });

    it('debe normalizar email a minúsculas', async () => {
      mockPrisma.user.findUnique.mockResolvedValue(null);
      mockPrisma.user.create.mockResolvedValue({
        id: '3',
        name: 'Upper',
        email: 'upper@x.cl',
        role: 'visor',
        status: 'invitado',
        lastLoginAt: null,
        createdAt: new Date(),
      });

      await service.invite({
        businessId: 'biz-1',
        name: 'Upper',
        email: '  UPPER@X.CL  ',
        role: 'visor' as any,
      });
      const createCall = mockPrisma.user.create.mock.calls[0][0];
      expect(createCall.data.email).toBe('upper@x.cl');
    });

    it('debe lanzar ConflictException si email ya existe', async () => {
      mockPrisma.user.findUnique.mockResolvedValue({ id: '1' });
      await expect(
        service.invite({
          businessId: 'biz-1',
          name: 'X',
          email: 'dup@x.cl',
          role: 'admin' as any,
        }),
      ).rejects.toThrow(ConflictException);
    });
  });

  describe('toggleStatus', () => {
    it('debe alternar de activo a bloqueado', async () => {
      mockPrisma.user.findFirst.mockResolvedValue({
        ...mockUser,
        status: 'activo',
      });
      mockPrisma.user.update.mockResolvedValue({
        ...mockUser,
        status: 'bloqueado',
      });

      const result = await service.toggleStatus('1', 'biz-1');
      expect(result.status).toBe('bloqueado');
    });

    it('debe alternar de bloqueado a activo', async () => {
      mockPrisma.user.findFirst.mockResolvedValue({
        ...mockUser,
        status: 'bloqueado',
      });
      mockPrisma.user.update.mockResolvedValue({
        ...mockUser,
        status: 'activo',
      });

      const result = await service.toggleStatus('1', 'biz-1');
      expect(result.status).toBe('activo');
    });

    it('debe lanzar NotFoundException si no existe', async () => {
      mockPrisma.user.findFirst.mockResolvedValue(null);
      await expect(service.toggleStatus('fake', 'biz-1')).rejects.toThrow(
        NotFoundException,
      );
    });

    it('debe filtrar por id Y businessId', async () => {
      mockPrisma.user.findFirst.mockResolvedValue({
        ...mockUser,
        status: 'activo',
      });
      mockPrisma.user.update.mockResolvedValue({
        ...mockUser,
        status: 'bloqueado',
      });

      await service.toggleStatus('1', 'biz-1');
      expect(mockPrisma.user.findFirst).toHaveBeenCalledWith(
        expect.objectContaining({ where: { id: '1', businessId: 'biz-1' } }),
      );
    });
  });
});
