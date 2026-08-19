import Link from 'next/link'
import { getHomepageUnified } from '@/lib/getEvents'
import { EventCard } from '@/components/cards/EventCard'

export async function FeaturedEvents() {
  const { previousEvents } = await getHomepageUnified()

  return (
    <section
      className="pt-[80px] pb-16 md:pt-[100px] md:pb-32"
      style={{ background: '#f2f2f2' }}
      aria-label="Previous Events and About"
    >
      <style>{`
        @media (min-width: 1024px) {
          .about-me-sidebar { margin-top: 80px; }
        }
        @media (max-width: 1023px) {
          .about-me-sidebar { padding: 0 16px; margin-top: 0px; }
          .more-post-container { display: flex; justify-content: center !important; margin-bottom: 40px !important; }
        }
        @media (max-width: 767px) {
          /* Logo is pinned to 320px on desktop; let it shrink to fit narrow phones */
          .about-me-logo { width: 100% !important; max-width: 320px !important; height: auto !important; }
        }
      `}</style>
      <div className="page-container">
        <div className="grid grid-cols-1">

          {/* Events list */}
          <div className="flex flex-col">
            {/* Header */}
            <div style={{ marginTop: '80px', marginBottom: '40px' }}>
              <hr className="block lg:hidden w-full border-t border-[#d1d5db]" style={{ marginTop: '-30px', marginBottom: '30px' }} />
              <p
                className="text-[18px] font-medium"
                style={{ color: '#111111', marginBottom: '8px' }}
              >
                Stay up-to-date
              </p>
              <h2
                className="text-2xl md:text-3xl font-bold"
                style={{ color: '#111111' }}
              >
                Previous Events
              </h2>
            </div>

            {/* Events */}
            <div className="flex flex-col gap-[40px] md:gap-0">
              {previousEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>

            {/* More Post button — mt-auto pushes it to bottom so it aligns with sidebar social icons */}
            <div className="more-post-container mt-auto" style={{ paddingTop: '50px', marginBottom: '80px' }}>
              <Link href="/events" className="group inline-flex items-center">
                <div className="bg-[#111111] text-white flex items-center justify-center h-[44px] w-[130px] rounded-l-[100px] group-hover:rounded-r-[100px] transition-all duration-500 ease-in-out">
                  <span className="font-bold text-[15px] tracking-wide">MORE POST</span>
                </div>
                <div className="bg-[#111111] text-white flex items-center justify-center h-[44px] w-[44px] rounded-r-[100px] group-hover:rounded-l-[100px] transition-all duration-500 ease-in-out group-hover:ml-[6px]">
                  <svg width="18" height="18" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
