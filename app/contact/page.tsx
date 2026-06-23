'use client';

import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer, FacebookIcon, TwitterIcon, InstagramIcon, PinterestIcon } from '@/components/layout/Footer';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <style>{`
        /* Horizontal padding — mobile base, desktop unchanged */
        .contact-page-container { padding-left: 20px; padding-right: 20px; }
        @media (min-width: 640px) {
          .contact-page-container { padding-left: 32px; padding-right: 32px; }
        }
        @media (min-width: 768px) {
          .contact-page-container { padding-left: 40px; padding-right: 40px; }
        }
        @media (min-width: 1024px) {
          .contact-page-container { padding-left: 150px; padding-right: 150px; }
        }
        @media (min-width: 1280px) {
          .contact-page-container { padding-left: 155px; padding-right: 140px; }
        }

        /* Form panel responsive padding */
        .contact-form-panel { padding: 24px 16px; }
        @media (min-width: 640px) {
          .contact-form-panel { padding: 32px 24px; }
        }
        @media (min-width: 1024px) {
          .contact-form-panel { padding: 40px 32px; }
        }

        /* Name+Email row gap */
        .name-email-row { gap: 16px; }
        @media (min-width: 768px) {
          .name-email-row { gap: 40px; }
        }

        /* Fields container gap */
        .fields-container { gap: 16px; }
        @media (min-width: 768px) {
          .fields-container { gap: 20px; }
        }

        /* Form outer gap (fields → button) */
        .contact-form { gap: 24px; }
        @media (min-width: 1024px) {
          .contact-form { gap: 40px; }
        }

        /* Sidebar width */
        .contact-sidebar { width: 100%; }
        @media (min-width: 1024px) {
          .contact-sidebar { width: 25%; flex-shrink: 0; }
        }

        /* Logo size */
        .contact-logo { width: 100%; max-width: 267px; height: auto; }
        @media (min-width: 1024px) {
          .contact-logo { width: 267px; height: 80px; }
        }

        /* Input font inherit */
        .contact-input { font-family: inherit; }
        .contact-input:focus { outline: none; box-shadow: 0 0 0 2px rgb(230,230,230); }
      `}</style>

      <div
        className="w-full contact-page-container"
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
              backgroundColor: 'rgb(245, 245, 245)',
              borderRadius: '24px',
              border: '1px solid rgb(230, 230, 230)',
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
              alignItems: 'center',
            }}
          >
            {/* About block */}
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                alignItems: 'center',
                overflow: 'hidden',
              }}
            >
              <h3
                style={{
                  width: '100%',
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
                width={267}
                height={80}
                className="contact-logo"
                style={{ objectFit: 'contain', flexShrink: 0 }}
              />

              <p
                style={{
                  width: '100%',
                  fontSize: '16px',
                  lineHeight: '22px',
                  letterSpacing: '-0.06em',
                  fontWeight: 400,
                  color: 'rgb(28, 28, 28)',
                  margin: 0,
                  textAlign: 'left',
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
                alignItems: 'center',
                overflow: 'hidden',
              }}
            >
              <p
                style={{
                  width: '100%',
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
