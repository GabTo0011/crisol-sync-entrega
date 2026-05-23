// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- Importa el nuevo plugin

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- Actívalo aquí
  ],
  test: {
    // Configuración base para empezar a testear componentes React sin tocar la app productiva.
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.js',
    css: true,
    clearMocks: true,
  },
})