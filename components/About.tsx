import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white" aria-labelledby="about-heading">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Text Content */}
          <div className="lg:w-1/2">
            <div className="mb-4">
              <p className="text-brand-red font-bold uppercase tracking-widest mb-1">About Terara Printers</p>
              <span className="text-gray-400 font-medium text-lg">Addis Ababa</span>
            </div>
            <h2 id="about-heading" className="text-4xl md:text-5xl font-black text-brand-dark mb-8 leading-tight">High-Quality Printing<br /><span className="text-brand-red">Made Easy</span>
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Terara Printers is a trusted printing company in Addis Ababa, Ethiopia, specializing in high-quality offset printing, digital printing, business documents, branding materials, and custom packaging for businesses and organizations across Ethiopia.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              From our 4 Killo location, we deliver reliable service, fast turnaround, and professional results, making Terara a dependable choice for offset printing in Addis Ababa and throughout Ethiopia.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {['Offset & Digital Printing', 'Trusted Printing Company', 'Large Format Solutions', 'Fast Turnaround Times'].map((item) => (
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
                "Reliable offset printing, fast delivery, and professional print quality for businesses in Addis Ababa and across Ethiopia."
              </p>
            </div>
          </div>

          {/* Image Grid */}
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <img
<<<<<<< HEAD
                src="https://i.ibb.co/RTQT2jW9/555.png"
                alt="Terara Printing Machinery - Offset Specialists in Ethiopia"
=======
                src="/photo_2026-04-11_18-21-32.webp"
                alt="Terara Printers workspace"
>>>>>>> 1fd0148 (Initial commit)
                className="w-full h-80 object-cover rounded-2xl shadow-xl translate-y-12"
                loading="lazy"
              />
              <div className="space-y-4">
                <img
<<<<<<< HEAD
                  src="https://i.ibb.co/zhZ1dWrx/AD-P-Satin-AQ-01-1024x1007.png"
                  alt="Premium Printing Samples Addis Ababa"
=======
                  src="/photo_2026-04-11_18-21-33.webp"
                  alt="Terara Printers print samples"
>>>>>>> 1fd0148 (Initial commit)
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  loading="lazy"
                />
                <img
<<<<<<< HEAD
                  src="https://i.ibb.co/gMWf2QWn/11.png"
                  alt="Professional Paper Converting and Branding"
=======
                  src="/photo_2026-04-11_18-21-37.webp"
                  alt="Terara Printers production detail"
>>>>>>> 1fd0148 (Initial commit)
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
