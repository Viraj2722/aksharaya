import Link from 'next/link'
import { getGallery } from '@/lib/getGallery'
import { GalleryCard } from '@/components/cards/GalleryCard'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function FeaturedGallery() {
  const items = getGallery(6)

  return (
    <section
      className="py-20 md:py-28"
      style={{ background: 'var(--color-surface)' }}
      aria-label="Featured gallery"
    >
      <div className="section-container">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Visual Archive"
            heading="Gallery"
          />
          <Link
            href="/gallery"
            className="flex items-center gap-2 text-sm font-medium transition-colors duration-200 group self-start md:self-auto"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            <span className="group-hover:text-[var(--color-accent)] transition-colors duration-200">
              View all
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Responsive grid: 2 cols mobile, 3 cols desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {items.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
