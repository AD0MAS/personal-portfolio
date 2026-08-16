import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import { useLanguage } from '../hooks/useLanguage'

/** Fixed top navigation bar with smooth-scroll links to page sections. */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#experience', label: t.nav.experience },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/60 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="font-semibold text-lg">AP</span>

        <ul className="hidden md:flex items-center gap-6 text-sm text-gray-700 dark:text-gray-300">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li className="flex items-center">
            <ThemeToggle />
          </li>
          <li className="flex items-center">
            <LanguageToggle />
          </li>
        </ul>

        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <LanguageToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="cursor-pointer"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 pb-6 text-sm text-gray-700 dark:text-gray-300">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setIsOpen(false)}>
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
