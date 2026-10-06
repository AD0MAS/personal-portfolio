/** Supported site languages, in the order the language switcher lists them. */
export const LANGUAGES = ['en', 'lt'] as const

/** A supported site language code. */
export type Language = (typeof LANGUAGES)[number]
