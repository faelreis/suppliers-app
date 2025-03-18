# SuppliersApp

Suppliers App is a Next.js application designed to manage and interact with suppliers.

![cover-suppliersapp](https://github.com/user-attachments/assets/d5d381bf-aec8-41c9-b371-eaab8d39efb2)

## Features

-   **Form handling**: Utilizes React Hook Form for easy and efficient form management.
-   **Data fetching**: Uses React Query to handle API requests and state management.
-   **UI Components**: Radix UI for modal dialogs, tooltips, and alerts.
-   **State management**: Zustand for managing global state in a simple and scalable way.
-   **Validation**: Zod for schema validation on form inputs.
-   **API mocking**: JSON Server for a mock backend to simulate API interactions.

## Getting Started

To get started with the application, follow these steps:

### 1. Install dependencies:

```bash
pnpm install
```

### 2. Run the development server:

To start the development server, use the following command:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Run the mock server:

In a separate terminal, run the mock server:\

```bash
pnpm run server
```

This will start a JSON Server instance on [http://localhost:3333](http://localhost:3333), simulating a backend API for your application.


## Available Scripts

-   `pnpm run dev`: Starts the Next.js development server.
-   `pnpm run build`: Builds the Next.js app for production.
-   `pnpm run start`: Starts the Next.js app in production mode.
-   `pnpm run lint`: Runs the linter on the project.
-   `pnpm run server`: Starts the JSON Server instance on port 3333.

## Deploy on Vercel

You can deploy your Next.js app on Vercel with ease. Just follow the steps in the Next.js deployment documentation.

For more details about Vercel, visit [vercel.com](https://vercel.com).

## Developed By

This project was developed by **Rafael Reis Franco**.
