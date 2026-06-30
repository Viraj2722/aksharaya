import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { getEvents } from '@/lib/getEvents'

export const revalidate = 3600

export default async function EventsPage() {
  const events = await getEvents()

  return (
    <div className="flex flex-col min-h-screen bg-[#f2f2f2]">
      <Navbar />

      <main className="flex-1 w-full flex flex-col">

        {/* Single container — matches page-container width (1280px) */}
        <div className="page-container w-full">

          {/*
            Framer CategoryHeader inner: maxWidth=1220px, gap="50px" horizontal
            Logo left-aligned (267×80), description Mukta-300
            Right image: 30% width, 200px height
          */}
          <div
            className="flex flex-col lg:flex-row items-start lg:items-center"
            style={{ gap: '50px', paddingTop: '50px', paddingBottom: '50px' }}
          >
            {/* Left: logo + description */}
            <div className="events-hero-left" style={{ flex: '1 1 0%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Image
                src="/single-logo.svg"
                alt="Aksharaya"
                width={267}
                height={80}
                className="events-hero-logo"
                style={{ width: '267px', height: '80px', objectFit: 'contain' }}
                priority
              />
              <p style={{ fontSize: '16px', lineHeight: '22px', letterSpacing: '-0.02em', fontWeight: 300, color: 'rgb(68, 68, 68)', margin: 0 }}>
                Explore articles, case studies, and insights on typography, design, and visual communication. This space brings together event highlights, talks, and research from the Aksharaya community.
              </p>
            </div>

            {/* Right: image 30% width, 200px height */}
            <div className="w-full lg:w-[30%] flex-shrink-0" style={{ position: 'relative', height: '200px' }}>
              <Image
                src="https://framerusercontent.com/images/TZlfJdOqeGVOhfDvkwOa3NAkRg.jpg"
                alt="Events and Updates"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/*
            Framer post grid: gap="10px" rows & columns, 3 cards per row
            Cards: image 280px, PostDetails padding 15px 0, gap 10px
          */}
          <div className="events-grid" style={{ paddingBottom: '80px' }}>
            {events.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.slug}`}
                style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', textDecoration: 'none' }}
                className="group"
              >
                {/* PostImage: height=280px */}
                <div style={{ width: '100%', height: '280px', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                  <Image
                    src={event.coverImage}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* PostDetails: padding="15px 0", gap="10px" */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '15px 0' }}>
                  <span style={{ fontSize: '13px', lineHeight: '19px', letterSpacing: '-0.04em', fontWeight: 600, color: 'rgb(115, 115, 115)' }}>
                    {event.date}
                  </span>
                  <h3 style={{ fontSize: '18px', lineHeight: '24px', letterSpacing: '0px', fontWeight: 400, color: 'rgb(28, 28, 28)', margin: 0 }} className="group-hover:underline underline-offset-4 decoration-2">
                    {event.title}
                  </h3>
                  <p style={{ fontSize: '16px', lineHeight: '22px', letterSpacing: '-0.02em', fontWeight: 300, color: 'rgb(68, 68, 68)', margin: 0, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {event.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
