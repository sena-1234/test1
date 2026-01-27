import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

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
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact', href: '#contact' },
  ];

  // Robust Logo Component - Significantly increased size
  const Logo = () => (
    <div className="flex items-center gap-3">
      {(!logoError) ? (
        <img
          src="https://i.ibb.co/y2BzZWm/logo.png"
          alt="Terara Printing Press"
          className={`h-12 md:h-24 w-auto object-contain transition-all duration-500 group-hover:scale-110 ${isScrolled ? 'md:h-16 scale-90' : 'scale-100'} ${!isScrolled ? 'brightness-0 invert' : ''}`}
          onError={() => setLogoError(true)}
        />
      ) : (
        <div className={`flex items-center gap-2 transition-all duration-500 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
          <svg viewBox="0 0 100 80" className={`h-12 md:h-20 w-auto ${isScrolled ? 'text-brand-red' : 'text-white'}`} fill="currentColor">
            <path d="M20,60 Q35,20 50,45 T80,30 L80,70 L20,70 Z" />
            <rect x="45" y="10" width="10" height="60" rx="2" />
          </svg>
          <div className="flex flex-col">
            <span className={`text-[10px] md:text-sm font-bold tracking-widest leading-none ${isScrolled ? 'text-brand-red' : 'text-white/80'}`}>ተራራ ማተሚያ ቤት</span>
            <span className={`text-xl md:text-4xl font-black tracking-tighter leading-none mt-1 ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>TERARA</span>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-lg py-1' : 'bg-transparent py-2 md:py-4'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="group">
          <Logo />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-bold uppercase tracking-wide hover:text-brand-red transition-colors ${isScrolled ? 'text-brand-dark' : 'text-white'
                }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-brand-red text-white px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide hover:bg-red-700 transition-all hover:shadow-lg flex items-center gap-2"
          >
            <Phone size={16} /> Get a Quote
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 rounded-md transition-colors ${isScrolled ? 'text-brand-dark' : 'text-white bg-white/10'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 py-6 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-bold text-brand-dark border-b border-gray-100 pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-brand-red text-white text-center py-4 rounded-md font-bold uppercase mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;