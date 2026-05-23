import { BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { OcrService } from './ocr.service';
import { PrismaService } from '../../prisma/prisma.service';

const mockConfigService = {
  get: jest.fn((key: string) => {
    const config: Record<string, string> = {};
    return config[key] ?? '';
  }),
};

const mockPrisma = {
  category: { upsert: jest.fn() },
  expense: { create: jest.fn() },
};

describe('OcrService', () => {
  let service: OcrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OcrService,
        { provide: ConfigService, useValue: mockConfigService },
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<OcrService>(OcrService);
    jest.clearAllMocks();
  });

  it('debe estar definido', () => {
    expect(service).toBeDefined();
  });

  describe('processReceipt', () => {
    it('debe lanzar BadRequestException si no se proporciona archivo', async () => {
      await expect(
        service.processReceipt(null as unknown as Express.Multer.File),
      ).rejects.toThrow(BadRequestException);
    });

    it('debe lanzar BadRequestException si el mime type no es válido', async () => {
      const mockFile = { originalname: 'test.exe', buffer: Buffer.from('fake'), mimetype: 'application/x-msdownload', size: 100 } as Express.Multer.File;
      await expect(service.processReceipt(mockFile)).rejects.toThrow(BadRequestException);
    });

    it('debe lanzar BadRequestException si el archivo excede 10MB', async () => {
      const mockFile = { originalname: 'big.jpg', buffer: Buffer.from('fake'), mimetype: 'image/jpeg', size: 11 * 1024 * 1024 } as Express.Multer.File;
      await expect(service.processReceipt(mockFile)).rejects.toThrow(BadRequestException);
    });

    it('debe lanzar InternalServerErrorException si Azure no está configurado', async () => {
      mockConfigService.get.mockReturnValue('');
      const mockFile = { originalname: 'test.jpg', buffer: Buffer.from('fake'), mimetype: 'image/jpeg', size: 1000 } as Express.Multer.File;
      await expect(service.processReceipt(mockFile)).rejects.toThrow(InternalServerErrorException);
    });
  });

  describe('inferCategory', () => {
    it('debe inferir Insumos para ferreterías', () => {
      expect(service.inferCategory('Ferretería San José')).toBe('Insumos');
    });

    it('debe inferir Transporte para servicentros', () => {
      expect(service.inferCategory('Servicentro Ruta 5')).toBe('Transporte');
    });

    it('debe inferir Alimentacion para minimarkets', () => {
      expect(service.inferCategory('Minimarket Central')).toBe('Alimentacion');
    });

    it('debe retornar Otros para comercios no reconocidos', () => {
      expect(service.inferCategory('Empresa XYZ')).toBe('Otros');
    });
  });
});
