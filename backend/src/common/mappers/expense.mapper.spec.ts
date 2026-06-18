import { mapExpenseToFrontend, mapExpensesToFrontend } from './expense.mapper';

describe('Expense Mapper', () => {
  const prismaExpense = {
    id: 'exp-1',
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

  describe('mapExpenseToFrontend', () => {
    it('debe transformar fecha a formato YYYY-MM-DD', () => {
      const result = mapExpenseToFrontend(prismaExpense);
      expect(result.fecha).toBe('2026-05-20');
    });

    it('debe mapear supplierName a comercio', () => {
      const result = mapExpenseToFrontend(prismaExpense);
      expect(result.comercio).toBe('Ferretería San José');
    });

    it('debe mapear amountTotal a monto', () => {
      const result = mapExpenseToFrontend(prismaExpense);
      expect(result.monto).toBe(48990);
    });

    it('debe mapear category.name a categoria', () => {
      const result = mapExpenseToFrontend(prismaExpense);
      expect(result.categoria).toBe('Insumos');
    });

    it('debe mapear status REGISTERED a "registrada"', () => {
      const result = mapExpenseToFrontend(prismaExpense);
      expect(result.estado).toBe('registrada');
    });

    it('debe mapear status CANCELLED a "anulada"', () => {
      const result = mapExpenseToFrontend({ ...prismaExpense, status: 'CANCELLED' });
      expect(result.estado).toBe('anulada');
    });

    it('debe mapear status PENDING_REVIEW a "pendiente"', () => {
      const result = mapExpenseToFrontend({ ...prismaExpense, status: 'PENDING_REVIEW' });
      expect(result.estado).toBe('pendiente');
    });

    it('debe retornar null para categoria si no tiene category', () => {
      const result = mapExpenseToFrontend({ ...prismaExpense, category: null });
      expect(result.categoria).toBeNull();
    });

    it('debe retornar string vacío para comercio si supplierName es null', () => {
      const result = mapExpenseToFrontend({ ...prismaExpense, supplierName: null });
      expect(result.comercio).toBe('');
    });

    it('debe incluir campos extra para frontend', () => {
      const result = mapExpenseToFrontend(prismaExpense);
      expect(result.businessId).toBe('biz-1');
      expect(result.montoNeto).toBe(41168);
      expect(result.iva).toBe(7822);
      expect(result.rutProveedor).toBe('76.123.456-K');
      expect(result.fuente).toBe('MANUAL');
      expect(result.esManual).toBe(true);
    });

    it('debe mapear documentUrl a imagenUrl', () => {
      const result = mapExpenseToFrontend(prismaExpense);
      expect(result.imagenUrl).toBe('https://storage.example.com/img.jpg');
    });

    it('debe mapear description a observacion', () => {
      const result = mapExpenseToFrontend(prismaExpense);
      expect(result.observacion).toBe('Compra de materiales');
    });
  });

  describe('mapExpensesToFrontend', () => {
    it('debe mapear array de expenses', () => {
      const result = mapExpensesToFrontend([prismaExpense, prismaExpense]);
      expect(result).toHaveLength(2);
      expect(result[0]).toHaveProperty('fecha');
      expect(result[1]).toHaveProperty('comercio');
    });

    it('debe retornar array vacío si input es vacío', () => {
      const result = mapExpensesToFrontend([]);
      expect(result).toEqual([]);
    });
  });
});
