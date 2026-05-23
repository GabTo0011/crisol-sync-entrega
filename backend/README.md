# Backend - Crisol Sync (Entrega 2)

API REST desarrollada con NestJS para soportar la gestión de gastos, OCR, facturas, reportes, usuarios y sincronización offline del sistema Crisol Sync.

## 1. Objetivo del Backend

- Exponer endpoints para operaciones de negocio del sistema.
- Persistir información en PostgreSQL mediante Prisma ORM.
- Proveer autenticación basada en JWT para rutas protegidas.
- Integrar servicios externos (OCR, almacenamiento y servicios cloud).

## 2. Stack Tecnológico

- Framework: NestJS 11
- Lenguaje: TypeScript
- ORM: Prisma 7
- Base de datos: PostgreSQL
- Autenticación: Passport JWT + bcrypt
- Documentación API: Swagger

## 3. Estructura Principal

```text
backend/
|- src/
|  |- modules/
|  |  |- auth/
|  |  |- expenses/
|  |  |- ocr/
|  |  |- tax/
|  |  |- reports/
|  |  |- notifications/
|  |  |- users/
|  |  |- settings/
|  |  |- analytics/
|  |  |- sync/
|  |- common/
|  |- prisma/
|- prisma/
|  |- schema.prisma
|  |- migrations/
|- package.json
```

## 4. Requisitos

- Node.js 20+
- npm 9+
- PostgreSQL disponible local o remoto

## 5. Instalación y Configuración

```bash
npm install
```

Crear archivo `.env` en la carpeta `backend/` con las variables necesarias:

```env
NODE_ENV=development
PORT=3000
FRONTEND_URL=http://localhost:5173

DATABASE_URL=postgresql://user:password@localhost:5432/nameBase
DIRECT_URL=postgresql://user:password@localhost:5432/nameBase

SUPABASE_URL=https://tu-proyecto.supabase.co
SUPABASE_SERVICE_ROLE_KEY=tu_service_role_key

AZURE_OCR_ENDPOINT=https://tu-endpoint.cognitiveservices.azure.com/
AZURE_OCR_KEY=tu_azure_key

GOOGLE_DRIVE_FOLDER_ID=tu_folder_id
GOOGLE_CLIENT_EMAIL=tu_service_account_email
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----..."

JWT_SECRET=secreto_seguro
JWT_EXPIRES_IN=1d
```

## 6. Base de Datos

Aplicar migraciones:

```bash
npx prisma migrate dev
```

Generar cliente Prisma:

```bash
npx prisma generate
```

## 7. Ejecución

```bash
# desarrollo (watch)
npm run start:dev

# build de producción
npm run build

# ejecución de producción
npm run start:prod
```

API base URL: `http://localhost:3000/api`

Documentación Swagger (no producción): `http://localhost:3000/api/docs`

## 8. Scripts Disponibles

- `npm run start` inicia la aplicación.
- `npm run start:dev` inicia en modo desarrollo con recarga.
- `npm run build` compila el backend.
- `npm run lint` ejecuta linting.
- `npm run test` ejecuta pruebas unitarias.
- `npm run test:e2e` ejecuta pruebas e2e.
- `npm run test:cov` genera cobertura.

## 9. Módulos Implementados

- `auth`: login, registro y perfil autenticado.
- `expenses`: CRUD de gastos y anulación.
- `ocr`: procesamiento de documentos con OCR.
- `tax`: gestión de facturas SII.
- `reports`: generación y consulta de reportes.
- `notifications`: alertas del sistema.
- `users`: administración de usuarios por negocio.
- `settings`: configuraciones y certificados.
- `analytics`: métricas para dashboard.
- `sync`: sincronización de payload offline.

## 10. Seguridad y Consideraciones

- Variables sensibles se gestionan por `.env` y no deben versionarse.
- Se utiliza validación global (`ValidationPipe`) con whitelist.
- Se recomienda para producción:
  - Fortalecer políticas de autorización por tenant.
  - Endurecer CORS y cabeceras de seguridad.
  - Revisar endpoints de sincronización para exigir autenticación estricta.

## 11. Entrega

- Integrante(s): 
    * EMMANUEL MORENO
    * GABRIEL TOLEDO
- Asignatura: TALLER APLICADO DE PROGRAMACION_004V
- Docente: CRISTIAN CARRENO VILLARROEL
- Hito: Entrega 2 - Backend

