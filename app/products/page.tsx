import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { getProducts } from '@/lib/getProducts'

export const revalidate = 3600

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1 w-full flex flex-col">
        <div className="w-full products-page-container" style={{ paddingTop: '33px', paddingBottom: '80px' }}>

          {/* Framer Categorys: grid 3 cols, gap 8px */}
          <div className="products-grid">
            {products.map((product, index) => (
              <Link href={`/products/${product.slug}`} key={product.id} className="group block">

                {/* Image */}
                <div className="relative w-full overflow-hidden bg-[#f0f0f0]" style={{ height: '455px' }}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 3}
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                </div>

                {/* Details: title + price */}
                <div style={{ paddingTop: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                    <h3 style={{ fontSize: '22px', lineHeight: '28px', letterSpacing: '-0.01em', fontWeight: 400, color: 'rgb(28, 28, 28)', margin: 0 }}>
                      {product.title}
                    </h3>
                    {product.price && (
                      <span style={{ fontSize: '22px', lineHeight: '28px', letterSpacing: '-0.01em', color: 'rgb(115, 115, 115)', whiteSpace: 'nowrap', flexShrink: 0 }}>
                        RS {product.price}
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: '13px', lineHeight: '19px', letterSpacing: '-0.04em', color: 'rgb(172, 172, 172)', margin: 0 }}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </p>
                </div>

              </Link>
            ))}
          </div>

          {products.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'rgb(136,136,136)', fontSize: '16px' }}>
              No products found.
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  )
}
