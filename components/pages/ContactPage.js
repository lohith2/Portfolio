"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import PageIntro from "@/components/PageIntro";
import { contactLinks } from "@/data/site";

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

export default function ContactPage() {
  const [emailStatus, setEmailStatus] = useState("");
  const gmailComposeUrl =
    "https://mail.google.com/mail/?view=cm&fs=1&to=lohitreddygms123@gmail.com&su=Portfolio%20Inquiry";
  const primaryContacts = contactLinks.filter(
    (item) => item.label !== "GitHub" && item.label !== "LinkedIn"
  );
  const socialLinks = contactLinks.filter(
    (item) => item.label === "GitHub" || item.label === "LinkedIn"
  );

  async function handleEmailClick(emailValue) {
    if (typeof window !== "undefined") {
      try {
        if (navigator?.clipboard?.writeText) {
          await navigator.clipboard.writeText(emailValue);
          setEmailStatus("Email copied");
        }
      } catch {
        setEmailStatus("Copy email: " + emailValue);
      }

      window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");

      window.setTimeout(() => {
        setEmailStatus("");
      }, 2800);
    }
  }

  return (
    <div className="page-stack">
      <PageIntro
        label="Contact"
        title="Direct contact details for recruiters, hiring managers, and collaborators."
      />

      <div className="contact-grid">
        {primaryContacts.map((item, index) => (
          <Reveal className="contact-card-large" key={item.label} delay={index * 0.06}>
            <p className="mini-label">{item.label}</p>
            <h2>{item.value}</h2>
            {item.label === "Email" ? (
              <>
                <button
                  type="button"
                  className="text-link"
                  onClick={() => handleEmailClick(item.value)}
                >
                  Reach Out
                </button>
                {emailStatus ? <p className="contact-status">{emailStatus}</p> : null}
              </>
            ) : null}
          </Reveal>
        ))}

        <Reveal className="contact-card-large" delay={primaryContacts.length * 0.06}>
          <p className="mini-label">Profiles</p>
          <div className="social-icon-row">
            {socialLinks.map((item) => (
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
        </Reveal>
      </div>
    </div>
  );
}
