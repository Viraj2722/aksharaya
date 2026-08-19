import { Product } from '@/types/product'

// Products are a fixed set of 3 items (hardcoded, not from WordPress).
// Images live in /public/Product. Update prices / buyLink here when available.
const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Calligraphy Manuals',
    subtitle: '',
    slug: 'calligraphy-manuals',
    description: '',
    price: '',
    buyLink: '#',
    image: '/Product/calligraphy-manuals.jpg',
    images: ['/Product/calligraphy-manuals.jpg'],
    isFeatured: true,
    inStock: true,
  },
  {
    id: '2',
    title: 'Metal Tools',
    subtitle: '',
    slug: 'metal-tools',
    description: '',
    price: '',
    buyLink: '#',
    image: '/Product/metal-tools.jpg',
    images: ['/Product/metal-tools.jpg'],
    isFeatured: true,
    inStock: true,
  },
  {
    id: '3',
    title: 'Reed & Bamboo',
    subtitle: '',
    slug: 'reed-bamboo',
    description: '',
    price: '',
    buyLink: '#',
    image: '/Product/reed-bamboo.jpg',
    images: ['/Product/reed-bamboo.jpg'],
    isFeatured: true,
    inStock: true,
  },
]

export async function getProducts(limit?: number): Promise<Product[]> {
  return limit ? PRODUCTS.slice(0, limit) : PRODUCTS
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return PRODUCTS.filter((p) => p.isFeatured).slice(0, 6)
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return PRODUCTS.find((p) => p.slug === slug)
}
