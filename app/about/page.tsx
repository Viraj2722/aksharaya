'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { Navbar } from '@/components/layout/Navbar'
import { Footer, FacebookIcon, TwitterIcon, InstagramIcon, PinterestIcon } from '@/components/layout/Footer'
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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 w-full flex flex-col items-center">
        {/* Top Image Section */}
        <div className="about-top-image w-full mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="relative w-full h-[300px] md:h-[460px] rounded-[16px] md:rounded-[24px] overflow-hidden border border-gray-100 shadow-sm">
            <Image
              src="https://picsum.photos/seed/aksharayaabout/1400/460"
              alt="Aksharaya Exhibition"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Who We Are Animated Section */}
        <section
          className="w-full mb-24 md:mb-32"
          aria-label="Who We Are"
        >
          <div className="about-section w-full mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p
              className="font-medium mb-6"
              style={{ color: '#111111', fontSize: '19px', marginBottom: '10px' }}
            >
              Who We Are
            </p>

            <div ref={sectionRef} className="text-[22px] md:text-3xl lg:text-4xl font-bold leading-[1.3] uppercase" style={{ color: '#aaaaaa' }}>
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

            {/* Divider Line */}
            <div style={{ width: '100%', borderBottom: '1px solid #d1d5db', marginTop: '40px', marginBottom: '50px' }}></div>

            {/* Core Values / Story Sections */}
            <div className="flex flex-col gap-6 md:pr-12 lg:pr-[150px]">
              {/* Katha */}
              <div className="flex flex-col gap-3">
                <h2 className="text-[23px] font-bold text-[#111111]">Katha — The Story</h2>
                <p className="text-[18px] text-[#444444] leading-[1.6] text-justify">
                  The journey of Aksharaya began in 1990 with two Indian teachers. What was once merely a humble start of workshops and camps, Aksharaya has today become a beacon of achievement and a source of inspiration to many. It is the unconditional contribution, love and efforts of its founders that has led this organization to find a place of respect and become a source of learning for its members.
                </p>
              </div>

              {/* Ichha */}
              <div className="flex flex-col gap-3">
                <h2 className="text-[23px] font-bold text-[#111111]">Ichha — The Vision</h2>
                <div className="text-[18px] text-[#444444] leading-[1.6] text-justify flex flex-col gap-3">
                  <p>The history of Indian scripts dates back five thousand years. In India, ten different scripts have been identified, from which are derived twenty-two languages – both spoken and written. Through Aksharaya, we aim to support these languages and scripts through the three E's:</p>
                  <p><em className="font-semibold not-italic text-[#111111]">Expand</em> Promote 'letter' as a concept in its various forms.</p>
                  <p><em className="font-semibold not-italic text-[#111111]">Educate</em> Create awareness amongst people, both professionals and students, giving them opportunities learn and appreciate Indian letterforms through various activities such as camps and workshops.</p>
                  <p><em className="font-semibold not-italic text-[#111111]">Explore</em> Facilitate research and development of Indian script, calligraphy and typography.</p>
                </div>
              </div>

              {/* Karma */}
              <div className="flex flex-col gap-3">
                <h2 className="text-[23px] font-bold text-[#111111]">“Karma”- the work</h2>
                <p className="text-[18px] text-[#444444] leading-[1.6] text-justify">
                  All Indian scripts follow a common phonetic system. So, it is safe to assume that there are many hidden facts about these scripts, which we are yet to discover. To connect these scripts and their culture, there is a compelling need for an organization, and that organization is Aksharaya. Aksharaya aims to work with letterforms and related issues – script study, calligraphy, type design, typography, and literature among other fields. While it's vision remains vast, Aksharaya's mission begins with identifying and connecting resources to people.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full flex flex-col items-center"
              style={{ marginTop: '50px' }}
            >
              <p className="text-[19px] text-[#444444] font-medium" style={{ marginBottom: '1px' }}>Question & Answer</p>
              <h2 className="text-[32px] md:text-[45px] font-bold text-[#111111] text-center tracking-tight" style={{ marginBottom: '1px' }}>
                FREQUENTLY ASKED QUESTIONS
              </h2>
              <p className="text-[19px] text-[#444444] text-center max-w-2xl" style={{ marginBottom: '50px' }}>
                Answers to common questions about Typography Day, Aksharaya, and participation.
              </p>

              <style>{`
                .about-top-image { padding-left: 14px; padding-right: 14px; margin-top: 50px; margin-bottom: 55px; }
                .about-section { padding-left: 16px; padding-right: 16px; }
                .faq-container { padding-left: 16px; padding-right: 16px; padding-top: 22px; padding-bottom: 22px; gap: 12px; align-items: flex-start; transition: padding-bottom 0.3s ease-in-out; }
                .faq-container.open { padding-bottom: 8px; }
                .faq-question { font-size: 17px; line-height: 1.3; margin-top: 2px; }
                .faq-answer { padding-left: 44px; padding-right: 16px; padding-bottom: 20px; padding-top: 0px; }
                @media (min-width: 768px) {
                  .about-top-image { padding-left: 24px; padding-right: 24px; }
                  .about-section { padding-left: 24px; padding-right: 24px; }
                  .faq-container { padding-left: 32px; padding-right: 24px; padding-top: 22px; padding-bottom: 22px; gap: 16px; }
                  .faq-question { font-size: 23px; line-height: normal; margin-top: -3px; }
                  .faq-answer { padding-left: 60px; padding-right: 24px; padding-bottom: 20px; padding-top: 0px; }
                }
                @media (min-width: 1024px) {
                  .about-top-image { max-width: 1110px; padding-left: 0; padding-right: 0; }
                  .about-section { max-width: 1110px; margin-left: 205px; padding-left: 0; padding-right: 0; }
                }
              `}</style>

              <div className="w-full flex flex-col" style={{ gap: '12px', marginBottom: '44px'}}>
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="w-full bg-gray-300 rounded-[16px] overflow-hidden cursor-pointer"
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  >
                    <div className={`flex faq-container ${openFaqIndex === index ? 'open' : ''}`}>
                      <div className="text-[#1e3a8a] flex items-center justify-center bg-white rounded-full flex-shrink-0 shadow-sm" style={{ width: '28px', height: '28px', fontSize: '28px', fontWeight: '400', lineHeight: 1, paddingBottom: '3px' }}>
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
                            <p className="text-[16px] md:text-[18px] font-medium text-[#444444] leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
