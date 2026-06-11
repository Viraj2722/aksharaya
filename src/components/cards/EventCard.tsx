import Image from 'next/image'
import Link from 'next/link'
import { Event } from '@/types/event'

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  return (
    <article
      className="flex flex-col lg:flex-row gap-4 border-b"
      style={{ borderColor: '#e0e0e0', paddingTop: '10px', paddingBottom: '10px' }}
    >
      {/* Thumbnail */}
      <Link
        href={`/events/${event.slug}`}
        className="relative flex-shrink-0 img-zoom w-full lg:w-[320px] h-[220px]"
        aria-label={`View ${event.title}`}
        style={{ borderRadius: '12px', overflow: 'hidden' }}
      >
        <Image
          src={event.coverImage}
          alt={event.title}
          fill
          sizes="320px"
          className="object-cover"
        />
      </Link>

      {/* Content */}
      <div className="flex flex-col gap-1.5 flex-1 min-w-0 justify-center">
        {/* Date + divider + type badge */}
        <div className="flex items-center gap-3">
          <span
            className="text-xs font-medium"
            style={{ color: '#888888' }}
          >
            {event.date}
          </span>
          <span style={{ color: '#cccccc' }}>┊</span>
          <span
            className="text-xs font-semibold tracking-wider uppercase"
            style={{ color: '#111111' }}
          >
            {event.type}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold leading-snug mb-1">
          <Link
            href={`/events/${event.slug}`}
            className="text-black hover:underline underline-offset-2 decoration-1"
          >
            {event.title}
          </Link>
        </h3>

        {/* Description */}
        <p
          className="text-base leading-snug"
          style={{ color: '#666666' }}
        >
          {event.description}
        </p>
      </div>
    </article>
  )
}
