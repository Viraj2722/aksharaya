'use client'

import Image from 'next/image'
import { Product } from '@/types/product'

interface Props {
  product: Product
}

export function ProductDetail({ product }: Props) {
  const mainImage = product.images[0]

  return (
    /*
      Framer Information: horizontal stack, gap 20px, align start
      Left (ProductImage): 1fr — main image 510px + thumbnails
      Right (Description): 1fr — chip + title + button + accordion
    */
    <div className="product-detail-layout">

      {/* Left — Single product image */}
      <div className="product-detail-images">
        {/* Main image: Framer ProductImages height=510px, aspectRatio=1 */}
        <div className="product-main-image">
          <Image
            src={mainImage}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Right — Product Details */}
      <div className="product-detail-info">

        {/* NameChipPrice: gap 24px */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

          {/* NameChip: gap 16px — chip + (title + subtitle) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            {/* Chip — "Popular Item": H5 style */}
            <div style={{ display: 'inline-flex' }}>
              <span style={{
                fontSize: '13px', lineHeight: '19px', letterSpacing: '-0.04em',
                color: 'rgb(115, 115, 115)', border: '1px solid rgb(230, 230, 230)',
                padding: '4px 12px', fontWeight: 400,
              }}>
                Popular Item
              </span>
            </div>

            {/* ProductName: gap 8px — title + subtitle */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {/* Title — H2: 22px, 28lh, -0.01em */}
              <h1 style={{ fontSize: '22px', lineHeight: '28px', letterSpacing: '-0.01em', fontWeight: 400, color: 'rgb(28, 28, 28)', margin: 0 }}>
                {product.title}
              </h1>
              {/* Subtitle — Body: 16px, 22lh, -0.02em */}
              {product.subtitle && (
                <p style={{ fontSize: '16px', lineHeight: '22px', letterSpacing: '-0.02em', color: 'rgb(115, 115, 115)', margin: 0 }}>
                  {product.subtitle}
                </p>
              )}
            </div>

          </div>
        </div>

        {/* ButtonDescription: gap 24px — button + accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

        {/* CTA Button */}
        <div>
          <a
            href={product.buyLink || '#'}
            target={product.buyLink && product.buyLink !== '#' ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="group relative overflow-hidden block w-full text-center"
            style={{
              backgroundColor: 'rgb(28, 28, 28)', color: 'white',
              padding: '14px 24px', fontSize: '18px', lineHeight: '22px',
              letterSpacing: '-0.02em', fontWeight: 500, textDecoration: 'none',
            }}
          >
            <span className="relative z-10">CONTACT NOW</span>
            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover:left-[100%] transition-all duration-700 ease-in-out" />
          </a>
          <p style={{ fontSize: '13px', color: 'rgb(150, 150, 150)', marginTop: '8px', textAlign: 'center', lineHeight: '1.5' }}>
            You will be redirected to a Google Form for further enquiry.
          </p>
        </div>

        </div>{/* end ButtonDescription */}
      </div>
    </div>
  )
}
