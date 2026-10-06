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
      className={`${focusRing} relative h-8 w-14 cursor-pointer rounded-full bg-gray-200 transition-colors dark:bg-gray-700`}
    >
      <span
        className={`absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-transform dark:bg-gray-900 ${
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
