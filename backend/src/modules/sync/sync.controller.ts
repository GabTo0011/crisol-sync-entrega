import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SyncPayloadDto } from './dto/sync-payload.dto';
import { SyncService } from './sync.service';

@ApiTags('Sincronización Offline (Sync)')
@Controller('sync')
export class SyncController {
  constructor(private readonly syncService: SyncService) {}

  @Post('offline-payload')
  @ApiOperation({
    summary: 'Sincronizar gastos registrados offline',
    description:
      'Recibe un array de gastos que fueron registrados sin conexión en el frontend. ' +
      'Cada item se procesa individualmente: se crea la categoría si no existe y se registra el gasto con source OFFLINE_SYNC. ' +
      'Retorna un resumen con la cantidad procesada, fallida y los errores por item.',
  })
  @ApiResponse({
    status: 201,
    description: 'Payload procesado.',
    schema: {
      type: 'object',
      properties: {
        id: { type: 'string', description: 'UUID del registro de sync' },
        status: {
          type: 'string',
          enum: ['COMPLETED', 'FAILED'],
          example: 'COMPLETED',
        },
        itemCount: { type: 'number', example: 5 },
        processed: { type: 'number', example: 5 },
        failed: { type: 'number', example: 0 },
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              localId: { type: 'string' },
              error: { type: 'string' },
            },
          },
        },
        processedAt: { type: 'string', example: '2026-05-23T16:20:00.000Z' },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description:
      'Payload inválido (items vacíos, más de 100, o campos requeridos faltantes).',
  })
  processOfflinePayload(@Body() dto: SyncPayloadDto) {
    return this.syncService.processOfflinePayload(dto);
  }
}
