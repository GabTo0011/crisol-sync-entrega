import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { OptionalAuthGuard } from '../../common/guards/optional-auth.guard';
import { BusinessGuard } from '../../common/guards/business.guard';
import { BusinessId } from '../../common/decorators/business-id.decorator';
import { OcrService } from './ocr.service';

@ApiTags('OCR (Digitalización)')
@ApiBearerAuth()
@UseGuards(OptionalAuthGuard, BusinessGuard)
@Controller('expenses/ocr')
export class OcrController {
  constructor(private readonly ocrService: OcrService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({
    summary: 'Procesar boleta/factura con OCR',
    description:
      'Recibe una imagen y extrae datos con Azure AI. ' +
      'Retorna los datos extraídos SIN persistir (el frontend decide si guardar).',
  })
  @ApiConsumes('multipart/form-data')
  @ApiQuery({
    name: 'businessId',
    required: false,
    description: 'UUID del negocio (opcional si se usa JWT)',
  })
  @ApiBody({
    description: 'Imagen del documento a procesar (JPG, PNG o PDF)',
    schema: {
      type: 'object',
      properties: {
        file: { type: 'string', format: 'binary' },
      },
      required: ['file'],
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Documento procesado exitosamente.',
    schema: {
      type: 'object',
      properties: {
        comercio: { type: 'string', example: 'Minimarket Central' },
        fecha: { type: 'string', example: '2026-04-17' },
        monto: { type: 'number', example: 22990 },
        categoria: { type: 'string', example: 'Alimentacion' },
        ocrConfidence: { type: 'number', example: 0.86 },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Archivo no proporcionado o formato inválido.',
  })
  processReceipt(@UploadedFile() file: Express.Multer.File) {
    return this.ocrService.processReceipt(file);
  }

  @Post('save')
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({
    summary: 'Procesar OCR y guardar como gasto',
    description:
      'Recibe una imagen, extrae datos con Azure AI y persiste el resultado como un nuevo Expense. ' +
      'Flujo completo en un solo request: imagen → OCR → DB.',
  })
  @ApiConsumes('multipart/form-data')
  @ApiQuery({
    name: 'businessId',
    required: false,
    description: 'UUID del negocio (opcional si se usa JWT)',
  })
  @ApiBody({
    description: 'Imagen del documento',
    schema: {
      type: 'object',
      properties: {
        file: { type: 'string', format: 'binary' },
      },
      required: ['file'],
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Gasto creado desde OCR exitosamente.',
  })
  @ApiResponse({
    status: 400,
    description: 'Archivo no proporcionado o datos no extraíbles.',
  })
  processAndSave(
    @UploadedFile() file: Express.Multer.File,
    @BusinessId() businessId: string,
  ) {
    return this.ocrService.processAndSave(file, businessId);
  }
}
