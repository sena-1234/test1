import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Values from './components/Values';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-brand-dark antialiased overflow-x-hidden selection:bg-brand-red selection:text-white">
      <Header />
      <main id="main-content">
        <Hero />
        {/* Scrolling Marquee Strip */}
        <div className="bg-brand-red py-4 overflow-hidden whitespace-nowrap" aria-hidden="true">
          <div className="inline-block animate-marquee">
            <span className="text-white font-black text-xl mx-8 uppercase tracking-widest">Offset Printing</span>
            <span className="text-white/50 mx-2">&bull;</span>
            <span className="text-white font-black text-xl mx-8 uppercase tracking-widest">Digital Printing</span>
            <span className="text-white/50 mx-2">&bull;</span>
            <span className="text-white font-black text-xl mx-8 uppercase tracking-widest">Large Format</span>
            <span className="text-white/50 mx-2">&bull;</span>
            <span className="text-white font-black text-xl mx-8 uppercase tracking-widest">Branding</span>
            <span className="text-white/50 mx-2">&bull;</span>
            <span className="text-white font-black text-xl mx-8 uppercase tracking-widest">Packaging</span>
            <span className="text-white/50 mx-2">&bull;</span>
            <span className="text-white font-black text-xl mx-8 uppercase tracking-widest">Offset Printing</span>
            <span className="text-white/50 mx-2">&bull;</span>
            <span className="text-white font-black text-xl mx-8 uppercase tracking-widest">Digital Printing</span>
            <span className="text-white/50 mx-2">&bull;</span>
            <span className="text-white font-black text-xl mx-8 uppercase tracking-widest">Large Format</span>
            <span className="text-white/50 mx-2">&bull;</span>
            <span className="text-white font-black text-xl mx-8 uppercase tracking-widest">Branding</span>
          </div>
        </div>
        <About />
        <Values />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Clients />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
