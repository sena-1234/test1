import React, { useState } from 'react';
import { Client } from '../types';

const clients: Client[] = [
  // Top Tier / International (Important companies on top)
  {
    name: "British Council",
    logo: "/images/british_council_logo.png"
  },
  {
    name: "World Vision",
    logo: "/images/world_vision_logo.png"
  },
  {
    name: "Plan International",
    logo: "/images/plan_international_logo.png"
  },
  {
    name: "GOAL",
    logo: "/images/goal_logo.png"
  },
  {
    name: "Addis Ababa University",
    logo: "/images/aau_logo.png"
  },
  {
    name: "Awash Bank",
    logo: "/images/awash_bank_logo.png"
  },
  // Government & Health
  {
    name: "Ministry of Labor and Skills",
    logo: "https://i.ibb.co/tTD3tg5D/Ministry-of-Labor-and-Skills.png"
  },
  {
    name: "Ministry of Mine",
    logo: "https://i.ibb.co/xKDH9PsD/Ministry-of-Mine.png"
  },
  {
    name: "Washington Medical Centre",
    logo: "/images/washington_medical_logo.png"
  },
  // Education & Other Partners
  {
    name: "Admas University",
    logo: "/images/admas_university_logo.png"
  },
  {
    name: "GAGE University College",
    logo: "/images/gage_college_logo.png"
  },
  {
    name: "Great College",
    logo: "/images/great_college_logo.png"
  },
  {
    name: "Akaam Livelhoods",
    logo: "/images/akaam_livelhood_logo.png"
  },
  {
    name: "Tamesol Communication",
    logo: "/images/tamesol_logo.png"
  },
  {
    name: "Hope For Life",
    logo: "/images/hope_for_life_logo.png"
  },
];

const ClientLogo: React.FC<{ client: Client }> = ({ client }) => {
  const [error, setError] = useState(false);
  const fallbackUrl = `https://placehold.co/400x150/ffffff/374151?text=${encodeURIComponent(client.name)}`;

  return (
    <div className="group relative flex items-center justify-center h-40 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden cursor-default border border-gray-100 hover:border-brand-red/30 transform hover:-translate-y-1">

      {/* Default State: Organization Name shown clearly */}
      <div className="absolute inset-0 flex items-center justify-center p-4 transition-all duration-500 group-hover:opacity-0 group-hover:scale-110">
        <p className="text-gray-400 group-hover:text-brand-red font-bold text-sm md:text-base text-center uppercase tracking-wider leading-snug px-2 transition-colors duration-300">
          {client.name}
        </p>
      </div>

      {/* Hover State: The Official Logo revealed for credibility */}
      <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)">
        <img
          src={error || !client.logo ? fallbackUrl : client.logo}
          alt={`${client.name} Logo`}
          className="max-w-full max-h-full object-contain filter drop-shadow-sm"
          onError={() => setError(true)}
        />
      </div>

      {/* Subtle Background Decoration - Scaled down */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-brand-red/5 rounded-bl-full -mr-8 -mt-8 transition-all duration-500 group-hover:bg-brand-red/10 group-hover:scale-150"></div>
      <div className="absolute bottom-0 left-0 w-10 h-10 bg-brand-dark/5 rounded-tr-full -ml-5 -mb-5 transition-all duration-500 group-hover:bg-brand-dark/10 group-hover:scale-150"></div>
    </div>
  );
};

const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-24 bg-white border-t border-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h4 className="text-brand-red font-bold uppercase tracking-[0.3em] mb-4 text-sm">Our Network</h4>
          <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-6 tracking-tighter">Trusted Partnerships</h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Leading international NGOs, government ministries, and academic institutions rely on <span className="text-brand-red font-bold">Terara Printing Press</span> for precision and quality.
          </p>
          <div className="w-24 h-1.5 bg-brand-red mx-auto mt-10 rounded-full"></div>
        </div>

        {/* Organized grid structure for exactly 15 clients */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {clients.map((client, index) => (
            <div key={index}>
              <ClientLogo client={client} />
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-4 px-8 py-4 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-brand-red flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                  {i}
                </div>
              ))}
            </div>
            <p className="text-gray-600 font-medium text-sm md:text-base">
              Join <span className="text-brand-red font-bold">50+</span> industry leaders who choose excellence every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;