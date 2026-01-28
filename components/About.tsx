import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Text Content */}
          <div className="lg:w-1/2">
            <div className="mb-4">
              <h4 className="text-brand-red font-bold uppercase tracking-widest mb-1">About Us</h4>
              <span className="text-gray-400 font-medium text-lg">Terara Printing Press</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-8 leading-tight">
              Quality Printing <br /><span className="text-brand-red">Simplified.</span>
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Established in 2017 GC, Terara Printing Press has quickly emerged as a trusted name in the Ethiopian printing industry. Based in Addis Ababa, we specialize in delivering high-impact visual solutions that help our clients communicate effectively. <strong>Specializing in high-precision offset printing and professional documentation solutions.</strong>
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Our name "Terara" (Mountain) reflects our ambition to reach the peaks of quality and service. We blend traditional craftsmanship with modern technology to ensure every project is delivered "Beyond Your Expectations."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {['Full Digital & Offset', 'Trusted Industry Name', 'Large Format Specialist', 'Fast Delivery'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="bg-brand-red/10 p-1 rounded-full">
                    <CheckCircle2 className="text-brand-red" size={18} />
                  </div>
                  <span className="font-semibold text-brand-dark">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-8 bg-gray-50 border-l-8 border-brand-red rounded-r-lg">
              <p className="italic text-gray-700 font-medium text-lg">
                "We don't just print paper; we print possibilities. Our vision is to be the leading partner for every business's visual journey."
              </p>
            </div>
          </div>

          {/* Image Grid */}
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://i.ibb.co/RTQT2jW9/555.png"
                alt="Terara Printing Machinery - Offset Specialists in Ethiopia"
                className="w-full h-80 object-cover rounded-2xl shadow-xl translate-y-12"
                loading="lazy"
              />
              <div className="space-y-4">
                <img
                  src="https://i.ibb.co/zhZ1dWrx/AD-P-Satin-AQ-01-1024x1007.png"
                  alt="Premium Printing Samples Addis Ababa"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  loading="lazy"
                />
                <img
                  src="https://i.ibb.co/gMWf2QWn/11.png"
                  alt="Professional Paper Converting and Branding"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Experience Badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-red text-white p-8 rounded-full shadow-2xl border-8 border-white text-center w-40 h-40 flex flex-col justify-center items-center z-10">
              <span className="text-5xl font-black">7+</span>
              <span className="text-xs font-bold uppercase leading-tight mt-1">Years of<br />Expertise</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;