/**
 * Factory para generar datos de User en tests.
 */

let counter = 0;

export function buildUser(overrides: Partial<any> = {}) {
  counter++;
  return {
    id: `user-${counter}`,
    businessId: 'biz-1',
    name: `Usuario Test ${counter}`,
    email: `user${counter}@test.cl`,
    passwordHash: '$2b$10$mockHashValue',
    googleId: null,
    role: 'OWNER',
    status: 'activo',
    lastLoginAt: null,
    createdAt: new Date('2026-01-15'),
    updatedAt: new Date('2026-01-15'),
    ...overrides,
  };
}

export function buildUserWithBusiness(overrides: Partial<any> = {}) {
  const user = buildUser(overrides);
  return {
    ...user,
    business: {
      id: user.businessId,
      name: 'Negocio Test',
      rut: '76.000.001-K',
      createdAt: new Date('2026-01-01'),
      updatedAt: new Date('2026-01-01'),
    },
  };
}

export function resetUserFactory() {
  counter = 0;
}
