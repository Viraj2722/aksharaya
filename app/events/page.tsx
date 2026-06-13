'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { motion } from 'framer-motion'

export default function EventsPage() {
  const events = [
    {
      id: 1,
      image: "https://picsum.photos/seed/ev1/800/600",
      date: "AUG 27, 2021",
      title: "Typography Day 2021 (Online Edition)",
      description: "The fourteenth edition of Typography Day was held online, bringing together designers, educators, and typography enthusiasts from across the world."
    },
    {
      id: 2,
      image: "https://picsum.photos/seed/ev2/800/600",
      date: "AUG 27, 2021",
      title: "Typography Day 2021 (Online Edition)",
      description: "The fourteenth edition of Typography Day was held online, bringing together designers, educators, and typography enthusiasts from across the world."
    },
    {
      id: 3,
      image: "https://picsum.photos/seed/ev3/800/600",
      date: "AUG 27, 2021",
      title: "Typography Day 2021 (Online Edition)",
      description: "The fourteenth edition of Typography Day was held online, bringing together designers, educators, and typography enthusiasts from across the world."
    },
    {
      id: 4,
      image: "https://picsum.photos/seed/ev4/800/600",
      date: "AUG 27, 2021",
      title: "Typography Day 2021 (Online Edition)",
      description: "The fourteenth edition of Typography Day was held online, bringing together designers, educators, and typography enthusiasts from across the world."
    },
    {
      id: 5,
      image: "https://picsum.photos/seed/ev5/800/600",
      date: "AUG 27, 2021",
      title: "Typography Day 2021 (Online Edition)",
      description: "The fourteenth edition of Typography Day was held online, bringing together designers, educators, and typography enthusiasts from across the world."
    },
    {
      id: 6,
      image: "https://picsum.photos/seed/ev6/800/600",
      date: "AUG 27, 2021",
      title: "Typography Day 2021 (Online Edition)",
      description: "The fourteenth edition of Typography Day was held online, bringing together designers, educators, and typography enthusiasts from across the world."
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1 w-full flex flex-col items-center">
        {/* Explicit Custom Styles to bypass Tailwind caching */}
        <style>{`
          .events-hero { margin-top: 24px; margin-bottom: 12px; }
          .events-grid-container { margin-bottom: 14px; }
          .event-img-container { height: 280px; }
          .event-text-container { margin-top: 32px; }
          .event-title { margin-top: 12px; margin-bottom: 12px; }
          .event-hero-img-offset { right: auto; margin: 0 auto; }
          @media (max-width: 767px) {
            .events-hero, .events-grid-container { padding-left: 24px !important; padding-right: 24px !important; }
            .events-hero { margin-bottom: 48px !important; }
            .events-grid-container { margin-bottom: 64px !important; }
            .event-text-container { margin-top: 12px !important; }
            .event-img-container { height: 360px !important; }
          }
          @media (min-width: 768px) {
            .events-hero { margin-top: 46px; margin-bottom: 84px; }
            .events-grid-container { margin-bottom: 40px; }
            .event-img-container { height: 400px; }
            .event-text-container { margin-top: 10px; }
            .event-title { margin-top: 5px; margin-bottom: 5px; }
            .event-hero-img-offset { right: 60px; margin: 0; }
            .event-logo-offset { transform: translateX(-40px); }
            .event-hero-img-width { width: 375px !important; max-width: none !important; }
          }
          @media (min-width: 1024px) {
            .event-hero-flex { gap: 210px !important; }
            .event-left-offset { margin-left: -75px !important; }
          }
        `}</style>

        {/* Hero Section */}
        <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-20 events-hero">
          <Link href="/events/1" className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center text-center lg:text-left event-hero-flex group cursor-pointer">
            {/* Left side text */}
            <div className="w-full lg:w-[820px] flex-shrink-0 event-left-offset">
              <div className="mb-8 md:mb-10 flex justify-center lg:justify-start event-logo-offset">
                <Image
                  src="/single-logo.svg"
                  alt="Aksharaya"
                  width={434}
                  height={130}
                  className="w-full max-w-[320px] md:max-w-[434px] h-auto object-contain"
                  priority
                />
              </div>
              <p className="text-[16px] text-[#444444] leading-[1.6] px-2 md:px-0">
                Explore articles, case studies, and insights on typography, design, and visual communication.This space brings together event highlights, talks, and research from the Aksharaya community.
              </p>
            </div>

            {/* Right side image */}
            <div className="flex-1 w-full flex justify-center lg:block">
              <div className="relative w-full max-w-[370px] h-[180px] bg-gray-100 event-hero-img-offset event-hero-img-width">
                <Image
                  src="https://picsum.photos/seed/aksharayaevents/800/400"
                  alt="Events exhibition"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </Link>
        </div>

        {/* Events Grid */}
        <div className="w-full max-w-[1350px] mx-auto px-6 sm:px-12 lg:px-8 events-grid-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 lg:gap-x-10 lg:gap-y-16">
            {events.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col group cursor-pointer event-card"
              >
                <Link href={`/events/${event.id}`} className="flex flex-col flex-1 h-full">
                  <div className="relative w-full overflow-hidden mb-6 bg-gray-100 event-img-container">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1 event-text-container">
                  <span className="text-[15px] md:text-[16px] text-gray-500 uppercase tracking-wide font-medium">
                    {event.date}
                  </span>
                  <h3 className="text-xl md:text-[22px] font-bold text-gray-900 leading-snug group-hover:underline underline-offset-4 decoration-2 event-title">
                    {event.title}
                  </h3>
                  <p className="text-[16px] md:text-[17px] text-gray-600 line-clamp-3 leading-relaxed">
                    {event.description}
                  </p>
                </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
