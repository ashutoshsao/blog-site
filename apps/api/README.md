# Blog Website Backend API

This is the serverless backend for the Blog Website, built with [Hono](https://hono.dev/) and deployed on [Cloudflare Workers](https://workers.cloudflare.com/). It uses [Prisma](https://www.prisma.io/) with the [Prisma Accelerate](https://www.prisma.io/data-platform/accelerate) extension for database interactions.

## Tech Stack

- **Framework**: [Hono](https://hono.dev/)
- **Runtime**: [Cloudflare Workers](https://workers.cloudflare.com/)
- **Database ORM**: [Prisma](https://www.prisma.io/)
- **Validation**: [Zod](https://zod.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Prerequisites

- Node.js
- npm, pnpm, or yarn
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) (`npm install -g wrangler`)

## Setup

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Environment Variables**:
    Ensure you have your `DATABASE_URL` set up. For Cloudflare Workers, you typically manage secrets via Wrangler or a `.dev.vars` file for local development.

    Create a `.dev.vars` file in the root of `apps/api`:
    ```env
    DATABASE_URL="your_prisma_accelerate_connection_string"
    JWT_SECRET="your_jwt_secret"
    ```

3.  **Generate Prisma Client**:
    ```bash
    npx prisma generate
    ```

## Development

To run the worker locally:

```bash
npm run dev
```

This will start the local development server, usually at `http://localhost:8787`.

## Deployment

To deploy the worker to Cloudflare:

```bash
npm run deploy
```

## API Endpoints

### User Routes
- `POST /api/v1/user/signup` - Register a new user
- `POST /api/v1/user/signin` - Sign in an existing user

### Blog Routes
- `POST /api/v1/blog` - Create a new blog post
- `PUT /api/v1/blog` - Update a blog post
- `GET /api/v1/blog/:id` - Get a specific blog post
- `GET /api/v1/blog/bulk` - Get a list of blog posts

## Project Structure

- `src/` - Source code for the application
  - `index.ts` - Entry point
  - `routes/` - Route definitions
- `prisma/` - Prisma schema and configuration
- `wrangler.jsonc` - Cloudflare Workers configuration
