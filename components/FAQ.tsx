import React from 'react';

const faqs = [
  {
    question: 'What printing services does Terara Printing Press provide in Addis Ababa?',
    answer:
      'Terara Printing Press provides offset printing, digital printing, large format printing, business stationery, branding materials, and custom packaging for organizations and businesses in Addis Ababa and across Ethiopia.',
  },
  {
    question: 'How fast can I get my printing order delivered?',
    answer:
      'Delivery time depends on quantity, finishing, and production requirements. Most standard jobs in Addis Ababa are completed quickly, while urgent orders are prioritized after technical review.',
  },
  {
    question: 'Do you support custom packaging and branded corporate materials?',
    answer:
      'Yes. We design and produce custom product boxes, labels, branded office stationery, promotional materials, and campaign-ready print assets tailored to your business needs.',
  },
  {
    question: 'How can I request a quote from Terara Printing Press?',
    answer:
      'You can request a quote by phone, email, or the website quote form. Share your print size, quantity, finishing preference, and deadline for faster pricing.',
  },
  {
    question: 'Where is Terara Printing Press located?',
    answer:
      'Terara Printing Press is located at 4 Killo, Dink Sira Tower, 1st Floor, Addis Ababa, Ethiopia.',
  },
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-gray-50 border-t border-gray-100" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-red font-bold uppercase tracking-widest mb-2">AEO and SEO Answers</p>
            <h2 id="faq-heading" className="text-4xl md:text-5xl font-black text-brand-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Quick, direct answers about our printing services in Addis Ababa to help customers and answer engines understand exactly what we offer.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-xl font-bold text-brand-dark mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
