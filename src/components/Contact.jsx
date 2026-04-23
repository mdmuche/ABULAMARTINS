import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Contact({ contactDetails }) {
  return (
    <section id="contact" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something credible, polished, and globally competitive."
            description="If you’re hiring for backend, full-stack, or product-focused engineering roles, I’d be happy to share more detail on my experience and the kinds of systems I enjoy building."
          />

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-4 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.25)] backdrop-blur dark:border-white/10 dark:bg-slate-900/70"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {contactDetails.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5"
                >
                  <p className="text-sm uppercase tracking-[0.26em] text-slate-500 dark:text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-3 text-lg font-semibold text-slate-950 dark:text-white">
                    {item.value}
                  </p>
                </a>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:abulamartins@gmail.com"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Start a conversation
              </a>
              <a
                href="https://github.com/mdmuche"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 dark:border-white/15 dark:bg-white/5 dark:text-slate-200"
              >
                View GitHub profile
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
