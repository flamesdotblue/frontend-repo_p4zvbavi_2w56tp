import { motion } from 'framer-motion';
import { Target, Shield, Sparkles, LineChart } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Perfect product fit',
    desc: 'Match your value props to each prospect’s stack, pains, and priorities with real signals.'
  },
  {
    icon: Sparkles,
    title: '1:1 personalization at scale',
    desc: 'Generate unique, human-sounding emails that reference role, tech, and recent wins.'
  },
  {
    icon: LineChart,
    title: 'Higher reply rates',
    desc: 'Teams see 2–5x more positive replies with context‑rich intros and crisp CTAs.'
  },
  {
    icon: Shield,
    title: 'Safe & compliant',
    desc: 'Respect inbox rules with sending guardrails, warmups, and automatic throttling.'
  }
];

export default function Features() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Built to win more replies</h2>
          <p className="mt-4 text-gray-600">Everything you need to turn cold outreach into warm conversations.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
