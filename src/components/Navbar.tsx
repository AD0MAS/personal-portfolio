import { useEffect, useId, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import { useLanguage } from '../hooks/useLanguage'
import { useTheme } from '../hooks/useTheme'
import { focusRing } from '../constants/focusStyles'

/** Fixed top navigation bar with smooth-scroll links to page sections. */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [pressedHref, setPressedHref] = useState<string | null>(null)
  const closeTimeoutRef = useRef<number | null>(null)
  const mobileMenuId = useId()
  const { t } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
  }

  useEffect(() => clearCloseTimeout, [])

  /** Keeps the tapped link tinted briefly so the press is visible before the menu closes. */
  const handleMobileLinkClick = (href: string) => {
    setPressedHref(href)
    clearCloseTimeout()
    closeTimeoutRef.current = window.setTimeout(() => {
      closeTimeoutRef.current = null
      setIsOpen(false)
      setPressedHref(null)
    }, 180)
  }

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#experience', label: t.nav.experience },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-background/60 backdrop-blur-lg dark:border-gray-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:grid lg:grid-cols-3">
        <a
          href="#"
          aria-label={t.a11y.home}
          className={`${focusRing} relative block h-8 w-10`}
        >
          <img
            src="/logo-light.svg"
            alt=""
            className="absolute inset-0 h-full w-full object-contain opacity-100 transition-opacity duration-150 dark:opacity-0"
          />
          <img
            src="/logo-dark.svg"
            alt=""
            className="absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity duration-150 dark:opacity-100"
          />
        </a>

        <ul className="hidden items-center gap-2 justify-self-center text-sm text-gray-700 lg:flex dark:text-gray-300">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`${focusRing} block rounded-full px-3 py-1.5 whitespace-nowrap transition-colors duration-200 hover:bg-gray-100 hover:text-foreground focus-visible:duration-0 dark:hover:bg-gray-800`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 justify-self-end lg:flex">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          <LanguageToggle />
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          <LanguageToggle />
          <button
            type="button"
            onClick={() => {
              clearCloseTimeout()
              setPressedHref(null)
              setIsOpen((open) => !open)
            }}
            aria-label={isOpen ? t.a11y.closeMenu : t.a11y.openMenu}
            aria-expanded={isOpen}
            aria-controls={mobileMenuId}
            className={`${focusRing} cursor-pointer`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <ul
          id={mobileMenuId}
          className="flex flex-col items-center gap-1 pb-6 text-sm text-gray-700 lg:hidden dark:text-gray-300"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onPointerDown={() => setPressedHref(link.href)}
                onPointerCancel={() => setPressedHref(null)}
                onPointerLeave={(e) => {
                  // On touch, pointerleave fires between pointerup and click; clearing here would blink the tint.
                  if (e.pointerType !== 'touch') setPressedHref(null)
                }}
                onPointerUp={(e) => {
                  if (e.pointerType !== 'touch') return
                  const lifted = document.elementFromPoint(e.clientX, e.clientY)
                  if (!lifted || !e.currentTarget.contains(lifted))
                    setPressedHref(null)
                }}
                onClick={() => handleMobileLinkClick(link.href)}
                className={`${focusRing} block rounded-full px-5 py-3 [-webkit-tap-highlight-color:transparent] active:bg-gray-200 active:text-foreground dark:active:bg-gray-700 ${
                  pressedHref === link.href
                    ? 'bg-gray-200 text-foreground dark:bg-gray-700'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
