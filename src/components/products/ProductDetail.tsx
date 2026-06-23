'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Plus } from 'lucide-react'
import { Product } from '@/types/product'

interface Props {
  product: Product
}

export function ProductDetail({ product }: Props) {
  // Use the 5 images fetched from WordPress ACF
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
    <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">

      {/* Left Column — Image Gallery */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        {/* Main Image */}
        <div className="relative w-full aspect-[4/3] md:aspect-square bg-[#f0f0f0] overflow-hidden">
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

        {/* Thumbnails — only render if more than 1 image */}
        {images.length > 1 && (
          <div className="grid grid-cols-5 gap-4">
            {images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative w-full aspect-square bg-[#f0f0f0] cursor-pointer overflow-hidden border transition-all duration-300 ${
                  activeImageIndex === idx
                    ? 'border-[#ff6600]'
                    : 'border-transparent hover:border-gray-300'
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 20vw, 10vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Column — Product Details */}
      <div className="w-full md:w-1/2 flex flex-col !pt-2 lg:!pt-0">

        {/* Popular Item Tag (Always visible as requested) */}
        <div className="!mb-6 inline-flex">
          <span className="text-[18px] text-[#888888] border border-[#e5e5e5] !px-3 !py-1.5 font-normal">
            Popular Item
          </span>
        </div>

        {/* Title */}
        <h1 className={`text-[26px] md:text-[30px] lg:text-[32px] text-[#111111] font-bold leading-tight ${product.subtitle ? '!mb-1' : '!mb-3'}`}>
          {product.title}
        </h1>

        {/* Subtitle */}
        {product.subtitle && (
          <p className="text-[18px] text-[#888888] leading-relaxed !mb-5">
            {product.subtitle}
          </p>
        )}

        {/* Price (Commented out per user request) */}
        {/* {product.price && (
          <p className="text-[18px] text-[#888888] leading-relaxed !mb-5">
            RS {product.price}
          </p>
        )} */}

        {/* CTA Button */}
        <div className="w-full flex flex-col items-center !mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a
            href={product.buyLink || '#'}
            target={product.buyLink && product.buyLink !== '#' ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="relative cursor-pointer overflow-hidden group w-full bg-[#1c1c1c] text-white !py-4 text-[18px] font-medium tracking-wide hover:bg-black transition-colors !mb-2 text-center block"
          >
            <span className="relative z-10">CONTACT NOW</span>
            {/* Shine effect */}
            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover:left-[100%] transition-all duration-700 ease-in-out" />
          </a>
          <p className="text-[13px] text-[#888888]">
            * You will be redirected to a Google Form to enter your details
          </p>
        </div>

        {/* Description Accordion */}
        {product.description && (
          <div className="border border-[#e5e5e5] opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={() => setIsAccordionOpen(!isAccordionOpen)}
              className="w-full flex items-center justify-between !px-5 !py-3 bg-white hover:bg-gray-50 transition-colors group"
            >
              <span className="text-[18px] text-[#333333] font-normal">Description</span>
              <Plus
                size={20}
                className={`transition-all duration-500 ease-in-out transform group-hover:scale-125 ${
                  isAccordionOpen ? 'rotate-[315deg] text-[#ff6600]' : 'rotate-0 text-[#111111]'
                }`}
              />
            </button>

            {/* Accordion Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isAccordionOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="!px-5 !pb-5 !pt-3 text-[15px] text-[#888888] leading-relaxed">
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
