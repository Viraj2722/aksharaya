interface SectionHeaderProps {
  eyebrow?: string
  heading: string
  className?: string
  align?: 'left' | 'center'
}

export function SectionHeader({
  eyebrow,
  heading,
  className = '',
  align = 'left',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-2 ${alignClass} ${className}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="accent-line" aria-hidden="true" />
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ color: 'var(--color-accent)' }}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
        style={{ color: 'var(--color-text-primary)' }}
      >
        {heading}
      </h2>
    </div>
  )
}
