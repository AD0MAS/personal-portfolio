import { useEffect, useState } from 'react'
import { THEME_COLORS, THEMES, type Theme } from '../constants/themes'
import { readStorage, writeStorage } from '../utils/storage'

// Must stay in sync with the pre-paint script in index.html (same key and fallback).
const STORAGE_KEY = 'theme'

/** Reads the initial theme: saved preference first, falling back to OS setting. */
function getInitialTheme(): Theme {
  const saved = readStorage(STORAGE_KEY)
  const savedTheme = THEMES.find((theme) => theme === saved)
  if (savedTheme) return savedTheme

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

/** Manages light/dark theme state, persisting to localStorage, toggling the `dark` class on <html> and syncing the theme-color meta. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', THEME_COLORS[theme])
    writeStorage(STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return { theme, toggleTheme }
}
