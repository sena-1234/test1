import React from 'react';
import { ServiceItem } from '../types';
import { PenTool, Layers, Image, Package, Shirt, Calendar, Printer } from 'lucide-react';

const services: ServiceItem[] = [
  {
    category: "Marketing & Brand Collateral",
    items: ["Brochures (Tri-fold, Bi-fold)", "Flyers (Single & Double)", "Postcards", "Catalogs"],
    icon: Layers,
    description: "Tools to effectively communicate your message.",
    image: "/images/marketing_materials.png"
  },
  {
    category: "Event Materials",
    items: ["Invitations and RSVP Cards", "Programs and Menus", "Table Tents", "Name Badges"],
    icon: Calendar,
    description: "Complete stationery collections for a successful event.",
    image: "/images/business_stationery.webp"
  },
  {
    category: "Digital Printing",
    items: ["Booklets and Manuals", "Short-run Printing", "Variable Data Printing"],
    icon: Printer,
    description: "High-quality booklet and manual production with fast turnaround.",
    image: "/images/marketing_materials.webp"
  },
  {
    category: "Large Format & Specialty Printing",
    items: ["Banners (Vinyl, Fabric)", "Posters", "Yard Signs", "Wall Graphics"],
    icon: Image,
    description: "Big impact visual solutions for any space.",
    image: "/images/large_format_printing.webp"
  },
  {
    category: "Business Stationery",
    items: ["Business Cards", "Letterheads", "Envelopes", "Notepads"],
    icon: PenTool,
    description: "Professional essentials that represent your brand.",
    image: "/images/business_stationery.webp"
  },
  {
    category: "Custom Packaging",
    items: ["Product Boxes", "Labels and Stickers", "Bags (Paper/Plastic)", "Gift Wrap"],
    icon: Package,
    description: "Packaging that elevates your product presentation.",
    image: "/images/custom_packaging.webp"
  },
  {
    category: "Promotional Products",
    items: ["Branded T-shirts", "Custom Mugs", "Trade Show Displays", "Giveaways"],
    icon: Shirt,
    description: "Catchy merchandise collections to keep your brand top of mind.",
    image: "https://i.ibb.co/whP2Hhyd/Promotional-Products.png"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50" aria-labelledby="services-heading">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-brand-red font-bold uppercase tracking-widest mb-2">Printing Services In Addis Ababa</p>
          <h2 id="services-heading" className="text-4xl md:text-5xl font-black text-brand-dark mb-4">Offset, Digital, Large Format, and Packaging</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-4">
            Full-service commercial printing for businesses and organizations in Addis Ababa and across Ethiopia.
          </p>
          <div className="w-24 h-1 bg-brand-red mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 group overflow-hidden flex flex-col h-full relative"
            >
              {/* Image Header */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={`${service.category} Services - Terara Printing Press Ethiopia`}
                  className="w-full h-full object-cover transform group-hover:scale-110 group-active:scale-110 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-red/20 group-active:bg-brand-red/20 transition-colors"></div>
              </div>

              {/* Icon Straddling the Border */}
              <div className="absolute top-48 right-6 -translate-y-1/2 bg-brand-red p-4 rounded-full shadow-xl z-30 border-4 border-white transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 group-active:scale-110 group-active:rotate-12">
                <service.icon className="text-white" size={28} />
              </div>

              <div className="p-8 pt-10 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-brand-dark mb-2">{service.category}</h3>
                <p className="text-sm text-gray-500 mb-4">{service.description}</p>
                <div className="mt-auto">
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-brand-red rounded-full mt-1.5 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          {/* Custom Request Card */}
          <div className="bg-brand-dark text-white rounded-xl shadow-sm overflow-hidden flex flex-col justify-center items-center text-center p-8 border-t-4 border-brand-red relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
            <h3 className="text-2xl font-bold mb-4 z-10">Need Something Custom?</h3>
            <p className="text-gray-400 text-sm mb-8 z-10">We handle unique requests tailored to your specific needs, from special finishes to complex die-cuts.</p>
            <a href="#contact" className="bg-white text-brand-dark px-6 py-3 rounded-full font-bold uppercase text-sm hover:bg-brand-red hover:text-white transition-all z-10 shadow-lg">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
