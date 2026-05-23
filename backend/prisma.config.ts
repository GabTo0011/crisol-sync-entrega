import { defineConfig } from 'prisma/config';
import 'dotenv/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    // DIRECT_URL: conexión directa sin pooler (puerto 5432) — requerida para migraciones
    // DATABASE_URL: conexión pooled (puerto 6543) — usada por el cliente en runtime
    url: (process.env.DIRECT_URL ?? process.env.DATABASE_URL) as string,
  },
});
