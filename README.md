# Blogs Website Monorepo

Welcome to the Blogs Website Monorepo. This project is a modern, full-stack blogging platform designed for performance, scalability, and developer experience. It leverages [Turborepo](https://turbo.build/repo) to manage a high-performance build system.

## Architecture Overview

The project follows a monorepo structure to share code and configuration efficiently:

- **Frontend (`apps/web`)**: A React application built with Vite and Tailwind CSS. It communicates with the backend API to fetch and display content. Deployed on Vercel.
- **Backend (`apps/api`)**: A serverless API built with Hono and deployed on Cloudflare Workers. It uses Prisma to interact with the database, ensuring type safety and performance at the edge.
- **Shared Packages (`packages/*`)**: Reusable UI components, TypeScript configurations, and ESLint settings shared across applications to maintain consistency.

## Key Features

- **High Performance**: Built on edge technologies (Cloudflare Workers) and a fast frontend bundler (Vite).
- **Type Safety**: End-to-end type safety with TypeScript and shared types between frontend and backend.
- **Modern UI/UX**: Responsive and accessible UI components built with Tailwind CSS.
- **Scalable**: Monorepo architecture allows for easy addition of new applications and packages.

## Apps

- **[web](./apps/web)**: The frontend application.
- **[api](./apps/api)**: The backend application.

## Packages

- **[ui](./packages/ui)**: Shared UI component library.
- **[eslint-config](./packages/eslint-config)**: Shared ESLint configurations.
- **[typescript-config](./packages/typescript-config)**: Shared TypeScript configurations.
- **[types](./packages/types)**: Shared TypeScript types.

## Getting Started

### Prerequisites

- Node.js (>=18)
- pnpm (managed via `corepack` or installed globally)

### Installation

Install dependencies for the entire monorepo:

```bash
pnpm install
```

### Develop

Start the development environment for all apps:

```bash
pnpm dev
```

### Build

Build all apps and packages:

```bash
pnpm build
```

### Lint

Lint all apps and packages:

```bash
pnpm lint
```
