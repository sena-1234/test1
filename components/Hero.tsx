import React from 'react';
import { ArrowRight, Image, Layers, Package, PenTool, Printer, Shirt } from 'lucide-react';
import QuoteModal from './QuoteModal';

const featuredServices = [
  { title: 'Offset Print', icon: Printer, color: 'from-blue-500 to-indigo-600' },
  { title: 'Digital Print', icon: Layers, color: 'from-brand-red to-orange-500' },
  { title: 'Large Format', icon: Image, color: 'from-emerald-500 to-teal-600' },
  { title: 'Packaging', icon: Package, color: 'from-amber-500 to-orange-600' },
  { title: 'Branding', icon: PenTool, color: 'from-purple-500 to-pink-600' },
  { title: 'Apparel', icon: Shirt, color: 'from-rose-500 to-red-600' },
];

const Hero: React.FC = () => {
  const [isQuoteOpen, setIsQuoteOpen] = React.useState(false);

  return (
    <>
      <section id="home" className="relative min-h-screen lg:h-screen flex items-center overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 z-0 flex items-center justify-end">
          <img
            src="/hero-banner.webp"
            alt="Terara Printing Press Premium Materials"
            className="w-full h-full object-cover opacity-80 lg:opacity-100 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/40 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-2 xl:px-0 relative z-10 pt-40 pb-20 md:pt-56 md:pb-24 lg:pt-48 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-40 xl:gap-52 2xl:gap-64 items-center">
            <div className="max-w-xl xl:max-w-2xl lg:-ml-10 xl:-ml-16">
              <div className="inline-block bg-brand-red text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4 rounded-sm">
                Est. 2017 GC
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-none mb-6">
                <span className="whitespace-nowrap">Ethiopia&apos;s Best</span> <br />
                <span className="text-black whitespace-nowrap">Printing Service</span>
              </h1>
              <p className="text-gray-300 text-base md:text-lg mb-6 max-w-xl leading-relaxed">
                We provide professional printing services in Addis Ababa, Ethiopia, including offset printing,
                digital printing, packaging, and branding solutions. Terara Printing Press helps businesses create
                high-quality printed materials that stand out.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="bg-brand-red text-white px-5 py-2.5 text-sm rounded-full font-bold uppercase tracking-wide hover:bg-red-700 transition-all flex items-center justify-center gap-2 group shadow-xl"
                >
                  Get a Quote
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="#services"
                  className="border-2 border-white text-white px-5 py-2.5 text-sm rounded-full font-bold uppercase tracking-wide hover:bg-white hover:text-brand-dark transition-all flex items-center justify-center"
                >
                  Our Services
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 animate-fade-in-up">
              {featuredServices.map((service) => (
                <div
                  key={service.title}
                  className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl hover:border-brand-red/50 active:border-brand-red/50 transition-all duration-500 hover:-translate-y-2 active:-translate-y-2 cursor-pointer overflow-hidden"
                >
                  <div
                    className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 group-active:opacity-20 blur-2xl transition-opacity duration-500`}
                  ></div>
                  <div className="flex flex-col items-center text-center relative">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} p-2.5 mb-4 shadow-lg transform group-hover:rotate-12 group-active:rotate-12 transition-transform duration-500`}
                    >
                      <service.icon className="w-full h-full text-white" strokeWidth={2} />
                    </div>
                    <h4 className="text-white font-black text-sm uppercase tracking-wider leading-tight">
                      {service.title}
                    </h4>
                    <div className="w-0 group-hover:w-8 group-active:w-8 h-1 bg-brand-red mt-2 transition-all duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-brand-red via-orange-500 to-yellow-500 opacity-50"></div>
      </section>
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
};

export default Hero;
