import React from 'react';
import { ChevronDown, Clock3, MapPin, MessageSquareQuote, PhoneCall } from 'lucide-react';

const faqs = [
  {
    question: 'Why do clients trust your team?',
    answer:
      'Organizations choose us for consistent quality, modern equipment, and dependable turnaround times. We focus on accurate color, clean finishing, and clear communication from quotation to delivery.',
  },
  {
    question: 'What services do you cover in one place?',
    answer:
      'We handle litho, short-run, large-format, stationery, branding materials, and custom packaging in one place. This gives clients better quality control and simpler coordination.',
  },
  {
    question: 'How do you handle large runs?',
    answer:
      'For high-volume jobs we deliver sharp output, stable color, and efficient workflows for brochures, books, packaging, and office materials.',
  },
  {
    question: 'How fast are typical orders?',
    answer:
      'Turnaround depends on quantity, finishing, and technical requirements, but most standard jobs are completed quickly. Rush requests are reviewed and prioritized based on capacity so clients can meet important deadlines with confidence.',
  },
  {
    question: 'Do you handle branded materials and custom packaging?',
    answer:
      'Yes. We produce branded stationery, promotional materials, labels, product boxes, and campaign assets tailored to your requirements.',
  },
  {
    question: 'Where are you located?',
    answer:
      '4 Killo, Dink Sira Tower, 1st Floor.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden border-t border-gray-100 bg-[radial-gradient(circle_at_top_left,_rgba(237,28,36,0.10),_transparent_28%),linear-gradient(180deg,#fff_0%,#f9fafb_50%,#f3f4f6_100%)] py-20"
      aria-labelledby="faq-heading"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-brand-red/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-red/15 bg-white/80 px-4 py-2 text-sm font-bold uppercase tracking-[0.25em] text-brand-red shadow-sm backdrop-blur-sm">
              <MessageSquareQuote size={16} />
              Helpful Answers
            </div>
            <h2 id="faq-heading" className="mx-auto mb-4 max-w-4xl text-4xl font-black text-brand-dark md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
              Clear answers about why businesses choose our team for reliable
              quality, fast turnaround, and litho services, including notebook
              work that looks polished.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.65fr_0.95fr] lg:items-start">
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <article
                    key={faq.question}
                    className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                      isOpen
                        ? 'border-brand-red/30 bg-white shadow-[0_20px_60px_rgba(17,24,39,0.10)]'
                        : 'border-white/70 bg-white/85 shadow-sm backdrop-blur-sm hover:border-brand-red/20 hover:shadow-lg'
                    }`}
                  >
                    <button
                      type="button"
                      className="flex w-full items-start justify-between gap-4 p-6 text-left md:p-7"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                    >
                      <div>
                        <div className="mb-3 inline-flex items-center rounded-full bg-brand-red/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
                          FAQ {String(index + 1).padStart(2, '0')}
                        </div>
                        <h3 className="text-lg font-black leading-snug text-brand-dark md:text-xl">{faq.question}</h3>
                      </div>
                      <span
                        className={`mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-red/15 bg-brand-red/5 text-brand-red transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      >
                        <ChevronDown size={20} />
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-70'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-gray-100 px-6 pb-6 pt-5 md:px-7 md:pb-7">
                          <p className="max-w-3xl text-base leading-relaxed text-gray-700 md:text-lg">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <aside className="space-y-5 lg:sticky lg:top-24">
              <div className="rounded-3xl bg-brand-dark p-7 text-white shadow-[0_24px_70px_rgba(17,24,39,0.28)]">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-brand-red">Quick Contact</p>
                <h3 className="mb-4 text-2xl font-black">Need a fast answer or quote?</h3>
                <p className="mb-6 leading-relaxed text-gray-300">
                  Share your job size, quantity, finishing, and deadline to get
                  a faster and more accurate response from our team.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <PhoneCall className="mt-0.5 text-brand-red" size={18} />
                    <div>
                      <p className="font-bold uppercase tracking-wider text-white">Call Us</p>
                      <p className="text-gray-300">+251 988 559 355</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <Clock3 className="mt-0.5 text-brand-red" size={18} />
                    <div>
                      <p className="font-bold uppercase tracking-wider text-white">Fast Turnaround</p>
                      <p className="text-gray-300">Standard jobs are completed quickly, with urgent jobs prioritized after review.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-brand-red/15 bg-white/90 p-7 shadow-lg backdrop-blur-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-red/10 text-brand-red">
                  <MapPin size={22} />
                </div>
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-brand-red">Visit Us</p>
                <h3 className="mb-3 text-2xl font-black text-brand-dark">Addis Ababa Location</h3>
                <p className="leading-relaxed text-gray-700">
                  4 Killo, Dink Sira Tower, 1st Floor, Addis Ababa.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
