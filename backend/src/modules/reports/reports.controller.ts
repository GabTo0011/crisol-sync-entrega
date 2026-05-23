import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OptionalAuthGuard } from '../../common/guards/optional-auth.guard';
import { BusinessGuard } from '../../common/guards/business.guard';
import { BusinessId } from '../../common/decorators/business-id.decorator';
import { GenerateReportDto } from './dto/generate-report.dto';
import { ReportsService } from './reports.service';

@ApiTags('Reportes (Reports)')
@ApiBearerAuth()
@UseGuards(OptionalAuthGuard, BusinessGuard)
@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('types')
  @ApiOperation({ summary: 'Obtener tipos de reporte disponibles' })
  @ApiResponse({ status: 200, description: 'Tipos de reporte retornados.' })
  getTypes() {
    return this.reportsService.getTypes();
  }

  @Get('history')
  @ApiOperation({ summary: 'Obtener historial de reportes generados' })
  @ApiQuery({ name: 'businessId', required: false, description: 'UUID del negocio (opcional si se usa JWT)' })
  @ApiResponse({ status: 200, description: 'Historial de reportes retornado.' })
  getHistory(@BusinessId() businessId: string) {
    return this.reportsService.getHistory(businessId);
  }

  @Post('generate')
  @ApiOperation({ summary: 'Generar un nuevo reporte' })
  @ApiResponse({ status: 201, description: 'Reporte generado exitosamente.' })
  @ApiResponse({ status: 400, description: 'Datos de entrada inválidos.' })
  generate(@Body() dto: GenerateReportDto) {
    return this.reportsService.generate(dto);
  }
}
