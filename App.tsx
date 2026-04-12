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

  useEffect(() => {
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const id = (window as any).requestIdleCallback(
        () => setLoadBelowTheFold(true),
        { timeout: 1000 },
      );
      return () => (window as any).cancelIdleCallback(id);
    }

    const timeoutId = window.setTimeout(() => setLoadBelowTheFold(true), 500);
    return () => window.clearTimeout(timeoutId);
  }, []);

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
            <div id="values"></div>
            <div id="services"></div>
            <div id="portfolio"></div>
            <div id="clients"></div>
            <div id="faq"></div>
            <div id="contact"></div>
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
