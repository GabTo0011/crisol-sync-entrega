# Crisol Sync - Entrega 2

Proyecto académico de desarrollo full stack para digitalización y gestión tributaria/contable de una pyme.

## 1. Información General

- Proyecto: Crisol Sync
- Entrega: Entrega 2
- Tipo: Aplicación web full stack
- Componentes:
  - Backend API: NestJS + Prisma + PostgreSQL
  - Frontend SPA: React + Vite

## 2. Contexto del Proyecto

El objetivo del proyecto es centralizar procesos de registro de gastos, digitalización OCR de documentos tributarios, gestión de facturas y visualización de reportes en una plataforma web única.

Esta entrega consolida:

- Base de datos modelada para un entorno multiempresa.
- API REST con módulos funcionales separados.
- Frontend con navegación por rutas y componentes reutilizables.

## 3. Estructura del Repositorio

```text
crisol-sync-entrega2/
|- backend/
|  |- src/
|  |- prisma/
|  |- package.json
|- frontend/
|  |- crysolPortafolio-main/
|     |- src/
|     |- package.json
|- README.md
```

## 4. Requisitos Previos

- Node.js 20 o superior
- npm 9 o superior
- PostgreSQL disponible para desarrollo

## 5. Instalación Rápida

### 5.1 Backend

```bash
cd backend
npm install
```

Crear variables de entorno en `backend/.env` (ver sección de backend README).

### 5.2 Frontend

```bash
cd frontend/crysolPortafolio-main
npm install
```

## 6. Ejecución del Proyecto

### 6.1 Iniciar backend

```bash
cd backend
npm run start:dev
```

Servidor esperado: `http://localhost:3000/api`

### 6.2 Iniciar frontend

```bash
cd frontend/crysolPortafolio-main
npm run dev
```

Cliente esperado: `http://localhost:5173`

## 7. Evidencias de Entrega

Se recomienda adjuntar en la entrega formal:

- Capturas de pantalla de vistas principales.
- Evidencia de ejecución local (frontend + backend).
- Evidencia de pruebas ejecutadas.
- Enlace al repositorio y hash del commit entregado.

## 8. Criterios Técnicos Cubiertos

- Arquitectura por módulos en backend.
- Validación de DTOs y manejo de errores.
- Persistencia relacional con Prisma.
- Interfaz frontend modular y enrutada.
- Integración entre cliente y API.

## 9. Seguridad y Buenas Prácticas

- Variables sensibles fuera de control de versiones usando `.env`.
- Validación global de datos en backend.
- Uso de autenticación JWT para flujos protegidos.

Nota: para un entorno productivo se recomienda endurecer controles de autorización multiempresa y revisión de endpoints públicos.

## 10. Entrega

- Integrante(s): 
    * EMMANUEL MORENO
    * GABRIEL TOLEDO
- Asignatura: TALLER APLICADO DE PROGRAMACION_004V
- Docente: CRISTIAN CARRENO VILLARROEL
- Hito: Entrega 2 - Backend + Frontend



