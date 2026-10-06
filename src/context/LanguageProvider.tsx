import { useEffect, useState, type ReactNode } from 'react'
import { LANGUAGES, type Language } from '../constants/languages'
import { translations } from '../data/translations'
import { readStorage, writeStorage } from '../utils/storage'
import { LanguageContext } from './languageContext'

// Must stay in sync with the pre-paint script in index.html (same key and fallback).
const STORAGE_KEY = 'language'

/** Reads the saved language preference, falling back to English. */
function getInitialLanguage(): Language {
  const saved = readStorage(STORAGE_KEY)
  return LANGUAGES.find((language) => language === saved) ?? 'en'
}

/** Provides the active language and translated strings to the component tree. */
function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    writeStorage(STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
