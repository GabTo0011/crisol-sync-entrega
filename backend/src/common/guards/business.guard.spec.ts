import { BadRequestException, NotFoundException } from '@nestjs/common';
import { ExecutionContext } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { BusinessGuard } from './business.guard';
import { PrismaService } from '../../prisma/prisma.service';

const mockPrisma = {
  business: {
    findUnique: jest.fn(),
  },
};

function createMockContext(overrides: { user?: any; query?: any; body?: any } = {}): ExecutionContext {
  const request = {
    user: overrides.user ?? undefined,
    query: overrides.query ?? {},
    body: overrides.body ?? {},
  };
  return {
    switchToHttp: () => ({ getRequest: () => request }),
  } as unknown as ExecutionContext;
}

describe('BusinessGuard', () => {
  let guard: BusinessGuard;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessGuard,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    guard = module.get<BusinessGuard>(BusinessGuard);
    jest.clearAllMocks();
  });

  it('debe estar definido', () => {
    expect(guard).toBeDefined();
  });

  describe('resolución de businessId', () => {
    it('debe priorizar businessId desde JWT (request.user)', async () => {
      const ctx = createMockContext({
        user: { businessId: 'jwt-biz' },
        query: { businessId: 'query-biz' },
        body: { businessId: 'body-biz' },
      });
      mockPrisma.business.findUnique.mockResolvedValue({ id: 'jwt-biz' });

      const result = await guard.canActivate(ctx);
      expect(result).toBe(true);
      expect(mockPrisma.business.findUnique).toHaveBeenCalledWith(
        expect.objectContaining({ where: { id: 'jwt-biz' } }),
      );
    });

    it('debe usar query param como fallback si no hay JWT', async () => {
      const ctx = createMockContext({
        user: undefined,
        query: { businessId: 'query-biz' },
      });
      mockPrisma.business.findUnique.mockResolvedValue({ id: 'query-biz' });

      const result = await guard.canActivate(ctx);
      expect(result).toBe(true);
      expect(mockPrisma.business.findUnique).toHaveBeenCalledWith(
        expect.objectContaining({ where: { id: 'query-biz' } }),
      );
    });

    it('debe usar body como último fallback', async () => {
      const ctx = createMockContext({
        user: undefined,
        query: {},
        body: { businessId: 'body-biz' },
      });
      mockPrisma.business.findUnique.mockResolvedValue({ id: 'body-biz' });

      const result = await guard.canActivate(ctx);
      expect(result).toBe(true);
      expect(mockPrisma.business.findUnique).toHaveBeenCalledWith(
        expect.objectContaining({ where: { id: 'body-biz' } }),
      );
    });
  });

  describe('validación', () => {
    it('debe lanzar BadRequestException si no hay businessId en ninguna fuente', async () => {
      const ctx = createMockContext({ user: undefined, query: {}, body: {} });
      await expect(guard.canActivate(ctx)).rejects.toThrow(BadRequestException);
    });

    it('debe lanzar NotFoundException si el negocio no existe en DB', async () => {
      const ctx = createMockContext({ query: { businessId: 'non-existent' } });
      mockPrisma.business.findUnique.mockResolvedValue(null);

      await expect(guard.canActivate(ctx)).rejects.toThrow(NotFoundException);
    });

    it('debe inyectar resolvedBusinessId en el request', async () => {
      const request = { user: { businessId: 'biz-1' }, query: {}, body: {} };
      const ctx = {
        switchToHttp: () => ({ getRequest: () => request }),
      } as unknown as ExecutionContext;
      mockPrisma.business.findUnique.mockResolvedValue({ id: 'biz-1' });

      await guard.canActivate(ctx);
      expect((request as any).resolvedBusinessId).toBe('biz-1');
    });
  });
});
