'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'

interface HeroSlide {
  id: string
  image: string
  title: string
  description: string
  altText: string
  link?: string
}

interface HeroCarouselProps {
  slides: HeroSlide[]
}

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = useCallback((index: number) => {
    if (isTransitioning || slides.length <= 1) return
    setIsTransitioning(true)
    setCurrent(index)
    setTimeout(() => setIsTransitioning(false), 600)
  }, [isTransitioning, slides.length])

  const prev = useCallback(() => {
    if (slides.length <= 1) return
    goTo((current - 1 + slides.length) % slides.length)
  }, [current, goTo, slides.length])

  const next = useCallback(() => {
    if (slides.length <= 1) return
    goTo((current + 1) % slides.length)
  }, [current, goTo, slides.length])

  useEffect(() => {
    if (slides.length <= 1) return
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  if (!slides || slides.length === 0) return null

  const slide = slides[current]

  return (
    <div className="w-full" style={{ backgroundColor: '#f2f2f2' }}>
      <section
        className="relative w-full overflow-hidden hero-section-height"
        aria-label="Hero image carousel"
        aria-roledescription="carousel"
      >
      <style>{`
        @media (min-width: 768px) {
          .hero-section-height { 
            height: 600px !important; 
            max-width: 1180px !important;
            margin: 0 auto !important;
          }
          .hero-text-container { padding-bottom: 3.5rem !important; }
          .hero-text-container .page-container { 
            max-width: 100% !important;
            margin: 0 !important;
            padding-left: 1.5rem !important; 
            padding-right: 2rem !important;
          }
        }
        @media (min-width: 1024px) {
          .hero-text-container .page-container { 
            padding-left: 1.5rem !important; 
            padding-right: 3rem !important;
          }
        }
        @media (max-width: 767px) {
          .hero-section-height { height: 450px !important; }
          .hero-text-container { padding-bottom: 3rem !important; }
        }
      `}</style>
      {slides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          <Image
            src={s.image}
            alt={s.altText}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 45%, transparent 70%)',
            }}
            aria-hidden="true"
          />
        </div>
      ))}

      {slides.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center transition-opacity duration-200 hover:opacity-70"
            style={{ width: '44px', height: '60px' }}
            aria-label="Previous slide"
          >
            <svg width="12" height="22" viewBox="0 0 12 22" fill="none" aria-hidden="true">
              <path d="M10 2L2 11l8 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center transition-opacity duration-200 hover:opacity-70"
            style={{ width: '44px', height: '60px' }}
            aria-label="Next slide"
          >
            <svg width="12" height="22" viewBox="0 0 12 22" fill="none" aria-hidden="true">
              <path d="M2 2l8 9-8 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </>
      )}

      <div className="absolute bottom-0 left-0 right-0 z-10 hero-text-container">
        <div className="page-container">
          <h1
            className="text-xl md:text-3xl font-bold text-white leading-snug mb-1"
            key={`title-${current}`}
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}
          >
            {slide.title}
          </h1>
          <p
            className="text-xs md:text-sm text-white leading-relaxed max-w-2xl"
            key={`desc-${current}`}
            style={{ opacity: 0.85, textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}
          >
            {slide.description}
          </p>

        </div>
      </div>

      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {current + 1} of {slides.length}: {slide.title}
      </div>

      {/* Centered Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2" role="tablist" aria-label="Slides">
          {slides.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className="transition-all duration-300"
              style={{
                width: i === current ? '20px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: i === current ? 'white' : 'rgba(255,255,255,0.45)',
              }}
            />
          ))}
        </div>
      )}
    </section>
    </div>
  )
}
