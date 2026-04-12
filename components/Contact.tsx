import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white relative" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Contact Info */}
          <div className="lg:w-1/2">
            <p className="text-brand-red font-bold uppercase tracking-widest mb-2">Get in Touch</p>
            <h2 id="contact-heading" className="text-4xl md:text-5xl font-black mb-8">Contact Us</h2>
            <p className="text-gray-400 mb-10 text-lg">
              Looking for a reliable press? Contact Terara Printers for quotes,
              timelines, and project support. We keep the process clear and the
              results consistent.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-red/10 p-3 rounded-full text-brand-red">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Our Location</h3>
                  <p className="text-gray-300 mb-1">4 Killo, Dink Sira Tower, 1st Floor, Addis Ababa</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-red/10 p-3 rounded-full text-brand-red">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Phone Numbers</h3>
                  <p className="text-gray-300 text-lg hover:text-brand-red transition-colors">
                    <a href="tel:0988559355">0988-55 93 55</a>
                  </p>
                  <p className="text-gray-300 text-lg hover:text-brand-red transition-colors">
                    <a href="tel:0913891960">0913-89 19 60</a>
                  </p>
                  <p className="text-gray-300 text-lg hover:text-brand-red transition-colors">
                    <a href="mailto:teraramarketing@gmail.com">teraramarketing@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-red/10 p-3 rounded-full text-brand-red">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Working Hours</h3>
                  <p className="text-gray-300">Mon - Sat: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Sunday: Closed</p>
                </div>
              </div>

            </div>
          </div>

          {/* Map */}
          <div className="lg:w-1/2">
            <div className="bg-gray-800 p-2 rounded-2xl shadow-2xl h-full min-h-[400px]">
              <iframe
                src="https://maps.google.com/maps?q=9.0337315,38.7610906&hl=es;z=14&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1rem', minHeight: '400px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Terara Printers Location"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
