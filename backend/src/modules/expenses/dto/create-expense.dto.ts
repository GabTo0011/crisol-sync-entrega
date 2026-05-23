import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';

export class CreateExpenseDto {
  @ApiProperty({ description: 'UUID del negocio al que pertenece el gasto', example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' })
  @IsUUID()
  businessId: string;

  @ApiPropertyOptional({ description: 'UUID de la categoría del gasto', example: 'f1e2d3c4-b5a6-7890-abcd-ef1234567890' })
  @IsOptional()
  @IsUUID()
  categoryId?: string;

  @ApiProperty({ description: 'Monto total del gasto en CLP (entero)', example: 48990, minimum: 1 })
  @IsInt()
  @Min(1)
  amountTotal: number;

  @ApiPropertyOptional({ description: 'Monto neto sin IVA en CLP', example: 41168, minimum: 0 })
  @IsOptional()
  @IsInt()
  @Min(0)
  amountNet?: number;

  @ApiPropertyOptional({ description: 'Monto IVA en CLP', example: 7822, minimum: 0 })
  @IsOptional()
  @IsInt()
  @Min(0)
  amountVat?: number;

  @ApiProperty({ description: 'Fecha de emisión del documento (ISO 8601)', example: '2026-05-20' })
  @IsDateString()
  issueDate: string;

  @ApiPropertyOptional({ description: 'RUT del proveedor', example: '76.123.456-K' })
  @IsOptional()
  @IsString()
  supplierRut?: string;

  @ApiPropertyOptional({ description: 'Nombre del proveedor', example: 'Ferretería San José' })
  @IsOptional()
  @IsString()
  supplierName?: string;

  @ApiPropertyOptional({ description: 'Descripción o nota del gasto', example: 'Compra de materiales menores' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'URL del documento digitalizado', example: 'https://storage.example.com/receipts/abc.jpg' })
  @IsOptional()
  @IsString()
  documentUrl?: string;

  @ApiPropertyOptional({ description: 'Indica si el gasto fue ingresado manualmente (true) o vía OCR (false)', example: true, default: true })
  @IsOptional()
  @IsBoolean()
  isManual?: boolean;

  @ApiPropertyOptional({ description: 'Confianza del OCR (0 a 1)', example: 0.92 })
  @IsOptional()
  ocrConfidence?: number;
}
