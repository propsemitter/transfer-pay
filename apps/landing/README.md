# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Deployment on VPS (Docker)

To deploy this project on a VPS (e.g., Ubuntu 20.04), follow these steps:

### Prerequisites

- **Docker**: [Install Docker](https://docs.docker.com/engine/install/ubuntu/)
- **Docker Compose**: [Install Docker Compose](https://docs.docker.com/compose/install/)

### Deployment Steps

1. **Clone the repository**:
   ```bash
   git clone <your-repository-url>
   cd transfer-pay
   ```

2. **Build and start the container**:
   ```bash
   docker compose up -d --build
   ```

3. **Check logs** (optional):
   ```bash
   docker compose logs -f
   ```

The application will be available at `http://your-server-ip`.

### Configuration

- The application runs on port `3000` inside the container.
- Docker Compose maps host port `80` to container port `3000` by default.
- Environment variables can be configured in the `docker-compose.yml` file.

