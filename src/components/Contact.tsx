import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { buttonFilled, buttonOutline } from '../constants/buttonStyles'

const EMAIL = 'adomas.pakalniskis@gmail.com'

/** Contact section: links to GitHub, LinkedIn, and a copy-to-clipboard email button. */
function Contact() {
  const [copied, setCopied] = useState(false)
  const resetTimeoutRef = useRef<number | null>(null)
  const { t } = useLanguage()

  const clearResetTimeout = () => {
    if (resetTimeoutRef.current !== null) {
      window.clearTimeout(resetTimeoutRef.current)
      resetTimeoutRef.current = null
    }
  }

  useEffect(() => clearResetTimeout, [])

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
    } catch {
      // Clipboard unavailable (non-secure origin) or permission denied: fail silently.
      return
    }

    setCopied(true)
    clearResetTimeout()
    resetTimeoutRef.current = window.setTimeout(() => {
      resetTimeoutRef.current = null
      setCopied(false)
    }, 3000)
  }

  return (
    <section id="contact" className="max-w-2xl mx-auto px-6 py-24 text-center">
      <h2 className="text-2xl font-semibold text-foreground mb-4">
        {t.contact.heading}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-10">
        {t.contact.subtitle}
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://github.com/AD0MAS"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonOutline}
        >
          {t.contact.github}
        </a>

        <a
          href="https://linkedin.com/in/adomas-pakalniskis"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonOutline}
        >
          {t.contact.linkedin}
        </a>
        <button
          onClick={handleCopyEmail}
          className={`${buttonFilled} cursor-pointer whitespace-nowrap`}
        >
          {/* Both labels share one grid cell, so the button always fits the longer one. */}
          <span className="inline-grid justify-items-center">
            <span className="col-start-1 row-start-1">
              {copied ? t.contact.copied : t.contact.copyEmail}
            </span>
            <span
              aria-hidden="true"
              className="col-start-1 row-start-1 invisible"
            >
              {copied ? t.contact.copyEmail : t.contact.copied}
            </span>
          </span>
        </button>
      </div>

      {/* Announces a successful copy to screen readers; empty otherwise so language switches stay silent. */}
      <p role="status" className="sr-only">
        {copied ? t.contact.copied : ''}
      </p>
    </section>
  )
}

export default Contact
