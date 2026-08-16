import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

/** Provides access to the active language, setter, and translated strings. Must be used within a LanguageProvider. */
export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return context
}
