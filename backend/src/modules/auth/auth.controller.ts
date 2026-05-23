import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import type { AuthenticatedUser } from './decorators/current-user.decorator';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@ApiTags('Autenticación (Auth)')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Iniciar sesión', description: 'Autentica un usuario con email y contraseña. Retorna un JWT.' })
  @ApiResponse({ status: 200, description: 'Login exitoso. Retorna access_token y datos del usuario.' })
  @ApiResponse({ status: 401, description: 'Credenciales inválidas o cuenta bloqueada.' })
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Post('register')
  @ApiOperation({ summary: 'Registrar nuevo usuario', description: 'Crea un usuario y opcionalmente un negocio. Retorna un JWT.' })
  @ApiResponse({ status: 201, description: 'Registro exitoso. Retorna access_token y datos del usuario.' })
  @ApiResponse({ status: 409, description: 'El email ya está registrado.' })
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obtener perfil del usuario autenticado', description: 'Retorna los datos del usuario actual extraídos del JWT.' })
  @ApiResponse({ status: 200, description: 'Perfil del usuario retornado.' })
  @ApiResponse({ status: 401, description: 'Token inválido o expirado.' })
  getMe(@CurrentUser() user: AuthenticatedUser) {
    return this.authService.getMe(user.userId);
  }
}
