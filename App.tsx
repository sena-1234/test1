import React, { Suspense, lazy, useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

const Values = lazy(() => import("./components/Values"));
const WhyChooseUs = lazy(() => import("./components/WhyChooseUs"));
const Services = lazy(() => import("./components/Services"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Clients = lazy(() => import("./components/Clients"));
const FAQ = lazy(() => import("./components/FAQ"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [loadBelowTheFold, setLoadBelowTheFold] = useState(false);
  const isPortfolioPage =
    typeof window !== "undefined" &&
    window.location.pathname === "/portofollio";

  useEffect(() => {
    if (isPortfolioPage) return;
    if (typeof window === "undefined") return;
    if (window.location.pathname !== "/") return;
    const hash = window.location.hash;
    if (!hash) return;
    const belowFoldHashes = new Set([
      "#values",
      "#services",
      "#portfolio",
      "#portfolio-heading",
      "#clients",
      "#faq",
      "#contact",
    ]);
    if (belowFoldHashes.has(hash)) {
      setLoadBelowTheFold(true);
    }
  }, [isPortfolioPage]);

  useEffect(() => {
    if (isPortfolioPage) return;
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const id = (window as any).requestIdleCallback(
        () => setLoadBelowTheFold(true),
        { timeout: 1000 },
      );
      return () => (window as any).cancelIdleCallback(id);
    }

    const timeoutId = window.setTimeout(() => setLoadBelowTheFold(true), 500);
    return () => window.clearTimeout(timeoutId);
  }, [isPortfolioPage]);

  useEffect(() => {
    if (isPortfolioPage) return;
    if (typeof window === "undefined") return;
    if (window.location.hash) return;
    if (window.location.pathname !== "/") return;
    window.history.replaceState(null, "", "/#home");
  }, [isPortfolioPage]);

  useEffect(() => {
    if (isPortfolioPage) return;
    if (typeof window === "undefined") return;
    if (window.location.pathname !== "/") return;

    const iconVersion = "20260425f";
    const icoHref = `/favicon.ico?v=${iconVersion}`;
    const pngHref = `/favicon-round.png?v=${iconVersion}`;

    const ensureLink = (
      selector: string,
      rel: string,
      href: string,
      type?: string,
      sizes?: string,
    ) => {
      let link = document.head.querySelector(selector) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.rel = rel;
        document.head.appendChild(link);
      }
      if (type) link.type = type;
      if (sizes) link.setAttribute("sizes", sizes);
      link.href = href;
    };

    const normalizeBrandHead = () => {
      ensureLink("link[rel='icon'][sizes='any']", "icon", icoHref, undefined, "any");
      ensureLink("link[rel='icon'][type='image/png']", "icon", pngHref, "image/png");
      ensureLink("link[rel='shortcut icon']", "shortcut icon", icoHref, "image/x-icon");
      ensureLink("link[rel='apple-touch-icon']", "apple-touch-icon", pngHref);
      document.title = "Best Offset Printing in Ethiopia | Terara Printers";
    };

    normalizeBrandHead();
    window.addEventListener("pageshow", normalizeBrandHead);
    window.addEventListener("hashchange", normalizeBrandHead);
    return () => {
      window.removeEventListener("pageshow", normalizeBrandHead);
      window.removeEventListener("hashchange", normalizeBrandHead);
    };
  }, [isPortfolioPage]);

  useEffect(() => {
    if (isPortfolioPage) return;
    if (!loadBelowTheFold) return;
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (!hash) return;

    const scrollToHash = () => {
      const targetId = hash.startsWith("#") ? hash.slice(1) : hash;
      const target = document.getElementById(targetId);
      if (target instanceof HTMLElement) {
        const header = document.querySelector("header");
        const baseHeaderOffset =
          header instanceof HTMLElement ? header.offsetHeight : 96;
        const headerOffset =
          targetId === "portfolio-heading"
            ? Math.max(0, baseHeaderOffset - 56)
            : baseHeaderOffset + 12;
        const targetTop =
          target.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({
          top: Math.max(0, targetTop),
          behavior: "smooth",
        });
        return true;
      }
      return false;
    };

    let attempts = 0;
    const maxAttempts = 20;
    const intervalId = window.setInterval(() => {
      const found = scrollToHash();
      attempts += 1;
      if (found || attempts >= maxAttempts) {
        window.clearInterval(intervalId);
      }
    }, 100);

    return () => window.clearInterval(intervalId);
  }, [isPortfolioPage, loadBelowTheFold]);

  if (isPortfolioPage) {
    return (
      <div className="font-sans text-brand-dark antialiased overflow-x-hidden selection:bg-brand-red selection:text-white">
        <main id="main-content">
          <Suspense fallback={null}>
            <Portfolio isDedicatedPage />
          </Suspense>
        </main>
      </div>
    );
  }

  return (
    <div className="font-sans text-brand-dark antialiased overflow-x-hidden selection:bg-brand-red selection:text-white">
      <Header />
      <main id="main-content">
        <Hero />
        {/* Scrolling Marquee Strip */}
        <div
          className="bg-brand-red py-4 overflow-hidden whitespace-nowrap"
          aria-hidden="true"
        >
          <div className="inline-block animate-marquee">
            <span className="text-white font-black text-xl mx-8 uppercase tracking-widest">
              Offset Printing
            </span>
            <span className="text-white/50 mx-2">&bull;</span>
            <span className="text-white font-black text-xl mx-8 uppercase tracking-widest">
              Digital Printing
            </span>
            <span className="text-white/50 mx-2">&bull;</span>
            <span className="text-white font-black text-xl mx-8 uppercase tracking-widest">
              Large Format
            </span>
            <span className="text-white/50 mx-2">&bull;</span>
            <span className="text-white font-black text-xl mx-8 uppercase tracking-widest">
              Branding
            </span>
            <span className="text-white/50 mx-2">&bull;</span>
            <span className="text-white font-black text-xl mx-8 uppercase tracking-widest">
              Packaging
            </span>
            <span className="text-white/50 mx-2">&bull;</span>
            <span className="text-white font-black text-xl mx-8 uppercase tracking-widest">
              Offset Printing
            </span>
            <span className="text-white/50 mx-2">&bull;</span>
            <span className="text-white font-black text-xl mx-8 uppercase tracking-widest">
              Digital Printing
            </span>
            <span className="text-white/50 mx-2">&bull;</span>
            <span className="text-white font-black text-xl mx-8 uppercase tracking-widest">
              Large Format
            </span>
            <span className="text-white/50 mx-2">&bull;</span>
            <span className="text-white font-black text-xl mx-8 uppercase tracking-widest">
              Branding
            </span>
          </div>
        </div>
        <div className="content-auto">
          <About />
        </div>
        {!loadBelowTheFold && (
          <div className="sr-only" aria-hidden="true">
            <div data-anchor="values"></div>
            <div data-anchor="services"></div>
            <div data-anchor="portfolio"></div>
            <div data-anchor="clients"></div>
            <div data-anchor="faq"></div>
            <div data-anchor="contact"></div>
          </div>
        )}
        {loadBelowTheFold && (
          <Suspense
            fallback={
              <div className="space-y-8">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="min-h-[120px] bg-gray-100/80 rounded-3xl animate-pulse"
                  ></div>
                ))}
              </div>
            }
          >
            <div className="content-auto">
              <Values />
            </div>
            <div className="content-auto">
              <WhyChooseUs />
            </div>
            <div className="content-auto">
              <Services />
            </div>
            <div className="content-auto">
              <Portfolio />
            </div>
            <div className="content-auto">
              <Clients />
            </div>
            <div className="content-auto">
              <FAQ />
            </div>
            <div className="content-auto">
              <Contact />
            </div>
          </Suspense>
        )}
      </main>
      <div className="content-auto">
        {loadBelowTheFold ? (
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        ) : null}
      </div>
    </div>
  );
}

export default App;
