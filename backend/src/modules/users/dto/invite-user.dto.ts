import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsString, IsUUID, MinLength } from 'class-validator';

export enum UserRole {
  ADMIN = 'admin',
  OPERADOR = 'operador',
  VISOR = 'visor',
}

export class InviteUserDto {
  @ApiProperty({ description: 'UUID del negocio', example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' })
  @IsUUID()
  businessId: string;

  @ApiProperty({ description: 'Nombre completo del usuario', example: 'Diego Araya' })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty({ description: 'Email del usuario a invitar', example: 'diego.araya@crysol.cl' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Rol asignado', enum: UserRole, example: 'operador' })
  @IsEnum(UserRole)
  role: UserRole;
}
