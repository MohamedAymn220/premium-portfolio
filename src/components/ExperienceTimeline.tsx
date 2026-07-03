"use client";

import { motion } from "framer-motion";
import { GraduationCap, Layers3, MapPin } from "lucide-react";

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type NodeVariant = "emerald" | "cyan";

type TimelineEntry = {
  type: "Education" | "Experience";
  title: string;
  organization: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  icon: typeof GraduationCap;
  node: NodeVariant;
};

const timelineEntries: TimelineEntry[] = [
  {
    type: "Education",
    title: "B.Sc. in Computer and Systems Engineering",
    organization: "Al-Azhar University",
    location: "Cairo",
    period: "2023 - 2028 | Junior, 3rd Year",
    summary:
      "Computer and Systems Engineering student building a strong foundation in software engineering, backend architecture, database systems, and production-ready web applications.",
    highlights: [
      "Graduating in 2028 from Al-Azhar University, Cairo.",
      "Focused on engineering fundamentals, systems thinking, and applied software development.",
      "Developing practical backend and full-stack skills through production-grade projects.",
    ],
    icon: GraduationCap,
    node: "cyan",
  },
  {
    type: "Experience",
    title: "Full-Stack Web Development Trainee",
    organization: "Information Technology Institute (ITI)",
    location: "Cairo",
    period: "Jul 2025 - Aug 2025",
    summary:
      "Completed intensive full-stack training with applied backend delivery, RESTful API design, normalized database modeling, deployment workflows, and responsive frontend implementation.",
    highlights: [
      "Completed 120 hours of intensive full-stack training covering backend architecture, REST APIs, and deployment workflows.",
      "Shipped backend features in Django/Python across 3 team projects, working in agile, Git-based sprints.",
      "Engineered normalized PostgreSQL/SQLite schemas and applied REST + MVT design patterns to reduce data redundancy.",
      "Delivered responsive, mobile-first UIs (HTML5/CSS3/JS), cutting cross-device layout bugs reported in QA.",
    ],
    icon: Layers3,
    node: "emerald",
  },
];

const nodeConfig: Record<
  NodeVariant,
  {
    ring: string;
    glow: string;
    border: string;
    iconColor: string;
    shadow: string;
    pulse: boolean;
  }
> = {
  emerald: {
    ring: "bg-emerald-500/25",
    glow: "bg-emerald-500/40",
    border: "border-emerald-500/30",
    iconColor: "text-emerald-300",
    shadow: "shadow-[0_0_8px_rgba(52,211,153,0.4)]",
    pulse: true,
  },
  cyan: {
    ring: "bg-cyan-400/25",
    glow: "bg-cyan-400/40",
    border: "border-cyan-400/30",
    iconColor: "text-cyan-300",
    shadow: "shadow-[0_0_8px_rgba(34,211,238,0.4)]",
    pulse: false,
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

export function ExperienceTimeline() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary">
          Education &amp; Experience
        </p>
        <h2
          id="experience-heading"
          className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          Engineering foundation with applied full-stack delivery
        </h2>
        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
          A focused path across Computer and Systems Engineering at Al-Azhar
          University and intensive ITI full-stack training, mapped directly to
          backend architecture, REST APIs, Git workflows, and reliable UI
          implementation.
        </p>
      </div>

      <div className="relative mt-14">
        <ol className="space-y-8 md:border-l md:border-white/[0.05]">
          {timelineEntries.map((entry, index) => {
            const Icon = entry.icon;
            const node = nodeConfig[entry.node];

            return (
              <motion.li
                className="relative md:pl-14"
                initial="hidden"
                key={`${entry.type}-${entry.organization}`}
                variants={cardVariants}
                viewport={{ once: true, amount: 0.35 }}
                whileInView="visible"
              >
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-7 z-10 hidden h-9 w-9 -translate-x-1/2 items-center justify-center md:flex"
                >
                  {node.pulse ? (
                    <span
                      className={`timeline-pulse pointer-events-none absolute inset-0 m-auto h-9 w-9 rounded-full ${node.ring}`}
                    />
                  ) : null}
                  <span
                    className={`absolute inset-0 m-auto h-4 w-4 rounded-full ${node.glow} ${node.shadow}`}
                  />
                  <span
                    className={`relative grid h-9 w-9 place-items-center rounded-full border ${node.border} bg-slate-950/80 backdrop-blur-md`}
                  >
                    <Icon className={`h-4 w-4 ${node.iconColor}`} aria-hidden="true" />
                  </span>
                </div>

                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.03] bg-slate-900/20 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-emerald-500/20 hover:bg-slate-900/30">
                  <CardHeader className="gap-5 md:flex md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-xs font-medium text-muted-foreground">
                        {entry.type}
                      </div>
                      <CardTitle>{entry.title}</CardTitle>
                      <CardDescription className="mt-2 text-base text-sky-100">
                        {entry.organization}
                      </CardDescription>
                    </div>
                    <div className="rounded-xl border border-white/[0.04] bg-white/[0.02] px-4 py-3 text-left md:min-w-56 md:text-right">
                      <p className="text-sm font-semibold text-white">{entry.period}</p>
                      <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground md:justify-end">
                        <MapPin className="h-3.5 w-3.5 text-emerald-400/70" aria-hidden="true" />
                        {entry.location}
                      </p>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="max-w-4xl text-sm leading-7 text-muted-foreground sm:text-base">
                      {entry.summary}
                    </p>
                    <ul className="mt-6 grid gap-3">
                      {entry.highlights.map((highlight) => (
                        <li
                          className="flex gap-3 rounded-xl border border-white/[0.03] bg-slate-900/20 p-4 text-sm leading-6 text-slate-300"
                          key={highlight}
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/60 shadow-[0_0_8px_rgba(52,211,153,0.4)]"
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
                      Timeline entry {index + 1} of {timelineEntries.length}
                    </p>
                  </CardContent>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
