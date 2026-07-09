import {
  Controller,
  Get,
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
import { SettingsService } from './settings.service';

@ApiTags('Configuración (Settings)')
@ApiBearerAuth()
@UseGuards(OptionalAuthGuard, BusinessGuard)
@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get('certificate')
  @ApiOperation({ summary: 'Obtener certificado digital activo' })
  @ApiQuery({
    name: 'businessId',
    required: false,
    description: 'UUID del negocio (opcional si se usa JWT)',
  })
  @ApiResponse({ status: 200, description: 'Certificado retornado (o null).' })
  getCertificate(@BusinessId() businessId: string) {
    return this.settingsService.getCertificate(businessId);
  }

  @Post('certificate')
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({ summary: 'Subir certificado digital' })
  @ApiQuery({
    name: 'businessId',
    required: false,
    description: 'UUID del negocio (opcional si se usa JWT)',
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: { file: { type: 'string', format: 'binary' } },
      required: ['file'],
    },
  })
  @ApiResponse({ status: 201, description: 'Certificado subido exitosamente.' })
  uploadCertificate(
    @BusinessId() businessId: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.settingsService.uploadCertificate(businessId, file);
  }
}
