'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types/product'


interface RelatedProductsCarouselProps {
  products: Product[]
}

export function RelatedProductsCarousel({ products }: RelatedProductsCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' })
    }
  }

  if (products.length === 0) return null

  // Card image height is 280px; arrow (48px) should be centered at 140px from top of carousel content
  // Title "Related Products" is 28px + 40px margin = 68px above the cards
  const arrowTopOffset = 68 + 140 - 24

  return (
    <div className="group/carousel w-full relative">
      {/* Title */}
      <h2 style={{ fontSize: '22px', lineHeight: '28px', fontWeight: 600, color: 'rgb(28, 28, 28)', margin: '0 0 40px 0' }}>
        Related Products
      </h2>

      {/* Left arrow */}
      <button
        onClick={scrollLeft}
        className="absolute z-10 w-12 h-12 items-center justify-center bg-white hover:bg-gray-50 rounded-full shadow-md transition-all duration-200 flex opacity-100 md:opacity-0 group-hover/carousel:opacity-100 related-arrow related-arrow-left"
        style={{ left: '-24px', top: `${arrowTopOffset}px` }}
        aria-label="Scroll left"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      {/* Right arrow */}
      <button
        onClick={scrollRight}
        className="absolute z-10 w-12 h-12 items-center justify-center bg-white hover:bg-gray-50 rounded-full shadow-md transition-all duration-200 flex opacity-100 md:opacity-0 group-hover/carousel:opacity-100 related-arrow related-arrow-right"
        style={{ right: '-24px', top: `${arrowTopOffset}px` }}
        aria-label="Scroll right"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-x-[15px] pb-8 snap-x snap-mandatory hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          @media (max-width: 767px) {
            .related-arrow { width: 32px !important; height: 32px !important; top: -2px !important; }
            .related-arrow-left { left: auto !important; right: 40px !important; }
            .related-arrow-right { right: 0 !important; }
          }
        `}</style>

        {products.map((product) => (
          <div key={product.id} className="flex flex-col group cursor-pointer shrink-0 w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.33px)] snap-start">
            {/* Image */}
            <Link href={`/products/${product.slug}`} className="relative w-full overflow-hidden bg-[#f0f0f0] shrink-0 block" style={{ height: '280px' }}>
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </Link>
            {/* Details — same as products listing page */}
            <Link href={`/products/${product.slug}`} style={{ paddingTop: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                <h3 style={{ fontSize: '18px', lineHeight: '24px', letterSpacing: '-0.01em', fontWeight: 400, color: 'rgb(28, 28, 28)', margin: 0 }}>
                  {product.title}
                </h3>
                {product.price && (
                  <span style={{ fontSize: '14px', lineHeight: '20px', letterSpacing: '-0.01em', color: 'rgb(115, 115, 115)', whiteSpace: 'nowrap', flexShrink: 0, marginTop: '2px' }}>
                    ₹ {product.price}
                  </span>
                )}
              </div>
              <p style={{ fontSize: '13px', lineHeight: '19px', letterSpacing: '-0.04em', color: 'rgb(172, 172, 172)', margin: 0 }}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
