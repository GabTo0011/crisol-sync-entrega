import { mapInvoiceToFrontend, mapInvoicesToFrontend } from './invoice.mapper';

describe('Invoice Mapper', () => {
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

  describe('mapInvoiceToFrontend', () => {
    it('debe mapear supplierRut a rutEmisor', () => {
      const result = mapInvoiceToFrontend(prismaInvoice);
      expect(result.rutEmisor).toBe('76.111.222-3');
    });

    it('debe mapear supplierName a razonSocial', () => {
      const result = mapInvoiceToFrontend(prismaInvoice);
      expect(result.razonSocial).toBe('Logistica Sur Ltda');
    });

    it('debe mapear issuedAt a fechaEmision formato YYYY-MM-DD', () => {
      const result = mapInvoiceToFrontend(prismaInvoice);
      expect(result.fechaEmision).toBe('2026-04-01');
    });

    it('debe mapear receivedAt a fechaRecepcion formato YYYY-MM-DD', () => {
      const result = mapInvoiceToFrontend(prismaInvoice);
      expect(result.fechaRecepcion).toBe('2026-04-03');
    });

    it('debe mapear amountNet, amountVat, amountTotal', () => {
      const result = mapInvoiceToFrontend(prismaInvoice);
      expect(result.montoNeto).toBe(621849);
      expect(result.iva).toBe(118151);
      expect(result.total).toBe(740000);
    });

    it('debe mapear status PENDING_ACCEPTANCE a "pendiente"', () => {
      const result = mapInvoiceToFrontend(prismaInvoice);
      expect(result.estado).toBe('pendiente');
    });

    it('debe mapear status ACCEPTED a "aceptada"', () => {
      const result = mapInvoiceToFrontend({
        ...prismaInvoice,
        status: 'ACCEPTED',
      });
      expect(result.estado).toBe('aceptada');
    });

    it('debe mapear status REJECTED a "rechazada"', () => {
      const result = mapInvoiceToFrontend({
        ...prismaInvoice,
        status: 'REJECTED',
      });
      expect(result.estado).toBe('rechazada');
    });

    it('debe mapear status AUTO_ACCEPTED a "auto-aceptada"', () => {
      const result = mapInvoiceToFrontend({
        ...prismaInvoice,
        status: 'AUTO_ACCEPTED',
      });
      expect(result.estado).toBe('auto-aceptada');
    });

    it('debe calcular diasRestantes como número', () => {
      const result = mapInvoiceToFrontend(prismaInvoice);
      expect(typeof result.diasRestantes).toBe('number');
    });

    it('debe usar receivedAt como fechaEmision si issuedAt es null', () => {
      const result = mapInvoiceToFrontend({ ...prismaInvoice, issuedAt: null });
      expect(result.fechaEmision).toBe('2026-04-03');
    });

    it('debe incluir folio', () => {
      const result = mapInvoiceToFrontend(prismaInvoice);
      expect(result.folio).toBe('F-58400');
    });
  });

  describe('mapInvoicesToFrontend', () => {
    it('debe mapear array de facturas', () => {
      const result = mapInvoicesToFrontend([prismaInvoice, prismaInvoice]);
      expect(result).toHaveLength(2);
      expect(result[0]).toHaveProperty('rutEmisor');
    });

    it('debe retornar array vacío si input es vacío', () => {
      const result = mapInvoicesToFrontend([]);
      expect(result).toEqual([]);
    });
  });
});
