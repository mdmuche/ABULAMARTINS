import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected backend APIs presented like serious product work."
          description="These featured builds highlight API structure, backend thinking, and the ability to package technical work in a way that feels credible to modern hiring teams."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
