import Image from 'next/image'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { getGallery } from '@/lib/getGallery'
import { GalleryItem } from '@/types/gallery'

export const revalidate = 3600

function GalleryCell({ item, sizes }: { item: GalleryItem; sizes: string }) {
  return (
    <div className="relative overflow-hidden group cursor-pointer w-full h-full">
      <Image
        src={item.image}
        alt={item.alt}
        fill
        sizes={sizes}
        className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:blur-[2px]"
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {/* Title slides up on hover */}
      <div className="absolute bottom-0 left-0 w-full !p-6 md:!p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
        <h3 className="text-white text-[20px] md:text-[24px] font-medium tracking-wide">
          {item.title}
        </h3>
      </div>
    </div>
  )
}

export default async function GalleryPage() {
  const items = await getGallery()

  // Group into chunks of 8 for the mosaic pattern
  const chunks: GalleryItem[][] = []
  for (let i = 0; i < items.length; i += 8) {
    chunks.push(items.slice(i, i + 8))
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1 w-full flex flex-col">
        <div className="w-full gallery-page-container" style={{ paddingTop: '33px', paddingBottom: '80px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

            {chunks.map((chunk, chunkIndex) => (
              <div key={chunkIndex} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                {/* Row A: 55% + 1fr */}
                {chunk.length >= 2 && (
                  <div className="gallery-row">
                    <div className="gallery-img-55">
                      <GalleryCell item={chunk[0]} sizes="(max-width: 768px) 100vw, 55vw" />
                    </div>
                    <div className="gallery-img-fill">
                      <GalleryCell item={chunk[1]} sizes="(max-width: 768px) 100vw, 45vw" />
                    </div>
                  </div>
                )}

                {/* Row B: 1fr + 25% */}
                {chunk.length >= 4 && (
                  <div className="gallery-row">
                    <div className="gallery-img-fill">
                      <GalleryCell item={chunk[2]} sizes="(max-width: 768px) 100vw, 75vw" />
                    </div>
                    <div className="gallery-img-25">
                      <GalleryCell item={chunk[3]} sizes="(max-width: 768px) 100vw, 25vw" />
                    </div>
                  </div>
                )}

                {/* Row C: full width single image */}
                {chunk.length >= 5 && (
                  <div className="gallery-img-full">
                    <GalleryCell item={chunk[4]} sizes="100vw" />
                  </div>
                )}

                {/* Row D: stacked pair (50%) + single (49%) */}
                {chunk.length >= 6 && (
                  <div className="gallery-row">
                    <div className="gallery-stack-50">
                      <div className="gallery-stack-inner">
                        <GalleryCell item={chunk[5]} sizes="(max-width: 768px) 100vw, 50vw" />
                      </div>
                      {chunk[6] && (
                        <div className="gallery-stack-inner">
                          <GalleryCell item={chunk[6]} sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                      )}
                    </div>
                    {chunk[7] && (
                      <div className="gallery-img-49">
                        <GalleryCell item={chunk[7]} sizes="(max-width: 768px) 100vw, 49vw" />
                      </div>
                    )}
                  </div>
                )}

              </div>
            ))}

            {items.length === 0 && (
              <div style={{ textAlign: 'center', padding: '80px 0', color: 'rgb(136,136,136)', fontSize: '16px' }}>
                No gallery items found.
              </div>
            )}

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
