import React, { useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

interface PortfolioProps {
  isDedicatedPage?: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ isDedicatedPage = false }) => {
  const [activeProject, setActiveProject] = useState<null | {
    title: string;
    category: string;
    client?: string;
    specs?: {
      printProcess: string;
      paperStock: string;
      finishing: string;
      totalUnits?: string;
      format: string;
    };
    productionScope?: string;
    clientsList?: {
      name: string;
      image: string;
      organizationImage?: string;
      copies?: string;
      format?: string;
      author?: string;
    }[];
  }>(null);
  const [selectedClient, setSelectedClient] = useState<{
    name: string;
    image: string;
    organizationImage?: string;
    copies?: string;
    format?: string;
    author?: string;
  } | null>(null);

  const projects = [
    {
      title: "Magazine Printing",
      category: "Magazine",
      image: "/Arba Minich.webp",
      size: "standard",
      client: "Addis Ababa University",
      specs: {
        printProcess: "Offset Printing",
        paperStock: "150gsm Art Paper (Inside) | 300gsm Art Cover",
        finishing: "Matte Lamination + Perfect Binding",
        totalUnits: "1,000 Copies",
        format: "A4 Magazine",
      },
      clientsList: [
        {
          name: "Arba Minich University",
          image: "/Arba Minich.webp",
          organizationImage: "/Arba Minich (1).webp",
          copies: "1,000",
        },
        {
          name: "Addis Ababa University",
          image: "/Addis Ababa Univesity.webp",
          organizationImage: "/images/addis ababa university logo.webp",
          copies: "1,500",
        },
        {
          name: "GOAL Ethiopia",
          image: "/GOAL (2).webp",
          organizationImage: "/images/The global goal.webp",
          copies: "1,800",
        },
        {
          name: "Federal Police Commission",
          image: "/Federal Police Commussion Magazine.webp",
          organizationImage: "/Ethiopian Federal Police.webp",
          copies: "2,000",
        },
      ],
    },
    {
      title: "Books Printing",
      category: "Books",
      image: "/Business School - Books.webp",
      size: "standard",
      client: "Addis Ababa University",
      specs: {
        printProcess: "Offset Printing",
        paperStock: "60-80gsm Art Paper (Inside) | 250gsm",
        finishing: "Matte Lamination + Perfect Binding",
        totalUnits: "500 Copies",
        format: "A4 Magazine",
      },
      clientsList: [
        {
          name: "Business School",
          image: "/Business School - Books.webp",
          copies: "500",
          author: "Mr. Daniel Hambisa",
        },
        {
          name: "Ager Likawent",
          image: "/Ager Likawent - Book.webp",
          copies: "500",
          author: "Mr. Hadis Andualem",
        },
        {
          name: "Kendele Kine",
          image: "/Kendele Kine - Book.webp",
          copies: "500",
          author: "Mr. Phawulos Birhane",
        },
        {
          name: "Learn English",
          image: "/Learn English - Book.webp",
          copies: "500",
          author: "Ms. Zemzem Mohamme & Ms. Tigist Melese",
        },
      ],
    },
    {
      title: "Notebook Printing",
      category: "Notebook",
      image: "/Minisiry-of-Edication.webp",
      size: "large",
      client: "Federal Prison Commission",
      specs: {
        printProcess: "Offset Printing",
        paperStock: "80–100gsm Writing Paper + Card Cover",
        finishing: "Saddle Stitch / Perfect Binding, Spiral",
        totalUnits: "2,000 Copies",
        format: "Standard Notebook",
      },
      clientsList: [
        {
          name: "Ahri",
          image: "/Ahri.webp",
          organizationImage: "/images/Ahri.webp",
          copies: "1,000",
        },
        {
          name: "Ministry of Education",
          image: "/Minisiry-of-Edication.webp",
          organizationImage: "/images/Ministry-of-Edu.webp",
          copies: "3,000",
        },
        {
          name: "General Wingate College",
          image: "/General Wingate College.webp",
          organizationImage: "/Wingate-College.webp",
          copies: "2,000",
        },
        {
          name: "Federal Prison Commission",
          image: "/Federal Prison Commission.webp",
          organizationImage: "/Federal-Prison-Commission.webp",
          copies: "1,500",
        },
      ],
    },
    {
      title: "Books Printing",
      category: "Exercise Book",
      image: "/Ethiopia Electric Utility.webp",
      size: "portrait",
      client: "Ethiopia Electric Utility Exercise Book Production",
      specs: {
        printProcess: "Offset Printing",
        paperStock: "80-100gsm Writing Paper + Card Cover",
        finishing: "Saddle Stitch / Perfect Binding.",
        totalUnits: "1,000 Copies",
        format: "Standard Notebook",
      },
      productionScope:
        "Prepress preparation, printing, binding, trimming, final inspection.",
      clientsList: [
        {
          name: "Ethiopia Electric Utility",
          image: "/Ethiopia Electric Utility.webp",
          organizationImage: "/images/EEU.webp",
          copies: "1,000",
        },
      ],
    },
    {
      title: "Brochure Printing",
      category: "Brochure",
      image: "/Ethiopia Health Insurance - Brochure.webp",
      size: "wide",
      client: "Ethiopia Health Insurance",
      specs: {
        printProcess: "Offset Printing",
        paperStock: "150gsm Gloss Paper",
        finishing: "Gloss Lamination",
        totalUnits: "15,000 Copies (every 2 months)",
        format: "Standard Flyer",
      },
      productionScope:
        "High-volume printing, lamination, trimming, quality inspection.",
      clientsList: [
        {
          name: "Ethiopia Health Insurance",
          image: "/Ethiopia Health Insurance - Brochure.webp",
          organizationImage: "/Ethiopian-Health-Insurance.webp",
          copies: "1,000",
        },
        {
          name: "Hawinet Trading",
          image: "/Hawinet - Blochure.webp",
          organizationImage: "/Hawinet-Trading.webp",
          copies: "1,500",
        },
        {
          name: "MCG Construction",
          image: "/MCG-Construction-Brochure.webp",
          organizationImage: "/MCG-Construction.webp",
          copies: "2,000",
        },
      ],
    },
    {
      title: "Flyer Printing",
      category: "Flyer",
      image: "/Pharma-Flyer.webp",
      size: "standard",
      client: "Pharma Co International",
      specs: {
        printProcess: "Offset Printing",
        paperStock: "150gsm Gloss Paper",
        finishing: "Gloss Lamination",
        totalUnits: "15,000 Copies every 2 months",
        format: "Standard Flyer",
      },
      productionScope:
        "High-volume printing, lamination, trimming, quality inspection.",
      clientsList: [
        {
          name: "Ashara Wellness",
          image: "/Ashara Wellness - Flyer.webp",
          organizationImage: "/images/Ashara (2).webp",
          copies: "1,000",
        },
        {
          name: "Pharma Co International",
          image: "/Pharma-Flyer.webp",
          organizationImage: "/images/Pharma-_2_.webp",
          copies: "3,000",
        },
        {
          name: "Helaz Beauty",
          image: "/Helaz Beauty - Flyer.webp",
          organizationImage: "/images/Helaz-Beauty.webp",
          copies: "2,000",
        },
      ],
    },
    {
      title: "Sticker Labels Production",
      category: "Labels & Packaging",
      image: "/Master-Cola (2).webp",
      size: "standard",
      client: "Fine Water",
      specs: {
        printProcess: "Offset Printing",
        paperStock: "Adhesive Label Paper",
        finishing: "Gloss Lamination",
        totalUnits: "20,000 Copies every 15 days",
        format: "Standard Sticker Labels",
      },
      productionScope:
        "High-volume printing, lamination, cutting, quality inspection, batch-controlled output.",
      clientsList: [
        {
          name: "Glory Candles",
          image: "/Glory Candles.webp",
          organizationImage: "/Glory-Candles.webp",
          copies: "1,000",
        },
        {
          name: "Master Cola",
          image: "/Master-Cola (2).webp",
          organizationImage: "/images/Master-logo.webp",
          copies: "3,000",
        },
        {
          name: "Liyu - Hair Food",
          image: "/Liyu - Hair Food.webp",
          organizationImage: "/Liyu-Oil.webp",
          copies: "1,500",
        },
        {
          name: "Kana Tea",
          image: "/Kana Tea.webp",
          organizationImage: "/Kana-Tea.webp",
          copies: "1,800",
        },
        {
          name: "Euro Cola",
          image: "/Euro Cola.webp",
          organizationImage: "/Euro.webp",
          copies: "2,000",
        },
        {
          name: "Arada",
          image: "/Arada (2).webp",
          organizationImage: "/images/Aradaa.webp",
          copies: "1,000",
        },
      ],
    },
    {
      title: "Collection",
      category: "Collection",
      image: "/Trafic-Management-Calendar.webp",
      size: "wide",
      client: "Federal Prison Commission",
      specs: {
        printProcess: "Offset Printing",
        paperStock: "80-100gsm Writing Paper + Card Cover",
        finishing: "Saddle Stitch / Perfect Binding.",
        totalUnits: "1,000 Copies",
        format: "Standard Notebook",
      },
      productionScope:
        "Prepress preparation, printing, binding, trimming, final inspection.",
      clientsList: [
        {
          name: "Traffic Management",
          image: "/Trafic-Management-Calendar.webp",
          organizationImage: "/images/T M jbj.webp",
          copies: "1,000",
          format: "Calendar",
        },
        {
          name: "Policy Studies Institute - shopping",
          image: "/Policy-Studies-Institute-Shopping-Bag.webp",
          organizationImage: "/images/Policy Study Instuties.webp",
          copies: "2,500",
          format: "Shopping Bag",
        },
        {
          name: "Goal Ethiopia",
          image: "/Goal Kit (3).webp",
          organizationImage: "/images/The global goal.webp",
          copies: "3,000",
          format: "Press Kit",
        },
        {
          name: "Policy Studies Institute",
          image: "/Policy-Studies-Institute.webp",
          organizationImage: "/images/Policy Study Instuties.webp",
          copies: "1,500",
          format: "Digital Notebook",
        },
      ],
    },
  ];

  const featuredCategories = [
    "Magazine",
    "Notebook",
    "Books",
    "Labels & Packaging",
  ];
  const featuredProjects = projects.filter((project) =>
    featuredCategories.includes(project.category),
  );
  const visibleProjects = isDedicatedPage
    ? projects
    : featuredProjects.slice(0, 4);
  const totalCopiesText = (() => {
    if (!activeProject?.specs?.totalUnits) return null;
    const base = selectedClient?.copies ?? activeProject.specs.totalUnits;
    if (activeProject.category === "Labels & Packaging") {
      return `${base} Copies (every 15 days)`;
    }
    if (
      (activeProject.category === "Brochure" ||
        activeProject.category === "Flyer") &&
      !base.toLowerCase().includes("every 2 months")
    ) {
      return `${base} Copies (every 2 months)`;
    }
    return base;
  })();
  const useOrganizationImagePreview = activeProject?.category !== "Books";

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
            <p className="mt-4 text-sm md:text-base text-gray-400 max-w-xl">
              Trusted for standout books, magazines, notebooks, brochures, and
              flyers in Addis Ababa—crafted to stand out.
            </p>
          </div>

          <div className="flex flex-wrap gap-2"></div>
        </div>

        {isDedicatedPage && (
          <div className="mb-6 flex justify-start">
            <a
              href="/#portfolio-heading"
              className="inline-flex items-center gap-3 rounded-full border-2 border-brand-red bg-brand-red/15 px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-brand-red shadow-[0_0_0_1px_rgba(239,68,68,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-red hover:text-white hover:shadow-lg"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-red text-white">
                <ArrowLeft size={16} />
              </span>
              Back to Home
            </a>
          </div>
        )}

        {/* Bento Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {visibleProjects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="relative group overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 animate-fade-in aspect-[4/3]"
              onClick={() => {
                if (!project.specs) return;
                setSelectedClient(project.clientsList?.[0] ?? null);
                setActiveProject(project);
              }}
            >
              {/* Image with Parallax-like scale effect */}
              <img
                src={project.image}
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
                  <span className="inline-block whitespace-nowrap text-brand-red text-xs font-black uppercase tracking-[0.3em] transform translate-y-full group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-300">
                    {project.category}
                  </span>
                </div>
                <div className="overflow-hidden mb-6">
                  <h3
                    className="text-lg md:text-xl font-black text-white transform translate-y-full group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-500 delay-75 leading-none uppercase"
                  >
                    {project.title.split(" ").length > 3
                      ? project.title.substring(0, 30) + "..."
                      : project.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-white/60 group/view">
                  <span className="text-xs font-bold uppercase tracking-widest group-hover:text-white group-active:text-white transition-colors">
                    {project.specs ? "Details" : "Preview"}
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
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest whitespace-nowrap opacity-100 group-hover:opacity-0 group-active:opacity-0 transition-opacity">
                {project.category}
              </div>
            </div>
          ))}
          {!isDedicatedPage && (
            <div className="col-span-full flex justify-center pt-2">
              <a
                href="/portofollio"
                className="group inline-flex items-center justify-center bg-transparent text-white px-2 py-1"
              >
                <span className="text-2xl md:text-3xl font-black uppercase tracking-tighter group-hover:text-brand-red transition-colors italic flex items-center gap-2">
                  See More
                  <span className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight size={22} className="text-white" />
                  </span>
                </span>
              </a>
            </div>
          )}
        </div>
        {isDedicatedPage && (
          <div className="mt-10 text-center space-y-6">
            <a href="/#home" className="inline-flex items-center gap-4 group">
              <span className="text-2xl md:text-3xl font-black uppercase tracking-tighter group-hover:text-brand-red transition-colors italic">
                Ready to start your project?
              </span>
              <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center transition-transform duration-500 group-hover:translate-x-4">
                <ArrowRight className="text-white" />
              </div>
            </a>
          </div>
        )}

      </div>

      {activeProject && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 px-5 py-10 md:px-8"
          role="dialog"
          aria-modal="true"
          onClick={() => {
            setActiveProject(null);
            setSelectedClient(null);
          }}
        >
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-3xl bg-white text-brand-dark shadow-2xl">
            <button
              type="button"
              aria-label="Close"
              onClick={() => {
                setActiveProject(null);
                setSelectedClient(null);
              }}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-xl font-bold text-brand-dark transition hover:bg-black/5"
            >
              ×
            </button>

            <div
              className="portfolio-modal-scroll max-h-[90vh] overflow-y-auto"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="p-6 md:p-8">
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-red mb-4">
                    {activeProject.category}
                  </p>
                  <div className="mb-4 rounded-2xl border border-black/10 p-4">
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-gray-50">
                      {selectedClient ? (
                        <img
                          src={
                            useOrganizationImagePreview
                              ? (selectedClient.organizationImage ??
                                selectedClient.image)
                              : selectedClient.image
                          }
                          alt={selectedClient.name}
                          className="h-full w-full object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-xs font-bold uppercase tracking-widest text-gray-400">
                          Select a client to view image
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-black/10 p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-brand-red">
                        Print Process
                      </p>
                      <p className="mt-2 text-sm text-gray-700">
                        {activeProject.specs?.printProcess}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-black/10 p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-brand-red">
                        Paper Stock
                      </p>
                      <p className="mt-2 text-sm text-gray-700">
                        {activeProject.specs?.paperStock}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-black/10 p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-brand-red">
                        Finishing
                      </p>
                      <p className="mt-2 text-sm text-gray-700">
                        {activeProject.specs?.finishing}
                      </p>
                    </div>
                    {totalCopiesText && (
                      <div className="rounded-2xl border border-black/10 p-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-brand-red">
                          Total Copies
                        </p>
                        <p className="mt-2 text-sm text-gray-700">
                          {totalCopiesText}
                        </p>
                      </div>
                    )}
                    <div className="rounded-2xl border border-black/10 p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-brand-red">
                        Format
                      </p>
                      <p className="mt-2 text-sm text-gray-700">
                        {selectedClient?.format ?? activeProject.specs?.format}
                      </p>
                    </div>
                    {activeProject.category === "Books" && selectedClient?.author && (
                      <div className="rounded-2xl border border-black/10 p-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-brand-red">
                          Author
                        </p>
                        <p className="mt-2 text-sm text-gray-700">
                          {selectedClient.author}
                        </p>
                      </div>
                    )}
                    {activeProject.productionScope && (
                      <div className="rounded-2xl border border-black/10 p-4 md:col-span-2">
                        <p className="text-xs font-bold uppercase tracking-widest text-brand-red">
                          Production Scope
                        </p>
                        <p className="mt-2 text-sm text-gray-700">
                          {activeProject.productionScope}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="lg:border-l lg:border-black/10 lg:pl-8">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-red">
                    Clients List
                  </p>
                  <ul className="mt-4 grid gap-3 text-sm text-gray-700">
                    {activeProject.clientsList?.map((client) => {
                      const isSelected = selectedClient?.name === client.name;
                      return (
                        <li key={client.name}>
                          <button
                            type="button"
                            onClick={() => setSelectedClient(client)}
                            className={`flex w-full items-center justify-between gap-4 rounded-2xl border px-4 py-3 text-left transition ${
                              isSelected
                                ? "border-brand-red/40 bg-brand-red/10 text-brand-dark"
                                : "border-black/10 hover:bg-black/5"
                            }`}
                          >
                            <span className="font-semibold text-brand-dark">
                              {client.name}
                            </span>
                            <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
                              {isSelected ? "Selected" : "View"}
                            </span>
                          </button>
                          {activeProject.category !== "Books" && (
                            <div
                              className={`grid transition-all duration-300 ${
                                isSelected
                                  ? "mt-2 grid-rows-[1fr] opacity-100"
                                  : "grid-rows-[0fr] opacity-0"
                              }`}
                             >
                              <div className="overflow-hidden">
                                <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-3">
                                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-brand-red">
                                    Product Image
                                  </p>
                                  <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-white">
                                    <img
                                      src={client.image}
                                      alt={`${client.name} product`}
                                      className="h-full w-full object-contain"
                                      loading="lazy"
                                      decoding="async"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
