import { validateDto, expectDtoValid, expectDtoInvalid } from '../../../../test/helpers/dto-validation.helper';
import { SyncInvoicesDto } from './sync-invoices.dto';
import { ActionInvoiceDto } from './action-invoice.dto';

describe('SyncInvoicesDto', () => {
  it('debe ser válido con UUID correcto', async () => {
    await expectDtoValid(SyncInvoicesDto, {
      businessId: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    });
  });

  it('debe fallar si falta businessId', async () => {
    await expectDtoInvalid(SyncInvoicesDto, {}, ['businessId']);
  });

  it('debe fallar si businessId no es UUID', async () => {
    await expectDtoInvalid(SyncInvoicesDto, { businessId: 'invalid' }, ['businessId']);
  });

  it('debe fallar con campos no declarados', async () => {
    const errors = await validateDto(SyncInvoicesDto, {
      businessId: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
      extraField: 'hack',
    });
    expect(errors.length).toBeGreaterThan(0);
  });
});

describe('ActionInvoiceDto', () => {
  it('debe ser válido sin campos (todos opcionales)', async () => {
    await expectDtoValid(ActionInvoiceDto, {});
  });

  it('debe ser válido con reason', async () => {
    await expectDtoValid(ActionInvoiceDto, { reason: 'Factura verificada' });
  });

  it('debe fallar si reason no es string', async () => {
    await expectDtoInvalid(ActionInvoiceDto, { reason: 12345 as any }, ['reason']);
  });
});
