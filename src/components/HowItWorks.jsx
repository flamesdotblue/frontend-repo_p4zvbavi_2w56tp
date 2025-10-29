import { motion } from 'framer-motion';

const steps = [
  {
    number: '1',
    title: 'Connect signals',
    desc: 'Plug in your site, product pages, and CRM. We auto‑detect ICP fit and triggers.'
  },
  {
    number: '2',
    title: 'Choose angle',
    desc: 'Pick the value prop that maps to each prospect’s pains, stack, or milestones.'
  },
  {
    number: '3',
    title: 'Send & learn',
    desc: 'Ship sequences with safe sending. Learn which narratives convert in your niche.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">How it works</h2>
          <p className="mt-4 text-gray-600">Personalization without the busywork.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="absolute -top-3 -left-3 h-10 w-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold">
                {s.number}
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
