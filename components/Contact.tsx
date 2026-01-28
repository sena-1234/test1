import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'General Inquiry',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message. Please try again later.');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'General Inquiry',
        message: ''
      });
    } catch (err: any) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Contact Info */}
          <div className="lg:w-1/2">
            <h4 className="text-brand-red font-bold uppercase tracking-widest mb-2">Get in Touch</h4>
            <h2 className="text-4xl md:text-5xl font-black mb-8">Contact Us</h2>
            <p className="text-gray-400 mb-10 text-lg">
              Ready to start your next printing project? Visit us at our locations or give us a call.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-red/10 p-3 rounded-full text-brand-red">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Our Location</h3>
                  <p className="text-gray-300 mb-1">4 Killo, Dink Sira Tower, 1st Floor, Addis Ababa, Ethiopia</p>
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

              <div className="pt-6 border-t border-gray-800">
                <h3 className="font-bold text-xl mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://web.facebook.com/people/Terara-printing-press/61581231574893/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-all transform hover:scale-110">
                    <Facebook size={24} />
                  </a>
                  <a href="#" title="Instagram - Coming Soon!" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red/50 transition-all transform hover:scale-110 opacity-50 cursor-not-allowed">
                    <Instagram size={24} />
                  </a>
                  <a href="https://www.tiktok.com/@teraraprinters" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-all transform hover:scale-110">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.10-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.89-.23-2.74.24-.81.47-1.38 1.31-1.63 2.21-.16.61-.17 1.25-.09 1.88.27 1.25 1.13 2.35 2.22 2.94.67.35 1.41.54 2.15.54 1.56 0 3.01-.93 3.58-2.38.22-.55.3-1.14.32-1.74.01-3.1-.01-6.2.01-9.3z" />
                    </svg>
                  </a>
                  <a href="#" title="LinkedIn - Coming Soon!" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red/50 transition-all transform hover:scale-110 opacity-50 cursor-not-allowed">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" title="Telegram - Coming Soon!" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red/50 transition-all transform hover:scale-110 opacity-50 cursor-not-allowed">
                    <Send size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2" id="contact-form">
            <div className="bg-white text-brand-dark p-8 md:p-10 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-black mb-6">Send us a message</h3>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl text-center animate-fade-in">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={32} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Message Sent Successfully!</h4>
                  <p>Thank you for reaching out. Our team will get back to you shortly.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-brand-red font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg text-sm font-bold">
                      {error}
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-gray-100 border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-red outline-none"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-gray-100 border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-red outline-none"
                        placeholder="Your Phone"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-100 border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-red outline-none"
                      placeholder="Your Email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Service Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-gray-100 border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-red outline-none"
                    >
                      <option>General Inquiry</option>
                      <option>Business Stationery</option>
                      <option>Marketing Materials</option>
                      <option>Large Format</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
                    <textarea
                      rows={4}
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-gray-100 border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-red outline-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-brand-red text-white font-bold uppercase py-4 rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-red-700'}`}
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;