 'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'

interface HeroSlide {
  id: string
  image: string
  title: string
  description: string
  altText: string
}

const slides: HeroSlide[] = [
  {
    id: '1',
    image: 'https://picsum.photos/seed/typo2021/1920/900',
    title: 'Typography Day 2021 (Online Edition)',
    description: 'The fourteenth edition of Typography Day was आयोजित online, bringing together designers, educators, and typography enthusiasts from across the world.',
    altText: 'Typography Day 2021 Online Edition',
  },
  {
    id: '2',
    image: 'https://picsum.photos/seed/typo2019/1920/900',
    title: 'Typography Day 2019',
    description: 'The twelfth edition of Typography Day was hosted at IDC School of Design, Mumbai, focusing on typography, culture, and communication.',
    altText: 'Typography Day 2019 at IDC Mumbai',
  },
  {
    id: '3',
    image: 'https://picsum.photos/seed/typo2018/1920/900',
    title: 'Typography Day 2018',
    description: 'The eleventh edition explored typography through workshops, talks, and exhibitions across multiple design disciplines.',
    altText: 'Typography Day 2018',
  },
  {
    id: '4',
    image: 'https://picsum.photos/seed/aksharaya2016/1920/900',
    title: 'Aksharaya Installation at Typoday 2016',
    description: 'An interactive installation inviting participants to contribute typographic terms and explore the structure of letterforms.',
    altText: 'Aksharaya Installation 2016',
  },
  {
    id: '5',
    image: 'https://picsum.photos/seed/aksharsanvad/1920/900',
    title: 'Aksharsanvad — Talk by Prof. Y. D. Pitkar',
    description: 'Insights into typography, education, and the role of design thinking in communication.',
    altText: 'Aksharsanvad talk by Prof Y D Pitkar',
  },
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent(index)
    setTimeout(() => setIsTransitioning(false), 600)
  }, [isTransitioning])

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length)
  }, [current, goTo])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <section
      className="relative w-full overflow-hidden hero-section-height"
      aria-label="Hero image carousel"
      aria-roledescription="carousel"
    >
      <style>{`
        @media (min-width: 768px) {
          .hero-section-height { height: 725px !important; }
          .hero-text-container { padding-bottom: 2rem !important; }
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

      <div className="absolute bottom-0 left-0 right-0 z-10 hero-text-container">
        <div className="page-container">
          <h1
            className="text-2xl md:text-4xl font-bold text-white leading-snug mb-1"
            key={`title-${current}`}
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}
          >
            {slide.title}
          </h1>
          <p
            className="text-sm md:text-base text-white leading-relaxed max-w-2xl"
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
    </section>
  )
}
