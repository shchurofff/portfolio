# Portfolio

An animated personal portfolio built with Vue 3 and Vite. The project presents my background as a frontend engineer, selected work, a downloadable CV and a small set of side projects that will grow over time.

## Overview

The site is organized as a compact route-based experience:

- `Home` introduces the visual tone and overall focus.
- `About` summarizes my background, stack and working style.
- `Pet Projects` highlights the projects I am actively building.
- `Resume` provides a concise CV summary and a downloadable PDF.

Navigation is handled through route arrows, a keyboard shortcut driven navigation dialog and page transitions.

## Stack

- Vue 3
- Vue Router
- TypeScript
- Vite
- SCSS
- Lucide icons

## Design Notes

- Custom layout shell with route-aware navigation
- Motion utilities for staggered reveal and page transitions
- Shared UI primitives for cards, headers, chips and info panels
- Warm editorial palette with soft surface layers and subtle gradients
- Responsive layouts tuned for desktop and mobile

## Project Structure

- `src/views` page-level route components
- `src/components` reusable UI and section components
- `src/data` typed content models for cards, projects, skills and resume data
- `src/types` shared TypeScript interfaces
- `src/assets/styles` global tokens, utilities and motion styles
- `public/cv.pdf` downloadable resume

## Available Scripts

```sh
pnpm install
pnpm dev
pnpm build
pnpm lint
```

## Resume

The `Resume` page includes a downloadable `cv.pdf` and an inline preview panel, so the current CV can be reviewed directly in the browser when supported.

## Notes

This portfolio is intentionally selective. The projects page is built to grow gradually as more personal work becomes ready to show.
