import React, { useState } from "react";
import { Client } from "../types";

const clients: Client[] = [
  // Top Tier / International (Important companies on top)
  {
    name: "British Council",
    logo: "/images/BritishCouncil.webp",
  },
  {
    name: "World Vision",
    logo: "/images/world vision logo.webp",
  },
  {
    name: "Plan International",
    logo: "/images/plan-international-logo.webp",
  },
  {
    name: "The Global Goal",
    logo: "/images/The global goal.webp",
  },
  {
    name: "Addis Ababa University",
    logo: "/images/addis ababa university logo.webp",
  },
  {
    name: "Awash Bank",
    logo: "/images/awash-bank-logo.webp",
  },
  // Government & Health
  {
    name: "Ministry of Labor and Skills",
    displayName: "Ministry of\nLabor and Skills",
    logo: "/images/ministry-of-labor-and-skills-logo.webp",
  },
  {
    name: "Ministry of Mine",
    logo: "/images/ministry-of-mine-logo.webp",
  },
  {
    name: "Washington Medical Centre",
    displayName: "Washington Medical\nCentre",
    logo: "/images/washington-medical-center-logo.webp",
  },
  {
    name: "Ministry Of Education",
    logo: "/images/Ministry-of-Edu.webp",
  },
  {
    name: "Ethiopian Electric Utility",
    logo: "/images/EEU.webp",
  },
  {
    name: "National Intelligence & Security Service",
    logo: "/images/NISI.webp",
  },
  // Education & Other Partners
  {
    name: "Admas University",
    logo: "/images/admas_university_logo.webp",
  },
  {
    name: "GAGE University College",
    logo: "/images/gage-uc-logo.webp",
  },
  {
    name: "Great College",
    logo: "/images/great-college-logo.webp",
  },
  {
    name: "Akaam Livelhoods",
    logo: "/images/akaam_livelhood_logo.webp",
  },
  {
    name: "Tamesol Communication",
    logo: "/images/tamesol-communication-logo.webp",
  },
  {
    name: "Hope For Life",
    logo: "/images/hope-for-life-logo.webp",
  },
  {
    name: "Helaz Beauty",
    logo: "/images/Helaz-Beauty.webp",
  },
  {
    name: "TB Reasearch Advisory Council",
    logo: "/images/TRAC.webp",
  },
  {
    name: "Addis Ababa Traffic Management Authority",
    logo: "/images/T M jbj.webp",
  },
  {
    name: "Policy Study Instutie",
    logo: "/images/Policy Study Instuties.webp",
  },
  {
    name: "Pharma International",
    logo: "/images/Pharma-_2_.webp",
  },
  {
    name: "Meda",
    logo: "/images/Meda-App.webp",
  },
  {
    name: "Master Glue",
    logo: "/images/Master-logo.webp",
  },
  {
    name: "Fine Water",
    logo: "/images/Fine (2).webp",
  },
  {
    name: "Holy Trinity University",
    logo: "/images/HTU.webp",
  },
  {
    name: "Ashara Wellness",
    logo: "/images/Ashara (2).webp",
  },
  {
    name: "Arsi University",
    logo: "/images/Arsi Univesity.webp",
  },
  {
    name: "Arada",
    logo: "/images/Aradaa.webp",
  },
  {
    name: "Armauer Hansen Research Institute",
    logo: "/images/Ahri.webp",
  },
  {
    name: "Abay Industrial Development",
    logo: "/images/Abay Industries.webp",
  },
];

