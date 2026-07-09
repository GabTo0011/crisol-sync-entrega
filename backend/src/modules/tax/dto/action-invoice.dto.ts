import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class ActionInvoiceDto {
  @ApiPropertyOptional({
    description: 'Motivo de la acción (aceptación o rechazo)',
    example: 'Factura verificada con orden de compra',
  })
  @IsOptional()
  @IsString()
  reason?: string;
}
