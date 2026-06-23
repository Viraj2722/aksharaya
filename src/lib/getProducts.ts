import { Product } from '@/types/product'
import { getMediaUrl, stripHtml } from '@/lib/wp'

const WP_API = 'https://aksharaya.org/wp-json/wp/v2'

type WpProduct = {
  id: number
  slug: string
  title: { rendered: string }
  content: { rendered: string }
  acf?: {
    product_image_1?: number | false | null
    product_image_2?: number | false | null
    product_image_3?: number | false | null
    product_image_4?: number | false | null
    product_image_5?: number | false | null
    price?: string
    buy_link?: string
    is_featured?: boolean | number | string
    in_stock?: boolean | number | string
    product_description?: string
    subtitle?: string
  }
}

async function fetchAllProducts(): Promise<Product[]> {
  try {
    const res = await fetch(
      `${WP_API}/products?status=publish&per_page=100`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) {
      console.error(`[getProducts] HTTP ${res.status}`)
      return []
    }
    const data: WpProduct[] = await res.json()

    return Promise.all(
      data.map(async (wp) => {
        // Fetch all 5 potential images in parallel
        const mediaUrls = await Promise.all([
          getMediaUrl(wp.acf?.product_image_1),
          getMediaUrl(wp.acf?.product_image_2),
          getMediaUrl(wp.acf?.product_image_3),
          getMediaUrl(wp.acf?.product_image_4),
          getMediaUrl(wp.acf?.product_image_5),
        ])

        // Filter out placeholders or empty strings
        const validImages = mediaUrls.filter((url) => url && !url.includes('placeholder'))
        const images = validImages.length > 0 ? validImages : ['https://picsum.photos/seed/product/800/800']
        const mainImage = images[0]

        const rawDesc = wp.acf?.product_description || stripHtml(wp.content?.rendered ?? '')
        const description = wp.acf?.product_description ? rawDesc : (rawDesc.length > 160 ? rawDesc.slice(0, 157) + '…' : rawDesc)

        return {
          id: String(wp.id),
          title: stripHtml(wp.title?.rendered ?? ''),
          subtitle: wp.acf?.subtitle ?? '',
          slug: wp.slug,
          description,
          price: wp.acf?.price ?? '',
          buyLink: wp.acf?.buy_link || '#',
          image: mainImage,
          images: images,
          isFeatured: Boolean(wp.acf?.is_featured),
          inStock: wp.acf?.in_stock !== undefined ? Boolean(wp.acf?.in_stock) : true, // Default to true if field not set
        } satisfies Product
      })
    )
  } catch (err) {
    console.error('[getProducts] fetchAllProducts failed:', err)
    return []
  }
}

export async function getProducts(limit?: number): Promise<Product[]> {
  const products = await fetchAllProducts()
  return limit ? products.slice(0, limit) : products
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const products = await fetchAllProducts()
  return products.filter((p) => p.isFeatured).slice(0, 6)
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const products = await fetchAllProducts()
  return products.find((p) => p.slug === slug)
}
