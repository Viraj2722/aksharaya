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
    <div className="w-full max-w-[1120px] mx-auto related-blogs-override relative" style={{ marginTop: '40px', marginBottom: '60px' }}>
      <h2 className="text-[24px] md:text-[32px] font-bold text-black" style={{ marginBottom: '20px' }}>
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
        className="flex overflow-x-auto gap-x-[13px] pb-8 snap-x snap-mandatory hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
        `}</style>

        {events.map((related) => (
          <div key={related.id} className="flex flex-col group cursor-pointer event-card shrink-0 w-full md:w-[calc(50%-6.5px)] lg:w-[calc(33.333%-8.67px)] snap-start">
            <Link href={`/events/${related.slug}`} className="flex flex-col flex-1 h-full">
              <div className="relative w-full overflow-hidden mb-6 bg-gray-100 shrink-0 h-[280px] md:h-[350px] lg:h-[420px]">
                <Image
                  src={related.coverImage}
                  alt={related.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-1" style={{ marginTop: '10px' }}>
                <span className="text-[15px] md:text-[13px] text-gray-500 uppercase tracking-wide font-medium">
                  {related.date}
                </span>
                <h3 className="text-xl md:text-[20px] font-bold text-gray-900 leading-snug group-hover:underline underline-offset-4 decoration-2" style={{ marginTop: '5px', marginBottom: '5px' }}>
                  {related.title}
                </h3>
                <p className="text-[16px] md:text-[14px] text-gray-600 line-clamp-3 leading-relaxed">
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
