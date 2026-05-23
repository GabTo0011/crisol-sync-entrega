# Frontend - Crisol Sync (Entrega 2)

Aplicación web cliente desarrollada en React para la interacción de usuarios con el sistema Crisol Sync.

## 1. Objetivo del Frontend

- Proveer una interfaz clara para autenticación, registro y navegación.
- Permitir gestión visual de gastos, documentos y reportes.
- Integrarse con la API backend para flujos de negocio.

## 2. Stack Tecnológico

- Framework UI: React 19
- Bundler: Vite 8
- Enrutamiento: React Router DOM
- Testing: Vitest + Testing Library
- Estilos: CSS del proyecto (con dependencias preparadas para Tailwind)

## 3. Estructura Principal

```text
frontend/crysolPortafolio-main/
|- src/
|  |- presentation/
|  |- domain/
|  |- infrastructure/
|  |- shared/
|  |- test/
|  |- App.jsx
|  |- main.jsx
|- public/
|- docs/
|- bitacora/
|- package.json
```

## 4. Requisitos

- Node.js 20+
- npm 9+
- Backend de Crisol Sync ejecutándose para integración completa

## 5. Instalación

```bash
npm install
```

## 6. Variables de Entorno (opcional recomendada)

Si el frontend usa URL configurable para API, crear archivo `.env` en `frontend/crysolPortafolio-main/`:

```env
VITE_API_URL=http://localhost:3000/api
```

Si no existe esta variable en el código actual, el proyecto puede funcionar con rutas o configuraciones por defecto definidas en servicios internos.

## 7. Ejecución

```bash
# desarrollo
npm run dev

# build producción
npm run build

# previsualización build
npm run preview
```

Cliente esperado en desarrollo: `http://localhost:5173`

## 8. Scripts Disponibles

- `npm run dev` levanta servidor de desarrollo.
- `npm run build` genera build de producción.
- `npm run preview` sirve el build para validación.
- `npm run lint` ejecuta linting del proyecto.
- `npm run test` ejecuta pruebas en modo desarrollo.
- `npm run test:run` ejecuta pruebas una vez.
- `npm run test:ui` abre interfaz visual de pruebas.

## 9. Funcionalidades de la Interfaz

- Flujo de autenticación y registro de usuarios.
- Navegación por rutas del sistema.
- Vistas para gestión de información tributaria y contable.
- Persistencia local de preferencias de interfaz (tema y sesión local).

## 10. Criterios de Calidad

- Organización por capas (`presentation`, `domain`, `infrastructure`, `shared`).
- Componentes reutilizables y separación de responsabilidades.
- Pruebas unitarias/interacción con Testing Library.
- Configuración de lint para consistencia de código.

## 11. Entrega

- Integrante(s): 
    * EMMANUEL MORENO
    * GABRIEL TOLEDO
- Asignatura: TALLER APLICADO DE PROGRAMACION_004V
- Docente: CRISTIAN CARRENO VILLARROEL
- Hito: Entrega 2 - Frontend


