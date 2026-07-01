import Image from 'next/image'
import Link from 'next/link'
import { getHomepageUnified } from '@/lib/getEvents'
import { EventCard } from '@/components/cards/EventCard'

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function PinterestIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  )
}

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
        {/* 2-column grid: events list + about sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-16">

          {/* LEFT: Events list */}
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
            <div>
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

          {/* RIGHT: About Me sidebar — matches event detail page sidebar styling */}
          <aside aria-label="About Aksharaya sidebar">
            <div className="sticky top-[40px] about-me-sidebar">

              {/* About — gap 20px */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left" style={{ width: '100%', gap: '20px' }}>
                <h3 style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 600, color: 'rgb(28, 28, 28)', margin: 0 }}>
                  About Me
                </h3>
                <Image
                  src="/single-logo.svg"
                  alt="Aksharaya logo mark"
                  width={320}
                  height={96}
                  className="about-me-logo"
                  style={{ width: '320px', height: '96px', objectFit: 'contain' }}
                />
                <p style={{ fontSize: '16px', lineHeight: '22px', letterSpacing: '-0.06em', color: 'rgb(28, 28, 28)', margin: 0 }}>
                  Aksharaya is an initiative dedicated to exploring typography, letterforms, and visual language across cultures. It brings together designers, educators, and researchers to share knowledge, ideas, and practices in the field of type and communication design. Through events like Typography Day, talks, and installations, Aksharaya fosters dialogue around the evolving role of typography in contemporary society.
                </p>
              </div>

              {/* Follow — gap 20px */}
              <div className="hidden md:flex flex-col items-center md:items-start text-center md:text-left" style={{ width: '100%', gap: '20px', marginTop: '20px' }}>
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

            </div>
          </aside>

        </div>

      </div>
    </section>
  )
}
