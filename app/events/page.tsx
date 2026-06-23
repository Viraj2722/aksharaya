import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { getEvents } from '@/lib/getEvents'

export const revalidate = 3600

export default async function EventsPage() {
  const events = await getEvents()

  // Static hero content; all events go into the grid
  const gridEvents = events

  return (
    <div className="flex flex-col min-h-screen">
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
            .event-hero-text { order: 2 !important; }
            .event-hero-img { order: 1 !important; }
          }
          @media (min-width: 768px) {
            .events-hero { margin-top: 46px; margin-bottom: 84px; }
            .events-grid-container { margin-bottom: 40px; }
            .event-img-container { height: 400px; }
            .event-text-container { margin-top: 10px; }
            .event-title { margin-top: 5px; margin-bottom: 5px; }
            .event-logo-offset { transform: translateX(-100px); }
            .event-hero-img-width { width: 375px !important; max-width: none !important; }
          }
        `}</style>

        {/* Static Hero Section */}
        <div className="w-full mx-auto px-6 sm:px-12 lg:px-0 events-hero" style={{ maxWidth: '1120px' }}>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center text-center lg:text-left">
            {/* Left side text */}
            <div className="flex-1 w-full flex-shrink-0 event-hero-text">
              <div className="mb-8 md:mb-10 flex justify-center lg:justify-start event-logo-offset md:translate-x-5">
                <Image
                  src="/single-logo.svg"
                  alt="Aksharaya"
                  width={434}
                  height={130}
                  className="w-full max-w-[320px] md:max-w-[434px] h-auto object-contain"
                  style={{ width: '100%', height: 'auto' }}
                  priority
                />
              </div>
              <p className="text-[16px] text-[#444444] leading-[1.6] px-2 md:px-0">
                Explore articles, case studies, and insights on typography, design, and visual communication. This space brings together event highlights, talks, and research from the Aksharaya community.
              </p>
            </div>

            {/* Right side — static hero image */}
            <div className="flex-none w-full lg:w-[370px] flex justify-center lg:justify-end mt-8 lg:mt-0 event-hero-img">
              <div className="relative w-full max-w-[370px] h-[180px] bg-gray-100 event-hero-img-width">
                <Image
                  src="https://picsum.photos/seed/eventshero/800/400"
                  alt="Events and Updates"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="w-full mx-auto px-6 sm:px-12 lg:px-0 events-grid-container" style={{ maxWidth: '1120px' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 lg:gap-x-3 lg:gap-y-8">
            {gridEvents.map((event) => (
              <div
                key={event.id}
                className="flex flex-col group cursor-pointer event-card"
              >
                <Link href={`/events/${event.slug}`} className="flex flex-col flex-1 h-full">
                  <div className="relative w-full overflow-hidden mb-6 bg-gray-100 event-img-container">
                    <Image
                      src={event.coverImage}
                      alt={event.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-1 event-text-container">
                    <span className="text-[15px] md:text-[13px] text-gray-500 uppercase tracking-wide font-medium">
                      {event.date}
                    </span>
                    <h3 className="text-xl md:text-[20px] font-bold text-gray-900 leading-snug group-hover:underline underline-offset-4 decoration-2 event-title">
                      {event.title}
                    </h3>
                    <p className="text-[16px] md:text-[14px] text-gray-600 line-clamp-3 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
