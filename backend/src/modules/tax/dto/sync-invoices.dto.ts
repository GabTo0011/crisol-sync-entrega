import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class SyncInvoicesDto {
  @ApiProperty({ description: 'UUID del negocio para sincronizar facturas', example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' })
  @IsUUID()
  businessId: string;
}
