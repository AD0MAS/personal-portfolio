import { createContext } from 'react'
import type { Language } from '../constants/languages'
import type { Translations } from '../types/translations'

/** Value exposed by LanguageProvider: the active language, its setter, and the matching translations. */
interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  t: Translations
}

/** Language context; null outside a LanguageProvider so useLanguage can detect misuse. */
export const LanguageContext = createContext<LanguageContextValue | null>(null)
