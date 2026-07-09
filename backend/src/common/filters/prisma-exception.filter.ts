import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Response } from 'express';

/**
 * Filtro global que captura errores de Prisma y los transforma en respuestas HTTP legibles.
 * Evita exponer detalles internos de la base de datos al cliente.
 */
@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Error interno de base de datos';

    switch (exception.code) {
      case 'P2002': {
        // Unique constraint violation
        const fields =
          (exception.meta?.target as string[])?.join(', ') ?? 'campo';
        status = HttpStatus.CONFLICT;
        message = `Ya existe un registro con ese valor en: ${fields}`;
        break;
      }
      case 'P2003': {
        // Foreign key constraint violation
        status = HttpStatus.BAD_REQUEST;
        message = 'Referencia a un registro que no existe';
        break;
      }
      case 'P2025': {
        // Record not found
        status = HttpStatus.NOT_FOUND;
        message = 'Registro no encontrado';
        break;
      }
      default:
        break;
    }

    response.status(status).json({
      statusCode: status,
      message,
      error: exception.code,
    });
  }
}
