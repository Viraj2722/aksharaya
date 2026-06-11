import { galleryItems } from '@/data/gallery'
import { GalleryItem } from '@/types/gallery'

export function getGallery(limit?: number): GalleryItem[] {
  return limit ? galleryItems.slice(0, limit) : galleryItems
}

export function getGalleryById(id: string): GalleryItem | undefined {
  return galleryItems.find((g) => g.id === id)
}
