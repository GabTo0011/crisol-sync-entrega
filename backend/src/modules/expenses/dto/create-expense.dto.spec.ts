import { validateDto, expectDtoValid, expectDtoInvalid } from '../../../../test/helpers/dto-validation.helper';
import { CreateExpenseDto } from './create-expense.dto';

describe('CreateExpenseDto', () => {
  const validDto = {
    businessId: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    amountTotal: 48990,
    issueDate: '2026-05-20',
  };

  describe('campos requeridos', () => {
    it('debe ser válido con campos mínimos requeridos', async () => {
      await expectDtoValid(CreateExpenseDto, validDto);
    });

    it('debe ser válido con todos los campos opcionales', async () => {
      await expectDtoValid(CreateExpenseDto, {
        ...validDto,
        categoryId: 'f1e2d3c4-b5a6-7890-abcd-ef1234567890',
        amountNet: 41168,
        amountVat: 7822,
        supplierRut: '76.123.456-K',
        supplierName: 'Ferretería San José',
        description: 'Compra de materiales',
        documentUrl: 'https://storage.example.com/receipts/abc.jpg',
        isManual: true,
        ocrConfidence: 0.92,
      });
    });

    it('debe fallar si falta businessId', async () => {
      await expectDtoInvalid(CreateExpenseDto, { amountTotal: 1000, issueDate: '2026-01-01' }, ['businessId']);
    });

    it('debe fallar si falta amountTotal', async () => {
      await expectDtoInvalid(CreateExpenseDto, { businessId: validDto.businessId, issueDate: '2026-01-01' }, ['amountTotal']);
    });

    it('debe fallar si falta issueDate', async () => {
      await expectDtoInvalid(CreateExpenseDto, { businessId: validDto.businessId, amountTotal: 1000 }, ['issueDate']);
    });
  });

  describe('validación de tipos', () => {
    it('debe fallar si businessId no es UUID', async () => {
      await expectDtoInvalid(CreateExpenseDto, { ...validDto, businessId: 'not-a-uuid' }, ['businessId']);
    });

    it('debe fallar si categoryId no es UUID', async () => {
      await expectDtoInvalid(CreateExpenseDto, { ...validDto, categoryId: 'invalid' }, ['categoryId']);
    });

    it('debe fallar si amountTotal es negativo', async () => {
      await expectDtoInvalid(CreateExpenseDto, { ...validDto, amountTotal: -1 }, ['amountTotal']);
    });

    it('debe fallar si amountTotal es 0', async () => {
      await expectDtoInvalid(CreateExpenseDto, { ...validDto, amountTotal: 0 }, ['amountTotal']);
    });

    it('debe fallar si amountTotal no es entero', async () => {
      await expectDtoInvalid(CreateExpenseDto, { ...validDto, amountTotal: 199.5 }, ['amountTotal']);
    });

    it('debe fallar si issueDate no es fecha válida', async () => {
      await expectDtoInvalid(CreateExpenseDto, { ...validDto, issueDate: 'no-es-fecha' }, ['issueDate']);
    });

    it('debe fallar con campos no declarados (forbidNonWhitelisted)', async () => {
      const errors = await validateDto(CreateExpenseDto, { ...validDto, campoInvalido: 'hack' });
      expect(errors.length).toBeGreaterThan(0);
    });
  });
});
