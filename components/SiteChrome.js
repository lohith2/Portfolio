"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/site";

export default function SiteChrome({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [pendingPath, setPendingPath] = useState(null);

  useEffect(() => {
    navLinks.forEach((item) => {
      if (item.href !== pathname) {
        router.prefetch(item.href);
      }
    });
  }, [pathname, router]);

  useEffect(() => {
    setPendingPath(null);
  }, [pathname]);

  return (
    <>
      <div className="ambient-stage" aria-hidden="true">
        <motion.div
          className="ambient-orb ambient-orb-orange"
          animate={{ x: [0, 30, -10, 0], y: [0, 20, -20, 0], scale: [1, 1.08, 0.96, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="ambient-orb ambient-orb-gold"
          animate={{ x: [0, -24, 12, 0], y: [0, -26, 14, 0], scale: [1, 0.94, 1.06, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <header className="site-header">
        <div className="site-shell header-inner">
          <Link href="/" className="site-brand">
            <span>Portfolio</span>
            <span className="availability-pill">Open to Work</span>
          </Link>

          <nav className="site-nav" aria-label="Primary">
            {navLinks.map((item) => {
              const active = pathname === item.href;
              const pending = pendingPath === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch
                  onMouseEnter={() => router.prefetch(item.href)}
                  onFocus={() => router.prefetch(item.href)}
                  onClick={() => {
                    if (!active) {
                      setPendingPath(item.href);
                    }
                  }}
                  className={`nav-link ${active ? "is-active" : ""} ${pending ? "is-pending" : ""}`}
                >
                  {item.label}
                  {active ? <motion.span layoutId="nav-indicator" className="nav-indicator" /> : null}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="site-shell site-main">{children}</main>

      <footer className="site-shell site-footer">
        <p>
          {new Date().getFullYear()} {profile.name}
        </p>
        <div className="footer-links">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} prefetch>
              {item.label}
            </Link>
          ))}
        </div>
      </footer>
    </>
  );
}
