import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

/**
 * Guard que valida que el businessId proporcionado (desde JWT o query param) existe en la DB.
 * Debe usarse DESPUÉS de OptionalAuthGuard o JwtAuthGuard.
 *
 * Resuelve el businessId en este orden:
 * 1. request.user.businessId (desde JWT)
 * 2. query.businessId (fallback MVP)
 * 3. body.businessId (para POST requests)
 *
 * Inyecta request.businessId para uso posterior en controllers/services.
 */
@Injectable()
export class BusinessGuard implements CanActivate {
  constructor(private readonly prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    // Resolver businessId desde JWT > query > body
    const businessId =
      request.user?.businessId ??
      request.query?.businessId ??
      request.body?.businessId;

    if (!businessId) {
      throw new BadRequestException(
        'businessId es requerido (via JWT, query param o body)',
      );
    }

    // Validar que el business existe
    const business = await this.prisma.business.findUnique({
      where: { id: businessId },
      select: { id: true },
    });

    if (!business) {
      throw new NotFoundException(
        `Negocio con id "${businessId}" no encontrado`,
      );
    }

    // Inyectar businessId resuelto en el request para uso downstream
    request.resolvedBusinessId = businessId;

    return true;
  }
}
