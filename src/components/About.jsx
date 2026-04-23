import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="A product-minded engineer who enjoys the details."
          description="I build backend systems with reliability in mind and pair them with polished user experiences that feel intentional, fast, and easy to trust."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/80 shadow-[0_25px_70px_-35px_rgba(15,23,42,0.25)] backdrop-blur dark:border-white/10 dark:bg-slate-900/60"
          >
            <img
              src="/img/about.jpg"
              alt="Creative workspace background"
              className="h-full min-h-[320px] w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="grid gap-6"
          >
            <div className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-8 shadow-[0_25px_70px_-35px_rgba(15,23,42,0.25)] backdrop-blur dark:border-white/10 dark:bg-slate-900/60">
              <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
                With 2+ years of experience across Node.js, Express.js, MongoDB,
                and React, I care about building systems that are easy to
                maintain, pleasant to use, and strong enough for real-world
                growth. I especially enjoy API architecture, clean project
                structure, and interfaces that make technical products feel
                approachable.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-slate-200/70 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                  Focus
                </p>
                <p className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">
                  Secure backends, scalable APIs, and responsive interfaces
                </p>
              </div>

              <div className="rounded-[2rem] border border-slate-200/70 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                  Availability
                </p>
                <p className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">
                  Open to roles and remote collaboration
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
