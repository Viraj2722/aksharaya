"use client"

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import { useState } from 'react'

const bioText = 'Worked on various calligraphy and typography projects under the guidance of Prof. R. K. Joshi and served as Chief Design Consultant at Chimanlals Pvt. Ltd.. Has been teaching Calligraphy and Typography at Sir J. J. Institute of Applied Art for over 26 years. A type designer known for creating Kannada, Bengali, Assamese, and Devanagari text fonts for corporate communication. Author of the book Aksharsaundarya: Nirmiti ani Itihas and actively conducts lectures and workshops to promote calligraphy and typography.'

const teamMembers = [
  { id: 1, name: 'VINAY SYNEKAR', role: 'Community Outreach Coordinator', bio: bioText },
  { id: 2, name: 'VINAY SYNEKAR', role: 'Community Outreach Coordinator', bio: bioText },
  { id: 3, name: 'VINAY SYNEKAR', role: 'Community Outreach Coordinator', bio: bioText },
  { id: 4, name: 'VINAY SYNEKAR', role: 'Community Outreach Coordinator', bio: bioText },
  { id: 5, name: 'VINAY SYNEKAR', role: 'Community Outreach Coordinator', bio: bioText },
  { id: 6, name: 'VINAY SYNEKAR', role: 'Community Outreach Coordinator', bio: bioText },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.7, ease: "easeOut" } 
  },
}

export default function TeamPage() {
  const [clickedId, setClickedId] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main className="flex-1 py-12 md:py-20">
        <div 
          style={{ 
            backgroundColor: '#f9f9f9', 
            paddingTop: '80px', 
            paddingBottom: '80px' 
          }}
        >
          <div className="page-container w-full">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.id} 
                onClick={() => setClickedId(clickedId === member.id ? null : member.id)}
                variants={cardVariants}
                className="group relative bg-white rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 flex flex-col hover:shadow-xl border border-transparent hover:border-[#e0e0e0]"
                style={{ height: '464px' }}
              >
                {/* Front Content (Image + Name) */}
                <div className={`absolute inset-0 flex flex-col transition-opacity duration-500 z-10 pointer-events-none ${clickedId === member.id ? 'opacity-0' : 'group-hover:opacity-0'}`}>
                  <div className="relative w-full bg-gray-200" style={{ height: '363px' }}>
                    <Image
                      src={`https://picsum.photos/seed/team${member.id}/600/750`}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 3}
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="w-full flex flex-col justify-center items-center text-center bg-white" style={{ height: '101px' }}>
                    <h3 className="text-[18px] font-bold mb-1 tracking-wide" style={{ color: '#111111' }}>
                      {member.name}
                    </h3>
                    <p className="text-[14px] font-medium" style={{ color: '#666666', margin: 0 }}>
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Back Content (Bio on Hover / Click) */}
                <div className={`absolute inset-0 flex items-center justify-center py-8 text-center transition-opacity duration-500 bg-white z-20 pointer-events-none ${clickedId === member.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                  <p className="text-[14px] leading-relaxed" style={{ color: '#666666', paddingLeft: '48px', paddingRight: '48px' }}>
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
