# Stage 1: Builder
FROM node:22-slim AS builder

# Установка pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

# Настройка лимитов памяти для Node.js (актуально для серверов с 2GB RAM)
ENV NODE_OPTIONS="--max-old-space-size=1536"

# Копируем конфигурационные файлы pnpm
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY apps/landing/package.json ./apps/landing/

# Установка зависимостей с последующей очисткой кеша
RUN pnpm install --frozen-lockfile && pnpm store prune

# Копируем исходный код
COPY . .

# Сборка приложения
RUN pnpm build:landing

# Stage 2: Runner
FROM node:22-alpine AS runner

WORKDIR /app

# Настройка переменных окружения
ENV NODE_ENV=production
ENV PORT=3000

# Копируем только необходимые файлы из этапа сборки
COPY --from=builder /app/apps/landing/.output ./.output

# Открываем порт
EXPOSE 3000

# Запуск приложения
CMD ["node", ".output/server/index.mjs"]
