import fs from "node:fs/promises";
import path from "node:path";

const baseUrl = "https://test1-eight-livid.vercel.app";
const brand = "Terara Printers";
const phoneDisplay = "+251 988 559 355";
const phoneRaw = "+251988559355";
const email = "teraramarketing@gmail.com";
const address = "4 Killo, Dink Sira Tower, 1st Floor, Addis Ababa, Ethiopia";
const lat = "9.0337315";
const lng = "38.7610906";

const printingPages = [
  {
    slug: "offset-printing",
    label: "Offset Printing",
    localIntent: "Offset Printing in Addis Ababa",
    metaTitle: "Offset Printing Addis Ababa | Terara Printers",
    metaDescription:
      "Professional offset printing in Addis Ababa for books, magazines, brochures, labels, catalogs, and business materials with consistent color and finishing.",
    h1: "Offset Printing Services in Addis Ababa",
    heroLead:
      "Produce high-volume print materials with sharp detail, stable color, and dependable finishing for business, education, and institutional projects.",
    localLead:
      "We support Addis Ababa organizations with offset printing for books, magazines, brochures, catalogs, labels, packaging inserts, and branded business materials.",
    image: "/hero-banner-1280.webp",
    includes: [
      "Books, magazines, catalogs, brochures, flyers, and labels.",
      "High-volume production with consistent unit quality.",
      "Paper, coating, and finishing recommendations by project goal.",
      "Prepress checks for bleed, margins, color, and image quality.",
      "Repeat production support for recurring brand and campaign materials.",
    ],
    process: [
      "We confirm print format, quantity, paper stock, color requirements, and deadline.",
      "Artwork is preflight checked for print readiness before plate and production setup.",
      "Printing runs with registration, color, and paper checks throughout production.",
      "Final materials are finished, trimmed, packed, and prepared for pickup or delivery.",
    ],
    bestFor: [
      "Bulk brochure and flyer printing",
      "Books, magazines, and catalogs",
      "Corporate and institutional reports",
      "Labels and recurring branded materials",
    ],
    faq: [
      {
        q: "When should I choose offset printing?",
        a: "Offset printing is best for medium and high-volume jobs where consistent color, sharp detail, and better unit cost are important.",
      },
      {
        q: "Can you print brochures, books, and labels with offset?",
        a: "Yes. Offset printing works well for brochures, books, magazines, catalogs, labels, flyers, and many business materials.",
      },
      {
        q: "Do you check files before offset production?",
        a: "Yes. We review bleed, margins, image quality, color setup, and page order before production starts.",
      },
    ],
  },
  {
    slug: "digital-printing",
    label: "Digital Printing",
    localIntent: "Digital Printing in Addis Ababa",
    metaTitle: "Digital Printing Addis Ababa | Terara Printers",
    metaDescription:
      "Fast digital printing in Addis Ababa for short-run brochures, booklets, manuals, business documents, event materials, and urgent print jobs.",
    h1: "Digital Printing Services in Addis Ababa",
    heroLead:
      "Print short runs, urgent updates, and personalized materials quickly without sacrificing clear text, sharp graphics, or professional finishing.",
    localLead:
      "We help Addis Ababa businesses and organizations produce short-run brochures, booklets, manuals, business documents, event materials, and variable-data jobs.",
    image: "/Goal Kit (2).webp",
    includes: [
      "Short-run brochures, flyers, booklets, and manuals.",
      "Business documents, presentations, and office materials.",
      "Variable data printing for names, codes, and personalized content.",
      "Fast setup for urgent campaigns and low-quantity jobs.",
      "Flexible reprints when designs or information change often.",
    ],
    process: [
      "We confirm size, page count, paper, quantity, and urgency.",
      "Files are reviewed for readability, margins, and production safety.",
      "Digital output is produced quickly with focused quality checks.",
      "Jobs are trimmed, finished, packed, and handed over for use or delivery.",
    ],
    bestFor: [
      "Urgent short-run printing",
      "Training manuals and booklets",
      "Personalized print materials",
      "Small batch business documents",
    ],
    faq: [
      {
        q: "Is digital printing good for small quantities?",
        a: "Yes. Digital printing is ideal for smaller quantities, urgent jobs, and materials that change often.",
      },
      {
        q: "Can digital printing handle personalized content?",
        a: "Yes. We can support variable data such as names, numbers, codes, and custom details when files are prepared correctly.",
      },
      {
        q: "How fast can digital printing be completed?",
        a: "Turnaround depends on quantity and finishing, but digital printing is usually the fastest option for short-run work.",
      },
    ],
  },
  {
    slug: "books-printing",
    label: "Books Printing",
    localIntent: "Books Printing in Addis Ababa",
    metaTitle: "Books Printing Addis Ababa | Terara Printers",
    metaDescription:
      "High-quality books printing in Addis Ababa for education, training, reports, and publishing projects. Terara Printers handles layout checks, durable binding, and reliable turnaround.",
    h1: "Books Printing Services in Addis Ababa",
    heroLead:
      "Print clean, durable books with reliable binding quality for schools, institutions, publishers, and business teams.",
    localLead:
      "We support Addis Ababa organizations with practical, professional books printing for textbooks, manuals, reports, and publication projects.",
    image: "/Business School - Books.webp",
    includes: [
      "Textbook, training manual, and reference book printing.",
      "Perfect binding, saddle stitch, and spiral options.",
      "Cover and inside-paper recommendations by use case.",
      "Preflight review for margins, bleed, and readability.",
      "Consistent reprint quality for recurring editions.",
    ],
    process: [
      "We review page count, trim size, paper options, and finishing.",
      "Files are preflight checked before production to reduce errors.",
      "Books are printed, bound, trimmed, and quality checked.",
      "Completed batches are packed and prepared for pickup or delivery.",
    ],
    bestFor: [
      "Educational institutions",
      "Training and workshop materials",
      "Corporate manuals",
      "Book publishing projects",
    ],
    faq: [
      {
        q: "Which binding is best for printed books?",
        a: "It depends on page count and use. Perfect binding is common for thicker books, while saddle stitch works well for lower page counts.",
      },
      {
        q: "Can you support recurring book reprints?",
        a: "Yes. We support repeat editions and keep production quality consistent across reprints.",
      },
      {
        q: "Do you check files before printing books?",
        a: "Yes. We run preflight checks for layout, bleed, image quality, and text alignment before production.",
      },
    ],
  },
  {
    slug: "magazine-printing",
    label: "Magazine Printing",
    localIntent: "Magazine Printing in Addis Ababa",
    metaTitle: "Magazine Printing Addis Ababa | Terara Printers",
    metaDescription:
      "Professional magazine printing in Addis Ababa with clean color, strong paper options, and dependable finishing for corporate, institutional, and editorial projects.",
    h1: "Magazine Printing in Addis Ababa",
    heroLead:
      "Produce visually sharp magazines with balanced color, smooth finishing, and consistent quality from first issue to reprint.",
    localLead:
      "From corporate newsletters to institutional publications, we help Addis Ababa clients produce polished magazines that reflect their brand standards.",
    image: "/Arba Minich.webp",
    includes: [
      "Magazine printing for periodic and one-time publications.",
      "Gloss, matte, and mixed paper options for inside and cover.",
      "Color management for image-heavy editorial layouts.",
      "Binding and finishing tailored to issue size and budget.",
      "Support for both medium and high-volume print runs.",
    ],
    process: [
      "We align format, page plan, paper, and print quantity.",
      "Editorial files are checked for print-readiness and image quality.",
      "Production runs with calibrated color and stable registration.",
      "Final copies are trimmed, bound, packed, and labeled for distribution.",
    ],
    bestFor: [
      "Corporate magazines",
      "NGO and institutional publications",
      "Editorial content",
      "Brand storytelling campaigns",
    ],
    faq: [
      {
        q: "Can you print magazines with many photos?",
        a: "Yes. We optimize color output and paper selection for photo-rich magazine layouts.",
      },
      {
        q: "Do you print monthly or quarterly magazine runs?",
        a: "Yes. We support scheduled recurring runs and one-off editions.",
      },
      {
        q: "Can we choose different paper for cover and inside pages?",
        a: "Yes. Most magazine jobs use a heavier cover with a lighter inside stock for balance and cost control.",
      },
    ],
  },
  {
    slug: "notebook-printing",
    label: "Notebook Printing",
    localIntent: "Notebook Printing in Addis Ababa",
    metaTitle: "Notebook Printing Addis Ababa | Terara Printers",
    metaDescription:
      "Notebook printing in Addis Ababa for schools, organizations, and branded programs. Terara Printers delivers quality paper, durable binding, and consistent branding.",
    h1: "Notebook Printing Services in Addis Ababa",
    heroLead:
      "Order practical, durable notebooks with custom covers and strong finishing for education, corporate use, and campaigns.",
    localLead:
      "We work with Addis Ababa schools, programs, and businesses to print notebooks that balance quality, usability, and budget.",
    image: "/Minisiry-of-Edication.webp",
    includes: [
      "School and institutional notebook printing.",
      "Custom cover design with lined, grid, or blank pages.",
      "Saddle stitch, perfect bind, and spiral notebook formats.",
      "Branding support for logos, colors, and campaign themes.",
      "Batch production for program and distribution needs.",
    ],
    process: [
      "We confirm format, page count, and cover style based on your use case.",
      "Artwork is reviewed for print-readiness and consistent branding.",
      "Notebooks are printed, bound, and trimmed with final quality checks.",
      "Orders are packed and organized for easy distribution.",
    ],
    bestFor: [
      "Schools and universities",
      "Training programs",
      "Corporate stationery kits",
      "Branded outreach campaigns",
    ],
    faq: [
      {
        q: "Can you print custom branded notebooks?",
        a: "Yes. We can apply your logo, colors, and artwork to cover and inside layouts.",
      },
      {
        q: "What notebook formats do you support?",
        a: "We support multiple sizes and binding styles, including spiral, saddle stitched, and perfect bound formats.",
      },
      {
        q: "Do you handle large notebook quantities for institutions?",
        a: "Yes. We handle medium and high-volume notebook production with consistent quality.",
      },
    ],
  },
  {
    slug: "brochure-printing",
    label: "Brochure Printing",
    localIntent: "Brochure Printing in Addis Ababa",
    metaTitle: "Brochure Printing Addis Ababa | Terara Printers",
    metaDescription:
      "Brochure printing in Addis Ababa for product marketing, corporate profiles, and campaign communication. Get clean folds, strong color, and professional finishing.",
    h1: "Brochure Printing in Addis Ababa",
    heroLead:
      "Present your message with professional brochures that communicate clearly and strengthen brand credibility.",
    localLead:
      "We help Addis Ababa businesses print brochures for sales, events, organization profiles, and marketing campaigns.",
    image: "/Ethiopia Health Insurance - Brochure.webp",
    includes: [
      "Tri-fold, bi-fold, and custom brochure panel formats.",
      "Paper and coating options for premium presentation.",
      "Color-accurate brochure production for brand consistency.",
      "Neat folding and trimming for clean final finish.",
      "Short-run and bulk brochure printing options.",
    ],
    process: [
      "We confirm brochure format, quantity, and campaign objective.",
      "Design files are reviewed for bleed, fold alignment, and readability.",
      "Production runs with quality checks for color and fold precision.",
      "Final brochures are trimmed, folded, packed, and delivered.",
    ],
    bestFor: [
      "Company profiles",
      "Service and product marketing",
      "Event handouts",
      "Sales meetings and presentations",
    ],
    faq: [
      {
        q: "Which brochure format should I choose?",
        a: "Tri-fold and bi-fold are most common. We recommend format based on content volume and layout flow.",
      },
      {
        q: "Can you help with fold-safe file setup?",
        a: "Yes. We check panel sizes, fold positions, and margins before print.",
      },
      {
        q: "Do you support urgent brochure printing in Addis Ababa?",
        a: "Yes. Rush jobs are possible based on quantity and finishing requirements.",
      },
    ],
  },
  {
    slug: "flyer-printing",
    label: "Flyer Printing",
    localIntent: "Flyer Printing in Addis Ababa",
    metaTitle: "Flyer Printing Addis Ababa | Terara Printers",
    metaDescription:
      "Flyer printing in Addis Ababa for promotions, launches, events, and announcements. Terara Printers delivers clear print, fast turnaround, and practical quantity options.",
    h1: "Flyer Printing Services in Addis Ababa",
    heroLead:
      "Get campaign-ready flyers with sharp visuals, readable content, and dependable turnaround for immediate distribution.",
    localLead:
      "From local promotions to organization announcements, we support Addis Ababa teams with reliable flyer printing for active campaigns.",
    image: "/Pharma-Flyer.webp",
    includes: [
      "Single-sided and double-sided flyer printing.",
      "Multiple sizes for events, promotions, and notices.",
      "Paper finish options based on budget and brand style.",
      "Rapid production for time-sensitive campaigns.",
      "Consistent color output for reorders and repeat runs.",
    ],
    process: [
      "We confirm flyer size, quantity, and campaign deadline.",
      "Files are reviewed for print safety and readability.",
      "Flyers are printed with stable color and clean trimming.",
      "Orders are packed for distribution, pickup, or delivery.",
    ],
    bestFor: [
      "Local promotions",
      "Product launches",
      "Event announcements",
      "Community awareness campaigns",
    ],
    faq: [
      {
        q: "What size is most common for flyer printing?",
        a: "A5 and A4 are common options, but size depends on your message, design, and distribution method.",
      },
      {
        q: "Can I print small and large flyer quantities?",
        a: "Yes. We support short runs and bulk quantities depending on campaign needs.",
      },
      {
        q: "How fast can flyers be printed?",
        a: "Turnaround depends on quantity and finishing, but we support urgent jobs when production capacity allows.",
      },
    ],
  },
];

