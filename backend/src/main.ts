import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PrismaExceptionFilter } from './common/filters/prisma-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.enableCors({
    origin: process.env.FRONTEND_URL?.split(',') ?? ['http://localhost:5173'],
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.useGlobalFilters(new PrismaExceptionFilter());

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Crisol Sync API')
    .setDescription(
      'API REST para Crisol Sync — gestión de gastos, digitalización OCR, facturas SII, reportes y administración multiempresa.\n\n' +
        '## Autenticación\n' +
        'La mayoría de endpoints soportan autenticación JWT opcional (Bearer token). ' +
        'Si se envía un token válido, el `businessId` se extrae automáticamente del JWT. ' +
        'Si no se envía token, se debe proporcionar `businessId` como query parameter.\n\n' +
        '## Flujo recomendado\n' +
        '1. `POST /api/auth/register` — Crear cuenta (retorna JWT)\n' +
        '2. Usar el `access_token` en el header `Authorization: Bearer <token>`\n' +
        '3. Todos los endpoints resolverán el negocio automáticamente desde el JWT\n\n' +
        '## Formato de respuestas\n' +
        'Las respuestas de gastos y facturas usan nombres en español compatibles con el frontend React existente.',
    )
    .setVersion('1.1.0')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      description:
        'Ingresa el access_token obtenido en /api/auth/login o /api/auth/register',
    })
    .addTag('Autenticación (Auth)', 'Login, registro y perfil de usuario')
    .addTag(
      'Gastos (Expenses)',
      'CRUD de gastos/boletas con filtro por negocio',
    )
    .addTag(
      'OCR (Digitalización)',
      'Procesamiento de imágenes con Azure AI Document Intelligence',
    )
    .addTag('Facturas SII (Tax)', 'Gestión de facturas electrónicas DTE')
    .addTag(
      'Reportes (Reports)',
      'Generación y consulta de reportes financieros',
    )
    .addTag(
      'Notificaciones (Notifications)',
      'Alertas y notificaciones del sistema',
    )
    .addTag('Usuarios (Users)', 'Administración de usuarios del negocio')
    .addTag(
      'Configuración (Settings)',
      'Certificados digitales y configuración',
    )
    .addTag('Analytics (Dashboard)', 'Métricas agregadas para el dashboard')
    .addTag(
      'Sincronización Offline (Sync)',
      'Procesamiento de datos registrados sin conexión',
    )
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);

  // Solo exponer Swagger en development y test
  if (process.env.NODE_ENV !== 'production') {
    SwaggerModule.setup('api/docs', app, document);
  }

  const port = Number(process.env.PORT ?? 3000);
  await app.listen(port);

  console.log(`Crisol Sync API running on http://localhost:${port}/api`);
  console.log(`Swagger docs available on http://localhost:${port}/api/docs`);
}

void bootstrap();
