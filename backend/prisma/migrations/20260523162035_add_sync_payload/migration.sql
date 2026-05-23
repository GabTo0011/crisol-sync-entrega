-- CreateEnum
CREATE TYPE "SyncStatus" AS ENUM ('PENDING', 'PROCESSING', 'COMPLETED', 'FAILED');

-- CreateTable
CREATE TABLE "SyncPayload" (
    "id" TEXT NOT NULL,
    "businessId" TEXT NOT NULL,
    "itemCount" INTEGER NOT NULL,
    "payload" JSONB NOT NULL,
    "status" "SyncStatus" NOT NULL DEFAULT 'PENDING',
    "processedAt" TIMESTAMP(3),
    "errorLog" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SyncPayload_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "SyncPayload_businessId_idx" ON "SyncPayload"("businessId");

-- CreateIndex
CREATE INDEX "SyncPayload_status_idx" ON "SyncPayload"("status");

-- AddForeignKey
ALTER TABLE "SyncPayload" ADD CONSTRAINT "SyncPayload_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
