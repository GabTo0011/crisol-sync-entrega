import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CancelExpenseDto {
  @ApiPropertyOptional({ description: 'Motivo de la anulación', example: 'Error en monto informado' })
  @IsOptional()
  @IsString()
  reason?: string;
}
