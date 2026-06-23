export interface Product {
  id: string
  title: string
  subtitle?: string
  slug: string
  description: string
  price: string
  buyLink: string
  image: string
  images: string[]
  isFeatured: boolean
  inStock: boolean
}
