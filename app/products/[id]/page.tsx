import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ProductDetail } from '@/components/products/ProductDetail'
import { getProducts, getProductBySlug } from '@/lib/getProducts'

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

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1 w-full flex flex-col">
        <div className="w-full products-page-container" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
          <ProductDetail product={product} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
