"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import {
  ProjectCard,
  type ProjectKey,
  type ProjectLink,
} from "@/components/ProjectCard";

type Project = {
  projectKey: ProjectKey;
  title: string;
  description: string;
  techStack: string[];
  links: ProjectLink[];
  colSpan: string;
  isBanner?: boolean;
};

const projects: Project[] = [
  {
    projectKey: "teryaq",
    title: "Teryaq - Pharmacy Management System",
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
        ariaLabel:
          "Open the GitHub repository for Teryaq Pharmacy Management System",
        variant: "outline",
        icon: Github,
      },
    ],
    colSpan: "lg:col-span-2",
  },
  {
    projectKey: "learnup",
    title: "LearnUp Educational Platform",
    description:
      "A multi-role EdTech platform built in a 4-person team, supporting course catalog browsing, student enrollment, authentication flows, and responsive UI delivery.",
    techStack: ["Python", "Django", "SQLite", "Bootstrap 5", "Git", "ITI Capstone Project"],
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/MohamedAymn220",
        ariaLabel:
          "Open Mohamed Ayman GitHub profile for the LearnUp Educational Platform repository",
        variant: "default",
        icon: Github,
      },
    ],
    colSpan: "lg:col-span-1",
  },
  {
    projectKey: "creditcard",
    title: "Credit Card UI & Payment Form",
    description:
      "An interactive, sleek credit card user interface and payment form concept featuring smooth interactive animations and real-time validation.",
    techStack: ["HTML", "Vanilla JS", "Tailwind CSS"],
    links: [
      {
        label: "Live Demo",
        href: "https://payment-form-concept.pages.dev/",
        ariaLabel:
          "Open the live demo for Credit Card UI & Payment Form concept",
        variant: "default",
        icon: ExternalLink,
      },
      {
        label: "GitHub Repository",
        href: "https://github.com/MohamedAymn220/Credit-Card-UI",
        ariaLabel:
          "Open the GitHub repository for Credit Card UI & Payment Form",
        variant: "outline",
        icon: Github,
      },
    ],
    colSpan: "lg:col-span-3",
    isBanner: true,
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
        {projects.map((project) => (
          <motion.article
            className={`h-full ${project.colSpan}`}
            key={project.title}
            variants={cardVariants}
          >
            <ProjectCard
              className="h-full"
              description={project.description}
              isBanner={project.isBanner}
              links={project.links}
              projectKey={project.projectKey}
              tags={project.techStack}
              title={project.title}
            />
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
