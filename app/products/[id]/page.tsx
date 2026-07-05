import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ProductDetail } from '@/components/products/ProductDetail'
import { getProducts, getProductBySlug } from '@/lib/getProducts'
import { RelatedProductsCarousel } from '@/components/sections/RelatedProductsCarousel'

export async function generateStaticParams() {
  const products = await getProducts()
  return products.map((p) => ({ id: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const product = await getProductBySlug(id)
  if (!product) return {}
  return {
    title: product.title,
    description: product.description,
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = await getProductBySlug(id)

  if (!product) notFound()

  // Fetch all products and exclude the current one
  const allProducts = await getProducts()
  const relatedProducts = allProducts.filter((p) => p.slug !== product.slug).slice(0, 10)

  return (
    <div className="flex flex-col min-h-dvh bg-[#f2f2f2]">
      <Navbar />
      <main className="flex-1 w-full flex flex-col">
        <div className="page-container w-full" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
          <ProductDetail product={product} />
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="page-container w-full" style={{ paddingBottom: '40px', marginTop: '20px', overflow: 'visible' }}>
            <RelatedProductsCarousel products={relatedProducts} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
