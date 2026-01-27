import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-brand-dark antialiased overflow-x-hidden selection:bg-brand-red selection:text-white">
      <Header />
      <main>
        <Hero />
        {/* Scrolling Marquee Strip */}
        <div className="bg-brand-red py-4 overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee">
            <span className="text-white font-black text-xl mx-8 uppercase tracking-widest">Offset Printing</span>
            <span className="text-white/50 mx-2">•</span>
            <span className="text-white font-black text-xl mx-8 uppercase tracking-widest">Digital Printing</span>
            <span className="text-white/50 mx-2">•</span>
            <span className="text-white font-black text-xl mx-8 uppercase tracking-widest">Large Format</span>
            <span className="text-white/50 mx-2">•</span>
            <span className="text-white font-black text-xl mx-8 uppercase tracking-widest">Branding</span>
            <span className="text-white/50 mx-2">•</span>
            <span className="text-white font-black text-xl mx-8 uppercase tracking-widest">Packaging</span>
            <span className="text-white/50 mx-2">•</span>
            <span className="text-white font-black text-xl mx-8 uppercase tracking-widest">Offset Printing</span>
            <span className="text-white/50 mx-2">•</span>
            <span className="text-white font-black text-xl mx-8 uppercase tracking-widest">Digital Printing</span>
            <span className="text-white/50 mx-2">•</span>
            <span className="text-white font-black text-xl mx-8 uppercase tracking-widest">Large Format</span>
            <span className="text-white/50 mx-2">•</span>
            <span className="text-white font-black text-xl mx-8 uppercase tracking-widest">Branding</span>
          </div>
        </div>
        <About />
        <WhyChooseUs />
        <Services />
        <Portfolio />
        <Clients />
        <Contact />
      </main>
      <Footer />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default App;