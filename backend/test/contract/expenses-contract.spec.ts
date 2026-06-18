/**
 * Contract Tests — Expenses
 *
 * Valida que las respuestas del backend mantienen la forma esperada
 * por el frontend según docs/api-contracts.md.
 *
 * Shape esperado por frontend:
 * { id, fecha, comercio, monto, categoria, estado, ocrConfidence, imagenUrl, observacion,
 *   businessId, montoNeto, iva, rutProveedor, fuente, esManual }
 */
import { mapExpenseToFrontend } from '../../src/common/mappers/expense.mapper';

const prismaExpense = {
  id: 'uuid-1',
  businessId: 'biz-1',
  categoryId: 'cat-1',
  amountTotal: 48990,
  amountNet: 41168,
  amountVat: 7822,
  issueDate: new Date('2026-05-20'),
  supplierRut: '76.123.456-K',
  supplierName: 'Ferretería San José',
  description: 'Compra de materiales',
  documentUrl: 'https://storage.example.com/img.jpg',
  ocrConfidence: 0.92,
  isManual: true,
  source: 'MANUAL',
  status: 'REGISTERED',
  createdAt: new Date(),
  updatedAt: new Date(),
  category: { id: 'cat-1', businessId: 'biz-1', name: 'Insumos', createdAt: new Date(), updatedAt: new Date() },
};

describe('Contract: Expenses Response Shape', () => {
  it('debe contener todos los campos requeridos por el frontend', () => {
    const result = mapExpenseToFrontend(prismaExpense);
    const requiredFields = [
      'id', 'fecha', 'comercio', 'monto', 'categoria', 'estado',
      'ocrConfidence', 'imagenUrl', 'observacion',
    ];
    for (const field of requiredFields) {
      expect(result).toHaveProperty(field);
    }
  });

  it('debe contener campos extra del detalle', () => {
    const result = mapExpenseToFrontend(prismaExpense);
    const extraFields = ['businessId', 'montoNeto', 'iva', 'rutProveedor', 'fuente', 'esManual'];
    for (const field of extraFields) {
      expect(result).toHaveProperty(field);
    }
  });

  it('fecha debe ser string formato YYYY-MM-DD', () => {
    const result = mapExpenseToFrontend(prismaExpense);
    expect(result.fecha).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it('monto debe ser número entero positivo', () => {
    const result = mapExpenseToFrontend(prismaExpense);
    expect(typeof result.monto).toBe('number');
    expect(Number.isInteger(result.monto)).toBe(true);
    expect(result.monto).toBeGreaterThan(0);
  });

  it('estado debe ser string en español (registrada|pendiente|anulada)', () => {
    const result = mapExpenseToFrontend(prismaExpense);
    expect(['registrada', 'pendiente', 'anulada']).toContain(result.estado);
  });

  it('fuente debe ser uno de MANUAL|OCR|OFFLINE_SYNC', () => {
    const result = mapExpenseToFrontend(prismaExpense);
    expect(['MANUAL', 'OCR', 'OFFLINE_SYNC']).toContain(result.fuente);
  });
});
