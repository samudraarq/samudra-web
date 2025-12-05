import Chip from "@/components/common/chip";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      <main>
        <div className="custom-container pt-24">
          <h2>Projects</h2>

          <div className="space-y-16 mt-8">
            {projects.map((project) => (
              <div key={project.id} className="project">
                <h3 className="mb-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Chip key={tech}>{tech}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
