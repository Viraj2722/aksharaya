'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Event } from '@/types/event'

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

  return (
    <div className="w-full relative">
      {/* Framer: "Related Blogs" — Mukta-600, 22px */}
      <h2 style={{ fontSize: '22px', lineHeight: '28px', fontWeight: 600, color: 'rgb(28, 28, 28)', margin: '0 0 40px 0' }}>
        Related Blogs
      </h2>
      
      {/* Navigation Arrows */}
      <div className="absolute top-0 right-0 flex gap-2">
        <button 
          onClick={scrollLeft}
          className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
          aria-label="Scroll left"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button 
          onClick={scrollRight}
          className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
          aria-label="Scroll right"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

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
            <Link href={`/events/${related.slug}`} className="flex flex-col flex-1 h-full">
              <div className="relative w-full overflow-hidden bg-gray-100 shrink-0" style={{ height: '280px' }}>
                <Image
                  src={related.coverImage}
                  alt={related.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-1" style={{ gap: '10px', padding: '15px 0' }}>
                <span style={{ fontSize: '13px', lineHeight: '19px', letterSpacing: '-0.04em', fontWeight: 600, color: 'rgb(115, 115, 115)' }}>
                  {related.date}
                </span>
                <h3 className="group-hover:underline underline-offset-4 decoration-2" style={{ fontSize: '18px', lineHeight: '24px', letterSpacing: '0px', fontWeight: 400, color: 'rgb(28, 28, 28)', margin: 0 }}>
                  {related.title}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '22px', letterSpacing: '-0.02em', fontWeight: 300, color: 'rgb(68, 68, 68)', margin: 0, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {related.description}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
