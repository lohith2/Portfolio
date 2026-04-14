import Reveal from "@/components/Reveal";
import PageIntro from "@/components/PageIntro";
import { experience } from "@/data/site";

export default function ExperiencePage() {
  return (
    <div className="page-stack">
      <PageIntro
        label="Experience"
        title="Experience timeline"
      />

      <div className="experience-timeline">
        {experience.map((item, index) => (
          <Reveal className="timeline-entry" key={item.company} delay={index * 0.06}>
            <div className="timeline-marker" />
            <div className="timeline-card">
              <span className="timeline-period">{item.period}</span>
              <h2>{item.role}</h2>
              <p className="timeline-company">{item.company}</p>
              <span className="timeline-location">{item.location}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
