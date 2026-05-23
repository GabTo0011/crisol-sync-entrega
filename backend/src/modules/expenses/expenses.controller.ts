import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
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
import { CancelExpenseDto } from './dto/cancel-expense.dto';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { ExpensesService } from './expenses.service';

@ApiTags('Gastos (Expenses)')
@ApiBearerAuth()
@UseGuards(OptionalAuthGuard, BusinessGuard)
@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo gasto', description: 'Registra un gasto manual o proveniente de OCR para un negocio.' })
  @ApiResponse({ status: 201, description: 'Gasto creado exitosamente.' })
  @ApiResponse({ status: 400, description: 'Datos de entrada inválidos.' })
  create(@Body() dto: CreateExpenseDto) {
    return this.expensesService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos los gastos de un negocio', description: 'Retorna todos los gastos ordenados por fecha de emisión descendente. Soporta paginación opcional.' })
  @ApiQuery({ name: 'businessId', required: false, description: 'UUID del negocio (opcional si se usa JWT)' })
  @ApiQuery({ name: 'page', required: false, description: 'Página (default: 1)' })
  @ApiQuery({ name: 'limit', required: false, description: 'Items por página (default: 50, max: 100)' })
  @ApiResponse({ status: 200, description: 'Lista de gastos retornada exitosamente.' })
  findAll(
    @BusinessId() businessId: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    const pageNum = page ? Math.max(1, Number(page)) : undefined;
    const limitNum = limit ? Math.min(100, Math.max(1, Number(limit))) : undefined;
    return this.expensesService.findAll(businessId, pageNum, limitNum);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un gasto por ID' })
  @ApiParam({ name: 'id', description: 'UUID del gasto' })
  @ApiQuery({ name: 'businessId', required: false, description: 'UUID del negocio (opcional si se usa JWT)' })
  @ApiResponse({ status: 200, description: 'Gasto encontrado.' })
  @ApiResponse({ status: 404, description: 'Gasto no encontrado.' })
  findOne(
    @Param('id', ParseUUIDPipe) id: string,
    @BusinessId() businessId: string,
  ) {
    return this.expensesService.findOne(id, businessId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un gasto' })
  @ApiParam({ name: 'id', description: 'UUID del gasto a actualizar' })
  @ApiQuery({ name: 'businessId', required: false, description: 'UUID del negocio (opcional si se usa JWT)' })
  @ApiResponse({ status: 200, description: 'Gasto actualizado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Gasto no encontrado.' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @BusinessId() businessId: string,
    @Body() dto: UpdateExpenseDto,
  ) {
    return this.expensesService.update(id, businessId, dto);
  }

  @Patch(':id/cancel')
  @ApiOperation({ summary: 'Anular un gasto', description: 'Cambia el estado del gasto a CANCELLED (anulada).' })
  @ApiParam({ name: 'id', description: 'UUID del gasto a anular' })
  @ApiQuery({ name: 'businessId', required: false, description: 'UUID del negocio (opcional si se usa JWT)' })
  @ApiResponse({ status: 200, description: 'Gasto anulado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Gasto no encontrado.' })
  cancel(
    @Param('id', ParseUUIDPipe) id: string,
    @BusinessId() businessId: string,
    @Body() dto: CancelExpenseDto,
  ) {
    return this.expensesService.cancel(id, businessId, dto.reason);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un gasto' })
  @ApiParam({ name: 'id', description: 'UUID del gasto a eliminar' })
  @ApiQuery({ name: 'businessId', required: false, description: 'UUID del negocio (opcional si se usa JWT)' })
  @ApiResponse({ status: 200, description: 'Gasto eliminado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Gasto no encontrado.' })
  remove(
    @Param('id', ParseUUIDPipe) id: string,
    @BusinessId() businessId: string,
  ) {
    return this.expensesService.remove(id, businessId);
  }
}
