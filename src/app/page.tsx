"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, ArrowUpRight, Menu, X } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Hero } from "@/components/Hero";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { TechStack } from "@/components/TechStack";

const navLinks = [
  { id: "experience", label: "Experience" },
  { id: "tech-stack", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
] as const;

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.25,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-400"
      style={{ scaleX }}
      suppressHydrationWarning
    />
  );
}

function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#0B0F19]"
    >
      <div className="absolute inset-0 bg-grid-white bg-[size:56px_56px] opacity-[0.018]" />
      <div className="ambient-blob ambient-blob--emerald" />
      <div className="ambient-blob ambient-blob--indigo" />
      <div className="ambient-blob ambient-blob--cyan" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B0F19]" />
      <div className="grain-overlay" />
    </div>
  );
}

function Navigation() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((value): value is HTMLElement => value !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-4 transition-all duration-500 sm:px-6 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border px-4 py-2.5 transition-all duration-500 sm:px-5 ${
          scrolled
            ? "border-white/[0.08] bg-[#0B0F19]/70 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a
          href="#hero"
          className="group flex items-center gap-2.5"
          aria-label="Back to top — Mohamed Ayman"
        >
          <svg
            width="34"
            height="24"
            viewBox="0 0 34 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:scale-105 transition-transform duration-300"
            aria-label="Mohamed Ayman logo"
            role="img"
          >
            <defs>
              <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="50%" stopColor="#FBBF24" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
            <path
              d="M10 6L3 12L10 18"
              stroke="url(#codeGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M14 20L20 4" stroke="url(#codeGrad)" strokeWidth="2.5" strokeLinecap="round" />
            <path
              d="M24 6L31 12L24 18"
              stroke="url(#codeGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="hidden text-sm font-semibold tracking-tight text-white sm:block">
            Mohamed Ayman
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`relative rounded-full px-3.5 py-2 text-sm transition-colors duration-300 ${
                  active === link.id ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {active === link.id ? (
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 rounded-full border border-white/[0.08] bg-white/[0.06]"
                  />
                ) : null}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <div className="hidden flex-wrap items-center gap-2 lg:flex">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-3 py-1.5 text-xs font-medium text-emerald-300">
              <span className="pulse-dot" aria-hidden="true" />
              Available for Internships
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1.5 text-xs font-medium text-cyan-200">
              <span className="pulse-dot pulse-dot--cyan" aria-hidden="true" />
              Available for Remote Work
            </span>
          </div>
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-emerald-300 hover:shadow-[0_0_28px_rgba(16,185,129,0.4)] sm:inline-flex"
          >
            Let&apos;s talk
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-9 w-9 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-slate-200 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/[0.08] bg-[#0B0F19]/90 p-2 backdrop-blur-2xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className={`block rounded-xl px-4 py-3 text-sm transition-colors ${
                active === link.id
                  ? "bg-white/[0.06] text-white"
                  : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-1 block rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-slate-950"
          >
            Let&apos;s talk
          </a>
        </div>
      ) : null}
    </header>
  );
}

function Seam() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
    />
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <motion.button
      type="button"
      aria-label="Scroll back to top"
      onClick={handleClick}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      initial={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 p-3 bg-slate-900/40 backdrop-blur-md border border-white/[0.06] rounded-xl text-emerald-400 hover:text-white shadow-xl hover:border-emerald-500/30 transition-all"
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <ArrowUp size={18} aria-hidden="true" />
    </motion.button>
  );
}

type SectionProps = {
  id: string;
  labelledBy: string;
  className?: string;
  children: ReactNode;
};

function Section({ id, labelledBy, className, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative mx-auto w-full scroll-mt-28 px-6 py-20 sm:py-24 md:px-10 lg:px-12 ${
        className ?? ""
      }`}
    >
      {children}
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <AmbientBackground />
      <Navigation />
      <BackToTop />

      <main className="relative min-h-screen">
        <section
          id="hero"
          aria-labelledby="hero-heading"
          className="relative mx-auto flex min-h-screen w-full max-w-7xl scroll-mt-28 items-center px-6 pb-20 pt-32 sm:px-10 lg:px-12"
        >
          <Hero />
        </section>

        <Seam />

        <Section id="experience" labelledBy="experience-heading" className="max-w-6xl">
          <ExperienceTimeline />
        </Section>

        <Seam />

        <Section id="tech-stack" labelledBy="tech-heading" className="max-w-7xl">
          <TechStack />
        </Section>

        <Seam />

        <Section id="projects" labelledBy="projects-heading" className="max-w-7xl">
          <ProjectsGrid />
        </Section>

        <Seam />

        <Section id="contact" labelledBy="contact-heading" className="max-w-3xl pb-28">
          <ContactForm />
        </Section>
      </main>
    </>
  );
}
