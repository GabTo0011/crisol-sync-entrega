import { OptionalAuthGuard } from './optional-auth.guard';

describe('OptionalAuthGuard', () => {
  let guard: OptionalAuthGuard;

  beforeEach(() => {
    guard = new OptionalAuthGuard();
  });

  it('debe estar definido', () => {
    expect(guard).toBeDefined();
  });

  describe('handleRequest', () => {
    it('debe retornar el usuario si existe', () => {
      const user = { userId: 'u1', email: 'x@x.cl', businessId: 'biz-1', role: 'OWNER' };
      const result = guard.handleRequest(null, user);
      expect(result).toBe(user);
    });

    it('debe retornar null si no hay usuario (sin error)', () => {
      const result = guard.handleRequest(null, null);
      expect(result).toBeNull();
    });

    it('debe retornar null si hay error pero no lanzar excepción', () => {
      const result = guard.handleRequest(new Error('token expired'), null);
      expect(result).toBeNull();
    });

    it('debe retornar null si user es undefined', () => {
      const result = guard.handleRequest(null, undefined);
      expect(result).toBeNull();
    });

    it('debe retornar null si user es false', () => {
      const result = guard.handleRequest(null, false);
      expect(result).toBeNull();
    });
  });
});
