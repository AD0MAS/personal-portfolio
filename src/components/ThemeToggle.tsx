import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

/** Pill-shaped switch toggling between light and dark theme, with a sliding thumb. */
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative w-14 h-8 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors cursor-pointer"
    >
      <span
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white dark:bg-gray-900 shadow-md flex items-center justify-center transition-transform ${
          isDark ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        {isDark ? (
          <Moon size={14} className="text-gray-300" />
        ) : (
          <Sun size={14} className="text-gray-700" />
        )}
      </span>
    </button>
  )
}

export default ThemeToggle
