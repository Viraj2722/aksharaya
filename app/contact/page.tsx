'use client';

import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer, FacebookIcon, TwitterIcon, InstagramIcon, PinterestIcon } from '@/components/layout/Footer';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f2f2f2]">
      <Navbar />


      <div
        className="page-container w-full"
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '30px',
          paddingBottom: '80px',

          gap: '24px',
        }}
      >

        {/* Form + Sidebar row: stacks on mobile, side-by-side on lg+ */}
        <div
          className="flex flex-col lg:flex-row"
          style={{ gap: '24px', alignItems: 'flex-start' }}
        >

          {/* ── Form Panel ── */}
          <div
            className="contact-form-panel w-full"
            style={{
              flex: '1 1 0%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(230, 230, 230)',
              borderRadius: '24px',
              border: '1px solid rgb(215, 215, 215)',
              overflow: 'hidden',
            }}
          >
            <form className="contact-form" style={{ display: 'flex', flexDirection: 'column' }}>

              {/* Fields */}
              <div className="fields-container" style={{ display: 'flex', flexDirection: 'column' }}>

                {/* Name + Email: stacks on mobile, side-by-side on md+ */}
                <div className="name-email-row flex flex-col md:flex-row">
                  <div style={{ flex: '1 1 0%', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label htmlFor="name" style={{ fontSize: '16px', lineHeight: '22px', color: 'rgb(28, 28, 28)', fontWeight: 400 }}>
                      Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your Name"
                      className="contact-input w-full"
                      style={{
                        backgroundColor: 'rgb(255, 255, 255)',
                        border: '1px solid rgb(230, 230, 230)',
                        borderRadius: '12px',
                        padding: '16px 20px',
                        fontSize: '16px',
                        lineHeight: '22px',
                        color: 'rgb(28, 28, 28)',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  <div style={{ flex: '1 1 0%', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label htmlFor="email" style={{ fontSize: '16px', lineHeight: '22px', color: 'rgb(28, 28, 28)', fontWeight: 400 }}>
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email address"
                      className="contact-input w-full"
                      style={{
                        backgroundColor: 'rgb(255, 255, 255)',
                        border: '1px solid rgb(230, 230, 230)',
                        borderRadius: '12px',
                        padding: '16px 20px',
                        fontSize: '16px',
                        lineHeight: '22px',
                        color: 'rgb(28, 28, 28)',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="subject" style={{ fontSize: '16px', lineHeight: '22px', color: 'rgb(28, 28, 28)', fontWeight: 400 }}>
                    Subject*
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Subject"
                    className="contact-input w-full"
                    style={{
                      backgroundColor: 'rgb(255, 255, 255)',
                      border: '1px solid rgb(230, 230, 230)',
                      borderRadius: '12px',
                      padding: '16px 20px',
                      fontSize: '16px',
                      lineHeight: '22px',
                      color: 'rgb(28, 28, 28)',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                {/* Message */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="message" style={{ fontSize: '16px', lineHeight: '22px', color: 'rgb(28, 28, 28)', fontWeight: 400 }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Write Something"
                    className="contact-input w-full"
                    style={{
                      backgroundColor: 'rgb(255, 255, 255)',
                      border: '1px solid rgb(230, 230, 230)',
                      borderRadius: '12px',
                      padding: '16px 20px',
                      fontSize: '16px',
                      lineHeight: '22px',
                      color: 'rgb(28, 28, 28)',
                      resize: 'vertical',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    backgroundColor: 'rgb(28, 28, 28)',
                    color: 'rgb(255, 255, 255)',
                    border: '1px solid rgb(28, 28, 28)',
                    borderRadius: '999px',
                    width: '161px',
                    height: '48px',
                    fontSize: '16px',
                    fontWeight: 500,
                    fontFamily: 'inherit',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgb(255,255,255)'; e.currentTarget.style.color = 'rgb(28,28,28)'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgb(28,28,28)'; e.currentTarget.style.color = 'rgb(255,255,255)'; }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* ── Sidebar ── */}
          <div
            className="contact-sidebar"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              alignItems: 'flex-start',
            }}
          >
            {/* About block */}
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                alignItems: 'flex-start',
              }}
            >
              <h3
                style={{
                  fontSize: '18px',
                  lineHeight: '24px',
                  letterSpacing: '0px',
                  fontWeight: 600,
                  color: 'rgb(28, 28, 28)',
                  margin: 0,
                }}
              >
                About Me
              </h3>

              <Image
                src="/single-logo.svg"
                alt="Aksharaya logo mark"
                width={320}
                height={96}
                style={{ width: '320px', height: '96px', objectFit: 'contain' }}
              />

              <p
                style={{
                  fontSize: '16px',
                  lineHeight: '22px',
                  letterSpacing: '-0.06em',
                  fontWeight: 400,
                  color: 'rgb(28, 28, 28)',
                  margin: 0,
                }}
              >
                Aksharaya is an initiative dedicated to exploring typography, letterforms, and visual language across cultures. It brings together designers, educators, and researchers to share knowledge, ideas, and practices in the field of type and communication design. Through events like Typography Day, talks, and installations, Aksharaya fosters dialogue around the evolving role of typography in contemporary society.
              </p>
            </div>

            {/* Follow block */}
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                alignItems: 'flex-start',
              }}
            >
              <p
                style={{
                  fontSize: '18px',
                  lineHeight: '24px',
                  letterSpacing: '0px',
                  fontWeight: 400,
                  color: 'rgb(28, 28, 28)',
                  margin: 0,
                }}
              >
                Follow Aksharaya
              </p>

              <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Follow on Facebook" className="group flex items-center gap-2 text-gray-700 hover:text-black transition-colors">
                  <FacebookIcon />
                  <span className="max-w-0 opacity-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[80px] transition-all duration-500 ease-in-out whitespace-nowrap text-sm font-medium text-black">Facebook</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Follow on Twitter" className="group flex items-center gap-2 text-gray-700 hover:text-black transition-colors">
                  <TwitterIcon />
                  <span className="max-w-0 opacity-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[80px] transition-all duration-500 ease-in-out whitespace-nowrap text-sm font-medium text-black">Twitter</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow on Instagram" className="group flex items-center gap-2 text-gray-700 hover:text-black transition-colors">
                  <InstagramIcon />
                  <span className="max-w-0 opacity-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[80px] transition-all duration-500 ease-in-out whitespace-nowrap text-sm font-medium text-black">Instagram</span>
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Follow on Pinterest" className="group flex items-center gap-2 text-gray-700 hover:text-black transition-colors">
                  <PinterestIcon />
                  <span className="max-w-0 opacity-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[80px] transition-all duration-500 ease-in-out whitespace-nowrap text-sm font-medium text-black">Pinterest</span>
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
