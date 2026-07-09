/**
 * E2E Test básico — verifica que la aplicación levanta correctamente.
 *
 * Este archivo reemplaza el test boilerplate original de NestJS.
 * Los tests e2e por módulo están en test/e2e/.
 */
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/app.module';

describe('App (e2e)', () => {
  let app: INestApplication<App>;

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
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/ (GET) debe responder', async () => {
    const response = await request(app.getHttpServer()).get('/api');
    expect(response.status).not.toBe(500);
  });
});
