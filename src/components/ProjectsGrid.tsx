"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, GraduationCap, Pill } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ProjectIcon = typeof ExternalLink;

type ProjectLink = {
  label: string;
  href: string;
  ariaLabel: string;
  variant: "default" | "outline";
  icon: ProjectIcon;
};

type Project = {
  title: string;
  eyebrow: string;
  description: string;
  techStack: string[];
  highlights: string[];
  links: ProjectLink[];
  featuredMetric: string;
  icon: ProjectIcon;
  iconColor: string;
  iconBg: string;
};

const projects: Project[] = [
  {
    title: "Teryaq - Pharmacy Management System",
    eyebrow: "Django pharmacy platform",
    description:
      "A production-grade e-commerce-style pharmacy management system covering catalog, cart, checkout, order tracking, and role-based administration.",
    techStack: [
      "Django 5.2",
      "Python 3.13",
      "SQLite",
      "Tailwind CSS",
      "Chart.js",
      "AJAX",
      "Git",
      "Docker",
    ],
    highlights: [
      "Architected an e-commerce-style pharmacy platform with 25+ RESTful routes across catalog, cart, checkout, and admin layers.",
      "Designed a normalized relational schema (Medicine, Order, OrderItem, Payment, Cart) supporting full order lifecycle tracking.",
      "Built a role-based admin dashboard with CRUD operations and live income analytics via Chart.js.",
      "Implemented AJAX-driven live search and a session-based cart, cutting perceived page-load latency by ~30%.",
      "Tested 25+ API endpoints with Postman and containerized the app with Docker for consistent deployment to PythonAnywhere.",
      "Showcased the system at the AZEX Engineering Exhibition (2026), demonstrating its production-readiness.",
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://teryaq.pythonanywhere.com",
        ariaLabel: "Open the live demo for Teryaq Pharmacy Management System",
        variant: "default",
        icon: ExternalLink,
      },
      {
        label: "GitHub Repository",
        href: "https://github.com/MohamedAymn220/Teryaq-Pharmacy-System",
        ariaLabel: "Open the GitHub repository for Teryaq Pharmacy Management System",
        variant: "outline",
        icon: Github,
      },
    ],
    featuredMetric: "25+ RESTful routes",
    icon: Pill,
    iconColor: "text-emerald-300",
    iconBg: "border-emerald-500/20 bg-emerald-500/10",
  },
  {
    title: "LearnUp Educational Platform",
    eyebrow: "ITI Capstone Project",
    description:
      "A multi-role EdTech platform built in a 4-person team, supporting course catalog browsing, student enrollment, authentication flows, and responsive UI delivery.",
    techStack: ["Python", "Django", "SQLite", "Bootstrap 5", "Git", "ITI Capstone Project"],
    highlights: [
      "Co-built an EdTech platform (4-person team) supporting course catalog browsing and student enrollment.",
      "Designed relational models and authentication flows with Django ORM, covering registration through enrollment.",
      "Delivered fully responsive UI verified across desktop and mobile breakpoints.",
      "Drove Git-based collaboration: feature branching, pull requests, and peer code review across the team.",
    ],
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/MohamedAymn220",
        ariaLabel: "Open Mohamed Ayman GitHub profile for the LearnUp Educational Platform repository",
        variant: "default",
        icon: Github,
      },
    ],
    featuredMetric: "4-person Agile team",
    icon: GraduationCap,
    iconColor: "text-cyan-300",
    iconBg: "border-cyan-400/20 bg-cyan-400/10",
  },
];

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function ProjectsGrid() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary">
          Selected Projects
        </p>
        <h2
          id="projects-heading"
          className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          Production-grade Django systems with measurable engineering depth
        </h2>
        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
          Portfolio work focused on real backend architecture, normalized data
          models, RESTful workflows, role-based administration, responsive
          delivery, and Git-based team collaboration.
        </p>
      </div>

      <motion.div
        className="mt-14 grid gap-6 lg:grid-cols-3"
        initial="hidden"
        variants={gridVariants}
        viewport={{ once: true, amount: 0.18 }}
        whileInView="visible"
      >
        {projects.map((project, index) => {
          const ProjectIcon = project.icon;

          return (
            <motion.article
              className={`h-full ${index === 0 ? "lg:col-span-2" : "lg:col-span-1"}`}
              key={project.title}
              variants={cardVariants}
            >
              <div className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/[0.03] bg-slate-900/20 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-emerald-500/20 hover:bg-slate-900/30">
                <CardHeader className="relative overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="absolute -right-20 -top-24 h-52 w-52 rounded-full bg-primary/10 blur-3xl transition-opacity duration-300 group-hover:opacity-90"
                  />
                  <div className="relative">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <span
                        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground ${project.iconBg}`}
                      >
                        <ProjectIcon className={`h-3.5 w-3.5 ${project.iconColor}`} aria-hidden="true" />
                        {project.eyebrow}
                      </span>
                      <span className="hidden rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs font-semibold text-slate-300 sm:inline-flex">
                        {project.featuredMetric}
                      </span>
                    </div>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${project.iconBg} ${project.iconColor} transition-transform duration-300 group-hover:scale-110`}
                      >
                        <ProjectIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      {project.title}
                    </CardTitle>
                    <CardDescription className="mt-3 text-base leading-7">
                      {project.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 space-y-7">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">
                      Tech Stack
                    </h3>
                    <ul
                      aria-label={`${project.title} technology stack`}
                      className="mt-4 flex flex-wrap gap-2.5"
                    >
                      {project.techStack.map((technology) => (
                        <li
                          className="rounded-lg border border-white/[0.04] bg-slate-900/30 px-2.5 py-1 text-xs font-medium text-slate-300 backdrop-blur-md transition-colors duration-200 hover:border-emerald-500/25 hover:text-white"
                          key={`${project.title}-${technology}`}
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">
                      Engineering Highlights
                    </h3>
                    <ul className="mt-4 grid gap-3">
                      {project.highlights.map((highlight) => (
                        <li
                          className="flex gap-3 rounded-xl border border-white/[0.03] bg-slate-900/20 p-4 text-sm leading-6 text-slate-300"
                          key={highlight}
                        >
                          <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400/70" aria-hidden="true" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                  {project.links.map((link) => {
                    const Icon = link.icon;

                    return (
                      <Button
                        asChild
                        className="w-full sm:w-auto"
                        key={`${project.title}-${link.label}`}
                        variant={link.variant}
                      >
                        <a
                          aria-label={link.ariaLabel}
                          href={link.href}
                          rel="noopener noreferrer"
                          target="_blank"
                          title={link.ariaLabel}
                        >
                          <Icon className="h-4 w-4" aria-hidden="true" />
                          {link.label}
                        </a>
                      </Button>
                    );
                  })}
                </CardFooter>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </div>
  );
}
