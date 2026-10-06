import { useEffect, useRef, useState } from 'react'
import { ChevronDown, ChevronUp, Check } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { LANGUAGES, type Language } from '../constants/languages'
import FlagIcon from './FlagIcon'

const LANGUAGE_LABELS: Record<Language, string> = {
  en: 'English',
  lt: 'Lietuvių',
}

/** Pill-shaped dropdown for switching between English and Lithuanian, matching ThemeToggle's style. */
function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (code: Language) => {
    setLanguage(code)
    setIsOpen(false)
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Change language"
        className="h-8 flex items-center gap-1.5 px-3 rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer"
      >
        <FlagIcon code={language} />
        {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {isOpen && (
        <ul className="absolute right-0 mt-2 w-40 bg-background dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden">
          {LANGUAGES.map((code) => (
            <li key={code}>
              <button
                type="button"
                onClick={() => handleSelect(code)}
                className="w-full flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
              >
                <FlagIcon code={code} />
                <span className="flex-1 text-left">
                  {LANGUAGE_LABELS[code]}
                </span>
                {code === language && (
                  <Check size={16} className="text-foreground" />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default LanguageToggle
