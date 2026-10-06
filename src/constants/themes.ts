/** Supported color themes. */
export const THEMES = ['light', 'dark'] as const

/** A supported color theme. */
export type Theme = (typeof THEMES)[number]

/**
 * Page background per theme, used for the browser UI `theme-color`.
 * Must stay in sync with --background in index.css and the pre-paint script in index.html.
 */
export const THEME_COLORS: Record<Theme, string> = {
  light: '#ffffff',
  dark: '#0a0a0a',
}
