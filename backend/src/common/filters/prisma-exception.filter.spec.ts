import { ArgumentsHost, HttpStatus } from '@nestjs/common';
import { PrismaExceptionFilter } from './prisma-exception.filter';

function createMockHost(): { host: ArgumentsHost; response: any } {
  const response = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  };
  const host = {
    switchToHttp: () => ({
      getResponse: () => response,
    }),
  } as unknown as ArgumentsHost;
  return { host, response };
}

function createPrismaError(code: string, meta?: Record<string, any>) {
  const error = new Error(`Prisma error ${code}`) as any;
  error.code = code;
  error.meta = meta;
  // Imitar PrismaClientKnownRequestError
  Object.defineProperty(error, 'name', { value: 'PrismaClientKnownRequestError' });
  return error;
}

describe('PrismaExceptionFilter', () => {
  let filter: PrismaExceptionFilter;

  beforeEach(() => {
    filter = new PrismaExceptionFilter();
  });

  it('debe estar definido', () => {
    expect(filter).toBeDefined();
  });

  describe('P2002 — Unique constraint violation', () => {
    it('debe retornar 409 CONFLICT', () => {
      const { host, response } = createMockHost();
      const exception = createPrismaError('P2002', { target: ['email'] });

      filter.catch(exception, host);

      expect(response.status).toHaveBeenCalledWith(HttpStatus.CONFLICT);
      expect(response.json).toHaveBeenCalledWith(
        expect.objectContaining({
          statusCode: HttpStatus.CONFLICT,
          error: 'P2002',
        }),
      );
    });

    it('debe incluir los campos afectados en el mensaje', () => {
      const { host, response } = createMockHost();
      const exception = createPrismaError('P2002', { target: ['email', 'rut'] });

      filter.catch(exception, host);

      const jsonCall = response.json.mock.calls[0][0];
      expect(jsonCall.message).toContain('email, rut');
    });
  });

  describe('P2003 — Foreign key constraint violation', () => {
    it('debe retornar 400 BAD_REQUEST', () => {
      const { host, response } = createMockHost();
      const exception = createPrismaError('P2003');

      filter.catch(exception, host);

      expect(response.status).toHaveBeenCalledWith(HttpStatus.BAD_REQUEST);
      expect(response.json).toHaveBeenCalledWith(
        expect.objectContaining({
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Referencia a un registro que no existe',
        }),
      );
    });
  });

  describe('P2025 — Record not found', () => {
    it('debe retornar 404 NOT_FOUND', () => {
      const { host, response } = createMockHost();
      const exception = createPrismaError('P2025');

      filter.catch(exception, host);

      expect(response.status).toHaveBeenCalledWith(HttpStatus.NOT_FOUND);
      expect(response.json).toHaveBeenCalledWith(
        expect.objectContaining({
          statusCode: HttpStatus.NOT_FOUND,
          message: 'Registro no encontrado',
        }),
      );
    });
  });

  describe('Código desconocido', () => {
    it('debe retornar 500 INTERNAL_SERVER_ERROR', () => {
      const { host, response } = createMockHost();
      const exception = createPrismaError('P9999');

      filter.catch(exception, host);

      expect(response.status).toHaveBeenCalledWith(HttpStatus.INTERNAL_SERVER_ERROR);
      expect(response.json).toHaveBeenCalledWith(
        expect.objectContaining({
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Error interno de base de datos',
        }),
      );
    });
  });
});
