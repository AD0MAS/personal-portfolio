import { useEffect, useState } from 'react'
import { THEMES, type Theme } from '../constants/themes'

const STORAGE_KEY = 'theme'

/** Reads the initial theme: saved preference first, falling back to OS setting. */
function getInitialTheme(): Theme {
  const saved = localStorage.getItem(STORAGE_KEY)
  const savedTheme = THEMES.find((theme) => theme === saved)
  if (savedTheme) return savedTheme

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

/** Manages light/dark theme state, persisting to localStorage and toggling the `dark` class on <html>. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return { theme, toggleTheme }
}
