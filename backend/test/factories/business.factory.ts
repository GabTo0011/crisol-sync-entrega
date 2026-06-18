/**
 * Factory para generar datos de Business en tests.
 */

let counter = 0;

export function buildBusiness(overrides: Partial<any> = {}) {
  counter++;
  return {
    id: `biz-${counter}`,
    name: `Negocio Test ${counter}`,
    rut: `76.${String(counter).padStart(3, '0')}.000-K`,
    createdAt: new Date('2026-01-01'),
    updatedAt: new Date('2026-01-01'),
    ...overrides,
  };
}

export function resetBusinessFactory() {
  counter = 0;
}
