/**
 * Mapea un Expense de Prisma al formato que espera el frontend (boletas.mock.js).
 *
 * Frontend espera: { id, fecha, comercio, monto, categoria, estado, ocrConfidence, imagenUrl, observacion }
 * Backend tiene:   { id, issueDate, supplierName, amountTotal, category.name, status, ocrConfidence, documentUrl, description }
 */

const STATUS_MAP: Record<string, string> = {
  REGISTERED: 'registrada',
  PENDING_REVIEW: 'pendiente',
  CANCELLED: 'anulada',
};

export function mapExpenseToFrontend(expense: any) {
  return {
    id: expense.id,
    fecha: expense.issueDate instanceof Date
      ? expense.issueDate.toISOString().slice(0, 10)
      : String(expense.issueDate).slice(0, 10),
    comercio: expense.supplierName ?? '',
    monto: expense.amountTotal,
    categoria: expense.category?.name ?? null,
    estado: STATUS_MAP[expense.status] ?? expense.status.toLowerCase(),
    ocrConfidence: expense.ocrConfidence ?? null,
    imagenUrl: expense.documentUrl ?? null,
    observacion: expense.description ?? null,
    // Campos extra útiles para el frontend (detalle)
    businessId: expense.businessId,
    montoNeto: expense.amountNet ?? null,
    iva: expense.amountVat ?? null,
    rutProveedor: expense.supplierRut ?? null,
    fuente: expense.source,
    esManual: expense.isManual,
  };
}

export function mapExpensesToFrontend(expenses: any[]) {
  return expenses.map(mapExpenseToFrontend);
}
