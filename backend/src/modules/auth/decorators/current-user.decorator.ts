import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/**
 * Decorador para extraer el usuario autenticado del request.
 * Uso: @CurrentUser() user: AuthenticatedUser
 * Requiere que JwtAuthGuard esté activo en la ruta.
 */
export interface AuthenticatedUser {
  userId: string;
  email: string;
  businessId: string;
  role: string;
}

export const CurrentUser = createParamDecorator(
  (data: keyof AuthenticatedUser | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user as AuthenticatedUser;
    return data ? user?.[data] : user;
  },
);
