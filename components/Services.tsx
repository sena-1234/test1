import React from "react";
import { ServiceItem } from "../types";
import {
  PenTool,
  Layers,
  Image,
  Package,
  Shirt,
  Calendar,
  Printer,
} from "lucide-react";

const services: ServiceItem[] = [
  {
    category: "Marketing & Brand Collateral",
    items: [
      "Brochures (Tri-fold, Bi-fold)",
      "Flyers (Single & Double)",
      "Postcards",
      "Catalogs",
    ],
    icon: Layers,
    description: "Marketing pieces that boost brand visibility.",
    image: "/GOAL.webp",
    pageUrl: "/services/marketing-brand-collateral.html",
  },
  {
    category: "Event Materials",
    items: [
      "Invitations and RSVP Cards",
      "Programs and Menus",
      "Table Tents",
      "Name Badges",
    ],
    icon: Calendar,
    description: "Event materials for organized, polished presentations.",
    image: "/Helaz.webp",
    pageUrl: "/services/event-materials.html",
  },
  {
    category: "Short-Run",
    items: [
      "Booklets and Manuals",
      "Short-run Printing",
      "Variable Data Printing",
    ],
    icon: Printer,
    description: "Fast short-run output for urgent needs.",
    image: "/Goal Kit (2).webp",
    pageUrl: "/services/short-run-printing.html",
  },
  {
    category: "Large Format & Specialty",
    items: [
      "Banners (Vinyl, Fabric)",
      "Posters",
      "Yard Signs",
      "Wall Graphics",
    ],
    icon: Image,
    description: "Large-format work for bold indoor and outdoor branding.",
    image: "/Arada.webp",
    pageUrl: "/services/large-format-specialty.html",
  },
  {
    category: "Business Stationery",
    items: ["Business Cards", "Letterheads", "Envelopes", "Notepads"],
    icon: PenTool,
    description: "Essential business materials for a consistent brand image.",
    image: "/Trafic Management.webp",
    pageUrl: "/services/business-stationery.html",
  },
  {
    category: "Custom Packaging",
    items: [
      "Product Boxes",
      "Labels and Stickers",
      "Bags (Paper/Plastic)",
      "Gift Wrap",
    ],
    icon: Package,
    description: "Custom packaging and label work that elevates products.",
    image: "/master-cola.webp",
    pageUrl: "/services/custom-packaging.html",
  },
  {
    category: "Promotional Products",
    items: [
      "Branded T-shirts",
      "Custom Mugs",
      "Trade Show Displays",
      "Giveaways",
    ],
    icon: Shirt,
    description:
      "Branded promotional products that keep your business visible.",
    image: "/Goal Kit.webp",
    pageUrl: "/services/promotional-products.html",
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gray-50"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2
            id="services-heading"
            className="text-4xl md:text-5xl font-black text-brand-dark mb-4"
          >
            Professional Printing &amp; Packaging Services in Addis Ababa
          </h2>
          <div className="w-24 h-1 bg-brand-red mx-auto"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-4">
            Offset, digital, and large-format production plus branded packaging
            for businesses across Ethiopia. Share size, quantity, and deadline,
            and we will recommend the right materials and finishing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 group overflow-hidden flex flex-col h-full relative"
            >
              {(() => {
                const baseImage = service.image;
                const fallbackImage = "/hero-banner-960.webp";
                const useResponsive = Boolean(baseImage?.startsWith("/photo_"));
                const src = baseImage
                  ? useResponsive
                    ? baseImage.replace(".webp", "-800.webp")
                    : baseImage
                  : fallbackImage;
                const srcSet =
                  baseImage && useResponsive
                    ? `${baseImage.replace(".webp", "-480.webp")} 480w, ${baseImage.replace(".webp", "-800.webp")} 800w, ${baseImage.replace(".webp", "-1200.webp")} 1200w, ${baseImage} 1600w`
                    : undefined;
                return (
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={src}
                      srcSet={srcSet}
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      alt={`${service.category} Services - Terara Printers Ethiopia`}
                      className="w-full h-full object-cover transform group-hover:scale-110 group-active:scale-110 transition-transform duration-700"
                      loading="lazy"
                      decoding="async"
                      width={640}
                      height={480}
                    />
                    <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-red/20 group-active:bg-brand-red/20 transition-colors"></div>
                  </div>
                );
              })()}

              <div className="absolute top-48 right-6 -translate-y-1/2 bg-brand-red p-4 rounded-full shadow-xl z-30 border-4 border-white transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 group-active:scale-110 group-active:rotate-12">
                <service.icon className="text-white" size={28} />
              </div>

              <div className="p-8 pt-10 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-brand-dark mb-2">
                  {service.category}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {service.description}
                </p>
                <div className="flex-1">
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-gray-700 text-sm flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-brand-red rounded-full mt-1.5 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={service.pageUrl}
                  className="mt-6 inline-flex items-center justify-center self-start rounded-full border border-brand-red px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-red transition-colors hover:bg-brand-red hover:text-white"
                >
                  Explore This Service
                </a>
              </div>
            </div>
          ))}

          <div className="bg-brand-dark text-white rounded-xl shadow-sm overflow-hidden flex flex-col justify-center items-center text-center p-8 border-t-4 border-brand-red relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
            <h3 className="text-2xl font-bold mb-4 z-10">
              Need Something Custom?
            </h3>
            <p className="text-gray-400 text-sm mb-8 z-10">
              We handle custom requests, special finishes, and packaging jobs
              tailored to your needs.
            </p>
            <a
              href="/#contact"
              className="bg-white text-brand-dark px-6 py-3 rounded-full font-bold uppercase text-sm hover:bg-brand-red hover:text-white transition-all z-10 shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
