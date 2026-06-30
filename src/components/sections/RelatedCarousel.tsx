'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Event } from '@/types/event'

function shortExcerpt(text: string, maxChars = 90): string {
  if (text.length <= maxChars) return text
  const cut = text.lastIndexOf(' ', maxChars)
  return text.slice(0, cut > 0 ? cut : maxChars)
}

interface RelatedCarouselProps {
  events: Event[]
}

export function RelatedCarousel({ events }: RelatedCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' })
    }
  }

  if (events.length === 0) return null

  // Card image height is 280px; arrow (48px) should be centered at 140px from top of carousel content
  // Title "Related Blogs" is 28px + 40px margin = 68px above the cards
  const arrowTopOffset = 68 + 140 - 24 // title+margin + half image height - half arrow height

  return (
    <div className="w-full relative">
      {/* Framer: "Related Blogs" — Mukta-600, 22px */}
      <h2 style={{ fontSize: '22px', lineHeight: '28px', fontWeight: 600, color: 'rgb(28, 28, 28)', margin: '0 0 40px 0' }}>
        Related Blogs
      </h2>

      {/* Left arrow — half outside left edge of carousel */}
      <button
        onClick={scrollLeft}
        className="absolute z-10 w-12 h-12 flex items-center justify-center bg-white hover:bg-gray-50 rounded-full shadow-md transition-colors"
        style={{ left: '-24px', top: `${arrowTopOffset}px` }}
        aria-label="Scroll left"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      {/* Right arrow — half outside right edge of carousel */}
      <button
        onClick={scrollRight}
        className="absolute z-10 w-12 h-12 flex items-center justify-center bg-white hover:bg-gray-50 rounded-full shadow-md transition-colors"
        style={{ right: '-24px', top: `${arrowTopOffset}px` }}
        aria-label="Scroll right"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-x-[10px] pb-8 snap-x snap-mandatory hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
        `}</style>

        {events.map((related) => (
          <div key={related.id} className="flex flex-col group cursor-pointer event-card shrink-0 w-full md:w-[calc(50%-5px)] lg:w-[calc(33.333%-6.67px)] snap-start">
            {/* Image */}
            <Link href={`/events/${related.slug}`} className="relative w-full overflow-hidden bg-gray-100 shrink-0 block" style={{ height: '280px' }}>
              <Image
                src={related.coverImage}
                alt={related.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
            {/* Content */}
            <div className="flex flex-col flex-1" style={{ gap: '10px', padding: '15px 0' }}>
              <span style={{ fontSize: '13px', lineHeight: '19px', letterSpacing: '-0.04em', fontWeight: 600, color: 'rgb(115, 115, 115)' }}>
                {related.date}
              </span>
              <h3 style={{ fontSize: '18px', lineHeight: '24px', letterSpacing: '0px', fontWeight: 400, color: 'rgb(28, 28, 28)', margin: 0 }}>
                <Link href={`/events/${related.slug}`} className="hover:underline underline-offset-4 decoration-2">
                  {related.title}
                </Link>
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '22px', letterSpacing: '-0.02em', fontWeight: 300, color: 'rgb(68, 68, 68)', margin: 0 }}>
                {shortExcerpt(related.description)}&hellip;{' '}
                <Link
                  href={`/events/${related.slug}`}
                  className="font-medium hover:underline underline-offset-2"
                  style={{ color: '#111111' }}
                >
                  show more
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
