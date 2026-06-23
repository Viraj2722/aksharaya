import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { GalleryGrid } from '@/components/gallery/GalleryGrid'
import { getGallery } from '@/lib/getGallery'

export const revalidate = 3600

export default async function GalleryPage() {
  const items = await getGallery()

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div
        className="max-w-[1400px] !mx-auto !px-4 sm:!px-6 lg:!px-8 w-full !pb-10 !pt-10 opacity-0 animate-fade-in-up"
        style={{ animationDelay: '0.1s' }}
      >
        <GalleryGrid items={items} />
      </div>

      <Footer />
    </div>
  )
}
