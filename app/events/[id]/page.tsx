import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import DOMPurify from 'isomorphic-dompurify'
import { Navbar } from '@/components/layout/Navbar'
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  PinterestIcon,
  Footer,
} from '@/components/layout/Footer'
import { getEvents, getEventBySlug } from '@/lib/getEvents'
import { RelatedCarousel } from '@/components/sections/RelatedCarousel'

export async function generateStaticParams() {
  const events = await getEvents()
  return events.map((e) => ({ id: e.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const event = await getEventBySlug(id)
  if (!event) return {}
  return {
    title: event.title,
    description: event.description,
  }
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const event = await getEventBySlug(id)

  if (!event) notFound()

  const cleanContent = DOMPurify.sanitize(event.content)

  // Fetch a few other events for the "Related" section
  const allEvents = await getEvents()
  const relatedEvents = allEvents.filter((e) => e.slug !== event.slug).slice(0, 10)

  return (
    <div className="flex flex-col min-h-screen bg-[#f2f2f2]">
      <Navbar />

      <main className="flex-1 w-full flex flex-col">

        {/* Container — matches page-container width (1280px) */}
        <div className="page-container w-full" style={{ paddingTop: '26px', paddingBottom: '80px' }}>

          {/*
            Framer TopText: gap=16px vertical, stackAlignment=start
            Breadcrumb → Title (Mukta) → InfoBlock (author 24px + name)
          */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            {/* Breadcrumb */}
            <div className="flex items-center" style={{ gap: '12px', fontSize: '16px', color: 'rgb(28, 28, 28)' }}>
              <Link href="/events" className="relative group cursor-pointer inline-block">
                <span className="group-hover:text-gray-700 transition-colors duration-300">Project</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full" />
              </Link>
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-medium">Blog Details</span>
            </div>

            {/* Title — Mukta regular */}
            <h1
              className="text-[26px] md:text-[40px] lg:text-[44px]"
              style={{ fontWeight: 400, color: 'rgb(28, 28, 28)', lineHeight: 1.15, letterSpacing: '-0.01em', margin: 0 }}
            >
              {event.title}
            </h1>

            {/* InfoBlock: author avatar (24px) + name, gap=8px */}
            <div className="flex flex-wrap items-center" style={{ gap: '24px' }}>
              <div className="flex items-center" style={{ gap: '8px' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '40px', backgroundColor: '#E5E5E5', overflow: 'hidden', flexShrink: 0 }} />
                {/* Name: H4 style (16px) */}
                <span style={{ fontSize: '16px', lineHeight: '22px', color: 'rgb(28, 28, 28)', fontWeight: 500 }}>Aksharaya</span>
              </div>
              {event.date && (
                <div className="flex items-center" style={{ gap: '24px', color: 'rgb(136, 136, 136)' }}>
                  <span style={{ fontSize: '16px' }}>{event.date}</span>
                </div>
              )}
              {event.location && (
                <span style={{ fontSize: '16px', color: 'rgb(136, 136, 136)' }}>{event.location}</span>
              )}
            </div>
          </div>

          {/* Hero image — aspectRatio 1.64, radius 20px, ~40px below header */}
          <div className="event-detail-hero" style={{ marginTop: '40px' }}>
            <Image
              src={event.coverImage}
              alt={event.title}
              fill
              sizes="(max-width: 1200px) 100vw, 1120px"
              className="object-cover"
              priority
            />
          </div>

          {/* TextBlock: content + sidebar, gap=40px, ~48px below image */}
          <div className="event-detail-body" style={{ marginTop: '48px' }}>

            {/* Left — WP content, sections gap=40px */}
            <div className="event-detail-content">
              {cleanContent && (
                <div
                  className="prose max-w-none strict-spacing-container
                             prose-headings:font-semibold
                             prose-headings:text-[#1c1c1c]
                             prose-h1:text-[28px] md:prose-h1:text-[32px]
                             prose-h2:text-[22px] md:prose-h2:text-[24px]
                             prose-h3:text-[18px] md:prose-h3:text-[20px]
                             prose-p:text-[#555555]
                             prose-p:text-[16px]
                             prose-p:leading-relaxed
                             prose-img:rounded-[20px]
                             prose-img:w-full
                             prose-a:text-[#1c1c1c]
                             prose-strong:text-[#1c1c1c]"
                  dangerouslySetInnerHTML={{ __html: cleanContent }}
                />
              )}
            </div>

            {/*
              Sidebar — sticky top 150px, maxWidth 300px, gap=31px
              About (gap 20px): "About Me" + logo 267×80 + description (H4)
              Follow (gap 20px): "Follow Aksharaya" (H3) + socials
            */}
            <aside className="event-detail-sidebar">
              {/* About — gap 20px */}
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
                <h3 style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 600, color: 'rgb(28, 28, 28)', margin: 0, position: 'relative', zIndex: 1 }}>
                  About Me
                </h3>
                <Image
                  src="/single-logo.svg"
                  alt="Aksharaya logo mark"
                  width={320}
                  height={96}
                  className="event-detail-about-logo"
                  style={{ width: '320px', height: '96px', objectFit: 'contain' }}
                />
                {/* Description — left-aligned on mobile only */}
                <p className="sidebar-desc" style={{ fontSize: '16px', lineHeight: '22px', letterSpacing: '-0.06em', color: 'rgb(28, 28, 28)', margin: 0 }}>
                  Aksharaya is an initiative dedicated to exploring typography, letterforms, and visual language across cultures. It brings together designers, educators, and researchers to share knowledge, ideas, and practices in the field of type and communication design. Through events like Typography Day, talks, and installations, Aksharaya fosters dialogue around the evolving role of typography in contemporary society.
                </p>
              </div>

              {/* Follow — gap 20px */}
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
                <p style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 400, color: 'rgb(28, 28, 28)', margin: 0 }}>
                  Follow Aksharaya
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="group flex items-center gap-2 text-[#555555] hover:text-black transition-colors">
                    <FacebookIcon />
                    <span className="max-w-0 opacity-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[80px] transition-all duration-500 ease-in-out whitespace-nowrap text-sm font-medium text-black">Facebook</span>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="group flex items-center gap-2 text-[#555555] hover:text-black transition-colors">
                    <TwitterIcon />
                    <span className="max-w-0 opacity-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[80px] transition-all duration-500 ease-in-out whitespace-nowrap text-sm font-medium text-black">Twitter</span>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="group flex items-center gap-2 text-[#555555] hover:text-black transition-colors">
                    <InstagramIcon />
                    <span className="max-w-0 opacity-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[90px] transition-all duration-500 ease-in-out whitespace-nowrap text-sm font-medium text-black">Instagram</span>
                  </a>
                  <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="group flex items-center gap-2 text-[#555555] hover:text-black transition-colors">
                    <PinterestIcon />
                    <span className="max-w-0 opacity-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[80px] transition-all duration-500 ease-in-out whitespace-nowrap text-sm font-medium text-black">Pinterest</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Blogs — title Mukta-600, ~80px above */}
          <div style={{ marginTop: '80px', overflow: 'visible' }}>
            <RelatedCarousel events={relatedEvents} />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
