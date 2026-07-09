import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
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
import { NotificationsService } from './notifications.service';

@ApiTags('Notificaciones (Notifications)')
@ApiBearerAuth()
@UseGuards(OptionalAuthGuard, BusinessGuard)
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get()
  @ApiOperation({ summary: 'Listar notificaciones de un negocio' })
  @ApiQuery({
    name: 'businessId',
    required: false,
    description: 'UUID del negocio (opcional si se usa JWT)',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de notificaciones retornada.',
  })
  findAll(@BusinessId() businessId: string) {
    return this.notificationsService.findAll(businessId);
  }

  @Patch(':id/read')
  @ApiOperation({ summary: 'Marcar notificación como leída' })
  @ApiParam({ name: 'id', description: 'UUID de la notificación' })
  @ApiQuery({
    name: 'businessId',
    required: false,
    description: 'UUID del negocio (opcional si se usa JWT)',
  })
  @ApiResponse({ status: 200, description: 'Notificación marcada como leída.' })
  @ApiResponse({ status: 404, description: 'Notificación no encontrada.' })
  markAsRead(
    @Param('id', ParseUUIDPipe) id: string,
    @BusinessId() businessId: string,
  ) {
    return this.notificationsService.markAsRead(id, businessId);
  }
}
