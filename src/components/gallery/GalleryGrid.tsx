'use client'

import { useState } from 'react'
import Image from 'next/image'
import { GalleryItem } from '@/types/gallery'

// Mosaic layout pattern — cycles every 8 items to match original design
const LAYOUT_PATTERN = [
  { colSpan: 'col-span-4 md:col-span-2', heightClass: 'h-[300px] md:h-[400px]' },
  { colSpan: 'col-span-4 md:col-span-2', heightClass: 'h-[300px] md:h-[400px]' },
  { colSpan: 'col-span-2 md:col-span-1', heightClass: 'h-[250px] md:h-[350px]' },
  { colSpan: 'col-span-2 md:col-span-1', heightClass: 'h-[250px] md:h-[350px]' },
  { colSpan: 'col-span-4 md:col-span-2', heightClass: 'h-[250px] md:h-[350px]' },
  { colSpan: 'col-span-4',               heightClass: 'h-[350px] md:h-[450px]' },
  { colSpan: 'col-span-4 md:col-span-2', heightClass: 'h-[300px] md:h-[400px]' },
  { colSpan: 'col-span-4 md:col-span-2', heightClass: 'h-[300px] md:h-[400px]' },
]

interface Props {
  items: GalleryItem[]
}

export function GalleryGrid({ items }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-4 !gap-4 md:!gap-6">
      {items.map((item, index) => {
        const layout = LAYOUT_PATTERN[index % LAYOUT_PATTERN.length]
        return (
          <div
            key={item.id}
            onClick={() => setActiveId(activeId === item.id ? null : item.id)}
            className={`${layout.colSpan} ${layout.heightClass} relative group overflow-hidden bg-[#f0f0f0] cursor-pointer`}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`object-cover transition-all duration-700 group-hover:scale-105 group-hover:blur-[2px] ${
                activeId === item.id ? 'scale-105 blur-[2px]' : ''
              }`}
              priority={index < 2}
            />

            {/* Dark Gradient Overlay on Hover/Click */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${
                activeId === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}
            />

            {/* Title — slides up on hover/click */}
            <div
              className={`absolute bottom-0 left-0 w-full !p-6 md:!p-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                activeId === item.id
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
              }`}
            >
              <h3 className="text-white text-[20px] md:text-[24px] font-medium tracking-wide">
                {item.title}
              </h3>
            </div>
          </div>
        )
      })}
    </div>
  )
}
