import React from 'react';
import { ArrowRight, Printer, Package, Image, Layers, PenTool, Shirt } from 'lucide-react';

const featuredServices = [
  { title: "Offset Print", icon: Printer, color: "from-blue-500 to-indigo-600" },
  { title: "Digital Print", icon: Layers, color: "from-brand-red to-orange-500" },
  { title: "Large Format", icon: Image, color: "from-emerald-500 to-teal-600" },
  { title: "Packaging", icon: Package, color: "from-amber-500 to-orange-600" },
  { title: "Branding", icon: PenTool, color: "from-purple-500 to-pink-600" },
  { title: "Apparel", icon: Shirt, color: "from-rose-500 to-red-600" },
];

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen lg:h-screen flex items-center overflow-hidden bg-brand-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 flex items-center justify-end">
        <img
          src="/hero-final.png"
          alt="Terara Printing Press Premium Materials"
          className="w-full h-full object-cover opacity-80 lg:opacity-100 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/40 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-40 pb-20 md:pt-56 md:pb-24 lg:pt-48 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-block bg-brand-red text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4 rounded-sm">
              Est. 2017 GC
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-none mb-6">
              BEYOND YOUR <br />
              <span className="text-black">
                EXPECTATIONS
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              Transforming your ideas into tangible products that stand out and make an impact. We deliver high-quality printing solutions for businesses across Ethiopia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/251988559355"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-red text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-red-700 transition-all flex items-center justify-center gap-2 group shadow-xl"
              >
                Get a Quote
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-white hover:text-brand-dark transition-all flex items-center justify-center"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Right Content - Service Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 animate-fade-in-up">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl hover:border-brand-red/50 active:border-brand-red/50 transition-all duration-500 hover:-translate-y-2 active:-translate-y-2 cursor-pointer overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 group-active:opacity-20 blur-2xl transition-opacity duration-500`}></div>
                <div className="flex flex-col items-center text-center relative">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} p-2.5 mb-4 shadow-lg transform group-hover:rotate-12 group-active:rotate-12 transition-transform duration-500`}>
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

      {/* Decorative Strip */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-brand-red via-orange-500 to-yellow-500 opacity-50"></div>
    </section>
  );
};

export default Hero;