const ClientLogo: React.FC<{ client: Client }> = ({ client }) => {
  const [error, setError] = useState(false);
  const fallbackUrl = `https://placehold.co/400x150/ffffff/374151?text=${encodeURIComponent(client.name)}`;

  return (
    <div className="group relative flex items-center justify-center h-24 md:h-40 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden cursor-default border border-gray-100 hover:border-brand-red/30 transform hover:-translate-y-1">
      {/* Default State: Organization Logo shown clearly */}
      <div className="absolute inset-0 flex items-center justify-center p-6 transition-all duration-500 group-hover:opacity-0 group-hover:scale-50">
        <img
          src={error || !client.logo ? fallbackUrl : client.logo}
          alt={`${client.name} logo`}
          className="max-w-full max-h-full object-contain filter drop-shadow-sm"
          onError={() => setError(true)}
          loading="lazy"
          decoding="async"
          width={400}
          height={150}
        />
      </div>

      {/* Hover State: The Organization Name revealed for context */}
      <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 scale-110 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
        <p className="text-gray-600 font-bold text-sm md:text-base text-center uppercase tracking-wider leading-snug px-2 whitespace-pre-line">
          {client.displayName ?? client.name}
        </p>
      </div>

      {/* Subtle Background Decoration - Scaled down */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-brand-red/5 rounded-bl-full -mr-8 -mt-8 transition-all duration-500 group-hover:bg-brand-red/10 group-hover:scale-150"></div>
      <div className="absolute bottom-0 left-0 w-10 h-10 bg-brand-dark/5 rounded-tr-full -ml-5 -mb-5 transition-all duration-500 group-hover:bg-brand-dark/10 group-hover:scale-150"></div>
    </div>
  );
};

const Clients: React.FC = () => {
  return (
    <section
      id="clients"
      className="py-24 bg-white border-t border-gray-50"
      aria-labelledby="clients-heading"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <p className="text-brand-red font-bold uppercase tracking-[0.3em] mb-4 text-sm">
            Our Network
          </p>
          <h2
            id="clients-heading"
            className="text-4xl md:text-6xl font-black text-brand-dark mb-6 tracking-tighter"
          >
            Trusted Partnerships
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Leading international NGOs, government ministries, and academic
            institutions rely on{" "}
            <span className="text-brand-red font-bold">Terara Printers</span>{" "}
            for precision and quality, including books printing in Ethiopia and Addis Ababa that feels premium.
          </p>
          <div className="w-24 h-1.5 bg-brand-red mx-auto mt-10 rounded-full"></div>
        </div>

        {/* Organized grid structure for exactly 15 clients */}
        {/* Infinite Scrolling Marquee */}
        <div className="relative w-full overflow-hidden group">
          <div className="inline-flex w-max animate-marquee whitespace-nowrap gap-8 py-4">
            {/* First Copy */}
            {clients.map((client, index) => (
              <div
                key={`client-${index}`}
                className="min-w-[200px] md:min-w-[250px]"
              >
                <ClientLogo client={client} />
              </div>
            ))}
            {/* Second Copy for seamless look */}
            {clients.map((client, index) => (
              <div
                key={`client-duplicate-${index}`}
                className="min-w-[200px] md:min-w-[250px]"
              >
                <ClientLogo client={client} />
              </div>
            ))}
          </div>

          {/* Gradient Fade Edges */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-4 px-8 py-4 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="flex -space-x-3">
              {[
                {
                  name: "British Council",
                  logo: "/images/BritishCouncil.webp",
                },
                {
                  name: "World Vision",
                  logo: "/images/world vision logo.webp",
                },
                { name: "Awash Bank", logo: "/images/awash-bank-logo.webp" },
                {
                  name: "Addis Ababa University",
                  logo: "/images/addis ababa university logo.webp",
                },
              ].map((org) => (
                <div
                  key={org.name}
                  className="w-10 h-10 rounded-full border-2 border-white bg-white flex items-center justify-center shadow-sm overflow-hidden"
                  title={org.name}
                >
                  <img
                    src={org.logo}
                    alt={`${org.name} logo`}
                    className="w-full h-full object-contain p-1"
                    loading="lazy"
                    decoding="async"
                    width={40}
                    height={40}
                  />
                </div>
              ))}
            </div>
            <p className="text-gray-600 font-medium text-sm md:text-base">
              Join <span className="text-brand-red font-bold">30+</span>{" "}
              industry leaders who choose excellence every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
