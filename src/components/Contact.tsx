import { useState } from 'react'

const EMAIL = 'adomas.pakalniskis@gmail.com'

/** Contact section: links to GitHub, LinkedIn, and a copy-to-clipboard email button. */
function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <section id="contact" className="max-w-2xl mx-auto px-6 py-24 text-center">
      <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
      <p className="text-gray-600 mb-10">
        Currently looking for internship opportunities — feel free to reach out.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://github.com/AD0MAS"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-300 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/adomas-pakalniskis"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-300 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition"
        >
          LinkedIn
        </a>
        <button
          onClick={handleCopyEmail}
          className="bg-foreground text-background px-6 py-3 rounded-full font-medium hover:opacity-90 transition cursor-pointer inline-flex items-center justify-center w-36"
        >
          {copied ? 'Copied!' : 'Copy Email'}
        </button>
      </div>
    </section>
  )
}

export default Contact
