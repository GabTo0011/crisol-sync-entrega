/**
 * Mock reutilizable de ConfigService para unit tests.
 *
 * Uso:
 *   import { createMockConfig } from '../../test/mocks/config.mock';
 *   const mockConfig = createMockConfig();
 *   mockConfig.get.mockImplementation((key) => configMap[key]);
 */

export type MockConfigService = ReturnType<typeof createMockConfig>;

/**
 * Crea un mock de ConfigService con valores por defecto para entorno de test.
 */
export function createMockConfig(overrides: Record<string, any> = {}) {
  const defaults: Record<string, any> = {
    NODE_ENV: 'test',
    PORT: 3000,
    FRONTEND_URL: 'http://localhost:5173',
    DATABASE_URL: 'postgresql://test:test@localhost:5432/test',
    SUPABASE_URL: 'https://test.supabase.co',
    SUPABASE_SERVICE_ROLE_KEY: 'test-service-role-key',
    JWT_SECRET: 'test-jwt-secret',
    JWT_EXPIRES_IN: '7d',
    AZURE_OCR_ENDPOINT: undefined,
    AZURE_OCR_KEY: undefined,
    GOOGLE_CLIENT_ID: undefined,
    GOOGLE_DRIVE_FOLDER_ID: undefined,
    GOOGLE_CLIENT_EMAIL: undefined,
    GOOGLE_PRIVATE_KEY: undefined,
    ...overrides,
  };

  return {
    get: jest.fn((key: string) => defaults[key]),
    getOrThrow: jest.fn((key: string) => {
      if (defaults[key] === undefined) {
        throw new Error(`Config key "${key}" is not defined`);
      }
      return defaults[key];
    }),
  };
}
