import Reveal from "@/components/Reveal";
import PageIntro from "@/components/PageIntro";
import { projects } from "@/data/site";

export default function ProjectsPage() {
  return (
    <div className="page-stack">
      <PageIntro
        label="Projects"
        title="AI and ML projects with real technical depth."
        copy="These projects reflect my strongest strengths: agent orchestration, RAG systems, ML systems, AI product design, and practical full-stack delivery."
      />

      <div className="project-page-grid">
        {projects.map((project, index) => (
          <Reveal className="project-page-card" key={project.title} delay={index * 0.06}>
            <div className="card-topline">
              <span className="mini-label">{project.tag}</span>
              <span className="card-index">0{index + 1}</span>
            </div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="result-strip">{project.outcome}</div>
            <ul className="stack-pills">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              href={project.href}
              className="text-link project-link"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
