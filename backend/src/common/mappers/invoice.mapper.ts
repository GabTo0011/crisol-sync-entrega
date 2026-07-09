/**
 * Mapea un InvoiceSii de Prisma al formato que espera el frontend (facturas.mock.js).
 *
 * Frontend espera: { id, folio, rutEmisor, razonSocial, fechaEmision, fechaRecepcion, montoNeto, iva, total, estado, diasRestantes }
 * Backend tiene:   { id, folio, supplierRut, supplierName, issuedAt, receivedAt, amountNet, amountVat, amountTotal, status }
 */

const INVOICE_STATUS_MAP: Record<string, string> = {
  PENDING_ACCEPTANCE: 'pendiente',
  ACCEPTED: 'aceptada',
  REJECTED: 'rechazada',
  AUTO_ACCEPTED: 'auto-aceptada',
};

function calculateDaysRemaining(receivedAt: Date | string): number {
  const limit = new Date(receivedAt);
  limit.setDate(limit.getDate() + 8); // 8 días para aceptar/rechazar según SII
  const now = new Date();
  return Math.ceil((limit.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

export function mapInvoiceToFrontend(invoice: any) {
  const receivedAt =
    invoice.receivedAt instanceof Date
      ? invoice.receivedAt
      : new Date(invoice.receivedAt);

  const issuedAt = invoice.issuedAt
    ? invoice.issuedAt instanceof Date
      ? invoice.issuedAt
      : new Date(invoice.issuedAt)
    : receivedAt;

  return {
    id: invoice.id,
    folio: invoice.folio,
    rutEmisor: invoice.supplierRut,
    razonSocial: invoice.supplierName,
    fechaEmision: issuedAt.toISOString().slice(0, 10),
    fechaRecepcion: receivedAt.toISOString().slice(0, 10),
    montoNeto: invoice.amountNet,
    iva: invoice.amountVat,
    total: invoice.amountTotal,
    estado: INVOICE_STATUS_MAP[invoice.status] ?? invoice.status.toLowerCase(),
    diasRestantes: calculateDaysRemaining(receivedAt),
  };
}

export function mapInvoicesToFrontend(invoices: any[]) {
  return invoices.map(mapInvoiceToFrontend);
}
