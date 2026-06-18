/**
 * Mock reutilizable de JwtService para unit tests.
 *
 * Uso:
 *   import { createMockJwt } from '../../test/mocks/jwt.mock';
 *   const mockJwt = createMockJwt();
 *   { provide: JwtService, useValue: mockJwt }
 */

export type MockJwtService = ReturnType<typeof createMockJwt>;

export function createMockJwt() {
  return {
    sign: jest.fn().mockReturnValue('mock-jwt-token'),
    signAsync: jest.fn().mockResolvedValue('mock-jwt-token'),
    verify: jest.fn().mockReturnValue({
      sub: 'user-id-1',
      email: 'test@example.cl',
      businessId: 'biz-id-1',
      role: 'OWNER',
    }),
    verifyAsync: jest.fn().mockResolvedValue({
      sub: 'user-id-1',
      email: 'test@example.cl',
      businessId: 'biz-id-1',
      role: 'OWNER',
    }),
  };
}
