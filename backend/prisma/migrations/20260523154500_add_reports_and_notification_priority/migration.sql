-- CreateEnum
CREATE TYPE "ReportType" AS ENUM ('F29', 'DEUDA', 'DOCUMENTOS');

-- CreateEnum
CREATE TYPE "ReportFormat" AS ENUM ('PDF', 'CSV', 'EXCEL');

-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "priority" TEXT NOT NULL DEFAULT 'media';

-- CreateTable
CREATE TABLE "Report" (
    "id" TEXT NOT NULL,
    "businessId" TEXT NOT NULL,
    "type" "ReportType" NOT NULL,
    "format" "ReportFormat" NOT NULL,
    "dateFrom" TIMESTAMP(3),
    "dateTo" TIMESTAMP(3),
    "generatedBy" TEXT NOT NULL DEFAULT 'Sistema',
    "downloadUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Report_businessId_idx" ON "Report"("businessId");

-- CreateIndex
CREATE INDEX "Report_createdAt_idx" ON "Report"("createdAt");

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
