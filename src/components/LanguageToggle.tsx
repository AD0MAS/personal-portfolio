import { useEffect, useRef, useState } from 'react'
import { ChevronDown, ChevronUp, Check } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import type { Language } from '../types/translations'
import FlagIcon from './FlagIcon'

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'lt', label: 'Lietuvių' },
]

/** Pill-shaped dropdown for switching between English and Lithuanian, matching ThemeToggle's style. */
function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const active = LANGUAGES.find((lang) => lang.code === language)!

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
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change language"
        className="h-8 flex items-center gap-1.5 px-3 rounded-full bg-gray-200 dark:bg-gray-800 text-sm cursor-pointer"
      >
        <FlagIcon code={active.code} />
        {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {isOpen && (
        <ul className="absolute right-0 mt-2 w-40 bg-background border border-gray-200 dark:border-gray-800 rounded-xl shadow-lg overflow-hidden">
          {LANGUAGES.map((lang) => (
            <li key={lang.code}>
              <button
                onClick={() => handleSelect(lang.code)}
                className="w-full flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
              >
                <FlagIcon code={lang.code} />
                <span className="flex-1 text-left">{lang.label}</span>
                {lang.code === language && (
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
