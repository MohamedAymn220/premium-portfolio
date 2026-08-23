"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { Code2, Database, Layers3, TerminalSquare } from "lucide-react";

import { getTechInfo } from "@/components/tech-icons";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type IconType = typeof Code2;

type SkillCategory = {
  title: string;
  description: string;
  skills: string[];
  icon: IconType;
  colSpan: string;
};

const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    description:
      "Server-side engineering foundations for reliable APIs, layered architecture, and secure access control.",
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "Flask",
      "REST API Design",
      "MVC/MVT Architecture",
      "Authentication & RBAC",
    ],
    icon: TerminalSquare,
    colSpan: "lg:col-span-2",
  },
  {
    title: "Databases",
    description:
      "Relational data modeling, normalization, and query-focused thinking for production application workflows.",
    skills: [
      "PostgreSQL",
      "SQLite",
      "Schema Design & Normalization",
      "Query Optimization",
    ],
    icon: Database,
    colSpan: "lg:col-span-2",
  },
  {
    title: "Frontend & Tools",
    description:
      "Modern interfaces, responsive delivery, collaboration workflows, API testing, and deployment tooling.",
    skills: [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Bootstrap 5",
      "Tailwind CSS",
      "AJAX",
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "PythonAnywhere",
    ],
    icon: Layers3,
    colSpan: "lg:col-span-3",
  },
  {
    title: "Languages",
    description:
      "Core programming and data-query languages used across backend, frontend, and database implementation.",
    skills: ["Python", "Java", "JavaScript", "SQL"],
    icon: Code2,
    colSpan: "lg:col-span-1",
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const chipContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.18,
    },
  },
};

const chipVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.32,
      ease: "easeOut",
    },
  },
};

function TechChip({ skill }: { skill: string }) {
  const info = getTechInfo(skill);
  const Icon = info.icon;
  const chipStyle = {
    "--tech-color": info.color,
    "--tech-glow": info.glow,
    "--tech-border": info.border,
  } as CSSProperties;

  return (
    <motion.li variants={chipVariants}>
      <span className="tech-chip" style={chipStyle}>
        <Icon className="tech-icon h-[18px] w-[18px] shrink-0" aria-hidden="true" />
        {skill}
      </span>
    </motion.li>
  );
}

export function TechStack() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary">
          Technical Stack
        </p>
        <h2
          id="tech-heading"
          className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          Practical backend depth with production-ready full-stack tooling
        </h2>
        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
          Skills mapped directly from Mohamed Ayman&apos;s professional source
          data, organized around Django backend engineering, relational database
          design, frontend implementation, and deployment workflows.
        </p>
      </div>

      <motion.div
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
        whileInView="visible"
      >
        {skillCategories.map((category) => {
          const Icon = category.icon;

          return (
            <motion.article
              className={`h-full ${category.colSpan}`}
              key={category.title}
              variants={cardVariants}
            >
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.03] bg-slate-900/10 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-emerald-500/20">
                <CardHeader>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/[0.08] text-primary transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.ul
                    aria-label={`${category.title} skills`}
                    className="flex flex-wrap gap-2.5"
                    variants={chipContainerVariants}
                  >
                    {category.skills.map((skill) => (
                      <TechChip key={skill} skill={skill} />
                    ))}
                  </motion.ul>
                </CardContent>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </div>
  );
}