const esc = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const listHtml = (items) =>
  items.map((item) => `<li>${esc(item)}</li>`).join("\n                ");

const processHtml = (steps) =>
  steps
    .map(
      (step, index) =>
        `<li><p class="step">Step ${index + 1}</p><p>${esc(step)}</p></li>`,
    )
    .join("\n                ");

const faqHtml = (faq) =>
  faq
    .map(
      (entry, index) => `<article class="faq-item${index === 0 ? " is-open" : ""}">
                  <button class="faq-trigger" type="button" data-faq-trigger aria-expanded="${index === 0 ? "true" : "false"}">${esc(entry.q)}<span aria-hidden="true">${index === 0 ? "-" : "+"}</span></button>
                  <div class="faq-content">${esc(entry.a)}</div>
                </article>`,
    )
    .join("\n                ");

const relatedLinksHtml = (currentSlug) =>
  printingPages
    .filter((page) => page.slug !== currentSlug)
    .map(
      (page) =>
        `<a href="/services/${page.slug}.html">${esc(page.label)}</a>`,
    )
    .join("\n                ");

const serviceDetailCopy = {
  "offset-printing": [
    "Offset printing is the practical choice when a project needs hundreds or thousands of copies with stable color, crisp type, and a lower unit cost at volume. We use it for annual reports, textbooks, magazines, catalogs, brochures, labels, inserts, and recurring institutional materials.",
    "Before plates and press setup, our team checks trim size, bleed, pagination, image resolution, CMYK or Pantone requirements, and the paper or board weight. That technical review helps avoid costly corrections once production is running.",
    "Clients choose this service when consistency matters across long runs: matching brand reds, keeping photo-heavy pages balanced, or producing repeat editions that need to look like earlier batches.",
  ],
  "digital-printing": [
    "Digital printing is built for speed, small quantities, and content that changes often. It works well for training manuals, business presentations, event handouts, prototype brochures, personalized certificates, numbered documents, and urgent office materials.",
    "Because there is no plate setup, we can move quickly from approved files to production while still checking margins, readability, paper choice, page order, and finishing details such as trimming, stapling, spiral binding, or lamination.",
    "The value is flexibility: teams can print the quantity they need now, update names or codes through variable data, and reprint improved versions without carrying large stock.",
  ],
  "books-printing": [
    "Books printing needs more than clean pages; it needs a durable structure. We produce textbooks, training manuals, reference books, reports, and publication projects with attention to page order, cover stock, spine thickness, and binding method.",
    "Our file review covers margins, bleed, image quality, page count, section breaks, and cover setup before production. We recommend saddle stitch, perfect binding, or spiral binding based on page count, usage, and budget.",
    "This service is strongest for schools, publishers, NGOs, companies, and training teams that need books to survive daily handling while keeping text readable and brand presentation consistent.",
  ],
  "magazine-printing": [
    "Magazine printing is suited to image-heavy layouts where color balance, paper feel, and finishing shape how the publication is perceived. We support corporate magazines, newsletters, institutional journals, annual features, and one-time editorial projects.",
    "Our team reviews pagination, spread alignment, image resolution, cover and inside stock, coating preference, and binding requirements before production. Gloss, matte, and heavier cover options can be matched to the reading experience.",
    "For recurring issues, we keep specifications organized so future editions maintain a familiar size, finish, and color standard while still allowing updated artwork and content.",
  ],
  "notebook-printing": [
    "Notebook printing is useful for schools, conferences, staff programs, campaigns, and branded giveaways where everyday usability matters. We produce lined, grid, custom inside-page, cover-branded, and institution-specific notebook formats.",
    "The technical choices include inside paper weight, cover stock, ruling style, page count, binding, trimming, and lamination. We confirm these details early so the notebook feels right in hand and holds up during repeated use.",
    "This service creates practical brand presence: students, staff, trainees, or event guests use the item repeatedly, so cover durability and consistent logo reproduction are as important as the printed pages inside.",
  ],
  "brochure-printing": [
    "Brochure printing is best for sales conversations, product launches, corporate profiles, service explainers, and campaign materials that need to be read, kept, and shared. We handle bi-fold, tri-fold, gate-fold, booklet-style, and custom brochure formats.",
    "Our prepress checks focus on folds, panel order, bleed, image sharpness, paper weight, coating, and how the design reads after finishing. Those details matter because a beautiful flat design can fail if fold positions or margins are wrong.",
    "The strongest brochures combine clear messaging with the right tactile finish, so we guide clients on stock, lamination, quantity, and delivery timing before production starts.",
  ],
  "flyer-printing": [
    "Flyer printing is built for direct, fast-moving communication: store promotions, public announcements, event invitations, launch offers, campus campaigns, and street-level distribution in Addis Ababa.",
    "We check file size, bleed, color mode, image quality, single-sided or double-sided setup, and paper weight so the flyer prints cleanly and stays economical at the planned quantity.",
    "The unique value is speed with clarity. Flyers need to be readable at a glance, easy to distribute, and cost-aware, so we help match format and finish to the campaign instead of overbuilding the piece.",
  ],
};

