export function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer
      className="footer-mobile-fix w-full bg-[#f2f2f2] items-center"
    >
      <style>{`
        @media (min-width: 1024px) {
          .desktop-px-fix-left { padding-left: 0 !important; }
          .desktop-px-fix-right { padding-right: 0 !important; }
        }
        @media (min-width: 768px) {
          .footer-mobile-fix { height: 134px !important; display: flex !important; flex-direction: column !important; justify-content: center !important; margin-top: auto !important; }
          .mobile-divider { display: none !important; }
        }
        @media (max-width: 767px) {
          .footer-mobile-fix { 
            min-height: 134px !important; 
            padding-top: 0px !important; 
            padding-bottom: 60px !important; 
            margin-top: 16px !important;
          }
          .footer-inner { flex-direction: column !important; align-items: center !important; text-align: center !important; gap: 24px !important; }
          .mobile-divider {
            display: block !important;
            width: 100%;
            height: 1px;
            background-color: #d1d5db;
            margin: 0 auto 32px auto;
          }
        }
      `}</style>

      {/* Full-bleed desktop divider */}
      <div className="w-full hidden md:block" style={{ height: '1px', backgroundColor: '#d1d5db', marginBottom: '30px' }} />

      <div className="page-container w-full">
        <div className="mobile-divider" />
        <div className="flex items-center justify-between footer-inner w-full">
          {/* Left: copyright text */}
          <p className="text-[18px] desktop-px-fix-left" style={{ color: '#555555' }}>
            Aksharaya &copy; {new Date().getFullYear()}.{' '}
            <span>Connect with us on </span>
            <br className="block md:hidden" />
            <a
              href="https://www.facebook.com/Aksharaya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
              style={{ color: '#555555' }}
            >
              Facebook
            </a>
            <span> and </span>
            <a
              href="#"
              className="hover:text-black transition-colors"
              style={{ color: '#555555' }}
            >
              Instagram
            </a>
          </p>

          {/* Right: social icons */}
          <div className="flex items-center justify-end gap-3 desktop-px-fix-right">
            <a href="https://www.facebook.com/Aksharaya" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="group flex items-center gap-2 text-[#555555] hover:text-black transition-colors">
              <FacebookIcon />
              <span className="max-w-0 opacity-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[80px] transition-all duration-500 ease-in-out whitespace-nowrap text-[14px] font-medium text-black">Facebook</span>
            </a>
            <a href="#" aria-label="Instagram" className="group flex items-center gap-2 text-[#555555] hover:text-black transition-colors">
              <InstagramIcon />
              <span className="max-w-0 opacity-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[80px] transition-all duration-500 ease-in-out whitespace-nowrap text-[14px] font-medium text-black">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
