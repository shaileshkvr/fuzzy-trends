# Fuzzy Trends

**Fuzzy Trends** is a next-generation fashion shopping application designed to help users discover and shop for the latest trending styles. It leverages a modern tech stack to provide a seamless and fast user experience.

## Tech Stack

- **Frontend**: Next.js 16, React 19, Tailwind CSS v4, Shadcn UI
- **Backend**: Fastify (Node.js)
- **Monorepo Tooling**: Turborepo, pnpm

## Apps & Packages

- `apps/client`: The customer-facing web application (Next.js).
- `apps/server`: The backend API service (Fastify).
- `packages/ui`: A shared React component library powered by Shadcn UI and Tailwind CSS.
- `packages/tailwind-config`: Shared Tailwind CSS configuration and theme variables.
- `packages/typescript-config`: Shared TypeScript configurations.
- `packages/eslint-config`: Shared ESLint configurations.

## Getting Started

### Prerequisites

- Node.js (>= 18)
- pnpm (managed via Corepack or installed globally)

### Installation

```bash
pnpm install
```

### Development

To start the entire stack (frontend + backend):

```bash
pnpm dev
```

#### Individual Services

- **Frontend** (`http://localhost:5008`):
  ```bash
  pnpm dev:client
  ```

- **Backend** (`http://localhost:5009`):
  ```bash
  pnpm dev:server
  ```

## Styling

We use **Tailwind CSS v4** with CSS variables for theming.
See `apps/client/HowToStyle.md` for detailed instructions on customizing the theme.

## Architecture

This project is structured as a monorepo using **Turborepo**.
- **Shared UI**: Components in `packages/ui` are transpiled and consumed directly by the client app, ensuring a single source of truth for design tokens and components.
- **Fastify Backend**: A lightweight and fast backend server located in `apps/server`.