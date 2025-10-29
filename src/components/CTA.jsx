import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-semibold"
        >
          Turn cold outreach into warm conversations
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-3 text-gray-300 max-w-2xl mx-auto"
        >
          Get early access and see how hyper‑personalized messaging lifts your reply rate.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8"
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert('Thanks! You\'re on the list.');
            }}
            className="inline-flex items-center justify-center rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-3 font-medium transition"
          >
            Request access
          </a>
        </motion.div>
        <p className="mt-4 text-xs text-gray-400">Free during beta • No credit card</p>
      </div>
    </section>
  );
}
