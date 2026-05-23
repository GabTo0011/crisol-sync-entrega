import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/**
 * Decorador que extrae el businessId resuelto del request.
 * Prioridad: JWT > query param > body.
 *
 * Uso: @BusinessId() businessId: string
 * Requiere que BusinessGuard o OptionalAuthGuard esté activo.
 */
export const BusinessId = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): string => {
    const request = ctx.switchToHttp().getRequest();

    // Prioridad: resolvedBusinessId (del BusinessGuard) > user.businessId (JWT) > query > body
    return (
      request.resolvedBusinessId ??
      request.user?.businessId ??
      request.query?.businessId ??
      request.body?.businessId
    );
  },
);
