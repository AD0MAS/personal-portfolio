import { Sun, Moon } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { focusRing } from '../constants/focusStyles'

/** Props for ThemeToggle; the theme state itself lives in Navbar so every instance stays in sync. */
interface ThemeToggleProps {
  /** Whether the dark theme is currently active. */
  isDark: boolean
  /** Switches to the other theme. */
  onToggle: () => void
}

/** Pill-shaped switch toggling between light and dark theme, with a sliding thumb. */
function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  const { t } = useLanguage()

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? t.a11y.switchToLight : t.a11y.switchToDark}
      className={`${focusRing} relative w-14 h-8 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors cursor-pointer`}
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
