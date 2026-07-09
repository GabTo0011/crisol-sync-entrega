import { Controller, Get, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { OptionalAuthGuard } from '../../common/guards/optional-auth.guard';
import { BusinessGuard } from '../../common/guards/business.guard';
import { BusinessId } from '../../common/decorators/business-id.decorator';
import { AnalyticsService } from './analytics.service';

@ApiTags('Analytics (Dashboard)')
@ApiBearerAuth()
@UseGuards(OptionalAuthGuard, BusinessGuard)
@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('dashboard')
  @ApiOperation({ summary: 'Obtener métricas del dashboard' })
  @ApiQuery({
    name: 'businessId',
    required: false,
    description: 'UUID del negocio (opcional si se usa JWT)',
  })
  @ApiResponse({
    status: 200,
    description: 'Métricas del dashboard retornadas.',
  })
  getDashboard(@BusinessId() businessId: string) {
    return this.analyticsService.getDashboard(businessId);
  }
}
