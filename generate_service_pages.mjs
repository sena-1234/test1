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

const defaultAreas = [
  "4 Kilo",
  "Piassa",
  "Bole",
  "Kazanchis",
  "Megenagna",
  "CMC",
  "Sarbet",
  "Meskel Square",
];

const services = [
  {
    slug: "marketing-brand-collateral",
    label: "Marketing and Brand Collateral",
    localIntent: "Brochure and Flyer Printing in Addis Ababa",
    metaTitle:
      "Brochure and Flyer Printing Addis Ababa | Terara Printers",
    metaDescription:
      "Professional brochure, flyer, postcard, and catalog printing in Addis Ababa. Terara Printers delivers sharp color, clean finishing, and fast turnaround for local campaigns.",
    h1: "Marketing and Brand Collateral Printing in Addis Ababa",
    heroLead:
      "Launch campaigns with brochures, flyers, postcards, and catalogs that look consistent, premium, and ready for real business results.",
    localLead:
      "From 4 Kilo to Bole and Piassa, we support businesses and organizations across Addis Ababa with dependable print quality and practical delivery planning.",
    image: "/GOAL.webp",
    includes: [
      "Brochures in tri-fold, bi-fold, and custom panel formats.",
      "Single and double-sided flyers for promotions and events.",
      "Postcards for direct response and hand-to-hand marketing.",
      "Product catalogs and profile booklets with neat finishing.",
      "Paper and coating guidance based on budget and brand goals.",
    ],
    process: [
      "We confirm artwork, dimensions, quantity, and campaign deadline.",
      "A proof is shared so text, layout, and color are approved before print.",
      "Production runs on calibrated equipment for consistent quality.",
      "Final materials are trimmed, checked, packed, and delivered or picked up.",
    ],
    bestFor: [
      "Sales campaigns",
      "Product launches",
      "Corporate communication",
      "NGO awareness programs",
    ],
    faq: [
      {
        q: "Which file format is best for brochure and flyer printing?",
        a: "Press-ready PDF is best. We also help adjust margins, bleed, and image quality when needed.",
      },
      {
        q: "Can you match our brand colors across different print items?",
        a: "Yes. We keep color references and proof before production to maintain consistency.",
      },
      {
        q: "Do you handle urgent campaign printing in Addis Ababa?",
        a: "Yes. Rush jobs are possible depending on quantity and finishing requirements.",
      },
    ],
  },
  {
    slug: "event-materials",
    label: "Event Materials",
    localIntent: "Event Printing Services in Addis Ababa",
    metaTitle:
      "Event Printing Addis Ababa | Invitations, Programs, Menus",
    metaDescription:
      "Event printing services in Addis Ababa for invitations, programs, menus, table tents, and name badges. Terara Printers helps events look organized and professional.",
    h1: "Event Materials Printing for Addis Ababa",
    heroLead:
      "Create a complete event print kit that keeps your event polished, clear, and easy to navigate for guests and teams.",
    localLead:
      "We support conferences, weddings, exhibitions, and corporate events across Addis Ababa, including venues around Bole, Kazanchis, and Meskel Square.",
    image: "/Helaz.webp",
    includes: [
      "Invitations and RSVP cards for formal and business events.",
      "Program booklets, schedule inserts, and menu cards.",
      "Table tents, directional signs, and seating labels.",
      "Name badges for speakers, guests, and staff teams.",
      "Coordinated layouts so all event materials look connected.",
    ],
    process: [
      "We map all required printed items by event flow.",
      "Files are checked for readability and print safety.",
      "Items are produced in batches to stay consistent.",
      "Packaging is grouped by hall, session, or table setup.",
    ],
    bestFor: [
      "Corporate events",
      "Conferences",
      "Exhibitions",
      "Weddings and ceremonies",
    ],
    faq: [
      {
        q: "Can you print all event materials in one order?",
        a: "Yes. We can produce invitations, programs, menus, badges, and signage together.",
      },
      {
        q: "Can we make last-minute name updates before printing badges?",
        a: "Yes. Variable name lists can be updated before final production cutoff.",
      },
      {
        q: "Do you package by hall or table?",
        a: "Yes. We can sort and label printed items by venue zone, hall, or table number.",
      },
    ],
  },
  {
    slug: "short-run-printing",
    label: "Short-Run Printing",
    localIntent: "Fast Short-Run Printing in Addis Ababa",
    metaTitle:
      "Short-Run Printing Addis Ababa | Fast and Flexible Printing",
    metaDescription:
      "Need low-quantity printing in Addis Ababa? Terara Printers offers short-run printing for manuals, booklets, and variable data jobs with quick and reliable turnaround.",
    h1: "Short-Run Printing Services in Addis Ababa",
    heroLead:
      "Print only what you need, when you need it, with quality output that keeps projects moving without overstock.",
    localLead:
      "Ideal for Addis Ababa businesses with frequent updates, pilot campaigns, training materials, and urgent low-volume print needs.",
    image: "/Goal Kit (2).webp",
    includes: [
      "Booklets and manuals for training and internal operations.",
      "Short quantity campaign materials with fast setup.",
      "Variable data printing for personalized communication.",
      "Repeat micro-batches to avoid unused inventory.",
      "Cost-aware recommendations for short print cycles.",
    ],
    process: [
      "We define quantity, stock type, and turnaround target.",
      "Your files are preflight checked for print compatibility.",
      "Production runs with focused quality control for small batches.",
      "Orders are finished and dispatched for same-day or scheduled pickup.",
    ],
    bestFor: [
      "Training updates",
      "Pilot campaigns",
      "Personalized mailers",
      "Small batch reprints",
    ],
    faq: [
      {
        q: "What is considered a short-run job?",
        a: "Short-run means lower quantities where speed and flexibility matter more than bulk pricing.",
      },
      {
        q: "Can short-run printing still look premium?",
        a: "Yes. With proper file prep and material choice, short-run jobs can look excellent.",
      },
      {
        q: "Can we reorder small quantities every week?",
        a: "Yes. We support recurring small-batch printing schedules.",
      },
    ],
  },
  {
    slug: "large-format-specialty",
    label: "Large Format and Specialty",
    localIntent: "Large Format Printing in Addis Ababa",
    metaTitle:
      "Large Format Printing Addis Ababa | Banners, Posters, Signage",
    metaDescription:
      "Large format printing in Addis Ababa for banners, posters, yard signs, and wall graphics. Terara Printers delivers bold visuals for events, stores, and offices.",
    h1: "Large Format and Specialty Printing Addis Ababa",
    heroLead:
      "Make your message visible at a distance with durable, high-impact large format prints for indoor and outdoor use.",
    localLead:
      "We print and finish large visuals for businesses across Addis Ababa, from storefront campaigns in Piassa to event branding in Bole.",
    image: "/Arada.webp",
    includes: [
      "Vinyl and fabric banners for indoor and outdoor exposure.",
      "Poster printing for promotions and public messaging.",
      "Yard signs and directional graphics for events and sites.",
      "Wall graphics for offices, retail spaces, and exhibitions.",
      "Material recommendations based on placement and lifespan.",
    ],
    process: [
      "We review placement, viewing distance, and finish requirements.",
      "Artwork is checked for scale and sharpness at final size.",
      "Printing is tuned by media type for color and durability.",
      "Final pieces are cut, packed, and prepared for clean installation.",
    ],
    bestFor: [
      "Retail branding",
      "Outdoor promotions",
      "Trade show visuals",
      "Office interior branding",
    ],
    faq: [
      {
        q: "What material works best for outdoor banners in Addis Ababa?",
        a: "Vinyl is often best for durability. We recommend based on weather exposure and duration.",
      },
      {
        q: "Can you print very large wall graphics from our design files?",
        a: "Yes. We check resolution and scaling so final prints remain clear.",
      },
      {
        q: "Do you advise on installation?",
        a: "Yes. We provide practical mounting and finishing guidance for better results.",
      },
    ],
  },
  {
    slug: "business-stationery",
    label: "Business Stationery",
    localIntent: "Business Card and Letterhead Printing in Addis Ababa",
    metaTitle:
      "Business Stationery Printing Addis Ababa | Cards and Letterheads",
    metaDescription:
      "Business stationery printing in Addis Ababa for business cards, letterheads, envelopes, and notepads. Terara Printers helps brands stay consistent in daily communication.",
    h1: "Business Stationery Printing in Addis Ababa",
    heroLead:
      "Improve trust and professionalism with coordinated business cards, letterheads, envelopes, and notepads for your team.",
    localLead:
      "From startups in Bole to institutions around 4 Kilo, we support Addis Ababa teams that need clean, reliable corporate stationery.",
    image: "/Trafic Management.webp",
    includes: [
      "Business cards with clean finishing and premium options.",
      "Letterhead printing for official communication and proposals.",
      "Branded envelopes for internal and external correspondence.",
      "Custom notepads for office, training, and field use.",
      "Brand consistency checks across all stationery items.",
    ],
    process: [
      "We align dimensions, paper weight, and brand standards.",
      "Proofs are reviewed for layout accuracy and readability.",
      "Production runs with stable color and neat finishing.",
      "Items are packed by team, branch, or department request.",
    ],
    bestFor: [
      "Corporate identity",
      "Office communication",
      "Sales teams",
      "Professional proposals",
    ],
    faq: [
      {
        q: "Can all stationery items match the same brand style?",
        a: "Yes. We standardize color, spacing, and typography across all items.",
      },
      {
        q: "Do you offer different business card paper options?",
        a: "Yes. We offer multiple paper weights and finishes based on brand look and budget.",
      },
      {
        q: "Can we split delivery by department?",
        a: "Yes. We can package by team or location for easier internal distribution.",
      },
    ],
  },
  {
    slug: "custom-packaging",
    label: "Custom Packaging",
    localIntent: "Custom Packaging Printing in Addis Ababa",
    metaTitle:
      "Custom Packaging Printing Addis Ababa | Boxes, Labels, Bags",
    metaDescription:
      "Custom packaging printing in Addis Ababa for product boxes, labels, stickers, and branded bags. Terara Printers helps products look better on shelf and in delivery.",
    h1: "Custom Packaging and Label Printing Addis Ababa",
    heroLead:
      "Turn packaging into a strong brand asset with practical structure, clear labeling, and premium visual finish.",
    localLead:
      "We support Addis Ababa product businesses with packaging that improves shelf appeal, recognition, and customer unboxing experience.",
    image: "/master-cola.webp",
    includes: [
      "Product box printing for retail and distribution needs.",
      "Labels and stickers for jars, bottles, and product lines.",
      "Branded bags in paper or plastic formats.",
      "Gift-wrap and special finish options for premium products.",
      "Material and structure advice for practical use.",
    ],
    process: [
      "We collect product dimensions and packaging objective.",
      "Layouts are proofed to prevent production mistakes.",
      "Printing and finishing are matched to handling conditions.",
      "Final units are quality checked before delivery.",
    ],
    bestFor: [
      "Retail products",
      "Food and beverage packaging",
      "Cosmetics and personal care",
      "Gift-ready products",
    ],
    faq: [
      {
        q: "Can you help us choose packaging size and structure?",
        a: "Yes. We review product dimensions and recommend practical packaging formats.",
      },
      {
        q: "Can we print boxes and labels together?",
        a: "Yes. We can produce full packaging sets with aligned brand look.",
      },
      {
        q: "Do you support short runs for new product launches?",
        a: "Yes. We offer short and medium runs for testing and early launch phases.",
      },
    ],
  },
  {
    slug: "promotional-products",
    label: "Promotional Products",
    localIntent: "Promotional Product Branding in Addis Ababa",
    metaTitle:
      "Promotional Product Printing Addis Ababa | Shirts, Mugs, Giveaways",
    metaDescription:
      "Promotional product branding in Addis Ababa for t-shirts, mugs, displays, and giveaways. Terara Printers helps local brands stay visible beyond campaigns.",
    h1: "Promotional Product Branding in Addis Ababa",
    heroLead:
      "Keep your brand visible every day with practical promotional products designed for recall and repeated use.",
    localLead:
      "Perfect for Addis Ababa events, community programs, and corporate activations that need memorable branded items.",
    image: "/Goal Kit.webp",
    includes: [
      "Branded t-shirts and wearable campaign items.",
      "Custom mugs and practical office giveaways.",
      "Trade show display materials for better booth visibility.",
      "Campaign giveaway sets for events and field teams.",
      "Guidance on product mix by audience and budget.",
    ],
    process: [
      "We define campaign objective and target audience.",
      "Artwork is adapted per product surface and print method.",
      "Sample approval is done before full production.",
      "Finished products are grouped and packed for distribution.",
    ],
    bestFor: [
      "Brand awareness campaigns",
      "Trade shows",
      "Corporate gifts",
      "Community outreach",
    ],
    faq: [
      {
        q: "Which promo products give better brand visibility?",
        a: "Frequently used items like apparel and mugs usually deliver stronger long-term visibility.",
      },
      {
        q: "Can one campaign include mixed promotional items?",
        a: "Yes. We can prepare mixed bundles for different audience groups.",
      },
      {
        q: "Do you support both small and large promo orders?",
        a: "Yes. We handle pilot quantities and high-volume campaign orders.",
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
        `<li><p class=\"step\">Step ${index + 1}</p><p>${esc(step)}</p></li>`,
    )
    .join("\n                ");

const faqHtml = (faq) =>
  faq
    .map(
      (entry, index) => `<article class=\"faq-item${index === 0 ? " is-open" : ""}\">
                  <button class=\"faq-trigger\" type=\"button\" data-faq-trigger aria-expanded=\"${index === 0 ? "true" : "false"}\">${esc(entry.q)}<span aria-hidden=\"true\">${index === 0 ? "-" : "+"}</span></button>
                  <div class=\"faq-content\">${esc(entry.a)}</div>
                </article>`,
    )
    .join("\n                ");

const relatedLinksHtml = (currentSlug) =>
  services
    .filter((service) => service.slug !== currentSlug)
    .map(
      (service) =>
        `<a href=\"/services/${service.slug}.html\">${esc(service.label)}</a>`,
    )
    .join("\n                ");

const localAreasHtml = (areas) =>
  areas
    .map((area) => `<li class=\"badge-item\">${esc(area)}</li>`)
    .join("\n                  ");

const trimFinalPeriod = (value) => String(value).replace(/[.]+$/, "");

const paragraphHtml = (paragraphs) =>
  paragraphs
    .map((paragraph) => `<p class=\"body-copy\">${esc(paragraph)}</p>`)
    .join("\n          ");

const serviceParagraphs = (service) => {
  const sampleItems = service.includes
    .slice(0, 3)
    .map((item) => trimFinalPeriod(item).toLowerCase())
    .join(", ");
  const serviceName = service.label.toLowerCase();
  const areaReference = defaultAreas.slice(0, 4).join(", ");
  const localIntentCore = service.localIntent
    .replace(/\s+in\s+addis\s+ababa/i, "")
    .toLowerCase();

  return [
    `In Addis Ababa, ${localIntentCore} works best when design, materials, and timeline are planned together from the start. Our team aligns each ${serviceName} order to your business objective and delivery date.`,
    `${brand} supports clients with ${sampleItems}. We also help with paper selection, print-readiness, finishing choices, and quantity planning so the result is both professional and practical.`,
    `If your office, branch, or event is around ${areaReference}, we provide dependable communication from quotation to final handover and maintain consistent quality at each stage.`,
  ];
};

const processParagraphs = (service) => {
  const serviceName = service.label.toLowerCase();
  return [
    `Each ${serviceName} project starts with requirements review so we can match materials, finishing, and schedule to your exact objective in Addis Ababa.`,
    `Before mass production, we run a proof and preflight check to reduce errors in layout, sizing, and color. This step protects your budget and improves final quality.`,
    `After production, we complete final inspection, sorting, and packaging to make pickup or delivery smooth for your team.`,
  ];
};

const jsonLdFor = (service) => {
  const pageUrl = `${baseUrl}/services/${service.slug}.html`;
  const localBusinessId = `${baseUrl}/#localbusiness`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${baseUrl}/#services` },
          { "@type": "ListItem", position: 3, name: service.label, item: pageUrl },
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
        areaServed: defaultAreas.map((area) => ({
          "@type": "Place",
          name: `Addis Ababa ${area}`,
        })),
      },
      {
        "@type": "Service",
        name: service.label,
        description: service.metaDescription,
        serviceType: service.localIntent,
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
        mainEntity: service.faq.map((entry) => ({
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

const pageHtml = (service) => {
  const pageUrl = `${baseUrl}/services/${service.slug}.html`;
  const imageUrl = `${baseUrl}${service.image}`;
  const jsonLd = JSON.stringify(jsonLdFor(service), null, 2);

  return `<!doctype html>
<html lang=\"en\">
  <head>
    <meta charset=\"UTF-8\" />
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />
    <title>${esc(service.metaTitle)}</title>
    <meta name=\"description\" content=\"${esc(service.metaDescription)}\" />
    <meta name=\"robots\" content=\"index, follow, max-image-preview:large\" />
    <meta name=\"theme-color\" content=\"#d3202a\" />
    <meta name=\"geo.region\" content=\"ET-AA\" />
    <meta name=\"geo.placename\" content=\"Addis Ababa, Ethiopia\" />
    <meta name=\"geo.position\" content=\"${lat};${lng}\" />
    <meta name=\"ICBM\" content=\"${lat}, ${lng}\" />
    <link rel=\"canonical\" href=\"${pageUrl}\" />
    <meta property=\"og:type\" content=\"website\" />
    <meta property=\"og:title\" content=\"${esc(service.metaTitle)}\" />
    <meta property=\"og:description\" content=\"${esc(service.metaDescription)}\" />
    <meta property=\"og:url\" content=\"${pageUrl}\" />
    <meta property=\"og:image\" content=\"${imageUrl}\" />
    <meta property=\"og:site_name\" content=\"${brand}\" />
    <meta property=\"og:locale\" content=\"en_US\" />
    <meta name=\"twitter:card\" content=\"summary_large_image\" />
    <meta name=\"twitter:title\" content=\"${esc(service.metaTitle)}\" />
    <meta name=\"twitter:description\" content=\"${esc(service.metaDescription)}\" />
    <meta name=\"twitter:image\" content=\"${imageUrl}\" />
    <link rel=\"icon\" type=\"image/png\" href=\"/favicon-round.png\" />
    <link rel=\"apple-touch-icon\" href=\"/favicon-round.png\" />
    <link rel=\"llms.txt\" href=\"/llms.txt\" />
    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />
    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />
    <link href=\"https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap\" rel=\"stylesheet\" />
    <link rel=\"stylesheet\" href=\"/services/service-pages.css\" />
    <script type=\"application/ld+json\">
${jsonLd}
    </script>
  </head>
  <body style=\"--hero-image: url('${service.image}');\">
    <div class=\"page\">
      <header class=\"site-header\" data-site-header>
        <div class=\"header-shell\">
          <a class=\"brand\" href=\"/#home\" aria-label=\"Terara Printers home\">
            <img
              src=\"/logo-hq.webp\"
              alt=\"Terara Printers\"
              class=\"brand-logo\"
              loading=\"eager\"
              fetchpriority=\"high\"
              width=\"160\"
              height=\"56\"
              decoding=\"async\"
            />
            <span class=\"sr-only\">Terara Printers home</span>
          </a>

          <div class=\"header-actions\" data-header-actions>
            <a class=\"quote-cta\" href=\"/#contact\">Get a Quote</a>
            <button
              class=\"menu-toggle\"
              type=\"button\"
              data-menu-toggle
              aria-expanded=\"false\"
              aria-controls=\"site-navigation\"
              aria-label=\"Open navigation menu\"
            >
              <span class=\"menu-bars\" data-menu-icon aria-hidden=\"true\"></span>
            </button>

            <nav id=\"site-navigation\" class=\"nav-menu\" data-nav-menu aria-label=\"Primary navigation\">
              <a href=\"/#home\" class=\"nav-link\">Home</a>
              <a href=\"/#about\" class=\"nav-link\">About</a>
              <a href=\"/#values\" class=\"nav-link\">Values</a>
              <a href=\"/#services\" class=\"nav-link\">Services</a>
              <a href=\"/#portfolio\" class=\"nav-link\">Portfolio</a>
              <a href=\"/#clients\" class=\"nav-link\">Clients</a>
              <a href=\"/#faq\" class=\"nav-link\">FAQ</a>
              <a href=\"/#contact\" class=\"nav-link\">Contact</a>
              <a href=\"/#contact\" class=\"nav-cta\">Contact Us Now</a>
            </nav>
          </div>
        </div>
      </header>

      <p class=\"breadcrumb\"><a href=\"/\">Home</a> / <a href=\"/#services\">Services</a> / ${esc(service.label)}</p>

      <section class=\"hero reveal\" aria-labelledby=\"page-title\">
        <div class=\"hero-inner\">
          <p class=\"eyebrow\">${esc(service.localIntent)}</p>
          <h1 id=\"page-title\">${esc(service.h1)}</h1>
          <p class=\"lead\">${esc(service.heroLead)}</p>
          <div class=\"cta-row\">
            <a class=\"btn primary\" href=\"/#contact\">Request a Quote</a>
            <a class=\"btn ghost\" href=\"tel:${phoneRaw}\">Call ${phoneDisplay}</a>
          </div>
        </div>
      </section>

      <section class=\"content-grid\">
        <article class=\"panel reveal\">
          <h2 class=\"section-title\">Service Details</h2>
          <p class=\"section-lead\">${esc(service.localLead)}</p>
          <div class=\"paragraph-stack\">
          ${paragraphHtml(serviceParagraphs(service))}
          </div>
          <ul class=\"checklist\">
                ${listHtml(service.includes)}
          </ul>

          <div class=\"kpi-grid\" aria-label=\"Quick facts\">
            <div class=\"kpi\">
              <p class=\"kpi-label\">Location</p>
              <p class=\"kpi-value\">${esc(address)}</p>
            </div>
            <div class=\"kpi\">
              <p class=\"kpi-label\">Phone</p>
              <p class=\"kpi-value\">${phoneDisplay}</p>
            </div>
            <div class=\"kpi\">
              <p class=\"kpi-label\">Turnaround</p>
              <p class=\"kpi-value\">Standard and rush jobs available</p>
            </div>
          </div>
        </article>

        <aside class=\"panel sticky reveal\">
          <h2 class=\"section-title\">Best For</h2>
          <ul class=\"checklist\">
                ${listHtml(service.bestFor)}
          </ul>

          <div class=\"cta-row\">
            <a class=\"btn primary\" href=\"mailto:${email}\">Email Us</a>
            <a class=\"btn soft\" href=\"/#faq\">More FAQs</a>
          </div>
        </aside>
      </section>

      <section class=\"split\">
        <article class=\"panel reveal\">
          <h2 class=\"section-title\">How We Work</h2>
          <div class=\"paragraph-stack\">
          ${paragraphHtml(processParagraphs(service))}
          </div>
          <ol class=\"process-list\">
                ${processHtml(service.process)}
          </ol>
        </article>

        <article class=\"panel reveal\" id=\"faq\">
          <h2 class=\"section-title\">Frequently Asked Questions</h2>
          <p class=\"section-lead\">Clear answers for Addis Ababa clients planning this service.</p>
                ${faqHtml(service.faq)}
        </article>
      </section>

      <section class=\"panel reveal\" aria-labelledby=\"related-services-title\">
        <h2 class=\"section-title\" id=\"related-services-title\">Related Services</h2>
        <p class=\"section-lead\">Compare options and build a complete print plan from one trusted team.</p>
        <div class=\"link-list\">
                ${relatedLinksHtml(service.slug)}
        </div>
      </section>

      <footer class=\"site-footer-main\" aria-label=\"Site footer\">
        <div class=\"footer-inner\">
          <div class=\"footer-grid\">
            <section class=\"footer-brand\">
              <img
                src=\"/logo-hq.webp\"
                alt=\"Terara Printers\"
                class=\"footer-logo\"
                loading=\"lazy\"
                width=\"220\"
                height=\"112\"
                decoding=\"async\"
              />
              <p class=\"footer-copy\">
                Addis Ababa based studio offering offset, short-run, large format,
                and packaging work for clients since 2017 G.C., including brochure
                work that makes a strong first impression.
              </p>
              <div class=\"footer-socials\">
                <a href=\"https://www.facebook.com/teraraprinters\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"social-btn\" aria-label=\"Visit Terara Printers on Facebook\">
                  <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M17 2H14a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\"></path></svg>
                </a>
                <a href=\"https://www.instagram.com/teraraprinters\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"social-btn\" aria-label=\"Visit Terara Printers on Instagram\">
                  <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect width=\"20\" height=\"20\" x=\"2\" y=\"2\" rx=\"5\" ry=\"5\"></rect><path d=\"M16 11.37a4 4 0 1 1-2.94-2.94\"></path><line x1=\"17.5\" x2=\"17.51\" y1=\"6.5\" y2=\"6.5\"></line></svg>
                </a>
                <a href=\"https://www.tiktok.com/@teraraprinters\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"social-btn\" aria-label=\"Visit Terara Printers on TikTok\">
                  <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" class=\"tiktok-mark\"><path d=\"M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.89-.23-2.74.24-.81.47-1.38 1.31-1.63 2.21-.16.61-.17 1.25-.09 1.88.27 1.25 1.13 2.35 2.22 2.94.67.35 1.41.54 2.15.54 1.56 0 3.01-.93 3.58-2.38.22-.55.3-1.14.32-1.74.01-3.1-.01-6.2.01-9.3z\"></path></svg>
                </a>
                <a href=\"https://www.linkedin.com/in/teraraprinting/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"social-btn\" aria-label=\"Visit Terara Printers on LinkedIn\">
                  <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\"></path><rect width=\"4\" height=\"12\" x=\"2\" y=\"9\"></rect><circle cx=\"4\" cy=\"4\" r=\"2\"></circle></svg>
                </a>
                <a href=\"https://t.me/teraraprinters\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"social-btn\" aria-label=\"Message Terara Printers on Telegram\">
                  <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m22 2-7 20-4-9-9-4Z\"></path><path d=\"M22 2 11 13\"></path></svg>
                </a>
              </div>
            </section>

            <section class=\"footer-col\">
              <h2 class=\"footer-title\">Explore</h2>
              <ul class=\"footer-list\">
                <li><a href=\"/#home\">Home</a></li>
                <li><a href=\"/#about\">About Us</a></li>
                <li><a href=\"/#values\">Our Values</a></li>
                <li><a href=\"/#services\">Services</a></li>
                <li><a href=\"/#portfolio\">Our Portfolio</a></li>
                <li><a href=\"/#contact\">Contact</a></li>
              </ul>
            </section>

            <section class=\"footer-col\">
              <h2 class=\"footer-title\">Services</h2>
              <ul class=\"footer-list\">
                <li><a href=\"/#services\">Offset</a></li>
                <li><a href=\"/#services\">Digital</a></li>
                <li><a href=\"/#services\">Large Format</a></li>
                <li><a href=\"/#services\">Branding and Design</a></li>
                <li><a href=\"/#services\">Custom Packaging</a></li>
              </ul>
            </section>

            <section class=\"footer-col\">
              <h2 class=\"footer-title\">Company</h2>
              <ul class=\"footer-list\">
                <li><a href=\"/faq.html\">FAQ Page</a></li>
              </ul>
            </section>
          </div>

          <div class=\"footer-bottom\">
            <div class=\"footer-meta\">
              <p>&copy; <span data-year></span> Terara. Beyond Your Expectations.</p>
              <p>Published: April 12, 2026 | Updated: April 12, 2026</p>
              <p>Address: 4 Killo, Dink Sira Tower, 1st Floor, Addis Ababa</p>
              <p>Trust: 30+ partner organizations | 7+ years of service</p>
            </div>
            <button class=\"scroll-top\" type=\"button\" data-scroll-top aria-label=\"Scroll back to top\">&#8593;</button>
          </div>
        </div>
      </footer>
    </div>

    <script src=\"/services/service-pages.js\" defer></script>
  </body>
</html>
`;
};

const outputDir = path.join(process.cwd(), "public", "services");
await fs.mkdir(outputDir, { recursive: true });

for (const service of services) {
  const outPath = path.join(outputDir, `${service.slug}.html`);
  await fs.writeFile(outPath, pageHtml(service), "utf8");
}

console.log(`Generated ${services.length} service pages in ${outputDir}`);
