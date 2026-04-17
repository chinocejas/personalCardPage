# Agent Context: Next.js & TypeScript Best Practices

## Tech Stack
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS
- **Components**: Radix UI / Shadcn UI
- **AI**: Vercel AI SDK (Generative UI patterns)

## Core Coding Rules
- **Server Components by Default**: Usa Client Components ('use client') solo cuando sea necesario (hooks, eventos).
- **TypeScript Implementation**:
  - Prohibido el uso de `any`.
  - Usa `interface` para definiciones de objetos públicos.
  - Implementa Zod para validación de schemas en Server Actions.
- **Data Fetching**: 
  - Prefiere Server Components + `fetch` con caché nativo.
  - Usa `useOptimistic` para interacciones de UI rápidas.

## Vercel AI SDK Patterns
- **StreamText**: Siempre usa `streamText` para respuestas de chat.
- **Tools**: Define herramientas (tools) usando `zod` para los parámetros.
- **UI**: Prefiere `streamUI` para enviar componentes React directamente desde el servidor.

## Executable Commands (Source of Truth)
- Install: `pnpm install`
- Dev: `pnpm dev`
- Type Check: `pnpm tsc --noEmit`
- Lint: `pnpm lint`

## Project Specifics
- No modifiques los archivos en `/scripts`.
- Los componentes de UI viven en `src/components/ui`.
- Las Server Actions deben estar en `src/app/actions.ts`.

> **IMPORTANT**: Si no estás seguro de una API de Next.js, consulta primero `node_modules/next/dist/docs/` (disponible en versiones recientes) antes de proponer código basado en entrenamiento previo.