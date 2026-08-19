import Image from 'next/image'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { getGallery } from '@/lib/getGallery'

export const revalidate = 3600

export default async function GalleryPage() {
  const items = await getGallery()

  return (
    <div className="flex flex-col min-h-dvh bg-[#f2f2f2]">
      <Navbar />

      <main className="flex-1 w-full flex flex-col">
        <div className="page-container w-full" style={{ paddingTop: '33px', paddingBottom: '80px' }}>

          {/* Masonry: each image at its natural aspect ratio — no crop, no hover, no title */}
          <div className="gallery-masonry">
            {items.map((item) => (
              <Image
                key={item.id}
                src={item.image}
                alt={item.alt}
                width={0}
                height={0}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="gallery-masonry-item"
              />
            ))}
          </div>

          {items.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'rgb(136,136,136)', fontSize: '16px' }}>
              No gallery items found.
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  )
}
