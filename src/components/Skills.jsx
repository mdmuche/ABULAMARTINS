import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

export default function Skills({ skillGroups }) {
  return (
    <section id="skills" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="A stack built for shipping reliable web products."
          description="My toolkit is centered on JavaScript-driven application development, with a strong emphasis on backend systems and frontend execution that feels crisp on every screen."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[2rem] border border-slate-200/70 bg-white/75 p-7 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.2)] backdrop-blur dark:border-white/10 dark:bg-slate-900/60"
            >
              <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">
                {group.title}
              </h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
