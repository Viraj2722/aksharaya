'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { motion, useScroll, useTransform, MotionValue, AnimatePresence } from 'framer-motion'

function Word({ children, progress, range }: { children: React.ReactNode, progress: MotionValue<number>, range: [number, number] }) {
  const color = useTransform(progress, range, ['#aaaaaa', '#111111'])
  return <motion.span style={{ color }}>{children}</motion.span>
}

export default function AboutPage() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is Aksharaya?",
      answer: "Aksharaya is an initiative focused on the exploration of typography, Indian scripts, and visual communication. It brings together designers, educators, and students through events, workshops, and discussions."
    },
    {
      question: "What is Typography Day?",
      answer: "Typography Day is an annual event organized to celebrate and explore typography, focusing on Indian scripts and their modern applications."
    },
    {
      question: "Who can participate?",
      answer: "Anyone with an interest in typography, including professionals, students, educators, and enthusiasts, is welcome to participate in Aksharaya's events and workshops."
    },
    {
      question: "How can I attend or register?",
      answer: "You can register for upcoming events and workshops through our official website or by following our announcements on social media."
    },
    {
      question: "Does Aksharaya conduct workshops?",
      answer: "Yes, Aksharaya regularly conducts hands-on workshops on calligraphy, typography, and script design across various cities in India."
    }
  ]

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "end 50%"]
  })

  const lines = [
    "FOUNDED WITH A SIMPLE BELIEF — THAT MARKETING SHOULD",
    "MOVE PEOPLE AND MOVE THE NEEDLE METONY WAS CREATED",
    "TO HELP AMBITIOUS BRANDS MAKE REAL IMPACT, MEASURABLE",
    "RESULTS."
  ]

  let wordCount = 0
  const totalWords = lines.reduce((acc, line) => acc + line.split(' ').length, 0)

  return (
    <div className="flex flex-col min-h-screen bg-[#f2f2f2]">
      <Navbar />

      <main className="flex-1 w-full flex flex-col">

        {/*
          Framer: Container top=116px (nav height 80px + 36px gap)
          padding="0px 45px", gap="60px" vertical, stackAlignment="center"
        */}
        <div className="page-container about-page-container">

          {/*
            Framer Images block: ImageLeft width=1110px, height=460px, borderRadius=20px
          */}
          <div className="about-hero-image w-full relative">
            <Image
              src="https://picsum.photos/seed/aksharayaabout/1400/460"
              alt="Aksharaya Exhibition"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/*
            Framer Header block: gap="10px", vertical, stackAlignment="start"
            Badge "Who We Are": H3 style (18px, 24px lh)
            TextColorLetters: fontSize=32, lineHeight=48, letterSpacing=0, maxWidth=900px
          */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {/* Framer Badge: H3 text style = 18px, 24px lh, Mukta regular */}
            <p style={{ fontSize: '18px', lineHeight: '24px', letterSpacing: '0px', fontWeight: 400, color: 'rgb(28, 28, 28)', margin: 0 }}>
              Who We Are
            </p>

            {/* Framer TextColorLetters: fontSize=32, lineHeight=48, letterSpacing=0, maxWidth=900px */}
            <div ref={sectionRef} className="about-headline uppercase font-bold" style={{ color: '#aaaaaa' }}>
              {lines.map((line, lineIndex) => {
                const words = line.split(' ')
                return (
                  <span key={lineIndex}>
                    {words.map((word, wordIndex) => {
                      const currentWordIndex = wordCount++
                      const start = currentWordIndex / totalWords
                      const end = start + (1 / totalWords)
                      return (
                        <Word key={wordIndex} progress={scrollYProgress} range={[start, end]}>
                          {word}{' '}
                        </Word>
                      )
                    })}
                    {lineIndex < lines.length - 1 && <br className="hidden md:block" />}
                  </span>
                )
              })}
            </div>
          </div>

          {/*
            Framer second Container: horizontal, gap="40px", padding="0px 45px"
            Content: width="1fr", gap="60px" vertical
            Header inside: gap="20px" vertical
            Each Intro: gap="10px" vertical — title Mukta-600, body Inter
          */}
          <div className="about-story-container">
            <div style={{ flex: '1 1 0%', display: 'flex', flexDirection: 'column', gap: '60px' }}>

              {/* Divider matching Framer's Stats border */}
              <div style={{ width: '100%', borderBottom: '1px solid rgb(230, 230, 230)' }} />

              {/* Framer Header: gap="20px", 3 Intro blocks */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                {/* Katha — gap="10px" */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <h2 style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 600, color: 'rgb(28, 28, 28)', margin: 0 }}>
                    Katha — The Story
                  </h2>
                  <p style={{ fontSize: '16px', lineHeight: '22px', letterSpacing: '-0.02em', color: 'rgb(68, 68, 68)', margin: 0 }}>
                    The journey of Aksharaya began in 1990 with two Indian teachers. What was once merely a humble start of workshops and camps, Aksharaya has today become a beacon of achievement and a source of inspiration to many. It is the unconditional contribution, love and efforts of its founders that has led this organization to find a place of respect and become a source of learning for its members.
                  </p>
                </div>

                {/* Ichha — gap="10px" */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <h2 style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 600, color: 'rgb(28, 28, 28)', margin: 0 }}>
                    Ichha — The Vision
                  </h2>
                  <div style={{ fontSize: '16px', lineHeight: '22px', letterSpacing: '-0.02em', color: 'rgb(68, 68, 68)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <p style={{ margin: 0 }}>The history of Indian scripts dates back five thousand years. In India, ten different scripts have been identified, from which are derived twenty-two languages – both spoken and written. Through Aksharaya, we aim to support these languages and scripts through the three E's:</p>
                    <p style={{ margin: 0 }}><strong style={{ color: 'rgb(28, 28, 28)', fontWeight: 600 }}>Expand</strong> — Promote 'letter' as a concept in its various forms.</p>
                    <p style={{ margin: 0 }}><strong style={{ color: 'rgb(28, 28, 28)', fontWeight: 600 }}>Educate</strong> — Create awareness amongst people, both professionals and students, giving them opportunities to learn and appreciate Indian letterforms through various activities such as camps and workshops.</p>
                    <p style={{ margin: 0 }}><strong style={{ color: 'rgb(28, 28, 28)', fontWeight: 600 }}>Explore</strong> — Facilitate research and development of Indian script, calligraphy and typography.</p>
                  </div>
                </div>

                {/* Karma — gap="10px" */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <h2 style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 600, color: 'rgb(28, 28, 28)', margin: 0 }}>
                    "Karma" — The Work
                  </h2>
                  <p style={{ fontSize: '16px', lineHeight: '22px', letterSpacing: '-0.02em', color: 'rgb(68, 68, 68)', margin: 0 }}>
                    All Indian scripts follow a common phonetic system. So, it is safe to assume that there are many hidden facts about these scripts, which we are yet to discover. To connect these scripts and their culture, there is a compelling need for an organization, and that organization is Aksharaya. Aksharaya aims to work with letterforms and related issues – script study, calligraphy, type design, typography, and literature among other fields. While its vision remains vast, Aksharaya's mission begins with identifying and connecting resources to people.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*
            Framer FAQ Header: width=1110px, centerX=50%, gap=24px, stackAlignment="center"
            "Question & Answer": Mukta-300
            "FREQUENTLY ASKED QUESTIONS": Mukta-600
            description: maxWidth=700px
          */}
          <div className="about-faq-header">
            <p style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 300, color: 'rgb(68, 68, 68)', margin: 0, textAlign: 'center' }}>
              Question &amp; Answer
            </p>
            <h2 style={{ fontSize: '32px', lineHeight: '40px', fontWeight: 600, color: 'rgb(28, 28, 28)', margin: 0, textAlign: 'center', letterSpacing: '-0.01em' }}>
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '22px', fontWeight: 400, color: 'rgb(68, 68, 68)', margin: 0, textAlign: 'center', maxWidth: '700px' }}>
              Answers to common questions about Typography Day, Aksharaya, and participation.
            </p>
          </div>

          {/*
            Framer Faq: width=900px, centerX=50%, maxWidth=900px
          */}
          <div className="about-faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="w-full bg-gray-200 rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
              >
                <div className={`flex faq-container ${openFaqIndex === index ? 'open' : ''}`}>
                  <div
                    className="flex items-center justify-center bg-white rounded-full flex-shrink-0 shadow-sm"
                    style={{ width: '28px', height: '28px', fontSize: '28px', fontWeight: 400, lineHeight: 1, paddingBottom: '3px', color: '#1e3a8a' }}
                  >
                    <motion.div
                      animate={{ rotate: openFaqIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex items-center justify-center w-full h-full"
                    >
                      +
                    </motion.div>
                  </div>
                  <h3 className="font-bold text-[#111111] faq-question">{faq.question}</h3>
                </div>

                <AnimatePresence initial={false}>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="faq-answer">
                        <p style={{ fontSize: '16px', lineHeight: '22px', fontWeight: 500, color: 'rgb(68, 68, 68)' }}>
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
