"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { hero, profile, quickFacts } from "@/data/site";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.02c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.19 1.78 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.74.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.19-1.48 3.14-1.17 3.14-1.17.63 1.59.24 2.76.12 3.05.74.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.09.78 2.2v3.26c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM2.75 9.75h4.46V21H2.75V9.75Zm7.25 0h4.27v1.54h.06c.59-1.06 2.05-2.17 4.22-2.17 4.52 0 5.35 2.98 5.35 6.85V21h-4.45v-4.45c0-1.06-.02-2.43-1.48-2.43-1.49 0-1.72 1.16-1.72 2.35V21H10V9.75Z"
      />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="page-stack">
      <section className="home-hero">
        <Reveal className="hero-topline" y={18}>
          {hero.labels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </Reveal>

        <div className="home-hero-grid">
          <Reveal className="home-hero-copy" y={28}>
            <div className="hero-copy-panel">
              <p className="mini-label">{profile.location}</p>
              <div className="hero-title-stack hero-title-stack-compact">
                <span className="hero-mini-stamp">
                  Selected for impact
                </span>
                <h1 className="hero-name-compact">{profile.name}</h1>
              </div>
              <h2>{profile.role}</h2>

              <div className="hero-cta-row">
                <Link href="/projects" className="button-ink">
                  Explore Projects
                </Link>
                <Link href="/experience" className="button-paper">
                  View Experience
                </Link>
              </div>

              {profile.socials?.length ? (
                <div className="hero-social-row">
                  {profile.socials.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="social-icon-link"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${item.label}`}
                      title={item.label}
                    >
                      {item.label === "GitHub" ? <GitHubIcon /> : <LinkedInIcon />}
                    </a>
                  ))}
                </div>
              ) : null}

              <div className="hero-inline-quote">
                <p>{hero.quote}</p>
              </div>

              <div className="hero-inline-stats">
                {quickFacts.map((fact) => (
                  <motion.div
                    key={fact.label}
                    className="hero-stat-tile"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <strong>{fact.value}</strong>
                    <span>{fact.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="hero-illustration-card" delay={0.08} y={28}>
            <motion.div
              className="hero-photo-frame"
              initial={{ y: 10 }}
              animate={{ y: [10, 4, 10] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="hero-photo-accent hero-photo-accent-one" />
              <div className="hero-photo-accent hero-photo-accent-two" />
              <div className="hero-photo-grid" />
              <img
                src="/lohith-portrait.jpg"
                alt="Lohith Reddy Kondreddy"
                className="hero-photo-image"
              />
              <div className="hero-photo-vignette" />
            </motion.div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
