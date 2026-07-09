import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class SyncExpenseItem {
  @ApiProperty({
    description: 'ID local temporal del gasto (generado offline)',
    example: 'local-1716480000000',
  })
  @IsString()
  localId: string;

  @ApiProperty({ description: 'Monto total en CLP', example: 48990 })
  @IsInt()
  @Min(1)
  amountTotal: number;

  @ApiProperty({
    description: 'Fecha de emisión (ISO 8601)',
    example: '2026-05-20',
  })
  @IsDateString()
  issueDate: string;

  @ApiProperty({
    description: 'Nombre del proveedor',
    example: 'Ferretería San José',
  })
  @IsOptional()
  @IsString()
  supplierName?: string;

  @ApiProperty({ description: 'RUT del proveedor', example: '76.123.456-K' })
  @IsOptional()
  @IsString()
  supplierRut?: string;

  @ApiProperty({
    description: 'Descripción del gasto',
    example: 'Compra de materiales',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Nombre de la categoría', example: 'Insumos' })
  @IsOptional()
  @IsString()
  categoryName?: string;

  @ApiProperty({ description: 'Monto neto sin IVA', example: 41168 })
  @IsOptional()
  @IsInt()
  @Min(0)
  amountNet?: number;

  @ApiProperty({ description: 'Monto IVA', example: 7822 })
  @IsOptional()
  @IsInt()
  @Min(0)
  amountVat?: number;
}

export class SyncPayloadDto {
  @ApiProperty({
    description: 'UUID del negocio',
    example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  })
  @IsUUID()
  businessId: string;

  @ApiProperty({
    description:
      'Array de gastos registrados offline para sincronizar (máximo 100 por request)',
    type: [SyncExpenseItem],
  })
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(100)
  @ValidateNested({ each: true })
  @Type(() => SyncExpenseItem)
  items: SyncExpenseItem[];
}
