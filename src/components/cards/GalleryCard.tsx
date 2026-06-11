import Image from 'next/image'
import { GalleryItem } from '@/types/gallery'

interface GalleryCardProps {
  item: GalleryItem
}

export function GalleryCard({ item }: GalleryCardProps) {
  return (
    <div
      className="group relative overflow-hidden cursor-pointer img-zoom"
      style={{ aspectRatio: '3/4' }}
      role="figure"
      aria-label={item.alt}
    >
      <Image
        src={item.image}
        alt={item.alt}
        fill
        sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
        className="object-cover"
      />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
        style={{
          background:
            'linear-gradient(to top, rgba(14,14,14,0.9) 0%, rgba(14,14,14,0.3) 50%, transparent 100%)',
        }}
      />

      {/* Title overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 p-4 md:p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400"
      >
        <h3
          className="text-sm md:text-base font-semibold leading-snug"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {item.title}
        </h3>
        {item.description && (
          <p
            className="text-xs mt-1 leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {item.description}
          </p>
        )}
      </div>

      {/* Corner accent */}
      <div
        className="absolute top-3 right-3 w-6 h-6 border-t border-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ borderColor: 'var(--color-accent)' }}
        aria-hidden="true"
      />
    </div>
  )
}
