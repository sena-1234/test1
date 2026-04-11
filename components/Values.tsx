import React from 'react';
import { BadgeCheck, Clock3, Gem, Layers3, ShieldCheck, Sparkles } from 'lucide-react';

const values = [
  {
    title: 'Quality First',
    description:
      'We focus on clean finishing, accurate color, and reliable print quality for offset printing, digital printing, and packaging projects in Addis Ababa.',
    icon: Gem,
    accent: 'from-red-500 to-orange-500',
  },
  {
    title: 'Fast Turnaround',
    description:
      'Our production team works with clear timelines and efficient processes to deliver printing services on time for businesses and organizations.',
    icon: Clock3,
    accent: 'from-amber-400 to-yellow-500',
  },
  {
    title: 'Trusted Service',
    description:
      'We build long-term client relationships through responsive communication, dependable support, and consistent printing results across Ethiopia.',
    icon: ShieldCheck,
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Modern Production',
    description:
      'From offset printing to large format printing and branded materials, we use practical production experience with modern technology.',
    icon: Layers3,
    accent: 'from-sky-500 to-indigo-500',
  },
];

const Values: React.FC = () => {
  return (
    <section
      id="values"
      className="relative overflow-hidden bg-white py-24"
      aria-labelledby="values-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-brand-red/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-red/15 bg-brand-red/5 px-4 py-2 text-sm font-bold uppercase tracking-[0.25em] text-brand-red">
              <Sparkles size={16} />
              Our Values
            </div>
            <h2 id="values-heading" className="max-w-3xl text-4xl font-black leading-tight text-brand-dark md:text-5xl">
              Values That Guide Our Printing Services in Addis Ababa
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-gray-600 lg:ml-auto">
            Terara Printers is built on quality, speed, trust, and professional production standards, helping businesses in Addis Ababa choose a reliable partner for offset printing and commercial printing services.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => (
            <article
              key={value.title}
              className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-7 shadow-[0_18px_40px_rgba(17,24,39,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(17,24,39,0.10)]"
            >
              <div className={`absolute right-0 top-0 h-28 w-28 rounded-full bg-gradient-to-br ${value.accent} opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-20`}></div>

              <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${value.accent} text-white shadow-lg`}>
                <value.icon size={26} />
              </div>

              <h3 className="mb-3 text-2xl font-black text-brand-dark">{value.title}</h3>
              <p className="text-base leading-relaxed text-gray-600">{value.description}</p>

              <div className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-brand-red">
                <BadgeCheck size={16} />
                Core Value
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] bg-brand-dark px-8 py-10 text-white shadow-[0_24px_70px_rgba(17,24,39,0.22)] md:px-10">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-brand-red">Our Promise</p>
              <h3 className="mb-4 text-3xl font-black">We print with care, speed, and consistency</h3>
              <p className="max-w-3xl leading-relaxed text-gray-300">
                Every project we handle is guided by attention to detail, clear communication, and a commitment to professional results. From offset printing to packaging and branded materials, we work to deliver print solutions that help businesses present themselves with confidence.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-red">What Clients Expect</p>
              <ul className="space-y-3 text-sm text-gray-200">
                <li>Consistent print quality for every order</li>
                <li>Fast turnaround with dependable service</li>
                <li>Professional support from start to finish</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
