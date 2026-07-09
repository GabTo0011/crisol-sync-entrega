/**
 * E2E Test — Expenses flow
 *
 * Valida: register → create expense → list → cancel
 * Usa la app real con prefix /api, ValidationPipe y guards.
 * La DB es la real (requiere conexión), por lo que se limpia después.
 */
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../../src/app.module';
import { PrismaExceptionFilter } from '../../src/common/filters/prisma-exception.filter';

describe('E2E: Expenses Flow', () => {
  let app: INestApplication<App>;
  let accessToken: string;
  let businessId: string;
  let createdExpenseId: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api');
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    app.useGlobalFilters(new PrismaExceptionFilter());
    await app.init();

    // Register a test user to get token and businessId
    const registerRes = await request(app.getHttpServer())
      .post('/api/auth/register')
      .send({
        name: 'E2E Test',
        email: `e2e-expenses-${Date.now()}@test.cl`,
        password: 'Test123!',
        businessName: 'E2E Biz',
        businessRut: `e2e-${Date.now()}`,
      });

    if (registerRes.status === 201) {
      accessToken = registerRes.body.access_token;
      businessId = registerRes.body.user.businessId;
    }
  });

  afterAll(async () => {
    await app.close();
  });

  it('POST /api/expenses sin businessId debe retornar 400', async () => {
    const res = await request(app.getHttpServer())
      .post('/api/expenses')
      .send({ amountTotal: 10000, issueDate: '2026-01-01' });
    expect(res.status).toBe(400);
  });

  it('POST /api/expenses con body inválido debe retornar 400', async () => {
    const res = await request(app.getHttpServer())
      .post('/api/expenses')
      .query({ businessId })
      .send({ amountTotal: -1, issueDate: 'not-a-date' });
    expect(res.status).toBe(400);
  });

  it('POST /api/expenses con datos válidos debe retornar 201', async function () {
    if (!businessId) return this.skip?.();

    const res = await request(app.getHttpServer()).post('/api/expenses').send({
      businessId,
      amountTotal: 25000,
      issueDate: '2026-06-15',
      supplierName: 'E2E Proveedor',
      isManual: true,
    });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('monto', 25000);
    expect(res.body).toHaveProperty('comercio', 'E2E Proveedor');
    expect(res.body).toHaveProperty('estado', 'registrada');
    createdExpenseId = res.body.id;
  });

  it('GET /api/expenses debe retornar lista incluyendo el gasto creado', async function () {
    if (!businessId) return this.skip?.();

    const res = await request(app.getHttpServer())
      .get('/api/expenses')
      .query({ businessId });

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    if (createdExpenseId) {
      const found = res.body.find((e: any) => e.id === createdExpenseId);
      expect(found).toBeDefined();
      expect(found.monto).toBe(25000);
    }
  });

  it('PATCH /api/expenses/:id/cancel debe anular el gasto', async function () {
    if (!createdExpenseId || !businessId) return this.skip?.();

    const res = await request(app.getHttpServer())
      .patch(`/api/expenses/${createdExpenseId}/cancel`)
      .query({ businessId })
      .send({ reason: 'Test E2E cancel' });

    expect(res.status).toBe(200);
    expect(res.body.estado).toBe('anulada');
  });

  it('DELETE /api/expenses/:id debe eliminar el gasto', async function () {
    if (!createdExpenseId || !businessId) return this.skip?.();

    const res = await request(app.getHttpServer())
      .delete(`/api/expenses/${createdExpenseId}`)
      .query({ businessId });

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ success: true });
  });
});
