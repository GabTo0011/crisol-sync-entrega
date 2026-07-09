# ============================================================
# Crisol Sync Backend — Multi-stage Docker Build
# ============================================================
# Stage 1: Install dependencies
# Stage 2: Build (Prisma generate + NestJS compile)
# Stage 3: Production image (minimal)
# ============================================================

# --- Stage 1: Dependencies ---
FROM node:22-slim AS deps

WORKDIR /app

# Install OpenSSL (required by Prisma)
RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./
COPY prisma ./prisma/
COPY prisma.config.ts ./

RUN npm ci

# --- Stage 2: Build ---
FROM node:22-slim AS build

WORKDIR /app

RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/package-lock.json ./package-lock.json
COPY --from=deps /app/prisma ./prisma
COPY --from=deps /app/prisma.config.ts ./prisma.config.ts

# Copy source
COPY tsconfig.json tsconfig.build.json nest-cli.json ./
COPY src ./src

# Generate Prisma Client
RUN npx prisma generate

# Build NestJS
RUN npm run build

# --- Stage 3: Production ---
FROM node:22-slim AS production

WORKDIR /app

RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

# Create non-root user
RUN addgroup --system --gid 1001 nestjs && \
    adduser --system --uid 1001 nestjs

# Copy only production dependencies
COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/package-lock.json ./package-lock.json

RUN npm ci --omit=dev && npm cache clean --force

# Copy Prisma schema and generated client
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/prisma.config.ts ./prisma.config.ts
COPY --from=build /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=build /app/node_modules/@prisma/client ./node_modules/@prisma/client

# Copy compiled application
COPY --from=build /app/dist ./dist

# Switch to non-root user
USER nestjs

# Railway injects PORT automatically
EXPOSE 3000

CMD ["node", "dist/main.js"]
