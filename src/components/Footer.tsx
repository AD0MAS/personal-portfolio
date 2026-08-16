import { useLanguage } from '../hooks/useLanguage'

/** Page footer with copyright and tech stack credit. */
function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
      <p>© 2026 Adomas Pakalniškis</p>
      <p>{t.footer.builtWith}</p>
    </footer>
  )
}

export default Footer
