/** Supported color themes. */
export const THEMES = ['light', 'dark'] as const

/** A supported color theme. */
export type Theme = (typeof THEMES)[number]
