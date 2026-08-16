interface FlagIconProps {
  code: 'en' | 'lt'
}

/** Small flat SVG flag icon for the language switcher (avoids emoji flags, which don't render on Windows). */
function FlagIcon({ code }: FlagIconProps) {
  if (code === 'en') {
    return (
      <svg viewBox="0 0 20 14" className="w-4 h-3 rounded-sm">
        <rect width="20" height="14" fill="#00247d" />
        <path d="M0 0L20 14M20 0L0 14" stroke="#fff" strokeWidth="2.8" />
        <path d="M0 0L20 14M20 0L0 14" stroke="#cf142b" strokeWidth="1.4" />
        <path d="M10 0V14M0 7H20" stroke="#fff" strokeWidth="4.6" />
        <path d="M10 0V14M0 7H20" stroke="#cf142b" strokeWidth="2.2" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 20 14" className="w-4 h-3 rounded-sm">
      <rect width="20" height="4.67" fill="#fdb913" />
      <rect y="4.67" width="20" height="4.67" fill="#006a44" />
      <rect y="9.33" width="20" height="4.67" fill="#c1272d" />
    </svg>
  )
}

export default FlagIcon
