# API Application

This is the backend for the Blogs Website, powered by [Hono](https://hono.dev/) and deployed on [Cloudflare Workers](https://workers.cloudflare.com/) for edge-level performance. It uses [Prisma](https://www.prisma.io/) for type-safe database access.

## API Endpoints

The API provides the following main routes:

- **/api/v1/user**: Handles user authentication (Signup, Signin) and profile management.
- **/api/v1/blog**: Manages blog posts, including creation, retrieval (feed and detail), and updates.

## Technical Highlights

- **Hono**: A small, fast, and web-standard compliant framework perfect for edge environments.
- **Cloudflare Workers**: Serverless execution at the edge, ensuring low latency for global users.
- **Prisma Accelerate**: Optimizes database connections for serverless environments, preventing connection exhaustion.
- **CORS**: Securely configured to allow requests only from authorized frontend environments (Local and Production).

## Configuration

- **Environment Variables**: Managed via `.env` for local development and Cloudflare dashboard/wrangler secrets for production.
- **Wrangler**: Configuration is located in `wrangler.jsonc`.

## Getting Started

### Prerequisites

- Node.js (>=18)
- pnpm
- Wrangler CLI

### Installation

Install dependencies from the root of the monorepo:

```bash
pnpm install
```

### Scripts

- `pnpm dev`: Starts the local development server using Wrangler.
- `pnpm deploy`: Deploys the application to Cloudflare Workers.
- `pnpm cf-typegen`: Generates types for Cloudflare bindings.
