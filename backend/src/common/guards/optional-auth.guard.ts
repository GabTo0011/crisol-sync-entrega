import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * Guard que intenta autenticar con JWT pero NO falla si no hay token.
 * Si el token es válido, inyecta request.user.
 * Si no hay token o es inválido, request.user queda undefined y la request continúa.
 *
 * Uso: @UseGuards(OptionalAuthGuard) en endpoints que funcionan con o sin auth.
 * Esto permite la transición gradual del frontend de query param a JWT.
 */
@Injectable()
export class OptionalAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any) {
    // No lanzar error si no hay usuario — simplemente retornar null
    return user || null;
  }
}
