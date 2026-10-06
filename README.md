# Personal Portfolio

A single-page developer portfolio built with React, TypeScript, and Vite. Serves as a professional landing page for recruiters, answering who I am, what I know, what I've built, and how to reach me.

**Live:** [www.adomaspak.com](https://www.adomaspak.com)

![Hero section, light mode](docs/screenshots/hero-light.png)

## Features

- **Fully responsive design** — desktop, tablet, and mobile layouts, with a hamburger mobile menu
- **Dark mode** — toggle with `localStorage` persistence and OS preference fallback, applied before first paint (no light flash); the browser `theme-color` follows the selected theme
- **EN/LT language switcher** — section text, project and experience entries, and accessible labels are translated; the choice is persisted in `localStorage` and sets `<html lang>`
- **Smooth-scroll navigation** — single-page layout with anchor-based section links (instant jumps when reduced motion is preferred)
- **Projects section** — self-directed portfolio projects with live demo and GitHub links
- **Copy-to-clipboard email button** — with visual confirmation on copy and a screen-reader status message
- **SEO basics** — meta tags, Open Graph and Twitter card tags, canonical URL, favicon, Apple touch icon, `robots.txt`
- **Subtle animations** — Hero fade-in on load (skipped when reduced motion is preferred), card and button hover states
- **Accessibility** — translated `aria-label`s on icon-only controls; `aria-expanded`/`aria-controls` on the mobile menu and language dropdown; Escape closes the dropdown and returns focus to its button; a monochrome keyboard focus ring on every interactive element; semantic landmarks and lists; `prefers-reduced-motion` support

## Screenshots

| Light mode                                            | Dark mode                                           |
| ----------------------------------------------------- | --------------------------------------------------- |
| ![Hero - light mode](docs/screenshots/hero-light.png) | ![Hero - dark mode](docs/screenshots/hero-dark.png) |

| Lithuanian                                         | Mobile view                                      |
| -------------------------------------------------- | ------------------------------------------------ |
| ![Hero - Lithuanian](docs/screenshots/hero-lt.png) | ![Mobile view](docs/screenshots/mobile-view.png) |

## Tech stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v4** — utility-first styling with a custom monochrome theme, configured via `@theme` and `@custom-variant`
- **lucide-react** — icons
- **Inter** (via `@fontsource/inter`) — self-hosted typography, no external font CDN

No backend, no CMS, no state management library — content lives in local data/translation files, and theme/language preferences sync to `localStorage` (if storage is blocked, the page still works and preferences last for the session).

These constraints were intentional: the goal of this project was to build strong visual/UX design skills and get first hands-on experience with Tailwind, without introducing unrelated complexity.

## Getting started

```bash
git clone https://github.com/AD0MAS/personal-portfolio.git
cd personal-portfolio
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

## Project structure

```
src/
├── components/     # UI components (one per file)
├── constants/      # Language, theme and experience ids; shared Tailwind class strings
├── context/        # Language context and LanguageProvider
├── data/           # Static content and translations
├── hooks/          # Custom hooks (useTheme, useLanguage)
├── types/          # Shared TypeScript types
├── utils/          # localStorage helpers
├── App.tsx         # Root component: composes all sections
├── index.css       # Tailwind theme (@theme) and base styles
└── main.tsx        # Entry point
```

## Notable implementation details

- **Single translation dictionary** — section text, project and experience entries, and accessible labels live in one `data/translations.ts` file, keyed by language, so every translated string has exactly one source of truth per locale. Skill lists live in `data/skills.ts`.
- **Language as React Context, theme as a hook** — `useLanguage` reads the context provided by `LanguageProvider`; `useTheme` is called once in `Navbar`, which passes the state to both theme toggles (desktop and mobile). Both persist to `localStorage` and are re-synced on load.
- **Pre-paint script** — a small inline script in `index.html` applies the saved (or OS) theme, `<html lang>` and `theme-color` before the app loads; its storage keys and colors must stay in sync with the hooks and theme tokens.
- **Type-safe translations** — the `Translations` interface guarantees both `en` and `lt` dictionaries implement the exact same shape, so a missing translation key is caught at compile time, not discovered in the browser. Experience entries are keyed by ids from an `as const` array, so a missing entry or icon is a type error too.
- **CSS-variable-driven theming** — light/dark colors are CSS custom properties (`--background`, `--foreground`) swapped via a `.dark` class on `<html>` and exposed to Tailwind through `@theme inline`, so components read semantic tokens (`bg-background`, `text-foreground`) rather than hardcoded colors.

## Deployment

Deployed on [Vercel](https://vercel.com), with automatic redeploys on every push to `main`.

## License

This project is open source and available under the [MIT License](LICENSE).
