import Reveal from "@/components/Reveal";
import PageIntro from "@/components/PageIntro";
import { aboutDetails, skillGroups } from "@/data/site";

export default function AboutPage() {
  return (
    <div className="page-stack">
      <PageIntro
        label="About"
        title="AI engineer with strong product, platform, and systems depth."
        copy="My work is built around production GenAI delivery, agentic RAG systems, full-stack engineering, and practical product execution."
      />

      <div className="three-card-grid">
        {aboutDetails.sections.map((section, index) => (
          <Reveal className="editorial-card" key={section.title} delay={index * 0.06}>
            <p className="mini-label">{section.label}</p>
            <h3>{section.title}</h3>
            <p>{section.copy}</p>
          </Reveal>
        ))}
      </div>

      <div className="three-card-grid">
        {skillGroups.map((group, index) => (
          <Reveal className="editorial-card" key={group.title} delay={index * 0.05}>
            <p className="mini-label">Skills</p>
            <h3>{group.title}</h3>
            <ul className="detail-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
