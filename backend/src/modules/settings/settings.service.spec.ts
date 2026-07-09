import { Test, TestingModule } from '@nestjs/testing';
import { SettingsService } from './settings.service';
import { PrismaService } from '../../prisma/prisma.service';

const mockCert = {
  id: '1',
  fileName: 'cert.pfx',
  mimeType: 'application/x-pkcs12',
  size: 4096,
  status: 'activo',
  uploadedAt: new Date('2026-05-20'),
  businessId: 'biz-1',
};

const mockPrisma = {
  certificate: {
    findFirst: jest.fn(),
    create: jest.fn(),
    updateMany: jest.fn(),
  },
};

describe('SettingsService', () => {
  let service: SettingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SettingsService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<SettingsService>(SettingsService);
    jest.clearAllMocks();
  });

  it('debe estar definido', () => {
    expect(service).toBeDefined();
  });

  describe('getCertificate', () => {
    it('debe retornar null si no hay certificado', async () => {
      mockPrisma.certificate.findFirst.mockResolvedValue(null);
      const result = await service.getCertificate('biz-1');
      expect(result).toBeNull();
    });

    it('debe retornar certificado mapeado con todos los campos', async () => {
      mockPrisma.certificate.findFirst.mockResolvedValue(mockCert);
      const result = await service.getCertificate('biz-1');

      expect(result).toHaveProperty('id', '1');
      expect(result).toHaveProperty('fileName', 'cert.pfx');
      expect(result).toHaveProperty('mimeType', 'application/x-pkcs12');
      expect(result).toHaveProperty('size', 4096);
      expect(result).toHaveProperty('status', 'activo');
      expect(result).toHaveProperty('uploadedAt');
    });

    it('debe buscar el certificado más reciente', async () => {
      mockPrisma.certificate.findFirst.mockResolvedValue(null);
      await service.getCertificate('biz-1');
      expect(mockPrisma.certificate.findFirst).toHaveBeenCalledWith(
        expect.objectContaining({ orderBy: { uploadedAt: 'desc' } }),
      );
    });
  });

  describe('uploadCertificate', () => {
    it('debe desactivar certificados anteriores', async () => {
      mockPrisma.certificate.updateMany.mockResolvedValue({ count: 1 });
      mockPrisma.certificate.create.mockResolvedValue({ ...mockCert, id: '2' });

      const mockFile = {
        originalname: 'new.pfx',
        mimetype: 'application/x-pkcs12',
        size: 2048,
      } as Express.Multer.File;
      await service.uploadCertificate('biz-1', mockFile);

      expect(mockPrisma.certificate.updateMany).toHaveBeenCalledWith({
        where: { businessId: 'biz-1', status: 'activo' },
        data: { status: 'reemplazado' },
      });
    });

    it('debe crear certificado con status activo', async () => {
      mockPrisma.certificate.updateMany.mockResolvedValue({ count: 0 });
      mockPrisma.certificate.create.mockResolvedValue({
        ...mockCert,
        id: '2',
        fileName: 'new.pfx',
      });

      const mockFile = {
        originalname: 'new.pfx',
        mimetype: 'application/x-pkcs12',
        size: 2048,
      } as Express.Multer.File;
      const result = await service.uploadCertificate('biz-1', mockFile);

      expect(result.status).toBe('activo');
      expect(result.fileName).toBe('new.pfx');
    });

    it('debe usar mimetype del archivo subido', async () => {
      mockPrisma.certificate.updateMany.mockResolvedValue({ count: 0 });
      mockPrisma.certificate.create.mockResolvedValue({
        ...mockCert,
        mimeType: 'application/x-pem-file',
      });

      const mockFile = {
        originalname: 'cert.pem',
        mimetype: 'application/x-pem-file',
        size: 1024,
      } as Express.Multer.File;
      await service.uploadCertificate('biz-1', mockFile);

      const createCall = mockPrisma.certificate.create.mock.calls[0][0];
      expect(createCall.data.mimeType).toBe('application/x-pem-file');
    });
  });
});
