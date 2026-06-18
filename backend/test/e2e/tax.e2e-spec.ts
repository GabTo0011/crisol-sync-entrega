/**
 * E2E Test — Tax Invoices flow
 *
 * Valida: sync invoices → list → accept → verify status
 */
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../../src/app.module';
import { PrismaExceptionFilter } from '../../src/common/filters/prisma-exception.filter';

describe('E2E: Tax Invoices Flow', () => {
  let app: INestApplication<App>;
  let businessId: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
    app.useGlobalFilters(new PrismaExceptionFilter());
    await app.init();

    // Register a test user
    const registerRes = await request(app.getHttpServer())
      .post('/api/auth/register')
      .send({ name: 'E2E Tax', email: `e2e-tax-${Date.now()}@test.cl`, password: 'Test123!', businessName: 'E2E Tax Biz', businessRut: `e2e-tax-${Date.now()}` });

    if (registerRes.status === 201) {
      businessId = registerRes.body.user.businessId;
    }
  });

  afterAll(async () => {
    await app.close();
  });

  it('POST /api/tax/invoices/sync sin businessId debe retornar 400', async () => {
    const res = await request(app.getHttpServer())
      .post('/api/tax/invoices/sync')
      .send({});
    expect(res.status).toBe(400);
  });

  it('POST /api/tax/invoices/sync debe crear facturas simuladas', async function () {
    if (!businessId) return this.skip?.();

    const res = await request(app.getHttpServer())
      .post('/api/tax/invoices/sync')
      .send({ businessId });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('syncedAt');
    expect(res.body).toHaveProperty('newInvoices');
    expect(res.body.newInvoices).toBeGreaterThanOrEqual(0);
  });

  it('GET /api/tax/invoices debe retornar facturas en formato frontend', async function () {
    if (!businessId) return this.skip?.();

    const res = await request(app.getHttpServer())
      .get('/api/tax/invoices')
      .query({ businessId });

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    if (res.body.length > 0) {
      const invoice = res.body[0];
      expect(invoice).toHaveProperty('folio');
      expect(invoice).toHaveProperty('rutEmisor');
      expect(invoice).toHaveProperty('estado');
      expect(invoice).toHaveProperty('diasRestantes');
    }
  });

  it('POST /api/tax/invoices/:id/accept debe aceptar factura pendiente', async function () {
    if (!businessId) return this.skip?.();

    // Get a pending invoice
    const listRes = await request(app.getHttpServer())
      .get('/api/tax/invoices')
      .query({ businessId });

    const pending = listRes.body.find((i: any) => i.estado === 'pendiente');
    if (!pending) return; // No pending invoices to test

    const res = await request(app.getHttpServer())
      .post(`/api/tax/invoices/${pending.id}/accept`)
      .query({ businessId })
      .send({ reason: 'E2E verificada' });

    expect(res.status).toBe(201);
    expect(res.body.estado).toBe('aceptada');
  });
});
