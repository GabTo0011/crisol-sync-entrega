import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InvoiceStatus } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import {
  mapInvoiceToFrontend,
  mapInvoicesToFrontend,
} from '../../common/mappers';

// TODO: Integrar con API real del SII cuando esté disponible.

/** Datos simulados para sync */
const SIMULATED_INVOICES = [
  {
    folio: 'F-58400',
    supplierRut: '76.111.222-3',
    supplierName: 'Logistica Sur Ltda',
    amountNet: 621849,
    amountVat: 118151,
    amountTotal: 740000,
    issuedAt: '2026-04-01',
  },
  {
    folio: 'F-58401',
    supplierRut: '77.998.776-5',
    supplierName: 'Comercial Norte SpA',
    amountNet: 327731,
    amountVat: 62269,
    amountTotal: 390000,
    issuedAt: '2026-04-08',
  },
  {
    folio: 'F-58402',
    supplierRut: '96.123.421-0',
    supplierName: 'Retail Centro SA',
    amountNet: 840336,
    amountVat: 159664,
    amountTotal: 1000000,
    issuedAt: '2026-04-07',
  },
];

@Injectable()
export class TaxService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(businessId: string) {
    const invoices = await this.prisma.invoiceSii.findMany({
      where: { businessId },
      orderBy: { receivedAt: 'desc' },
    });

    return mapInvoicesToFrontend(invoices);
  }

  async findOne(id: string, businessId: string) {
    const invoice = await this.prisma.invoiceSii.findFirst({
      where: { id, businessId },
    });

    if (!invoice) {
      throw new NotFoundException('Factura no encontrada');
    }

    return mapInvoiceToFrontend(invoice);
  }

  async accept(id: string, businessId: string, reason?: string) {
    const invoice = await this.findOneRaw(id, businessId);

    if (invoice.status !== InvoiceStatus.PENDING_ACCEPTANCE) {
      throw new BadRequestException(
        `No se puede aceptar una factura con estado "${invoice.status}"`,
      );
    }

    const updated = await this.prisma.invoiceSii.update({
      where: { id },
      data: {
        status: InvoiceStatus.ACCEPTED,
        actionReason: reason ?? null,
        actionAt: new Date(),
      },
    });

    return mapInvoiceToFrontend(updated);
  }

  async reject(id: string, businessId: string, reason?: string) {
    const invoice = await this.findOneRaw(id, businessId);

    if (invoice.status !== InvoiceStatus.PENDING_ACCEPTANCE) {
      throw new BadRequestException(
        `No se puede rechazar una factura con estado "${invoice.status}"`,
      );
    }

    const updated = await this.prisma.invoiceSii.update({
      where: { id },
      data: {
        status: InvoiceStatus.REJECTED,
        actionReason: reason ?? null,
        actionAt: new Date(),
      },
    });

    return mapInvoiceToFrontend(updated);
  }

  async sync(businessId: string) {
    const existing = await this.prisma.invoiceSii.count({
      where: { businessId },
    });

    let created = 0;

    if (existing === 0) {
      for (const data of SIMULATED_INVOICES) {
        await this.prisma.invoiceSii.create({
          data: {
            businessId,
            folio: data.folio,
            supplierRut: data.supplierRut,
            supplierName: data.supplierName,
            amountNet: data.amountNet,
            amountVat: data.amountVat,
            amountTotal: data.amountTotal,
            issuedAt: new Date(data.issuedAt),
            receivedAt: new Date(),
            status: InvoiceStatus.PENDING_ACCEPTANCE,
          },
        });
        created++;
      }
    }

    return {
      syncedAt: new Date().toISOString(),
      totalInvoices: existing + created,
      newInvoices: created,
    };
  }

  private async findOneRaw(id: string, businessId: string) {
    const invoice = await this.prisma.invoiceSii.findFirst({
      where: { id, businessId },
    });

    if (!invoice) {
      throw new NotFoundException('Factura no encontrada');
    }

    return invoice;
  }
}
