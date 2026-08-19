import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { getEvents } from '@/lib/getEvents'

export const revalidate = 3600

function shortExcerpt(text: string, maxChars = 140): string {
  if (text.length <= maxChars) return text.replace(/[…\s]+$/, '')
  const cut = text.lastIndexOf(' ', maxChars)
  return text.slice(0, cut > 0 ? cut : maxChars).replace(/[…\s]+$/, '')
}

export default async function EventsPage() {
  const events = await getEvents()

  return (
    <div className="flex flex-col min-h-dvh bg-[#f2f2f2]">
      <Navbar />

      <main className="flex-1 w-full flex flex-col">

        {/* Single container — matches page-container width (1280px) */}
        <div className="page-container w-full">

          {/*
            Framer post grid: gap="10px" rows & columns, 3 cards per row
            Cards: image 280px, PostDetails padding 15px 0, gap 10px
          */}
          <div className="events-grid" style={{ paddingTop: '50px', paddingBottom: '80px' }}>
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

                {/* PostDetails: padding="15px 12px", gap="10px" */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '15px 12px' }}>
                  <span style={{ fontSize: '13px', lineHeight: '19px', letterSpacing: '-0.04em', fontWeight: 600, color: 'rgb(115, 115, 115)' }}>
                    {event.date}
                  </span>
                  <h3 style={{ fontSize: '18px', lineHeight: '24px', letterSpacing: '0px', fontWeight: 400, color: 'rgb(28, 28, 28)', margin: 0 }} className="group-hover:underline underline-offset-4 decoration-2">
                    {event.title}
                  </h3>
                  <p style={{ fontSize: '16px', lineHeight: '22px', letterSpacing: '-0.02em', fontWeight: 300, color: 'rgb(68, 68, 68)', margin: 0 }}>
                    {shortExcerpt(event.description)}&hellip;{' '}
                    <span className="font-medium group-hover:underline underline-offset-2" style={{ color: '#111111' }}>
                      show more
                    </span>
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
