'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-[#f2f2f2]">
      <Navbar />


      <div
        className="page-container w-full pb-0 lg:pb-20"
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '30px',
          gap: '24px',
        }}
      >

        {/* Form row */}
        <div
          className="flex flex-col"
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

        </div>
      </div>

      <Footer />
    </div>
  );
}
