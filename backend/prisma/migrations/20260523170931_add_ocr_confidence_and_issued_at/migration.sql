-- AlterTable
ALTER TABLE "Expense" ADD COLUMN     "ocrConfidence" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "InvoiceSii" ADD COLUMN     "issuedAt" TIMESTAMP(3);
