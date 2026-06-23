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
        @media (min-width: 1024px) {
          .contact-page-container { padding-left: 150px; padding-right: 150px; }
        }
        @media (min-width: 1280px) {
          .contact-page-container { padding-left: 155px; padding-right: 140px; }
        }
        .contact-input { font-family: inherit; }
        .contact-input:focus { outline: none; box-shadow: 0 0 0 2px rgb(230,230,230); }
      `}</style>

      {/*
        Framer: Container top=130px (nav top=20px + height=80px + 30px gap)
        padding="0px 45px" → we match navbar padding instead for alignment
        gap="24px" vertical
      */}
      <div
        className="w-full px-4 md:px-8 contact-page-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '30px',
          paddingBottom: '80px',
          gap: '24px',
        }}
      >

        {/*
          Framer ContactForm: horizontal stack, gap="24px"
          stackDirection="horizontal", stackDistribution="start", stackAlignment="start"
        */}
        <div
          className="flex flex-col lg:flex-row"
          style={{ gap: '24px', alignItems: 'flex-start' }}
        >

          {/*
            Framer Form: width="1fr", backgroundColor="/Off-White"=rgb(245,245,245)
            borderRadius="24px", border 1px solid rgb(230,230,230)
            overflow="hidden", padding="40px 32px", gap="40px"
            stackDirection="vertical", stackDistribution="start", stackAlignment="start"
          */}
          <div
            style={{
              flex: '1 1 0%',
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
              backgroundColor: 'rgb(245, 245, 245)',
              borderRadius: '24px',
              border: '1px solid rgb(230, 230, 230)',
              overflow: 'hidden',
              padding: '40px 32px',
            }}
          >
            <form style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

              {/*
                Framer inner Container: gap="20px"
                stackDirection="vertical", stackAlignment="center"
              */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                {/*
                  Framer NameEmailBlock: gap="40px", horizontal
                  stackDistribution="center", stackAlignment="center"
                */}
                <div className="flex flex-col md:flex-row" style={{ gap: '40px' }}>

                  {/* Framer NameField: width="1fr", gap="6px", vertical, stackAlignment="start" */}
                  <div style={{ flex: '1 1 0%', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label htmlFor="name" style={{ fontSize: '16px', lineHeight: '22px', color: 'rgb(28, 28, 28)', fontWeight: 400 }}>
                      Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your Name"
                      className="contact-input"
                      style={{
                        width: '100%',
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

                  {/* Framer EmailField: width="1fr", gap="6px", vertical, stackAlignment="start" */}
                  <div style={{ flex: '1 1 0%', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label htmlFor="email" style={{ fontSize: '16px', lineHeight: '22px', color: 'rgb(28, 28, 28)', fontWeight: 400 }}>
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email address"
                      className="contact-input"
                      style={{
                        width: '100%',
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

                {/* Framer SubjectBlock: gap="6px", vertical, stackAlignment="start" */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="subject" style={{ fontSize: '16px', lineHeight: '22px', color: 'rgb(28, 28, 28)', fontWeight: 400 }}>
                    Subject*
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Subject"
                    className="contact-input"
                    style={{
                      width: '100%',
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

                {/* Framer MessageBlock: gap="6px", vertical, stackAlignment="start" */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="message" style={{ fontSize: '16px', lineHeight: '22px', color: 'rgb(28, 28, 28)', fontWeight: 400 }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Write Something"
                    className="contact-input"
                    style={{
                      width: '100%',
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

              {/* Framer SubmitButton: width="fit-content", height="fit-content" */}
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
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'inherit',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgb(255,255,255)'; e.currentTarget.style.color = 'rgb(28,28,28)'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgb(28,28,28)'; e.currentTarget.style.color = 'rgb(255,255,255)'; }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/*
            Framer Sidebar: width="25%", gap="24px"
            stackDirection="vertical", stackDistribution="center", stackAlignment="center"
            → alignItems: 'center' on sidebar
          */}
          <div
            className="w-full lg:w-[25%]"
            style={{
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              alignItems: 'center',
            }}
          >

            {/*
              Framer About: width="1fr", gap="20px"
              stackDirection="vertical", stackDistribution="center", stackAlignment="center"
              → alignItems: 'center', full width
            */}
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
              {/* Framer AboutMe: width="1fr", font="GF;Mukta-600" → fontWeight 600 */}
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

              {/* Framer Image: width="267px", height="80px" — centered by parent alignItems */}
              <Image
                src="/single-logo.svg"
                alt="Aksharaya logo mark"
                width={267}
                height={80}
                style={{ width: '267px', height: '80px', objectFit: 'contain', flexShrink: 0 }}
              />

              {/*
                Framer Author: width="1fr", stackAlignment="start"
                → description text is left-aligned
              */}
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

            {/*
              Framer Follow: width="1fr", gap="20px"
              stackDirection="vertical", stackDistribution="center", stackAlignment="center"
              → alignItems: 'center', full width
            */}
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
              {/* Framer FollowAksharaya: width="1fr", inlineTextStyle="/TypeScale/H3" → 18px, 24px lh */}
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

              {/* Framer Author: gap="10px", stackAlignment="start" → icons left-aligned */}
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
