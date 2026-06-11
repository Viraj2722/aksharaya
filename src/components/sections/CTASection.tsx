import { Button } from '@/components/ui/Button'

export function CTASection() {
  return (
    <section
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: 'var(--color-bg)' }}
      aria-label="Call to action"
    >
      {/* Decorative background letterform */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="text-[18rem] md:text-[26rem] font-bold leading-none"
          style={{ color: 'var(--color-accent)', opacity: 0.03 }}
        >
          ॐ
        </span>
      </div>

      {/* Top border accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--color-accent))' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative section-container text-center max-w-3xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="accent-line" aria-hidden="true" />
          <span
            className="text-xs font-semibold tracking-[0.3em] uppercase"
            style={{ color: 'var(--color-accent)' }}
          >
            Begin Your Journey
          </span>
          <span className="accent-line" aria-hidden="true" />
        </div>

        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Explore the world of
          <br />
          <span style={{ color: 'var(--color-accent)' }}>Indian scripts</span>
        </h2>

        {/* Subtext */}
        <p
          className="text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          From ancient inscriptions to contemporary typefaces — discover the living tradition of
          Indian writing systems with Aksharaya.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/about" variant="primary" size="lg">
            Discover Aksharaya
          </Button>
          <Button href="/events" variant="outline" size="lg">
            Explore Events
          </Button>
        </div>
      </div>

      {/* Bottom border accent */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16"
        style={{ background: 'linear-gradient(to top, transparent, var(--color-accent))' }}
        aria-hidden="true"
      />
    </section>
  )
}
