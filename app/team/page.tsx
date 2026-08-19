"use client"

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { teamMembers, teamIntro } from '@/data/teamData'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  },
}

export default function TeamPage() {
  const { lang } = useLanguage()
  const [clickedId, setClickedId] = useState<number | null>(null);

  return (
    <div className="bg-[#f2f2f2]">
      <Navbar />
      <main className="flex-1">
        <div
          style={{
            paddingTop: '60px',
            paddingBottom: '24px'
          }}
        >
          <div className="page-container w-full">

          {/* Intro paragraph — centered at top */}
          <p
            className="max-w-[900px] mx-auto text-center"
            style={{ fontSize: '16px', lineHeight: '24px', letterSpacing: '-0.02em', color: 'rgb(68, 68, 68)', margin: '0 auto 40px auto' }}
          >
            {teamIntro[lang]}
          </p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                onClick={() => setClickedId(clickedId === member.id ? null : member.id)}
                variants={cardVariants}
                className="group relative bg-white rounded-[16px] overflow-hidden transition-all duration-500 flex flex-col border border-[#ececec]"
                style={{ height: '464px' }}
              >
                {/* Front Content (Image + Name) */}
                <div className={`absolute inset-0 flex flex-col transition-opacity duration-500 z-10 pointer-events-none ${clickedId === member.id ? 'opacity-0' : 'group-hover:opacity-0'}`}>
                  <div className="relative w-full bg-gray-200" style={{ height: '363px' }}>
                    <Image
                      src={member.image}
                      alt={member.name[lang]}
                      fill
                      quality={95}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 3}
                      className="object-cover transition-all duration-500"
                      style={{ objectPosition: 'center top' }}
                    />
                  </div>
                  <div className="w-full flex flex-col justify-center items-center text-center bg-white" style={{ height: '101px' }}>
                    <h3 className="text-[18px] font-bold tracking-wide" style={{ color: '#111111' }}>
                      {member.name[lang]}
                    </h3>
                  </div>
                </div>

                {/* Back Content (Bio on Hover / Click) — scrollable so long bios never overflow the card */}
                <div className={`team-bio absolute inset-0 flex items-center justify-center text-center transition-opacity duration-500 bg-white z-20 pointer-events-none overflow-y-auto ${clickedId === member.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} style={{ padding: '32px 28px' }}>
                  <p className="text-[13px] leading-relaxed whitespace-pre-line" style={{ color: '#666666', margin: 0 }}>
                    {member.bio[lang]}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
