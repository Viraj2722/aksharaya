'use client'

import Image from 'next/image'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { useLanguage } from '@/context/LanguageContext'
import { aboutContent } from '@/data/aboutContent'

export default function AboutPage() {
  const { lang } = useLanguage()
  const c = aboutContent[lang]

  return (
    <div className="flex flex-col min-h-dvh bg-[#f2f2f2]">
      <Navbar />

      <main className="flex-1 w-full flex flex-col items-center">

        <div className="page-container w-full flex flex-col about-page-shell" style={{ gap: '60px', paddingTop: '36px', paddingBottom: '80px' }}>
          <style>{`
            @media (max-width: 767px) {
              .about-page-shell { padding-bottom: 24px !important; }
            }
          `}</style>

          {/* Hero image */}
          <div className="about-hero-image w-full relative">
            <Image
              src="/01.jpg"
              alt="Aksharaya"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Who We Are (heading removed, paragraph kept) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <p style={{ fontSize: '16px', lineHeight: '24px', letterSpacing: '-0.02em', color: 'rgb(68, 68, 68)', margin: 0 }}>
              {c.whoWeAre}
            </p>
          </div>

          {/* Story: Katha / Ichha / Karma */}
          <div className="about-story-container">
            <div style={{ flex: '1 1 0%', display: 'flex', flexDirection: 'column', gap: '60px' }}>

              <div style={{ width: '100%', borderBottom: '1px solid rgb(230, 230, 230)' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                {/* Katha */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <h2 style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 600, color: 'rgb(28, 28, 28)', margin: 0 }}>
                    {c.kathaTitle}
                  </h2>
                  <p style={{ fontSize: '16px', lineHeight: '22px', letterSpacing: '-0.02em', color: 'rgb(68, 68, 68)', margin: 0 }}>
                    {c.katha}
                  </p>
                </div>

                {/* Ichha */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <h2 style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 600, color: 'rgb(28, 28, 28)', margin: 0 }}>
                    {c.ichhaTitle}
                  </h2>
                  <div style={{ fontSize: '16px', lineHeight: '22px', letterSpacing: '-0.02em', color: 'rgb(68, 68, 68)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <p style={{ margin: 0 }}>{c.ichhaIntro}</p>
                    {c.ichhaBullets.map((b, i) => (
                      <p key={i} style={{ margin: 0 }}>
                        <strong style={{ color: 'rgb(28, 28, 28)', fontWeight: 600 }}>{b.label}</strong> — {b.text}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Karma */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <h2 style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 600, color: 'rgb(28, 28, 28)', margin: 0 }}>
                    {c.karmaTitle}
                  </h2>
                  <p style={{ fontSize: '16px', lineHeight: '22px', letterSpacing: '-0.02em', color: 'rgb(68, 68, 68)', margin: 0 }}>
                    {c.karma}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
