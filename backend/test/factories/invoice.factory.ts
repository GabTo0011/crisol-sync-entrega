/**
 * Factory para generar datos de InvoiceSii en tests.
 */

let counter = 0;

export function buildInvoice(overrides: Partial<any> = {}) {
  counter++;
  return {
    id: `inv-${counter}`,
    businessId: 'biz-1',
    folio: `F-${58400 + counter}`,
    supplierRut: `76.${String(100 + counter)}.222-3`,
    supplierName: `Proveedor SII ${counter}`,
    amountNet: 621849,
    amountVat: 118151,
    amountTotal: 740000,
    issuedAt: new Date('2026-04-01'),
    receivedAt: new Date('2026-04-03'),
    status: 'PENDING_ACCEPTANCE',
    actionReason: null,
    actionAt: null,
    createdAt: new Date('2026-04-03'),
    updatedAt: new Date('2026-04-03'),
    ...overrides,
  };
}

export function buildAcceptedInvoice(overrides: Partial<any> = {}) {
  return buildInvoice({
    status: 'ACCEPTED',
    actionReason: 'Verificada',
    actionAt: new Date('2026-04-05'),
    ...overrides,
  });
}

export function buildRejectedInvoice(overrides: Partial<any> = {}) {
  return buildInvoice({
    status: 'REJECTED',
    actionReason: 'Datos incorrectos',
    actionAt: new Date('2026-04-05'),
    ...overrides,
  });
}

export function resetInvoiceFactory() {
  counter = 0;
}
