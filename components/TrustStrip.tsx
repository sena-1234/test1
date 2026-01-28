import React from 'react';

const clientLogos = [
    { name: "British Council", logo: "/images/british_council_logo.png" },
    { name: "World Vision", logo: "/images/world_vision_logo.png" },
    { name: "Plan International", logo: "/images/plan_international_logo.png" },
    { name: "GOAL", logo: "/images/goal_logo.png" },
    { name: "Addis Ababa University", logo: "/images/aau_logo.png" },
    { name: "Awash Bank", logo: "/images/awash_bank_logo.png" },
    { name: "Ministry of Labor", logo: "https://i.ibb.co/tTD3tg5D/Ministry-of-Labor-and-Skills.png" },
    { name: "Ministry of Mine", logo: "https://i.ibb.co/xKDH9PsD/Ministry-of-Mine.png" },
];

const TrustStrip: React.FC = () => {
    return (
        <div className="bg-white py-12 border-y border-gray-100 overflow-hidden">
            <div className="container mx-auto px-4 mb-8 text-center">
                <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Trusted by Industry Leaders</p>
            </div>
            <div className="relative flex overflow-x-hidden">
                <div className="animate-marquee-slow flex items-center whitespace-nowrap">
                    {/* Double the logos for seamless loop */}
                    {[...clientLogos, ...clientLogos].map((client, index) => (
                        <div key={index} className="mx-12 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                            <span className="text-2xl font-black text-gray-300 mr-2">{client.name.split(' ')[0]}</span>
                            {/* Note: In a real app we'd use the logo img, but here we use text as fallback or alongside */}
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 40s linear infinite;
        }
      `}</style>
        </div>
    );
};

export default TrustStrip;
