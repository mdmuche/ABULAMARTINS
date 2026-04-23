import { motion } from "framer-motion";

const wordVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + index * 0.08,
      duration: 0.55,
      ease: "easeOut",
    },
  }),
};

export default function Hero({ stats, socialLinks }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-20 pt-14 lg:px-8 lg:pt-20"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl dark:bg-cyan-500/20" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-amber-300/35 blur-3xl dark:bg-amber-500/10" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-rose-300/25 blur-3xl dark:bg-fuchsia-500/10" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
          >
            Backend-first engineer with strong frontend delivery
          </motion.p>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            {[
              "Building",
              "scalable",
              "APIs",
              "and",
              "premium",
              "product",
              "experiences.",
            ].map((word, index) => (
              <motion.span
                key={word + index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
                className={`mr-3 inline-block ${word === "premium" ? "font-serif italic text-sky-600 dark:text-sky-400" : ""}`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300"
          >
            I’m Abula Martins, a full-stack JavaScript developer focused on
            secure backend systems, thoughtful interfaces, and clean product
            execution for teams shipping globally.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[0_24px_50px_-24px_rgba(15,23,42,0.8)] transition hover:-translate-y-0.5"
            >
              Explore selected work
            </a>
            <a
              href="/files/Abula_Martins_Onyemuche_Resume_2026-03-20.pdf"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-950 hover:text-slate-950 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              View resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-600 transition hover:-translate-y-0.5 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-sky-500/20 via-transparent to-amber-400/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.25)] backdrop-blur dark:border-white/10 dark:bg-slate-900/70">
            <div className="overflow-hidden rounded-[1.5rem] bg-slate-950">
              <img
                src="/img/dp1.PNG"
                alt="Portrait of Abula Martins"
                className="h-[360px] w-full object-cover object-top"
              />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5"
                >
                  <p className="text-2xl font-semibold text-slate-950 dark:text-white">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
