import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SettingsService {
  constructor(private readonly prisma: PrismaService) {}

  /** Retorna el certificado activo del negocio, o null si no hay ninguno */
  async getCertificate(businessId: string) {
    const cert = await this.prisma.certificate.findFirst({
      where: { businessId },
      orderBy: { uploadedAt: 'desc' },
    });

    if (!cert) {
      return null;
    }

    return {
      id: cert.id,
      fileName: cert.fileName,
      mimeType: cert.mimeType,
      size: cert.size,
      status: cert.status,
      uploadedAt: cert.uploadedAt.toISOString(),
    };
  }

  /** Sube un nuevo certificado digital para el negocio */
  async uploadCertificate(businessId: string, file: Express.Multer.File) {
    // Desactivar certificados anteriores
    await this.prisma.certificate.updateMany({
      where: { businessId, status: 'activo' },
      data: { status: 'reemplazado' },
    });

    const cert = await this.prisma.certificate.create({
      data: {
        businessId,
        fileName: file.originalname,
        mimeType: file.mimetype || 'application/octet-stream',
        size: file.size,
        status: 'activo',
      },
    });

    return {
      id: cert.id,
      fileName: cert.fileName,
      mimeType: cert.mimeType,
      size: cert.size,
      status: cert.status,
      uploadedAt: cert.uploadedAt.toISOString(),
    };
  }
}
