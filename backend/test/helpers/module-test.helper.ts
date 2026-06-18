/**
 * Helper para crear TestingModule con providers comunes pre-configurados.
 *
 * Uso:
 *   const { module, prisma, config } = await createTestModule({
 *     providers: [MyService],
 *   });
 */
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../src/prisma/prisma.service';
import { createMockPrisma, MockPrismaService } from './prisma-mock.helper';
import { createMockConfig, MockConfigService } from '../mocks/config.mock';
import { createMockJwt, MockJwtService } from '../mocks/jwt.mock';

export interface TestModuleResult {
  module: TestingModule;
  prisma: MockPrismaService;
  config: MockConfigService;
  jwt: MockJwtService;
}

export interface CreateTestModuleOptions {
  providers?: any[];
  imports?: any[];
  /** Si true, incluye JwtService mock (default: false) */
  withJwt?: boolean;
}

/**
 * Crea un TestingModule con PrismaService y ConfigService mockeados.
 * Agrega JwtService si se requiere con `withJwt: true`.
 */
export async function createTestModule(
  options: CreateTestModuleOptions,
): Promise<TestModuleResult> {
  const mockPrisma = createMockPrisma();
  const mockConfig = createMockConfig();
  const mockJwt = createMockJwt();

  const baseProviders: any[] = [
    { provide: PrismaService, useValue: mockPrisma },
    { provide: ConfigService, useValue: mockConfig },
  ];

  if (options.withJwt) {
    baseProviders.push({ provide: JwtService, useValue: mockJwt });
  }

  const module = await Test.createTestingModule({
    imports: options.imports ?? [],
    providers: [...baseProviders, ...(options.providers ?? [])],
  }).compile();

  return { module, prisma: mockPrisma, config: mockConfig, jwt: mockJwt };
}
