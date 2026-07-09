import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'Email del usuario',
    example: 'camila@crysol.cl',
  })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Contraseña', example: 'miClave123' })
  @IsString()
  @MinLength(6)
  password: string;
}