const pageParagraphs = (page) => serviceDetailCopy[page.slug] ?? [
  `${brand} reviews each ${page.label.toLowerCase()} project by use case, quantity, material, finishing, and deadline before production begins.`,
  "Our team checks file readiness, stock options, color expectations, and handover requirements so the final print is practical and consistent.",
  "We keep communication clear from quotation through pickup or delivery, especially for recurring jobs that need repeatable specifications.",
];

const processParagraphs = (page) => [
  `Each ${page.label.toLowerCase()} project begins with a short planning step where we confirm format, stock, quantity, and turnaround expectations.`,
  `We then preflight your files and highlight any technical adjustments that improve print-readiness, durability, and final presentation quality.`,
  `After production and finishing, we perform final inspection and organize packaging for smooth pickup or delivery in Addis Ababa.`,
];

const paragraphHtml = (paragraphs) =>
  paragraphs
    .map((paragraph) => `<p class="body-copy">${esc(paragraph)}</p>`)
    .join("\n          ");

const jsonLdFor = (page) => {
  const pageUrl = `${baseUrl}/services/${page.slug}.html`;
  const localBusinessId = `${baseUrl}/#localbusiness`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${baseUrl}/#services`,
          },
          { "@type": "ListItem", position: 3, name: page.label, item: pageUrl },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": localBusinessId,
        name: brand,
        url: `${baseUrl}/`,
        telephone: phoneRaw,
        email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "4 Killo, Dink Sira Tower, 1st Floor",
          addressLocality: "Addis Ababa",
          addressCountry: "ET",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: Number(lat),
          longitude: Number(lng),
        },
        areaServed: {
          "@type": "City",
          name: "Addis Ababa",
        },
      },
      {
        "@type": "Service",
        name: page.label,
        description: page.metaDescription,
        serviceType: page.localIntent,
        areaServed: {
          "@type": "City",
          name: "Addis Ababa",
        },
        provider: {
          "@id": localBusinessId,
        },
        url: pageUrl,
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faq.map((entry) => ({
          "@type": "Question",
          name: entry.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: entry.a,
          },
        })),
      },
    ],
  };
};

