import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import DOMPurify from 'isomorphic-dompurify'
import { Navbar } from '@/components/layout/Navbar'
import { FacebookIcon, TwitterIcon, InstagramIcon, PinterestIcon, Footer } from '@/components/layout/Footer'
import { getBlogs, getBlogBySlug } from '@/lib/getBlogs'

export async function generateStaticParams() {
  const blogs = await getBlogs()
  return blogs.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)
  if (!blog) return {}
  return {
    title: blog.title,
    description: blog.excerpt,
  }
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)

  if (!blog) notFound()

  const cleanContent = DOMPurify.sanitize(blog.content)

  return (
    <div className="flex flex-col min-h-screen">
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
          
          {/* Upper Container */}
          <div 
            className="max-w-[1120px] flex flex-col justify-center py-12 lg:py-0 lg:h-[204px]" 
          >
            {/* Breadcrumb */}
            <div className="max-w-[1120px] flex items-center text-[16px] text-black" style={{ marginBottom: '10px', gap: '12px', marginTop: '65px' }}>
              <Link href="/events" className="relative group cursor-pointer inline-block">
                <span className="text-black group-hover:text-gray-700 transition-colors duration-300">Blog</span>
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
              {blog.title}
            </h1>

            {/* Mobile Spacing Below Title */}
            <div className="block md:hidden w-full" style={{ height: '15px' }} aria-hidden="true"></div>

            {/* Author Info */}
            <div className="flex items-center" style={{ gap: '10px', marginBottom: '35px' }}>
              <div className="w-[24px] h-[24px] rounded-full bg-[#E5E5E5] overflow-hidden relative">
                {/* Circular placeholder for avatar */}
              </div>
              <span className="text-[16px] text-black font-medium">Aksharaya</span>
            </div>
          </div>

          {/* Main Hero Image */}
          <div 
            className="max-w-[1120px] relative overflow-hidden h-[300px] md:h-[450px] lg:h-[683px] hero-mobile-override" 
            style={{ borderRadius: '16px', marginTop: '35px' }}
          >
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              sizes="(max-width: 1200px) 100vw, 1120px"
              className="object-cover"
              priority
            />
          </div>

          <div className="max-w-[1120px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24" style={{ marginTop: '50px' }}>
            
            {/* Left Column (Span 8) */}
            <div className="lg:col-span-8 flex flex-col">
              {cleanContent ? (
                <div
                  className="prose prose-lg max-w-none text-[#000000]"
                  style={{ lineHeight: '1.6' }}
                  dangerouslySetInnerHTML={{ __html: cleanContent }}
                />
              ) : (
                <p className="text-[16px] text-[#666666]">{blog.excerpt}</p>
              )}
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
                    className="w-full h-auto object-contain about-me-logo md:transform md:scale-[1.35] md:origin-left md:-translate-x-12 md:-translate-y-3"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>

                <p className="text-[17px] leading-snug mb-5 about-me-para md:w-[270px]" style={{ color: '#444444' }}>
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
          
          {/* Mobile Spacer */}
          <div className="block lg:hidden w-full" style={{ height: '80px' }} aria-hidden="true"></div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
