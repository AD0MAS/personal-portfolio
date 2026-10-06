import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown, ChevronUp, Check } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { LANGUAGES, type Language } from '../constants/languages'
import FlagIcon from './FlagIcon'
import { focusRing, focusRingInset } from '../constants/focusStyles'

const LANGUAGE_LABELS: Record<Language, string> = {
  en: 'English',
  lt: 'Lietuvių',
}

/** Pill-shaped dropdown for switching between English and Lithuanian, matching ThemeToggle's style. */
function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const listId = useId()

  useEffect(() => {
    if (!isOpen) return

    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const handleSelect = (code: Language) => {
    setLanguage(code)
    setIsOpen(false)
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={t.a11y.changeLanguage}
        aria-expanded={isOpen}
        aria-controls={listId}
        className={`${focusRing} flex h-8 cursor-pointer items-center gap-1.5 rounded-full bg-gray-200 px-3 dark:bg-gray-700`}
      >
        <FlagIcon code={language} />
        {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {isOpen && (
        <ul
          id={listId}
          className="absolute right-0 mt-2 w-40 overflow-hidden rounded-xl border border-gray-200 bg-background shadow-lg dark:border-gray-700 dark:bg-gray-900"
        >
          {LANGUAGES.map((code) => (
            <li key={code}>
              <button
                type="button"
                onClick={() => handleSelect(code)}
                aria-current={code === language ? 'true' : undefined}
                className={`${focusRingInset} flex w-full cursor-pointer items-center gap-2 px-4 py-2.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-800`}
              >
                <FlagIcon code={code} />
                <span lang={code} className="flex-1 text-left">
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
