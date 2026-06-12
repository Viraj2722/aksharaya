'use client';

import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer, FacebookIcon, TwitterIcon, InstagramIcon, PinterestIcon } from '@/components/layout/Footer';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <div className="max-w-[1400px] !mx-auto !px-4 sm:!px-6 lg:!px-8 w-full !pb-24 !pt-10 md:!pt-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left Column: Contact Form */}
          <div className="lg:col-span-8 bg-[#f4f4f4] !rounded-3xl !p-8 md:!p-10 lg:min-h-[502px]">
            <form className="space-y-4">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div className="flex flex-col" style={{ gap: '12px' }}>
                  <label htmlFor="name" className="text-[#333333] font-medium text-[18px]">Name*</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your Name"
                    className="w-full bg-white !rounded-xl !px-5 !py-4 text-[16px] outline-none !border-none shadow-sm focus:ring-2 focus:ring-[#e5e5e5] transition-shadow placeholder:text-[#a0a0a0]"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col" style={{ gap: '12px' }}>
                  <label htmlFor="email" className="text-[#333333] font-medium text-[18px]">Email*</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email address"
                    className="w-full bg-white !rounded-xl !px-5 !py-4 text-[16px] outline-none !border-none shadow-sm focus:ring-2 focus:ring-[#e5e5e5] transition-shadow placeholder:text-[#a0a0a0]"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col" style={{ gap: '12px', marginTop: '24px' }}>
                <label htmlFor="subject" className="text-[#333333] font-medium text-[18px]">Subject*</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="w-full bg-white !rounded-xl !px-5 !py-4 text-[16px] outline-none !border-none shadow-sm focus:ring-2 focus:ring-[#e5e5e5] transition-shadow placeholder:text-[#a0a0a0]"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col" style={{ gap: '12px', marginTop: '24px' }}>
                <label htmlFor="message" className="text-[#333333] font-medium text-[18px]">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Write Something"
                  className="w-full bg-white !rounded-xl !px-5 !py-4 text-[16px] outline-none !border-none shadow-sm focus:ring-2 focus:ring-[#e5e5e5] transition-shadow resize-y placeholder:text-[#a0a0a0]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-[#111111] text-white hover:bg-white hover:text-[#111111] hover:-translate-y-1 hover:shadow-lg transform font-medium !rounded-full transition-all duration-300 cursor-pointer text-[18px] flex items-center justify-center" 
                  style={{ marginTop: "40px", width: "161px", height: "48px" }}
                >
                  Send Message
                </button>
              </div>

            </form>
          </div>

          {/* Right Column: About Section */}
          <div className="lg:col-span-4 flex flex-col justify-start lg:pl-4 about-me-mt">
            <h3
              className="text-[25px] font-bold about-me-heading"
              style={{ color: '#111111', marginBottom: '8px' }}
            >
              About Me
            </h3>

            {/* Large logo */}
            <div className="mb-6 about-me-logo-wrapper">
              <Image
                src="/single-logo.svg"
                alt="Aksharaya logo mark"
                width={440}
                height={160}
                className="w-full max-w-[440px] h-auto object-contain transition-transform duration-500 ease-in-out hover:scale-105 about-me-logo"
              />
            </div>

            {/* Description */}
            <p
              className="text-[17px] leading-snug mb-5 about-me-para"
              style={{ color: '#444444' }}
            >
              Aksharaya is an initiative dedicated to exploring typography, letterforms, and visual language across cultures. It brings together designers, educators, and researchers to share knowledge, ideas, and practices in the field of type and communication design. Through events like Typography Day, talks, and installations, Aksharaya fosters dialogue around the evolving role of typography in contemporary society.
            </p>

            {/* Follow section */}
            <div className="about-me-follow" style={{ marginTop: '20px' }}>
              <p className="text-[18px] font-medium" style={{ color: '#111111', marginBottom: '20px' }}>
                <span className="font-normal">Follow </span>
                <span className="font-bold">Aksharaya</span>
              </p>
              <div className="flex items-center gap-3 about-me-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Follow on Facebook" className="group flex items-center gap-2 text-gray-700 hover:text-black transition-colors">
                  <FacebookIcon />
                  <span className="max-w-0 opacity-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[80px] transition-all duration-500 ease-in-out whitespace-nowrap text-[14px] font-medium text-black">
                    Facebook
                  </span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Follow on Twitter" className="group flex items-center gap-2 text-gray-700 hover:text-black transition-colors">
                  <TwitterIcon />
                  <span className="max-w-0 opacity-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[80px] transition-all duration-500 ease-in-out whitespace-nowrap text-[14px] font-medium text-black">
                    Twitter
                  </span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow on Instagram" className="group flex items-center gap-2 text-gray-700 hover:text-black transition-colors">
                  <InstagramIcon />
                  <span className="max-w-0 opacity-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[80px] transition-all duration-500 ease-in-out whitespace-nowrap text-[14px] font-medium text-black">
                    Instagram
                  </span>
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Follow on Pinterest" className="group flex items-center gap-2 text-gray-700 hover:text-black transition-colors">
                  <PinterestIcon />
                  <span className="max-w-0 opacity-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[80px] transition-all duration-500 ease-in-out whitespace-nowrap text-[14px] font-medium text-black">
                    Pinterest
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
