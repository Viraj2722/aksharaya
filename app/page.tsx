import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutPreview } from '@/components/sections/AboutPreview'
import { FeaturedBlogs } from '@/components/sections/FeaturedBlogs'
import { FeaturedEvents } from '@/components/sections/FeaturedEvents'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutPreview />
        <FeaturedBlogs />
        <FeaturedEvents />
      </main>
      <Footer />
    </>
  )
}
