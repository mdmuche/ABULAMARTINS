import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

export default function Projects({ projects }) {
  const [filter, setFilter] = useState("all");

  const filters = ["all", "fullstack", "backend"];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);
  return (
    <section id="projects" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected Work"
          description="A combination of fullstack applications and backend systems demonstrating real-world engineering and scalable API design."
        />
        {/* FILTER TABS */}
        <div className="mt-10 flex flex-wrap gap-3">
          {filters.map((item) => {
            const isActive = filter === item;

            return (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                    : "text-slate-600 hover:bg-slate-900/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            );
          })}
        </div>{" "}
        {/* PROJECT GRID */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              filter={filter}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
