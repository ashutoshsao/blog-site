# Web Application

This is the frontend application for the Blogs Website, a modern, high-performance blogging platform. It is built with [Vite](https://vitejs.dev/), [React](https://react.dev/), and [Tailwind CSS](https://tailwindcss.com/), designed to provide a seamless user experience.

## Features

- **User Authentication**: Secure Signup and Signin flows to manage user access.
- **Blog Feed**: A dynamic feed displaying the latest blog posts.
- **Blog Detail View**: Dedicated pages for reading individual blog posts.
- **Landing Page**: An engaging landing page to welcome visitors.

## Technical Highlights

- **React Query**: Utilized for efficient server state management, caching, and data fetching.
- **Tailwind CSS**: Employed for a responsive, utility-first design system that ensures visual consistency.
- **Shared UI**: Consumes reusable components from the `@repo/ui` package, ensuring design uniformity across the monorepo.
- **Vercel Deployment**: Deployed on Vercel for fast, global content delivery.

## Deployment

**Live URL:** [https://blogsite.ashutoshsao.com](https://blogsite.ashutoshsao.com)

## Getting Started

### Prerequisites

- Node.js (>=18)
- pnpm

### Installation

Install dependencies from the root of the monorepo:

```bash
pnpm install
```

### Scripts

- `pnpm dev`: Starts the development server.
- `pnpm build`: Builds the application for production.
- `pnpm lint`: Runs ESLint to check for code quality issues.
- `pnpm preview`: Locally preview the production build.
