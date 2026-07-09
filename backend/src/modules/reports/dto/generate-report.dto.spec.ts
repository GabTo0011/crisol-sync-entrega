import {
  validateDto,
  expectDtoValid,
  expectDtoInvalid,
} from '../../../../test/helpers/dto-validation.helper';
import { GenerateReportDto } from './generate-report.dto';

describe('GenerateReportDto', () => {
  const validDto = {
    businessId: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    tipo: 'F29',
    formato: 'PDF',
  };

  describe('campos requeridos', () => {
    it('debe ser válido con campos mínimos', async () => {
      await expectDtoValid(GenerateReportDto, validDto);
    });

    it('debe ser válido con todos los campos opcionales', async () => {
      await expectDtoValid(GenerateReportDto, {
        ...validDto,
        desde: '2026-04-01',
        hasta: '2026-04-30',
        generadoPor: 'Contabilidad',
      });
    });

    it('debe fallar si falta businessId', async () => {
      await expectDtoInvalid(
        GenerateReportDto,
        { tipo: 'F29', formato: 'PDF' },
        ['businessId'],
      );
    });

    it('debe fallar si falta tipo', async () => {
      await expectDtoInvalid(
        GenerateReportDto,
        { businessId: validDto.businessId, formato: 'PDF' },
        ['tipo'],
      );
    });

    it('debe fallar si falta formato', async () => {
      await expectDtoInvalid(
        GenerateReportDto,
        { businessId: validDto.businessId, tipo: 'F29' },
        ['formato'],
      );
    });
  });

  describe('validación de enums', () => {
    it('debe aceptar tipo F29', async () => {
      await expectDtoValid(GenerateReportDto, { ...validDto, tipo: 'F29' });
    });

    it('debe aceptar tipo DEUDA', async () => {
      await expectDtoValid(GenerateReportDto, { ...validDto, tipo: 'DEUDA' });
    });

    it('debe aceptar tipo DOCUMENTOS', async () => {
      await expectDtoValid(GenerateReportDto, {
        ...validDto,
        tipo: 'DOCUMENTOS',
      });
    });

    it('debe fallar con tipo inválido', async () => {
      await expectDtoInvalid(
        GenerateReportDto,
        { ...validDto, tipo: 'INVALIDO' },
        ['tipo'],
      );
    });

    it('debe aceptar formato PDF, CSV, EXCEL', async () => {
      await expectDtoValid(GenerateReportDto, { ...validDto, formato: 'PDF' });
      await expectDtoValid(GenerateReportDto, { ...validDto, formato: 'CSV' });
      await expectDtoValid(GenerateReportDto, {
        ...validDto,
        formato: 'EXCEL',
      });
    });

    it('debe fallar con formato inválido', async () => {
      await expectDtoInvalid(
        GenerateReportDto,
        { ...validDto, formato: 'WORD' },
        ['formato'],
      );
    });
  });

  describe('validación de fechas opcionales', () => {
    it('debe fallar si desde no es fecha válida', async () => {
      await expectDtoInvalid(
        GenerateReportDto,
        { ...validDto, desde: 'no-es-fecha' },
        ['desde'],
      );
    });

    it('debe fallar si hasta no es fecha válida', async () => {
      await expectDtoInvalid(
        GenerateReportDto,
        { ...validDto, hasta: 'invalido' },
        ['hasta'],
      );
    });
  });

  describe('validación UUID', () => {
    it('debe fallar si businessId no es UUID', async () => {
      await expectDtoInvalid(
        GenerateReportDto,
        { ...validDto, businessId: 'not-uuid' },
        ['businessId'],
      );
    });
  });
});
