/**
 * Mock del Azure AI Document Intelligence client para unit tests.
 *
 * Uso:
 *   import { createMockAzureOcrClient, FIXTURE_OCR_RECEIPT } from '../../test/mocks/azure-ocr.mock';
 *
 * Nunca llama a Azure real en tests.
 */

/** Fixture: respuesta típica de Azure AI para una boleta chilena */
export const FIXTURE_OCR_RECEIPT = {
  documents: [
    {
      confidence: 0.89,
      fields: {
        MerchantName: { value: 'Minimarket Central', confidence: 0.92, kind: 'string' },
        TransactionDate: { value: new Date('2026-04-17'), confidence: 0.87, kind: 'date' },
        Total: { value: { amount: 22990 }, confidence: 0.91, kind: 'currency' },
      },
    },
  ],
};

/** Fixture: boleta sin monto detectable */
export const FIXTURE_OCR_NO_TOTAL = {
  documents: [
    {
      confidence: 0.5,
      fields: {
        MerchantName: { value: 'Tienda X', confidence: 0.6, kind: 'string' },
        TransactionDate: { value: new Date('2026-05-01'), confidence: 0.7, kind: 'date' },
      },
    },
  ],
};

/** Fixture: documento no reconocido */
export const FIXTURE_OCR_EMPTY = {
  documents: [],
};

export function createMockAzureOcrClient(fixture = FIXTURE_OCR_RECEIPT) {
  return {
    beginAnalyzeDocument: jest.fn().mockResolvedValue({
      pollUntilDone: jest.fn().mockResolvedValue(fixture),
    }),
  };
}
