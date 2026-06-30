'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Product } from '@/types/product'

interface Props {
  product: Product
}

export function ProductDetail({ product }: Props) {
  const images = product.images
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)

  useEffect(() => {
    if (images.length <= 1) return
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    /*
      Framer Information: horizontal stack, gap 20px, align start
      Left (ProductImage): 1fr — main image 510px + thumbnails
      Right (Description): 1fr — chip + title + button + accordion
    */
    <div className="product-detail-layout">

      {/* Left — Image Gallery */}
      <div className="product-detail-images">
        {/* Main image: Framer ProductImages height=510px, aspectRatio=1 */}
        <div className="product-main-image">
          {images.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={`${product.title} - Image ${idx + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`object-cover transition-opacity duration-700 ease-in-out ${
                idx === activeImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              priority={idx === 0}
            />
          ))}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
            {images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className="relative cursor-pointer overflow-hidden bg-[#f0f0f0]"
                style={{
                  aspectRatio: '1',
                  border: activeImageIndex === idx ? '1.5px solid rgb(28,28,28)' : '1.5px solid transparent',
                  transition: 'border-color 0.2s',
                }}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  sizes="10vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
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

        {/* Description Accordion */}
        {product.description && (
          <div style={{ border: '1px solid rgb(230, 230, 230)' }}>
            <button
              onClick={() => setIsAccordionOpen(!isAccordionOpen)}
              className="w-full flex items-center justify-between hover:bg-gray-50 transition-colors"
              style={{ padding: '16px 20px', background: 'white', cursor: 'pointer', border: 'none' }}
            >
              <span style={{ fontSize: '18px', lineHeight: '24px', color: 'rgb(28, 28, 28)', fontWeight: 400 }}>
                Description
              </span>
              <div
                style={{
                  width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'transform 0.3s ease',
                  transform: isAccordionOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                  fontSize: '24px', color: 'rgb(28,28,28)', lineHeight: 1,
                }}
              >
                +
              </div>
            </button>
            <div
              style={{
                overflow: 'hidden',
                maxHeight: isAccordionOpen ? '400px' : '0px',
                opacity: isAccordionOpen ? 1 : 0,
                transition: 'max-height 0.3s ease, opacity 0.3s ease',
              }}
            >
              <div style={{ padding: '12px 20px 20px', fontSize: '16px', lineHeight: '22px', letterSpacing: '-0.02em', color: 'rgb(115, 115, 115)' }}>
                <p style={{ margin: 0 }}>{product.description}</p>
              </div>
            </div>
          </div>
        )}

        </div>{/* end ButtonDescription */}
      </div>
    </div>
  )
}
