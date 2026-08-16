import { useRef, useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'

const EMAIL = 'adomas.pakalniskis@gmail.com'

/** Contact section: links to GitHub, LinkedIn, and a copy-to-clipboard email button. */
function Contact() {
  const [copied, setCopied] = useState(false)
  const [lockedWidth, setLockedWidth] = useState<number | null>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const { t } = useLanguage()

  const handleCopyEmail = async () => {
    if (buttonRef.current) {
      setLockedWidth(buttonRef.current.offsetWidth)
    }

    await navigator.clipboard.writeText(EMAIL)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
      setLockedWidth(null)
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
          className="border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition"
        >
          {t.contact.github}
        </a>

        <a
          href="https://linkedin.com/in/adomas-pakalniskis"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition"
        >
          {t.contact.linkedin}
        </a>
        <button
          ref={buttonRef}
          onClick={handleCopyEmail}
          style={lockedWidth ? { width: lockedWidth } : undefined}
          className="bg-foreground text-background px-6 py-3 rounded-full font-medium hover:opacity-90 transition cursor-pointer whitespace-nowrap"
        >
          {copied ? t.contact.copied : t.contact.copyEmail}
        </button>
      </div>
    </section>
  )
}

export default Contact
