import React, { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "Editorial",
    "Booklet",
    "Large Format",
    "Packaging",
  ];

  const projects = [
    {
      title: "GOAL BOOKLET",
      category: "Booklet",
      image: "/1.webp",
      size: "standard",
    },
    {
      title: "HOUSE OF PEOPLES REPRESENTATIVES OF FDRE MAGAZINE",
      category: "Editorial",
      image: "/2.webp",
      size: "large",
    },
    {
      title: "Ministry of Health Ethiopia Booklet",
      category: "Booklet",
      image: "/3.webp",
      size: "portrait",
    },
    {
      title: "GOAL ANNUAL BOOKLET",
      category: "Booklet",
      image: "/4.webp",
      size: "wide",
    },
    {
      title: "SPIRTUAL BOOK",
      category: "Editorial",
      image: "/5.webp",
      size: "standard",
    },
    {
      title: "Ethio Post Backdrop",
      category: "Large Format",
      image: "/5.webp",
      size: "standard",
    },
    {
      title: "Good Samaritan Ethiopia Magazine",
      category: "Editorial",
      image: "/7.webp",
      size: "wide",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="py-24 bg-brand-dark text-white overflow-hidden"
      aria-labelledby="portfolio-heading"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="max-w-2xl mb-8 md:mb-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-brand-red"></div>
              <p className="text-brand-red font-bold uppercase tracking-[0.2em] text-sm">
                Portfolio
              </p>
            </div>
            <h2
              id="portfolio-heading"
              className="text-4xl md:text-6xl font-black leading-tight"
            >
              PRODUCING <br />
              <span className="text-brand-red">EXCELLENCE</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                  activeFilter === cat
                    ? "bg-brand-red border-brand-red text-white"
                    : "bg-transparent border-white/20 text-gray-400 hover:border-white/50 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {filteredProjects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 animate-fade-in ${
                project.size === "large"
                  ? "md:col-span-2 md:row-span-2"
                  : project.size === "wide"
                    ? "md:col-span-2"
                    : project.size === "portrait"
                      ? "md:row-span-2"
                      : ""
              }`}
            >
              {/* Image with Parallax-like scale effect */}
              <img
                src={project.image.replace(".webp", "-800.webp")}
                srcSet={`${project.image.replace(".webp", "-480.webp")} 480w, ${project.image.replace(".webp", "-800.webp")} 800w, ${project.image.replace(".webp", "-1200.webp")} 1200w, ${project.image} 1600w`}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-active:scale-110"
                loading="lazy"
                decoding="async"
                width={800}
                height={600}
              />

              {/* Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex flex-col justify-end p-8 border-2 border-transparent group-hover:border-brand-red/30 group-active:border-brand-red/30 rounded-2xl m-2">
                <div className="overflow-hidden mb-2">
                  <span className="inline-block text-brand-red text-xs font-black uppercase tracking-[0.3em] transform translate-y-full group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-300">
                    {project.category}
                  </span>
                </div>
                <div className="overflow-hidden mb-6">
                  <h3 className="text-xl md:text-2xl font-black text-white transform translate-y-full group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-500 delay-75 leading-none uppercase">
                    {project.title.split(" ").length > 3
                      ? project.title.substring(0, 30) + "..."
                      : project.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-white/60 group/view">
                  <span className="text-xs font-bold uppercase tracking-widest group-hover:text-white group-active:text-white transition-colors">
                    Details
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-red group-active:bg-brand-red group-hover:border-brand-red group-active:border-brand-red transition-all duration-300">
                    <ExternalLink
                      size={14}
                      className="group-hover:text-white group-active:text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Minimal Tag (visible when not hovered) */}
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest opacity-100 group-hover:opacity-0 group-active:opacity-0 transition-opacity">
                {project.category}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center gap-4 group">
            <span className="text-2xl md:text-3xl font-black uppercase tracking-tighter group-hover:text-brand-red transition-colors italic">
              Ready to start your project?
            </span>
            <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center transition-transform duration-500 group-hover:translate-x-4">
              <ArrowRight className="text-white" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
