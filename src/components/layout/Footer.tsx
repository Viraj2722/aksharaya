function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

function PinterestIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
    </svg>
  )
}

export function Footer() {
  return (
    <footer
      className="footer-mobile-fix"
      style={{ background: '#ffffff', borderColor: '#e0e0e0', borderTopWidth: '1px' }}
    >
      <style>{`
        @media (min-width: 768px) {
          .footer-mobile-fix { height: 134px !important; display: flex !important; align-items: center !important; margin-top: auto !important; }
          .mobile-divider { display: none !important; }
        }
        @media (max-width: 767px) {
          .footer-mobile-fix { 
            min-height: 134px !important; 
            padding-top: 0px !important; 
            padding-bottom: 60px !important; 
            background: #f2f2f2 !important; 
            border-top: none !important;
          }
          .footer-inner { flex-direction: column !important; align-items: center !important; text-align: center !important; gap: 24px !important; }
          .mobile-divider {
            display: block !important;
            width: 80%;
            max-width: 300px;
            height: 1px;
            background-color: #d1d5db;
            margin: 0 auto 32px auto;
          }
        }
      `}</style>
      <div className="page-container w-full relative">
        <div className="mobile-divider" />
        <div className="flex items-center justify-between footer-inner">
          {/* Left: copyright text */}
          <p className="text-[18px] md:text-base" style={{ color: '#555555' }}>
            Aksharaya &copy; 2016.{' '}
            <span>Connect with us on </span>
            <br className="block md:hidden" />
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
              style={{ color: '#555555' }}
            >
              Facebook
            </a>
            <span> and </span>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
              style={{ color: '#555555' }}
            >
              Twitter
            </a>
          </p>

          {/* Right: social icons */}
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="group flex items-center gap-2 text-[#555555] hover:text-black transition-colors">
              <FacebookIcon />
              <span className="max-w-0 opacity-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[80px] transition-all duration-500 ease-in-out whitespace-nowrap text-[14px] font-medium text-black">
                Facebook
              </span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="group flex items-center gap-2 text-[#555555] hover:text-black transition-colors">
              <TwitterIcon />
              <span className="max-w-0 opacity-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[80px] transition-all duration-500 ease-in-out whitespace-nowrap text-[14px] font-medium text-black">
                Twitter
              </span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="group flex items-center gap-2 text-[#555555] hover:text-black transition-colors">
              <InstagramIcon />
              <span className="max-w-0 opacity-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[80px] transition-all duration-500 ease-in-out whitespace-nowrap text-[14px] font-medium text-black">
                Instagram
              </span>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="group flex items-center gap-2 text-[#555555] hover:text-black transition-colors">
              <PinterestIcon />
              <span className="max-w-0 opacity-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[80px] transition-all duration-500 ease-in-out whitespace-nowrap text-[14px] font-medium text-black">
                Pinterest
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
