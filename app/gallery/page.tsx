'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const galleryItems = [
  // Row 1
  {
    id: 1,
    title: 'Festival of Letters',
    src: 'https://picsum.photos/seed/gal1/1200/800',
    colSpan: 'col-span-4 md:col-span-2',
    heightClass: 'h-[300px] md:h-[400px]',
  },
  {
    id: 2,
    title: 'Newspaper Archives',
    src: 'https://picsum.photos/seed/gal2/1200/800',
    colSpan: 'col-span-4 md:col-span-2',
    heightClass: 'h-[300px] md:h-[400px]',
  },
  // Row 2
  {
    id: 3,
    title: 'Vertical Banners',
    src: 'https://picsum.photos/seed/gal3/800/1200',
    colSpan: 'col-span-2 md:col-span-1',
    heightClass: 'h-[250px] md:h-[350px]',
  },
  {
    id: 4,
    title: 'Protest March',
    src: 'https://picsum.photos/seed/gal4/800/1200',
    colSpan: 'col-span-2 md:col-span-1',
    heightClass: 'h-[250px] md:h-[350px]',
  },
  {
    id: 5,
    title: 'The Photographer\'s Gaze',
    src: 'https://picsum.photos/seed/gal5/1200/600',
    colSpan: 'col-span-4 md:col-span-2',
    heightClass: 'h-[250px] md:h-[350px]',
  },
  // Row 3
  {
    id: 6,
    title: 'Calligraphy Exhibition',
    src: 'https://picsum.photos/seed/gal6/1600/600',
    colSpan: 'col-span-4',
    heightClass: 'h-[350px] md:h-[450px]',
  },
  // Row 4
  {
    id: 7,
    title: 'Abstract Typography',
    src: 'https://picsum.photos/seed/gal7/1200/800',
    colSpan: 'col-span-4 md:col-span-2',
    heightClass: 'h-[300px] md:h-[400px]',
  },
  {
    id: 8,
    title: 'Black and White Calligraphy',
    src: 'https://picsum.photos/seed/gal8/1200/800',
    colSpan: 'col-span-4 md:col-span-2',
    heightClass: 'h-[300px] md:h-[400px]',
  },
];

export default function GalleryPage() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="max-w-[1400px] !mx-auto !px-4 sm:!px-6 lg:!px-8 w-full !pb-10 !pt-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <div className="grid grid-cols-4 !gap-4 md:!gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id} 
              onClick={() => setActiveId(activeId === item.id ? null : item.id)}
              className={`${item.colSpan} ${item.heightClass} relative group overflow-hidden bg-[#f0f0f0] cursor-pointer`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={`object-cover transition-all duration-700 group-hover:scale-105 group-hover:blur-[2px] ${activeId === item.id ? 'scale-105 blur-[2px]' : ''}`}
                priority={index < 2}
              />
              
              {/* Dark Gradient Overlay on Hover/Click */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${activeId === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
              
              {/* Title - Slides up on hover/click */}
              <div className={`absolute bottom-0 left-0 w-full !p-6 md:!p-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${activeId === item.id ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'}`}>
                <h3 className="text-white text-[20px] md:text-[24px] font-medium tracking-wide">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
      </div>

      <Footer />
    </div>
  );
}
