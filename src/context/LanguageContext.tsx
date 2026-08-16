import { createContext, useEffect, useState, type ReactNode } from 'react'
import type { Language, Translations } from '../types/translations'
import { translations } from '../data/translations'

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  t: Translations
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'language'

/** Reads the saved language preference, falling back to English. */
function getInitialLanguage(): Language {
  const saved = localStorage.getItem(STORAGE_KEY)
  return saved === 'en' || saved === 'lt' ? saved : 'en'
}

/** Provides the active language and translated strings to the component tree. */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language)
  }, [language])

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
