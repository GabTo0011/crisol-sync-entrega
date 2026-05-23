import { Test, TestingModule } from '@nestjs/testing';
import { OcrController } from './ocr.controller';
import { OcrService } from './ocr.service';
import { PrismaService } from '../../prisma/prisma.service';

const mockOcrResult = {
  comercio: 'Minimarket Central',
  fecha: '2026-04-17',
  monto: 22990,
  categoria: 'Alimentacion',
  ocrConfidence: 0.86,
};

const mockOcrService = {
  processReceipt: jest.fn().mockResolvedValue(mockOcrResult),
  processAndSave: jest.fn().mockResolvedValue({ id: '1', comercio: 'Test', monto: 10000, estado: 'registrada' }),
};

const mockPrisma = {
  business: { findUnique: jest.fn().mockResolvedValue({ id: 'biz-1' }) },
};

describe('OcrController', () => {
  let controller: OcrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OcrController],
      providers: [
        { provide: OcrService, useValue: mockOcrService },
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    controller = module.get<OcrController>(OcrController);
  });

  it('debe estar definido', () => {
    expect(controller).toBeDefined();
  });

  it('debe retornar resultado OCR en formato frontend', async () => {
    const mockFile = { originalname: 'test.jpg', buffer: Buffer.from('fake'), mimetype: 'image/jpeg' } as Express.Multer.File;
    const result = await controller.processReceipt(mockFile);

    expect(result).toHaveProperty('comercio');
    expect(result).toHaveProperty('monto');
    expect(result).toHaveProperty('ocrConfidence');
  });

  it('debe procesar y guardar en un solo request', async () => {
    const mockFile = { originalname: 'test.jpg', buffer: Buffer.from('fake'), mimetype: 'image/jpeg' } as Express.Multer.File;
    const result = await controller.processAndSave(mockFile, 'biz-1');

    expect(mockOcrService.processAndSave).toHaveBeenCalledWith(mockFile, 'biz-1');
    expect(result).toHaveProperty('id');
  });
});
