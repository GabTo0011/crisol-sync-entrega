import { Test, TestingModule } from '@nestjs/testing';
import { SettingsService } from './settings.service';
import { PrismaService } from '../../prisma/prisma.service';

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

    it('debe retornar certificado mapeado', async () => {
      mockPrisma.certificate.findFirst.mockResolvedValue({
        id: '1', fileName: 'cert.pfx', mimeType: 'application/x-pkcs12', size: 4096, status: 'activo', uploadedAt: new Date('2026-05-20'),
      });

      const result = await service.getCertificate('biz-1');
      expect(result).toHaveProperty('fileName', 'cert.pfx');
      expect(result).toHaveProperty('status', 'activo');
    });
  });

  describe('uploadCertificate', () => {
    it('debe crear certificado y desactivar anteriores', async () => {
      mockPrisma.certificate.updateMany.mockResolvedValue({ count: 1 });
      mockPrisma.certificate.create.mockResolvedValue({
        id: '2', fileName: 'new.pfx', mimeType: 'application/x-pkcs12', size: 2048, status: 'activo', uploadedAt: new Date(),
      });

      const mockFile = { originalname: 'new.pfx', mimetype: 'application/x-pkcs12', size: 2048 } as Express.Multer.File;
      const result = await service.uploadCertificate('biz-1', mockFile);

      expect(mockPrisma.certificate.updateMany).toHaveBeenCalled();
      expect(result.status).toBe('activo');
      expect(result.fileName).toBe('new.pfx');
    });
  });
});
