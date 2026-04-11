import React from 'react';
import { Feature } from '../types';
import { Award, UserCheck, Clock, DollarSign, Truck, ArrowRight } from 'lucide-react';

const features: Feature[] = [
  {
    title: "Exceptional Quality",
    description: "State-of-the-art technology and premium materials ensuring flawless prints.",
    icon: Award,
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Personalized Service",
    description: "Tailored experiences prioritizing your unique goals from consultation to delivery.",
    icon: UserCheck,
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "Timely Delivery",
    description: "We respect your deadlines. On time is late for us - we deliver early.",
    icon: Clock,
    color: "from-amber-400 to-orange-500"
  },
  {
    title: "Competitive Pricing",
    description: "Best value without compromising on quality. Transparent and fair.",
    icon: DollarSign,
    color: "from-emerald-400 to-teal-500"
  },
  {
    title: "Free Delivery",
    description: "Exceptional service should be accessible. We bring your order to you.",
    icon: Truck,
    color: "from-brand-red to-rose-500"
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-24 bg-brand-dark text-white relative overflow-hidden" aria-labelledby="why-choose-us-heading">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -ml-40 -mb-40 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <p className="text-brand-red font-bold uppercase tracking-[0.2em] mb-3 text-sm flex items-center gap-3">
              <span className="w-8 h-[2px] bg-brand-red"></span>
              Why Choose Us
            </p>
            <h2 id="why-choose-us-heading" className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              We Go Beyond <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Expectations</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-lg leading-relaxed text-right md:text-left">
            Dedicated professionals working closely with you to bring your vision to life, including flyer printing in Ethiopia and Addis Ababa that drives attention.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden ${index === 0 ? 'lg:col-span-2' : ''
                }`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`}></div>

              <div className="flex items-start gap-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shrink-0`}>
                  <feature.icon className="text-white w-7 h-7" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-brand-red transition-colors">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* CTA Card - Distinct Visual Style */}
          <div className="relative bg-gradient-to-br from-brand-red to-red-700 p-8 rounded-3xl flex flex-col justify-between overflow-hidden shadow-2xl hover:shadow-red-900/50 transition-shadow duration-500 group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-fullblur-3xl -mr-10 -mt-10"></div>

            <div>
              <h3 className="text-3xl font-black mb-2">Have a project?</h3>
              <p className="text-red-100/90 mb-8">Let's create something excellence together.</p>
            </div>

            <a href="#contact" className="inline-flex items-center justify-between bg-white text-brand-red px-6 py-4 rounded-xl font-bold uppercase tracking-wide hover:bg-red-50 transition-colors group/btn">
              <span>Get Started</span>
              <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" strokeWidth={3} size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
