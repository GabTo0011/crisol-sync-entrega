import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * Guard que protege rutas con JWT.
 * Uso: @UseGuards(JwtAuthGuard) en el controller o método.
 * Inyecta request.user con { userId, email, businessId, role }
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
