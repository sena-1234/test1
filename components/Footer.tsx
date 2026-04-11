import React, { useState } from "react";
import { ArrowUp, Facebook, Instagram, Linkedin, Send } from "lucide-react";

const Footer: React.FC = () => {
  const [logoError, setLogoError] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="bg-brand-dark border-t border-gray-800 text-white pt-16 pb-8"
      aria-label="Site footer"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12">
          <div className="md:col-span-1">
            <div className="mb-8">
              {!logoError ? (
                <img
                  src="/logo-hq.webp"
                  alt="Terara Printers"
                  className="h-20 md:h-28 w-auto object-contain brightness-0 invert"
                  onError={() => setLogoError(true)}
                  loading="lazy"
                  width={220}
                  height={112}
                  decoding="async"
                />
              ) : (
                <div className="flex items-center gap-4">
                  <svg
                    viewBox="0 0 100 80"
                    className="h-24 md:h-32 w-auto text-brand-red"
                    fill="currentColor"
                  >
                    <path d="M20,60 Q35,20 50,45 T80,30 L80,70 L20,70 Z" />
                    <rect x="45" y="10" width="10" height="60" rx="2" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-sm md:text-base font-bold tracking-widest leading-none text-brand-red">
                      Terara Printers
                    </span>
                    <span className="text-3xl md:text-5xl font-black tracking-tighter leading-none mt-1 text-white">
                      TERARA
                    </span>
                  </div>
                </div>
              )}
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Addis Ababa based printing company offering offset, digital, large
              format, and packaging solutions for clients across Ethiopia since
              2017 G.C., including brochure printing in Ethiopia and Addis Ababa that makes a strong first impression.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/teraraprinters"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Terara Printers on Facebook"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/teraraprinters"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Terara Printers on Instagram"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@teraraprinters"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Terara Printers on TikTok"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.89-.23-2.74.24-.81.47-1.38 1.31-1.63 2.21-.16.61-.17 1.25-.09 1.88.27 1.25 1.13 2.35 2.22 2.94.67.35 1.41.54 2.15.54 1.56 0 3.01-.93 3.58-2.38.22-.55.3-1.14.32-1.74.01-3.1-.01-6.2.01-9.3z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/teraraprinting/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Terara Printers on LinkedIn"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://t.me/teraraprints"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Terara Printers on Telegram"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors"
              >
                <Send size={20} />
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-6 border-b border-brand-red pb-2 inline-block">
              Explore
            </h2>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a
                  href="#home"
                  className="hover:text-brand-red transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-brand-red transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#values"
                  className="hover:text-brand-red transition-colors"
                >
                  Our Values
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-brand-red transition-colors"
                >
                  Printing Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-brand-red transition-colors"
                >
                  Our Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-brand-red transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-brand-red transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-6 border-b border-brand-red pb-2 inline-block">
              Services
            </h2>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a
                  href="#services"
                  className="hover:text-brand-red transition-colors"
                >
                  Offset Printing
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-brand-red transition-colors"
                >
                  Digital Printing
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-brand-red transition-colors"
                >
                  Large Format
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-brand-red transition-colors"
                >
                  Branding & Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-brand-red transition-colors"
                >
                  Custom Packaging
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Terara Printers. Beyond Your
            Expectations.
          </p>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-brand-red transition-colors shadow-lg"
            aria-label="Scroll back to top"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
