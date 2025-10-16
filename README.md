# MiddleEarthChat

> **🚀 Live Demo Available:** Try the application at [MiddleEarthChat](https://middleearth-chat.vercel.app/)

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

## Local Development Setup

Follow these steps to run the application locally using Docker.

### Prerequisites

Before starting, ensure the following services are running:

1. **Qdrant** (from [repo1](https://github.com/bobbykim89/lotr-characters)) - Vector database service
2. **DRF API** (from [repo2](https://github.com/bobbykim89/lotr-characters-api)) - Django REST Framework backend on port 8000

### Setup Instructions

#### 1. Make the run script executable

Open your terminal in the project root directory and run:

```bash
chmod +x ./docker_run.sh
```

#### 2. Start the application

Run the Docker setup script:

```bash
./docker_run.sh
```

#### 3. Wait for the build to complete

The initial build may take several minutes. Wait until you see messages indicating the server is running.

#### 4. Access the application

Once the build is complete, open your browser and navigate to:

```
http://localhost:3000
```

### Troubleshooting

#### 404 Error on First Load

If you encounter a 404 error when accessing the application:

1. Open your browser's Developer Tools (F12 or Right-click → Inspect)
2. Navigate to the **Application** tab (Chrome/Edge) or **Storage** tab (Firefox)
3. Click on **Cookies** in the left sidebar
4. Select `http://localhost:3000`
5. Delete all cookies for this domain
6. Refresh the page

This clears any stale conversation data and allows the app to initialize properly.

### Stopping the Application

To stop the running container:

```bash
docker compose down
```

### Development Notes

- The application runs in development mode with hot-reload enabled
- Changes to your code will automatically reflect in the running container

## Dependencies

> TailwindCSS
> Pinia
> VueUse
> Typescript
> MCL
