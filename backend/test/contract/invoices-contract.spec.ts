/**
 * Contract Tests — Invoices (Facturas SII)
 *
 * Shape esperado por frontend:
 * { id, folio, rutEmisor, razonSocial, fechaEmision, fechaRecepcion,
 *   montoNeto, iva, total, estado, diasRestantes }
 */
import { mapInvoiceToFrontend } from '../../src/common/mappers/invoice.mapper';

const prismaInvoice = {
  id: 'inv-1',
  businessId: 'biz-1',
  folio: 'F-58400',
  supplierRut: '76.111.222-3',
  supplierName: 'Logistica Sur Ltda',
  amountNet: 621849,
  amountVat: 118151,
  amountTotal: 740000,
  issuedAt: new Date('2026-04-01'),
  receivedAt: new Date('2026-04-03'),
  status: 'PENDING_ACCEPTANCE',
  actionReason: null,
  actionAt: null,
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe('Contract: Invoices Response Shape', () => {
  it('debe contener todos los campos requeridos por el frontend', () => {
    const result = mapInvoiceToFrontend(prismaInvoice);
    const requiredFields = [
      'id', 'folio', 'rutEmisor', 'razonSocial', 'fechaEmision',
      'fechaRecepcion', 'montoNeto', 'iva', 'total', 'estado', 'diasRestantes',
    ];
    for (const field of requiredFields) {
      expect(result).toHaveProperty(field);
    }
  });

  it('fechaEmision y fechaRecepcion deben ser formato YYYY-MM-DD', () => {
    const result = mapInvoiceToFrontend(prismaInvoice);
    expect(result.fechaEmision).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(result.fechaRecepcion).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it('montos deben ser números enteros', () => {
    const result = mapInvoiceToFrontend(prismaInvoice);
    expect(Number.isInteger(result.montoNeto)).toBe(true);
    expect(Number.isInteger(result.iva)).toBe(true);
    expect(Number.isInteger(result.total)).toBe(true);
  });

  it('estado debe ser string en español (pendiente|aceptada|rechazada|auto-aceptada)', () => {
    const result = mapInvoiceToFrontend(prismaInvoice);
    expect(['pendiente', 'aceptada', 'rechazada', 'auto-aceptada']).toContain(result.estado);
  });

  it('diasRestantes debe ser número', () => {
    const result = mapInvoiceToFrontend(prismaInvoice);
    expect(typeof result.diasRestantes).toBe('number');
  });
});
