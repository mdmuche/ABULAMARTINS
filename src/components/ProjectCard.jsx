import { motion } from "framer-motion";

export default function ProjectCard({ project, index, filter }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/80 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.25)] transition hover:-translate-y-1 dark:border-white/10 dark:bg-slate-900/70"
    >
      <div className="overflow-hidden border-b border-slate-200/70 dark:border-white/10">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-7">
        <div
          className={`flex ${project.liveDemo ? "flex-col" : "flex-row"} items-start justify-between gap-4`}
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-400">
              Backend API
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">
              {project.title}
            </h3>
          </div>
          <div className="flex gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
            >
              GitHub
            </a>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>

        <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white dark:bg-white dark:text-slate-950"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 space-y-3">
          {(filter === "all"
            ? project.features.slice(0, 3)
            : project.features
          ).map((feature) => (
            <div
              key={feature}
              className="flex gap-3 text-sm text-slate-600 dark:text-slate-300"
            >
              <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-sky-500 dark:bg-sky-400" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
