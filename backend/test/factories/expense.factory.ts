/**
 * Factory para generar datos de Expense en tests.
 */

let counter = 0;

export function buildExpense(overrides: Partial<any> = {}) {
  counter++;
  return {
    id: `exp-${counter}`,
    businessId: 'biz-1',
    categoryId: `cat-1`,
    amountTotal: 48990,
    amountNet: 41168,
    amountVat: 7822,
    issueDate: new Date('2026-05-20'),
    supplierRut: '76.123.456-K',
    supplierName: `Proveedor Test ${counter}`,
    description: `Gasto de prueba ${counter}`,
    documentUrl: null,
    ocrConfidence: null,
    isManual: true,
    source: 'MANUAL',
    status: 'REGISTERED',
    createdAt: new Date('2026-05-20'),
    updatedAt: new Date('2026-05-20'),
    category: {
      id: 'cat-1',
      businessId: 'biz-1',
      name: 'Insumos',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ...overrides,
  };
}

export function buildExpenseFromOcr(overrides: Partial<any> = {}) {
  return buildExpense({
    isManual: false,
    source: 'OCR',
    ocrConfidence: 0.89,
    supplierName: 'Minimarket Central',
    ...overrides,
  });
}

export function buildCancelledExpense(overrides: Partial<any> = {}) {
  return buildExpense({
    status: 'CANCELLED',
    description: 'Gasto anulado [Anulado: Error en monto]',
    ...overrides,
  });
}

export function resetExpenseFactory() {
  counter = 0;
}
