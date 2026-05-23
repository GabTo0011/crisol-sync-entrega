import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { OptionalAuthGuard } from '../../common/guards/optional-auth.guard';
import { BusinessGuard } from '../../common/guards/business.guard';
import { BusinessId } from '../../common/decorators/business-id.decorator';
import { ActionInvoiceDto } from './dto/action-invoice.dto';
import { SyncInvoicesDto } from './dto/sync-invoices.dto';
import { TaxService } from './tax.service';

@ApiTags('Facturas SII (Tax)')
@ApiBearerAuth()
@UseGuards(OptionalAuthGuard, BusinessGuard)
@Controller('tax/invoices')
export class TaxController {
  constructor(private readonly taxService: TaxService) {}

  @Get()
  @ApiOperation({ summary: 'Listar facturas DTE de un negocio' })
  @ApiQuery({ name: 'businessId', required: false, description: 'UUID del negocio (opcional si se usa JWT)' })
  @ApiResponse({ status: 200, description: 'Lista de facturas retornada.' })
  findAll(@BusinessId() businessId: string) {
    return this.taxService.findAll(businessId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una factura por ID' })
  @ApiParam({ name: 'id', description: 'UUID de la factura' })
  @ApiQuery({ name: 'businessId', required: false, description: 'UUID del negocio (opcional si se usa JWT)' })
  @ApiResponse({ status: 200, description: 'Factura encontrada.' })
  @ApiResponse({ status: 404, description: 'Factura no encontrada.' })
  findOne(
    @Param('id', ParseUUIDPipe) id: string,
    @BusinessId() businessId: string,
  ) {
    return this.taxService.findOne(id, businessId);
  }

  @Post('sync')
  @ApiOperation({ summary: 'Sincronizar facturas desde el SII' })
  @ApiResponse({ status: 201, description: 'Sincronización completada.' })
  sync(@Body() dto: SyncInvoicesDto) {
    return this.taxService.sync(dto.businessId);
  }

  @Post(':id/accept')
  @ApiOperation({ summary: 'Aceptar una factura' })
  @ApiParam({ name: 'id', description: 'UUID de la factura' })
  @ApiQuery({ name: 'businessId', required: false, description: 'UUID del negocio (opcional si se usa JWT)' })
  @ApiResponse({ status: 201, description: 'Factura aceptada.' })
  @ApiResponse({ status: 400, description: 'Factura no está en estado pendiente.' })
  accept(
    @Param('id', ParseUUIDPipe) id: string,
    @BusinessId() businessId: string,
    @Body() dto: ActionInvoiceDto,
  ) {
    return this.taxService.accept(id, businessId, dto.reason);
  }

  @Post(':id/reject')
  @ApiOperation({ summary: 'Rechazar una factura' })
  @ApiParam({ name: 'id', description: 'UUID de la factura' })
  @ApiQuery({ name: 'businessId', required: false, description: 'UUID del negocio (opcional si se usa JWT)' })
  @ApiResponse({ status: 201, description: 'Factura rechazada.' })
  @ApiResponse({ status: 400, description: 'Factura no está en estado pendiente.' })
  reject(
    @Param('id', ParseUUIDPipe) id: string,
    @BusinessId() businessId: string,
    @Body() dto: ActionInvoiceDto,
  ) {
    return this.taxService.reject(id, businessId, dto.reason);
  }
}
