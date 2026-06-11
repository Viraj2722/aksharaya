import Link from 'next/link'
import { clsx } from 'clsx'

interface ButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit' | 'reset'
  'aria-label'?: string
}

const variants = {
  primary:
    'bg-[var(--color-accent)] text-[var(--color-bg)] hover:bg-[var(--color-accent-hover)] font-semibold shadow-lg hover:shadow-[0_0_24px_rgba(200,169,110,0.35)]',
  outline:
    'border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent-muted)] font-medium',
  ghost:
    'text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] font-medium underline-offset-4 hover:underline',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  'aria-label': ariaLabel,
}: ButtonProps) {
  const baseClass = clsx(
    'inline-flex items-center justify-center gap-2 rounded-none transition-all duration-300 tracking-wide cursor-pointer select-none',
    variants[variant],
    sizes[size],
    className
  )

  if (href) {
    return (
      <Link href={href} className={baseClass} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={baseClass}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
