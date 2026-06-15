'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { FacebookIcon, TwitterIcon, InstagramIcon, PinterestIcon, Footer } from '@/components/layout/Footer'

export default function BlogDetails() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1 w-full flex flex-col items-center">
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 767px) {
            .hero-mobile-override { margin-top: 40px !important; }
            .related-blogs-override { margin-top: 40px !important; }
          }
        `}} />
        {/* Main Wrapper with exact width */}
        <div className="page-container w-full max-w-[1120px] mx-auto px-6 sm:px-8 md:px-12" style={{ paddingLeft: '5vw', paddingRight: '5vw' }}>
          
          {/* Upper Container (Fixed Height: 204px) */}
          <div 
            className="max-w-[1120px] flex flex-col justify-center py-12 lg:py-0 lg:h-[204px]" 
          >
            {/* Breadcrumb */}
            <div className="max-w-[1120px] flex items-center text-[16px] text-black" style={{ marginBottom: '10px', gap: '12px' , marginTop: '65px'}}>
              <Link href="/events" className="relative group cursor-pointer inline-block">
                <span className="text-black group-hover:text-gray-700 transition-colors duration-300">Project</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-medium">Blog Details</span>
            </div>

            {/* Mobile Spacing Above Title */}
            <div className="block md:hidden w-full" style={{ height: '10px' }} aria-hidden="true"></div>

            {/* Title */}
            <h1 className="text-[26px] md:text-[44px] lg:text-[50px] font-medium text-[#111111] leading-[1.1] tracking-tight max-w-[1050px]" style={{ marginBottom: '15px' }}>
              A Behind-the-Scenes Look at Typography Day 2021 and How It Evolved in a Digital World
            </h1>

            {/* Mobile Spacing Below Title */}
            <div className="block md:hidden w-full" style={{ height: '15px' }} aria-hidden="true"></div>

            {/* Author Info */}
            <div className="flex items-center" style={{ gap: '10px', marginBottom: '35px'}}>
              <div className="w-[24px] h-[24px] rounded-full bg-[#E5E5E5] overflow-hidden relative">
                {/* Fallback circular placeholder for avatar */}
              </div>
              <span className="text-[16px] text-black font-medium">Aksharaya</span>
            </div>
          </div>

          {/* Main Hero Image (Fixed Height: 683px) */}
          <div 
            className="max-w-[1120px] relative overflow-hidden h-[300px] md:h-[450px] lg:h-[683px] hero-mobile-override" 
            style={{ borderRadius: '16px', marginTop: '35px' }}
          >
            <Image
              src="https://picsum.photos/seed/typographyday/1200/800"
              alt="Typography Day 2021 Event Crowd"
              fill
              sizes="(max-width: 1200px) 100vw, 1120px"
              className="object-cover"
              priority
            />
          </div>

          <div className="max-w-[1120px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24" style={{ marginTop: '50px' }}>
            
            {/* Left Column (Span 8) */}
            <div className="lg:col-span-8 flex flex-col">
              <h2 className="text-[28px] md:text-[36px] font-bold text-black mb-9" style={{marginBottom:"15px"}}>
                Introduction
              </h2>
              
              <div className="text-[16px] md:text-[18px] text-[#000000] flex flex-col gap-6 mb-12" style={{ lineHeight: '1.5' }}>
                <p>
                  Typography Day has always been a space for meaningful conversations around type, language, and
                  communication design. With its fourteenth edition in 2021, the challenge was to shift this rich,
                  interactive experience into a fully digital format.
                </p>
                <p>
                  The transition was not just about moving online, but about rethinking how people connect, learn, and engage with typography in
                  a virtual environment.
                </p>
              </div>

              {/* Secondary Image Collage */}
              <div className="w-full relative overflow-hidden rounded-[16px] h-[300px] md:h-[400px] lg:h-[500px]" style={{ marginTop: '40px', marginBottom: '40px' }}>
                <Image
                  src="https://picsum.photos/seed/aksharayacollage/800/600"
                  alt="Typography Newspapers Collage"
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>

              {/* The Challenge */}
              <h3 className="text-[22px] md:text-[28px] font-bold text-black uppercase" style={{ marginBottom: '10px' }}>
                The Challenge: Documenting Typography Across Time
              </h3>
              <p className="text-[16px] text-[#000000]" style={{ lineHeight: '1.5', marginBottom: '30px' }}>
                Documenting typography is not just about preserving visuals, but capturing the ideas, discussions, and
                cultural contexts behind them. Each event, talk, and installation presents a unique perspective, making
                it challenging to organize and present this evolving body of knowledge. The goal is to create a space
                where these diverse explorations remain accessible, relevant, and engaging over time.
              </p>

              {/* Discovery */}
              <h3 className="text-[22px] md:text-[28px] font-bold text-black uppercase" style={{ marginBottom: '10px' }}>
                Discovery: What Emerges From The Archive
              </h3>
              <p className="text-[16px] text-[#000000]" style={{ lineHeight: '1.5', marginBottom: '45px' }}>
                As the archive grows, patterns begin to appear across years, themes, and contributors. Key
                observations include: &bull; Recurring themes in typography and visual communication &bull; Evolving
                perspectives shaped by technology and culture &bull; Contributions from diverse voices across disciplines.
                Together, these form a rich narrative of how typography continues to develop.
              </p>

              {/* Similar Image Collage */}
              <div className="w-full relative overflow-hidden rounded-[16px] h-[300px] md:h-[400px] lg:h-[500px]" style={{ marginBottom: '40px'}}>
                <Image
                  src="https://picsum.photos/seed/aksharayacollage2/800/600"
                  alt="Typography Newspapers Collage Alternative"
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>

              {/* Duplicated Intro Content */}
              <div className="text-[16px] md:text-[18px] text-[#000000] flex flex-col gap-6 mb-12" style={{ lineHeight: '1.5' }}>
                <p>
                  Typography Day has always been a space for meaningful conversations around type, language, and
                  communication design. With its fourteenth edition in 2021, the challenge was to shift this rich,
                  interactive experience into a fully digital format.
                </p>
                <p>
                  The transition was not just about moving online, but about rethinking how people connect, learn, and engage with typography in
                  a virtual environment.
                </p>
              </div>
            </div>

            {/* Right Column (Span 4) - Sticky Sidebar (Desktop Only) */}
            <div className="hidden lg:block lg:col-span-4 relative">
              <div className="sticky top-24 flex flex-col">
                <h3 className="text-[24px] font-medium" style={{ color: '#111111', marginBottom: '8px' }}>
                  About Me
                </h3>
                
                {/* Large logo */}
                <div className="mb-6 about-me-logo-wrapper w-full px-4 md:px-0">
                  <Image
                    src="/single-logo.svg"
                    alt="Aksharaya logo mark"
                    width={440}
                    height={160}
                    className="w-full h-auto object-contain about-me-logo md:transform md:scale-[1.2] md:origin-left md:-translate-x-14"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>

                <p className="text-[17px] leading-snug mb-5" style={{ color: '#444444' }}>
                  Aksharaya is an initiative dedicated to exploring typography, letterforms, and visual language across cultures. It brings together designers, educators, and researchers to share knowledge, ideas, and practices in the field of type and communication design. Through events like Typography Day, talks, and installations, Aksharaya fosters dialogue around the evolving role of typography in contemporary society.
                </p>

                <div style={{ marginTop: '20px' }}>
                  <p className="text-[18px] font-medium" style={{ color: '#111111', marginBottom: '20px' }}>
                    <span className="font-normal">Follow </span>
                    <span className="font-bold">Aksharaya</span>
                  </p>

                  {/* Social Icons */}
                  <div className="flex items-center gap-3">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="group flex items-center gap-2 text-[#555555] hover:text-black transition-colors">
                      <FacebookIcon />
                      <span className="max-w-0 opacity-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[80px] transition-all duration-500 ease-in-out whitespace-nowrap text-[14px] font-medium text-black">
                        Facebook
                      </span>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="group flex items-center gap-2 text-[#555555] hover:text-black transition-colors">
                      <TwitterIcon />
                      <span className="max-w-0 opacity-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[80px] transition-all duration-500 ease-in-out whitespace-nowrap text-[14px] font-medium text-black">
                        Twitter
                      </span>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="group flex items-center gap-2 text-[#555555] hover:text-black transition-colors">
                      <InstagramIcon />
                      <span className="max-w-0 opacity-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[90px] transition-all duration-500 ease-in-out whitespace-nowrap text-[14px] font-medium text-black">
                        Instagram
                      </span>
                    </a>
                    <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="group flex items-center gap-2 text-[#555555] hover:text-black transition-colors">
                      <PinterestIcon />
                      <span className="max-w-0 opacity-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[80px] transition-all duration-500 ease-in-out whitespace-nowrap text-[14px] font-medium text-black">
                        Pinterest
                      </span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Section 3: Related Blogs */}
          <div className="w-full max-w-[1120px] mx-auto related-blogs-override" style={{ marginTop: '40px', marginBottom: '60px' }}>
            <h2 className="text-[24px] md:text-[32px] font-bold text-black mb-10" style={{ marginBottom: '20px' }}>
              Related Blogs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 lg:gap-x-3 lg:gap-y-8">
              
              {/* Blog 1 */}
              <div className="flex flex-col group cursor-pointer event-card">
                <Link href="/events/4" className="flex flex-col flex-1 h-full">
                  <div className="relative w-full overflow-hidden mb-6 bg-gray-100 shrink-0 h-[280px] md:h-[350px] lg:h-[420px]">
                    <Image
                      src="https://picsum.photos/seed/ev4/800/600"
                      alt="Typography Day 2021 (Online Edition)"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-1" style={{ marginTop: '10px' }}>
                    <span className="text-[15px] md:text-[13px] text-gray-500 uppercase tracking-wide font-medium">
                      AUG 27, 2021
                    </span>
                    <h3 className="text-xl md:text-[20px] font-bold text-gray-900 leading-snug group-hover:underline underline-offset-4 decoration-2" style={{ marginTop: '5px', marginBottom: '5px' }}>
                      Typography Day 2021 (Online Edition)
                    </h3>
                    <p className="text-[16px] md:text-[14px] text-gray-600 line-clamp-3 leading-relaxed">
                      The fourteenth edition of Typography Day was held online, bringing together designers, educators, and typography enthusiasts from across the world.
                    </p>
                  </div>
                </Link>
              </div>

              {/* Blog 2 */}
              <div className="flex flex-col group cursor-pointer event-card">
                <Link href="/events/5" className="flex flex-col flex-1 h-full">
                  <div className="relative w-full overflow-hidden mb-6 bg-gray-100 shrink-0 h-[280px] md:h-[350px] lg:h-[420px]">
                    <Image
                      src="https://picsum.photos/seed/ev5/800/600"
                      alt="Typography Day 2021 (Online Edition)"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-1" style={{ marginTop: '10px' }}>
                    <span className="text-[15px] md:text-[13px] text-gray-500 uppercase tracking-wide font-medium">
                      AUG 27, 2021
                    </span>
                    <h3 className="text-xl md:text-[20px] font-bold text-gray-900 leading-snug group-hover:underline underline-offset-4 decoration-2" style={{ marginTop: '5px', marginBottom: '5px' }}>
                      Typography Day 2021 (Online Edition)
                    </h3>
                    <p className="text-[16px] md:text-[14px] text-gray-600 line-clamp-3 leading-relaxed">
                      The fourteenth edition of Typography Day was held online, bringing together designers, educators, and typography enthusiasts from across the world.
                    </p>
                  </div>
                </Link>
              </div>

              {/* Blog 3 */}
              <div className="flex flex-col group cursor-pointer event-card">
                <Link href="/events/6" className="flex flex-col flex-1 h-full">
                  <div className="relative w-full overflow-hidden mb-6 bg-gray-100 shrink-0 h-[280px] md:h-[350px] lg:h-[420px]">
                    <Image
                      src="https://picsum.photos/seed/ev6/800/600"
                      alt="Typography Day 2021 (Online Edition)"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-1" style={{ marginTop: '10px' }}>
                    <span className="text-[15px] md:text-[13px] text-gray-500 uppercase tracking-wide font-medium">
                      AUG 27, 2021
                    </span>
                    <h3 className="text-xl md:text-[20px] font-bold text-gray-900 leading-snug group-hover:underline underline-offset-4 decoration-2" style={{ marginTop: '5px', marginBottom: '5px' }}>
                      Typography Day 2021 (Online Edition)
                    </h3>
                    <p className="text-[16px] md:text-[14px] text-gray-600 line-clamp-3 leading-relaxed">
                      The fourteenth edition of Typography Day was held online, bringing together designers, educators, and typography enthusiasts from across the world.
                    </p>
                  </div>
                </Link>
              </div>

            </div>
          </div>

          {/* About Me (Mobile Only) */}
          <div className="flex lg:hidden w-full flex-col items-center text-center mt-4 overflow-hidden">
            <div className="mb-2 mt-2 w-[105%] max-w-[420px] -ml-2">
              <Image
                src="/single-logo.svg"
                alt="Aksharaya logo mark"
                width={440}
                height={160}
                className="w-full max-w-[440px] object-contain transition-transform duration-500 ease-in-out hover:scale-105"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <p className="text-[17px] leading-snug mb-4 mt-5" style={{ color: '#444444' }}>
              Aksharaya is an initiative dedicated to exploring typography, letterforms, and visual language across cultures. It brings together designers, educators, and researchers to share knowledge, ideas, and practices in the field of type and communication design. Through events like Typography Day, talks, and installations, Aksharaya fosters dialogue around the evolving role of typography in contemporary society.
            </p>
          </div>
          
          {/* Foolproof Mobile Spacer */}
          <div className="block lg:hidden w-full" style={{ height: '80px' }} aria-hidden="true"></div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
