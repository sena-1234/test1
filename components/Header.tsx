import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import QuoteModal from './QuoteModal';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Values', href: '#values' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Clients', href: '#clients' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  // Robust Logo Component - Significantly increased size
  const Logo = () => (
    <div className="flex items-center gap-3">
      {(!logoError) ? (
        <img
          src="/logo-hq.png"
          alt="Terara Printers"
          className={`h-12 md:h-14 w-auto object-contain transition-all duration-500 group-hover:scale-110 scale-90 ${!isScrolled ? 'brightness-0 invert' : ''}`}
          onError={() => setLogoError(true)}
        />
      ) : (
        <div className="flex items-center gap-2 transition-all duration-500 scale-90">
          <svg viewBox="0 0 100 80" className={`h-16 md:h-20 w-auto ${isScrolled ? 'text-brand-red' : 'text-white'}`} fill="currentColor">
            <path d="M20,60 Q35,20 50,45 T80,30 L80,70 L20,70 Z" />
            <rect x="45" y="10" width="10" height="60" rx="2" />
          </svg>
          <div className="flex flex-col">
            <span className={`text-[12px] md:text-base font-bold tracking-widest leading-none ${isScrolled ? 'text-brand-red' : 'text-white/80'}`}>ተራራ ማተሚያ ቤት</span>
            <span className={`text-2xl md:text-5xl font-black tracking-tighter leading-none mt-1 ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>TERARA</span>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-2 border-b border-gray-100'
          : 'bg-black/20 backdrop-blur-md border-b border-white/10 py-2'
          }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <a href="#home" className="group" aria-label="Terara Printers home">
            <Logo />
          </a>

          {/* Nav & CTA */}
          <div className="flex items-center gap-4">
            {/* CTA - Visible on all screens */}
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-brand-red text-white px-4 md:px-5 py-2 rounded-full text-[10px] md:text-sm font-bold uppercase tracking-wide hover:bg-red-700 transition-all hover:shadow-lg flex items-center gap-2"
            >
              <Phone size={14} className="md:w-4 md:h-4" /> <span className="hidden sm:inline">Get a Quote</span><span className="sm:hidden">Quote</span>
            </button>

            {/* Menu Toggle + Hover Menu */}
            <div
              className="relative"
              onMouseEnter={() => setMenuOpen(true)}
              onMouseLeave={() => setMenuOpen(false)}
            >
              <button
                className={`p-2 rounded-md transition-colors ${isScrolled ? 'text-brand-dark bg-gray-100' : 'text-white bg-white/10'}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={menuOpen}
                aria-controls="site-navigation"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Hamburger Menu */}
              <div
                id="site-navigation"
                className={`absolute right-0 top-full mt-3 w-[280px] md:w-[320px] rounded-2xl bg-white shadow-2xl border border-gray-100 py-3 px-4 flex flex-col gap-2 transform transition-all duration-200 ease-out ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
                aria-label="Primary navigation"
                aria-hidden={!menuOpen}
              >
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-base font-bold text-brand-dark border-b border-gray-100 py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="bg-brand-red text-white text-center py-3 rounded-md font-bold uppercase mt-1 text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
};

export default Header;