const pageHtml = (page) => {
  const pageUrl = `${baseUrl}/services/${page.slug}.html`;
  const imageUrl = `${baseUrl}${page.image}`;
  const jsonLd = JSON.stringify(jsonLdFor(page), null, 2);

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(page.metaTitle)}</title>
    <meta name="description" content="${esc(page.metaDescription)}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta name="theme-color" content="#d3202a" />
    <meta name="geo.region" content="ET-AA" />
    <meta name="geo.placename" content="Addis Ababa, Ethiopia" />
    <meta name="geo.position" content="${lat};${lng}" />
    <meta name="ICBM" content="${lat}, ${lng}" />
    <link rel="canonical" href="${pageUrl}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${esc(page.metaTitle)}" />
    <meta property="og:description" content="${esc(page.metaDescription)}" />
    <meta property="og:url" content="${pageUrl}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:site_name" content="${brand}" />
    <meta property="og:locale" content="en_US" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(page.metaTitle)}" />
    <meta name="twitter:description" content="${esc(page.metaDescription)}" />
    <meta name="twitter:image" content="${imageUrl}" />
    <link rel="icon" href="/favicon.ico?v=20260425f" sizes="any" />
    <link rel="icon" type="image/png" href="/favicon-round.png?v=20260425f" />
    <link rel="shortcut icon" type="image/png" href="/favicon-round.png?v=20260425f" />
    <link rel="apple-touch-icon" href="/favicon-round.png?v=20260425f" />
    <link rel="llms.txt" href="/llms.txt" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/services/service-pages.css?v=20260425d" />
    <script type="application/ld+json">
