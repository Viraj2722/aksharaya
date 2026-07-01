"use client"

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import { useState } from 'react'

const teamMembers = [
  {
    id: 1,
    name: 'VINAY SYNEKAR',
    role: 'Calligrapher & Type Designer',
    image: 'https://aksharaya.org/wp-content/uploads/2016/03/Vinay-Saynekar.jpg',
    bio: 'Worked on various calligraphy and typography projects under guidance and leadership of Prof R K Joshi. Was associated with Chimanlals Pvt. Ltd. as chief design consultant. Teaching Calligraphy and Typography at Sir J J Institute of Applied Art, Mumbai, since 26 years. Participated in a group show ‘3 Calligraphers’. Type-designer. Designed Kannada, Bengali, Assamese and Devnagari text fonts, essentially for corporate communication. Written a book on Calligraphy - Aksharsaundarya: Nirmiti ani Itihas, for calligraphy enthusiasts. Calligraphy Lectures in various institutes and groups. Participated and organized workshops for Children to create awareness about calligraphy. Currently involved in calligraphic works which interests him.',
  },
  {
    id: 2,
    name: 'SANTOSH KSHIRSAGAR',
    role: 'Calligrapher, Type & Visual Communication Designer',
    image: 'https://aksharaya.org/wp-content/uploads/2016/03/Santosh-Kshirsagar.jpg',
    bio: 'Born: 1967. B.F.A., M.F.A. (by research) from Sir J.J. Institute of Applied Art. Mumbai, India. Teaching Indian (especially Devnagari) Calligraphy, Typography and visual communication design, from last 20 years at JJIAA, Mumbai. Type Design for Microsoft (first OTF for window xp) in Gujrathi & Oriya scripts. Illustrated talks on Indian Calligraphy in Germany, Belgium, London and Japan. As well work exhibited in Australia, USA. Show in Japan with Prof. Mori Kooun. Conducted more than hundreds of workshops, in India. Many publications. Academic consultant to governmental organizations and many institutions. Now pursuing Ph.D. at IDC, Indian Institute of Technology.',
  },
  {
    id: 3,
    name: 'SHUBHANAND JOG',
    role: 'Faculty, Calligraphy & Design',
    image: 'https://aksharaya.org/wp-content/uploads/2016/03/Shubhanand-Jog.jpg',
    bio: 'B.F.A., M.F.A. (by research) from Sir J.J. Institute of Applied Art. Mumbai, India. Teaching faculty Member, from the last 20 years at Sir J. J. Institute of Applied Art, Mumbai. Produced & Directed “Angel of Peace” a short film on “World Peace” which was screened at the Texas International Film Festival, World social forum (Mumbai) & Mumbai International Film Festival (Competion Section). Designed and Calligraphed “Citations - (Manapatras)” for Shri. R. K. Laxman, Shri. Ajit Wadekar Shri. Vinda Karandikar, Shri. Julio f. Rebero, Pt. Hari Prasad Chaurasia and many more. He has conducted more than 30 Workshops on Calligraphy & has participated in 12 Creative Seminar’s and Workshops.',
  },
  {
    id: 4,
    name: 'VIKRAM GAIKWAD',
    role: 'Co-founder & Chief Creative Officer, Underdog',
    image: 'https://aksharaya.org/wp-content/uploads/2016/03/Vikram-Gaikwad.jpg',
    bio: 'Co-founder and Chief Creative Officer, Underdog. Vikram graduated from Sir J. J. Institute of Applied Art in 1990. His career spans Lintas, Enterprise, SSC&B Lintas, Leo Burnett, Grey Worldwide and Creativeland Asia, before co-founding UNDERDOG in 2014. His work has won golds and silvers at Cannes, One Show, D&AD, Spikes Asia and Clio, and he has judged several national and international advertising award shows. While working closely with the late Prof. R. K. Joshi for over a decade, Vikram contributed to design and type design projects through IDC, IIT, including fonts for Microsoft Windows XP in Tamil and Malayalam.',
  },
  {
    id: 5,
    name: 'SARANG KULKARNI',
    role: 'Type Designer, Proprietor of WhiteCrow Design Management',
    image: 'https://aksharaya.org/wp-content/uploads/2016/03/Sarang-Kulkarni.jpg',
    bio: 'Sarang Kulkarni specializes in type design, calligraphy and typography. He is a graduate of Sir J. J. Institute of Applied Arts in 2002 and is the proprietor of WhiteCrow Design Management. WhiteCrow has handled various projects in Indian and Latin scripts, with a vast portfolio of graphic and identity design, as well as calligraphy, commissioned by both Indian and international clients. The studio has also designed all the typefaces for Vodafone and Virgin Mobile’s multi-lingual branding in India. Sarang has worked with Prof. R. K. Joshi and Prof. Santosh Kshirsagar, and has designed a Gurmukhi typeface for Microsoft Corporation for their operating system Windows XP.',
  },
  {
    id: 6,
    name: 'GIRISH DALVI',
    role: 'Faculty of Design, IDC, IIT Bombay',
    image: 'https://aksharaya.org/wp-content/uploads/2016/03/Girish-Dalvi.jpg',
    bio: 'Girish Dalvi is an inter-disciplinary faculty of Design at the Industrial Design Centre (IDC), IIT Bombay, teaching Visual Design, Interaction Design and Design research. His research spans Devanagari Typography and Indic script interaction design. He holds a Bachelor’s in Computer Engineering, a Master’s in Design, and a Ph.D. from IIT Bombay, with his doctoral research on the theoretical modeling of Devanagari typefaces. As a type designer he has co-created several typefaces for Indian scripts, including the open-source Ek Mukta family, LifeOk Devanagari and Star Bengali.',
  },
  {
    id: 7,
    name: 'PRADNYA NAIK',
    role: 'Type, Lettering & Calligraphy Designer',
    image: 'https://aksharaya.org/wp-content/uploads/2016/03/Pradnya-Naik.jpg',
    bio: 'Pradnya Naik is a Mumbai based designer specialised in the field of Type Design, Lettering and Calligraphy. She graduated from Sir J.J. Institute of Applied Art, in 2009. Having worked as a Graphic Designer with WhiteCrow Designs, she was involved in type design projects for multiple Indic scripts like Devanagari, Gujarati and Urdu. After pursuing her post-graduation from Type & Media at the Royal Academy of Arts, The Hague, Netherlands in 2012, she worked as a Research Associate at IDC school of design at IIT, Bombay with on projects like the Analysis of Jain Manuscript calligraphy, Devanagari Font Search Tool and Glyph Diaries. She has been involved in teaching calligraphy, typography and type design at various design schools across India. The past and the future of Indian scripts is something that fascinates her, right from calligraphy studies from manuscripts to and current type technologies and is always seeking new ways to further her knowledge of Indic Type.',
  },
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
    <div className="bg-[#f2f2f2]">
      <Navbar />
      <main className="flex-1">
        <div
          style={{
            paddingTop: '60px',
            paddingBottom: '24px'
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
                      src={member.image}
                      alt={member.name}
                      fill
                      quality={95}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 3}
                      className="object-cover transition-all duration-500"
                      style={{ objectPosition: 'center top' }}
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

                {/* Back Content (Bio on Hover / Click) — scrollable so long bios never overflow the card */}
                <div className={`team-bio absolute inset-0 flex items-center justify-center text-center transition-opacity duration-500 bg-white z-20 pointer-events-none overflow-y-auto ${clickedId === member.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} style={{ padding: '32px 28px' }}>
                  <p className="text-[13px] leading-relaxed" style={{ color: '#666666', margin: 0 }}>
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
    </div>
  )
}
