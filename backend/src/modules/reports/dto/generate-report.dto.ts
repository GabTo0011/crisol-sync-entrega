import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';

export enum ReportTypeEnum {
  F29 = 'F29',
  DEUDA = 'DEUDA',
  DOCUMENTOS = 'DOCUMENTOS',
}

export enum ReportFormatEnum {
  PDF = 'PDF',
  CSV = 'CSV',
  EXCEL = 'EXCEL',
}

export class GenerateReportDto {
  @ApiProperty({ description: 'UUID del negocio', example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' })
  @IsUUID()
  businessId: string;

  @ApiProperty({ description: 'Tipo de reporte', enum: ReportTypeEnum, example: 'F29' })
  @IsEnum(ReportTypeEnum)
  tipo: ReportTypeEnum;

  @ApiProperty({ description: 'Formato de salida', enum: ReportFormatEnum, example: 'PDF' })
  @IsEnum(ReportFormatEnum)
  formato: ReportFormatEnum;

  @ApiPropertyOptional({ description: 'Fecha inicio del rango (ISO 8601)', example: '2026-04-01' })
  @IsOptional()
  @IsDateString()
  desde?: string;

  @ApiPropertyOptional({ description: 'Fecha fin del rango (ISO 8601)', example: '2026-04-30' })
  @IsOptional()
  @IsDateString()
  hasta?: string;

  @ApiPropertyOptional({ description: 'Nombre de quien genera el reporte', example: 'Contabilidad' })
  @IsOptional()
  @IsString()
  generadoPor?: string;
}