${jsonLd}
    </script>
  </head>
  <body style="--hero-image: url('${page.image}');">
    <div class="page">
      <header class="site-header" data-site-header>
        <div class="header-shell">
          <a class="brand" href="/#home" aria-label="Terara Printers home">
            <img
              src="/logo-hq.webp"
              alt="Terara Printers"
              class="brand-logo"
              loading="eager"
              fetchpriority="high"
              width="160"
              height="56"
              decoding="async"
            />
            <span class="sr-only">Terara Printers home</span>
          </a>

          <div class="header-actions" data-header-actions>
            <a class="quote-cta" href="/#contact">Get a Quote</a>
            <button
              class="menu-toggle"
              type="button"
              data-menu-toggle
              aria-expanded="false"
              aria-controls="site-navigation"
              aria-label="Open navigation menu"
            >
              <span class="menu-bars" data-menu-icon aria-hidden="true"></span>
            </button>

            <nav id="site-navigation" class="nav-menu" data-nav-menu aria-label="Primary navigation">
              <a href="/#home" class="nav-link">Home</a>
              <a href="/#about" class="nav-link">About</a>
              <a href="/#values" class="nav-link">Values</a>
              <a href="/#services" class="nav-link">Services</a>
              <a href="/#portfolio" class="nav-link">Portfolio</a>
              <a href="/#clients" class="nav-link">Clients</a>
              <a href="/#faq" class="nav-link">FAQ</a>
              <a href="/#contact" class="nav-link">Contact</a>
              <a href="/#contact" class="nav-cta">Contact Us Now</a>
            </nav>
          </div>
        </div>
      </header>

      <p class="breadcrumb"><a href="/">Home</a> / <a href="/#services">Services</a> / ${esc(page.label)}</p>

      <section class="hero reveal" aria-labelledby="page-title">
        <div class="hero-inner">
          <p class="eyebrow">${esc(page.localIntent)}</p>
          <h1 id="page-title">${esc(page.h1)}</h1>
          <p class="lead">${esc(page.heroLead)}</p>
          <div class="cta-row">
            <a class="btn primary" href="/#contact">Request a Quote</a>
            <a class="btn ghost" href="tel:${phoneRaw}">Call ${phoneDisplay}</a>
          </div>
        </div>
      </section>

      <section class="content-grid">
        <article class="panel reveal">
          <h2 class="section-title">Service Details</h2>
          <p class="section-lead">${esc(page.localLead)}</p>
          <div class="paragraph-stack">
          ${paragraphHtml(pageParagraphs(page))}
          </div>
          <ul class="checklist">
                ${listHtml(page.includes)}
          </ul>

          <div class="kpi-grid" aria-label="Quick facts">
            <div class="kpi">
              <p class="kpi-label">Location</p>
              <p class="kpi-value">${esc(address)}</p>
            </div>
            <div class="kpi">
              <p class="kpi-label">Phone</p>
              <p class="kpi-value">${phoneDisplay}</p>
            </div>
            <div class="kpi">
              <p class="kpi-label">Turnaround</p>
              <p class="kpi-value">Standard and rush jobs available</p>
            </div>
          </div>
        </article>

        <aside class="panel sticky reveal">
          <h2 class="section-title">Best For</h2>
          <ul class="checklist">
                ${listHtml(page.bestFor)}
          </ul>

          <div class="cta-row">
            <a class="btn primary" href="mailto:${email}">Email Us</a>
            <a class="btn soft" href="/#faq">More FAQs</a>
          </div>
        </aside>
      </section>

      <section class="split">
        <article class="panel reveal">
          <h2 class="section-title">How We Work</h2>
          <div class="paragraph-stack">
          ${paragraphHtml(processParagraphs(page))}
          </div>
          <ol class="process-list">
                ${processHtml(page.process)}
          </ol>
        </article>

        <article class="panel reveal" id="faq">
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-lead">Clear answers for Addis Ababa clients planning this service.</p>
                ${faqHtml(page.faq)}
        </article>
      </section>

      <section class="panel reveal" aria-labelledby="related-services-title">
        <h2 class="section-title" id="related-services-title">Related Printing Pages</h2>
        <p class="section-lead">Explore other printing options from Terara Printers.</p>
        <div class="link-list">
                ${relatedLinksHtml(page.slug)}
        </div>
      </section>

      <footer class="site-footer-main" aria-label="Site footer">
        <div class="footer-inner">
          <div class="footer-grid">
            <section class="footer-brand">
              <img
                src="/logo-hq.webp"
                alt="Terara Printers"
                class="footer-logo"
                loading="lazy"
                width="220"
                height="112"
                decoding="async"
              />
              <p class="footer-copy">
                Addis Ababa based studio offering offset, short-run, large format,
                and packaging work for clients since 2017 G.C., including brochure
                work that makes a strong first impression.
              </p>
            </section>

            <section class="footer-col">
              <h2 class="footer-title">Explore</h2>
              <ul class="footer-list">
                <li><a href="/#home">Home</a></li>
                <li><a href="/#about">About Us</a></li>
                <li><a href="/#values">Our Values</a></li>
                <li><a href="/#services">Services</a></li>
                <li><a href="/#portfolio">Our Portfolio</a></li>
                <li><a href="/#contact">Contact</a></li>
              </ul>
            </section>

            <section class="footer-col">
              <h2 class="footer-title">Company</h2>
              <ul class="footer-list">
                <li><a href="/faq.html">FAQ Page</a></li>
              </ul>
            </section>
          </div>

          <div class="footer-bottom">
            <div class="footer-meta">
              <p>&copy; <span data-year></span> Terara. Beyond Your Expectations.</p>
              <p>Published: April 25, 2026 | Updated: April 25, 2026</p>
              <p>Address: 4 Killo, Dink Sira Tower, 1st Floor, Addis Ababa</p>
              <p>Trust: 30+ partner organizations | 7+ years of service</p>
            </div>
            <button class="scroll-top" type="button" data-scroll-top aria-label="Scroll back to top">&#8593;</button>
          </div>
        </div>
      </footer>
    </div>

    <script src="/services/service-pages.js" defer></script>
  </body>
</html>
`;
};

const outputDir = path.join(process.cwd(), "public", "services");
await fs.mkdir(outputDir, { recursive: true });

for (const page of printingPages) {
  const outPath = path.join(outputDir, `${page.slug}.html`);
  await fs.writeFile(outPath, pageHtml(page), "utf8");
}

console.log(`Generated ${printingPages.length} printing pages in ${outputDir}`);
