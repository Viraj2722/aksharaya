import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { getProducts } from '@/lib/getProducts'

export const revalidate = 3600

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-12 pb-20 md:pt-16 md:pb-24">
        <div className="page-container w-full">

          {/* Spacer to preserve layout since filters are hidden */}
          <div style={{ height: '130px' }} aria-hidden="true"></div>

          {/* Filters (commented out per user request)
          <div className="flex justify-center gap-4 flex-wrap" style={{ marginBottom: '60px', marginTop: '70px' }}>
            ...
          </div>
          */}

          {/* Product Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-x-12 lg:gap-y-16"
            style={{ marginBottom: '60px' }}
          >
            {products.map((product, index) => (
              <Link href={`/products/${product.slug}`} key={product.id}>
                <div className="group cursor-pointer">

                  {/* Image Container */}
                  <div className="relative mb-5">
                    <div className="relative w-full aspect-[4/3] bg-[#f0f0f0] overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index < 3}
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                      />
                    </div>

                    {/* Featured Badge (Commented out per user request) */}
                    {/* {product.isFeatured && (
                      <div
                        className="absolute -top-6 left-4 bg-[#222222] text-white flex items-center justify-center z-10 shadow-md"
                        style={{ width: '45px', height: '38px' }}
                      >
                        <span className="text-[14px] font-medium tracking-wider pt-[2px]">New</span>
                      </div>
                    )} */}
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex justify-between items-start mb-2" style={{ marginTop: '20px' }}>
                      <h3 className="text-[18px] md:text-[20px] text-[#111111] pr-4 leading-snug font-normal">
                        {product.title}
                      </h3>
                      {product.price && (
                        <span className="text-[16px] md:text-[18px] text-[#888888] whitespace-nowrap pt-1">
                          RS {product.price}
                        </span>
                      )}
                    </div>
                    <p className="text-[13px] text-[#888888]">
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </p>
                  </div>

                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
