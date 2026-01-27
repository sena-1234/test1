import React from 'react';
import { Feature } from '../types';
import { Award, UserCheck, Clock, DollarSign, Truck } from 'lucide-react';

const features: Feature[] = [
  {
    title: "Exceptional Quality",
    description: "We use state-of-the-art technology and premium materials to ensure every print is flawless.",
    icon: Award
  },
  {
    title: "Personalized Service",
    description: "From consultation to delivery, we provide a tailored experience that prioritizes your goals.",
    icon: UserCheck
  },
  {
    title: "Timely Delivery",
    description: "We understand the importance of deadlines and strive to deliver on time, every time.",
    icon: Clock
  },
  {
    title: "Competitive Pricing",
    description: "Our transparent pricing ensures you get the best value without compromising on quality.",
    icon: DollarSign
  },
  {
    title: "Free Delivery",
    description: "We offer free delivery because we believe that exceptional service should be accessible to everyone.",
    icon: Truck
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-brand-red font-bold uppercase tracking-widest mb-2">Why Choose Us?</h4>
          <h2 className="text-4xl md:text-5xl font-black mb-4">We Go Beyond Expectations</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our dedicated team of professionals works closely with you to understand your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/10 group"
            >
              <div className="bg-brand-red w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
          
          {/* Call to Action Card in the grid */}
          <div className="bg-brand-red p-8 rounded-lg flex flex-col justify-center items-center text-center">
             <h3 className="text-2xl font-black mb-4">Have a project in mind?</h3>
             <a href="#contact" className="bg-white text-brand-red px-8 py-3 rounded-full font-bold uppercase hover:shadow-lg transition-all">
                Get Started
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;