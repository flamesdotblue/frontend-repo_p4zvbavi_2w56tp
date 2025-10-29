import { motion } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/10 via-purple-600/10 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center rounded-full bg-indigo-600/10 px-3 py-1 text-sm text-indigo-600 ring-1 ring-indigo-600/20">
              <Sparkles className="mr-2 h-4 w-4" />
              Hyper‑personalized outreach
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              Cold emails that feel like warm intros
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Boost reply rates with emails crafted for each prospect’s role, stack, and recent wins. Our engine maps your value to their needs—so every message lands.
            </p>

            <div className="mt-6">
              <LeadCapture />
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm text-gray-600">
              <div className="flex -space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-gradient-to-br from-indigo-400 to-purple-500"
                  />
                ))}
              </div>
              <span>Trusted by 2,000+ SDRs & founders</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-2xl bg-white shadow-xl ring-1 ring-black/5 p-6">
              <div className="flex items-center gap-3 text-indigo-600 font-medium">
                <Rocket className="h-5 w-5" />
                <span>Example cold email</span>
              </div>
              <div className="mt-4 space-y-4 text-sm leading-6 text-gray-700">
                <p>Subject: Faster onboarding for {`{Acme’s}` } product team</p>
                <p>
                  Hey Sarah — noticed Acme’s hiring in product and recently adopted
                  Jira + Linear. We help teams like yours cut onboarding time by 38%
                  with role‑aware templates that sit right inside your stack.
                </p>
                <p>
                  Happy to share a 3‑minute teardown using your latest release notes.
                  Worth a look?
                </p>
                <p>— Alex</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LeadCapture() {
  return (
    <form
      className="w-full max-w-xl bg-white/70 backdrop-blur rounded-xl p-2 shadow-sm ring-1 ring-gray-200"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const email = new FormData(form).get('email');
        if (email) alert(`Thanks! We'll reach out at ${email}`);
        form.reset();
      }}
    >
      <div className="flex items-center gap-2">
        <input
          name="email"
          type="email"
          required
          placeholder="Enter your work email"
          className="flex-1 rounded-lg border-0 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-white font-medium shadow hover:bg-indigo-500 transition"
        >
          Get early access
        </button>
      </div>
      <p className="px-2 pt-2 text-xs text-gray-500">
        No spam. Unsubscribe anytime.
      </p>
    </form>
  );
}
