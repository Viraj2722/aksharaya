'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

function Word({ children, progress, range }: { children: React.ReactNode, progress: MotionValue<number>, range: [number, number] }) {
  // Map the scroll progress over this word's specific range from gray (#aaaaaa) to black (#111111)
  const color = useTransform(progress, range, ['#aaaaaa', '#111111'])
  return <motion.span style={{ color }}>{children}</motion.span>
}

export function AboutPreview() {
  const sectionRef = useRef<HTMLElement>(null)

  // Track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 50%"] // Start fading in when the top hits 80% of viewport, finish when bottom hits 50%
  })

  // Full paragraph — flows to fill the container width (as wide as the carousel image)
  const words = "Rooted in tradition and driven by curiosity, Aksharaya is a space where Indian scripts are studied, practiced, and reinterpreted. From calligraphy workshops to typographic explorations, we create experiences that connect people with the richness of letterforms and the stories they carry.".split(' ')

  const totalWords = words.length

  return (
    <section
      ref={sectionRef}
      className="w-full"
      style={{ background: '#f2f2f2' }}
      aria-label="About Aksharaya"
    >
      <style>{`
        .about-preview-shell {
          padding-top: 48px;
          padding-bottom: 40px;
        }
        @media (min-width: 768px) {
          .about-preview-padding {
            padding-top: 112px;
            padding-bottom: 80px;
          }
        }
      `}</style>
      <div className="page-container about-preview-shell about-preview-padding">
        {/* Label - Explicit sizing and black color as requested */}
        <p
          className="font-medium mb-5"
          style={{
            color: '#000000',
            width: '127px',
            height: '28px',
            fontSize: '17px',
            lineHeight: '24px'
          }}
        >
          About Aksharaya
        </p>

        {/* Large bold paragraph with scroll reveal animation — flows full container width */}
        <div className="text-[32px] font-bold leading-snug md:text-left w-full">
          {words.map((word, wordIndex) => {
            const start = wordIndex / totalWords
            const end = start + (1 / totalWords)
            return (
              <Word key={wordIndex} progress={scrollYProgress} range={[start, end]}>
                {word}{' '}
              </Word>
            )
          })}
        </div>
      </div>
    </section>
  )
}
