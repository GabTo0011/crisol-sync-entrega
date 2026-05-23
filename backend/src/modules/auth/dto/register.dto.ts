import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ description: 'Nombre completo', example: 'Camila Rojas' })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty({ description: 'Email del usuario', example: 'camila@crysol.cl' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Contraseña (mínimo 6 caracteres)', example: 'miClave123' })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiPropertyOptional({ description: 'UUID del negocio existente. Si no se proporciona, se crea uno nuevo.', example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' })
  @IsOptional()
  @IsUUID()
  businessId?: string;

  @ApiPropertyOptional({ description: 'Nombre del negocio (requerido si no se proporciona businessId)', example: 'Crysol SpA' })
  @IsOptional()
  @IsString()
  businessName?: string;

  @ApiPropertyOptional({ description: 'RUT del negocio (requerido si no se proporciona businessId)', example: '76.123.456-K' })
  @IsOptional()
  @IsString()
  businessRut?: string;
}
