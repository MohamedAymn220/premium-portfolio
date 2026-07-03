"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { type ComponentType, type MouseEvent } from "react";
import {
  ArrowUpRight,
  Boxes,
  Clock3,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Route,
} from "lucide-react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

import { Button } from "@/components/ui/button";

const profileImageSrc = "/Gemini_Generated_Image_oco7vloco7vloco7.png";

type SocialLink = {
  label: string;
  href: string;
  title: string;
  ariaLabel: string;
  icon: ComponentType<{ className?: string }>;
};

const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/MohamedAymn220",
    title: "Visit Mohamed Ayman on GitHub",
    ariaLabel: "Visit Mohamed Ayman GitHub profile",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamedaymanabdelfatah",
    title: "Visit Mohamed Ayman on LinkedIn",
    ariaLabel: "Visit Mohamed Ayman LinkedIn profile",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:mohamedayman21172@gmail.com",
    title: "Email Mohamed Ayman",
    ariaLabel: "Email Mohamed Ayman at mohamedayman21172@gmail.com",
    icon: Mail,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/mohamed.ayman.abdelfatah.2025?locale=ar_AR",
    title: "Visit Mohamed Ayman on Facebook",
    ariaLabel: "Visit Mohamed Ayman Facebook profile",
    icon: FaFacebook,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/201149636796",
    title: "Message Mohamed Ayman on WhatsApp",
    ariaLabel: "Message Mohamed Ayman on WhatsApp at +20 114 963 6796",
    icon: FaWhatsapp,
  },
  {
    label: "Phone",
    href: "tel:+201149636796",
    title: "Call Mohamed Ayman",
    ariaLabel: "Call Mohamed Ayman at +20 114 963 6796",
    icon: Phone,
  },
];

const heroStats = [
  {
    value: "2",
    label: "Production-grade systems",
    description: "E-commerce and EdTech systems shipped with real backend workflows.",
    icon: Boxes,
    className: "md:col-span-2 xl:col-span-1",
  },
  {
    value: "25+",
    label: "RESTful routes",
    description: "Catalog, cart, checkout, admin layers, and API endpoint testing.",
    icon: Route,
    className: "",
  },
  {
    value: "120h",
    label: "ITI full-stack training",
    description: "Backend architecture, REST APIs, deployment, and Git sprints.",
    icon: Clock3,
    className: "",
  },
] as const;

const contactDetails = [
  {
    label: "Location",
    value: "Cairo, Egypt",
    href: "https://www.google.com/maps/place/Cairo,+Egypt",
    ariaLabel: "View Cairo Egypt location on Google Maps",
    icon: MapPin,
  },
  {
    label: "Email",
    value: "mohamedayman21172@gmail.com",
    href: "mailto:mohamedayman21172@gmail.com",
    ariaLabel: "Email Mohamed Ayman at mohamedayman21172@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+20 114 963 6796",
    href: "tel:+201149636796",
    ariaLabel: "Call Mohamed Ayman at +20 114 963 6796",
    icon: Phone,
  },
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.62,
      ease: "easeOut",
    },
  },
};

function ProfilePortrait() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [9, -9]), {
    stiffness: 150,
    damping: 18,
    mass: 0.4,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-9, 9]), {
    stiffness: 150,
    damping: 18,
    mass: 0.4,
  });

  const auraX = useTransform(x, [-0.5, 0.5], [-26, 26]);
  const auraY = useTransform(y, [-0.5, 0.5], [-26, 26]);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div
      className="group/portrait relative mx-auto aspect-[4/5] w-full max-w-md"
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 rounded-[2.6rem] bg-gradient-to-br from-emerald-500/25 via-cyan-400/15 to-indigo-500/25 opacity-0 blur-2xl transition-opacity duration-500 group-hover/portrait:opacity-100"
        style={{ x: auraX, y: auraY }}
      />
      <motion.div
        className="relative h-full w-full [perspective:1000px]"
        initial={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="relative h-full w-full [transform-style:preserve-3d]"
          style={{ rotateX, rotateY }}
        >
          <Image
            alt="Mohamed Ayman software engineer profile portrait"
            className="rounded-[2rem] object-cover object-center"
            fill
            priority
            sizes="(min-width: 1024px) 36rem, (min-width: 640px) 80vw, 90vw"
            src={profileImageSrc}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32 rounded-b-[2rem] bg-gradient-to-t from-[#0B0F19]/60 to-transparent"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <header className="relative w-full">
      <motion.div
        animate="visible"
        className="relative grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12"
        initial="hidden"
        variants={containerVariants}
      >
        {/* LEFT COLUMN — floating minimalist typography */}
        <div className="relative z-10 flex flex-col">
          <motion.div
            className="inline-flex w-fit items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-md"
            variants={itemVariants}
          >
            <span className="pulse-dot" aria-hidden="true" />
            Backend / Full-Stack Intern Candidate
          </motion.div>

          <motion.h1
            id="hero-heading"
            className="mt-8 text-balance text-[clamp(3rem,8vw,6.5rem)] font-black leading-[0.92] tracking-[-0.05em] text-white"
            variants={itemVariants}
          >
            Mohamed Ayman
            <span className="sr-only" dir="rtl" lang="ar">
              {" "}
              (مهندس محمد أيمن)
            </span>
          </motion.h1>

          <motion.h2
            className="mt-8 max-w-xl text-lg font-medium leading-8 text-slate-300 sm:text-xl lg:text-2xl lg:leading-9"
            variants={itemVariants}
          >
            Software Engineering Student | Backend &amp; Full-Stack Developer
          </motion.h2>

          <motion.p
            className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8"
            variants={itemVariants}
          >
            Computer and Systems Engineering student at Al-Azhar University,
            graduating in 2028, seeking a Backend / Full-Stack internship to
            apply hands-on Python and Django skills in a real engineering
            environment. Focused on REST API design, normalized database
            architecture, and modern frontend stacks.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            variants={itemVariants}
          >
            <motion.div whileHover={{ y: -3, scale: 1.015 }} whileTap={{ scale: 0.985 }}>
              <Button
                asChild
                className="h-13 rounded-full bg-white px-7 text-slate-950 shadow-[0_10px_40px_rgba(255,255,255,0.18)] hover:bg-emerald-300 hover:shadow-[0_10px_40px_rgba(16,185,129,0.3)]"
                size="lg"
                aria-label="Download Mohamed Ayman CV"
              >
                <a
                  href="/Mohamed_Ayman_Backend_Intern_CV.docx"
                  download="Mohamed_Ayman_Backend_Intern_CV.docx"
                  title="Download Mohamed_Ayman_Backend_Intern_CV.docx"
                >
                  <Download className="h-5 w-5" aria-hidden="true" />
                  Download CV
                </a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ y: -3, scale: 1.015 }} whileTap={{ scale: 0.985 }}>
              <Button
                asChild
                className="h-13 rounded-full border border-white/[0.12] bg-white/[0.03] px-7 text-white backdrop-blur-md hover:border-cyan-300/40 hover:bg-white/[0.06]"
                size="lg"
                variant="outline"
                aria-label="View Mohamed Ayman GitHub profile"
              >
                <a
                  href="https://github.com/MohamedAymn220"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="View Mohamed Ayman GitHub profile"
                >
                  <Github className="h-5 w-5" aria-hidden="true" />
                  View GitHub
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
            variants={itemVariants}
          >
            {contactDetails.map((detail) => {
              const Icon = detail.icon;

              return (
                <a
                  aria-label={detail.ariaLabel}
                  className="group inline-flex items-center gap-2.5 text-sm text-slate-400 transition-colors hover:text-white"
                  href={detail.href}
                  key={detail.label}
                  rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  target={detail.href.startsWith("http") ? "_blank" : undefined}
                  title={detail.ariaLabel}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.03] text-emerald-300 transition-all duration-300 group-hover:scale-105 group-hover:border-emerald-400/30">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="font-medium">{detail.value}</span>
                </a>
              );
            })}
          </motion.div>

          <motion.nav
            aria-label="Mohamed Ayman social and contact links"
            className="mt-8 flex flex-wrap gap-3"
            variants={itemVariants}
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <motion.a
                  aria-label={link.ariaLabel}
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-slate-400 backdrop-blur-md transition-colors duration-300 hover:border-emerald-400/30 hover:bg-emerald-500/10 hover:text-white"
                  href={link.href}
                  key={link.label}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  title={link.title}
                  whileHover={{ y: -3, scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Icon className="h-[18px] w-[18px] transition-transform group-hover:scale-110" aria-hidden="true" />
                </motion.a>
              );
            })}
          </motion.nav>
        </div>

        {/* RIGHT COLUMN — free-floating clean portrait */}
        <motion.aside
          aria-label="Mohamed Ayman profile image and portfolio metrics"
          className="relative"
          variants={itemVariants}
        >
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[120px]"
          />
          <div
            aria-hidden="true"
            className="absolute right-0 top-10 h-72 w-72 rounded-full bg-indigo-500/[0.06] blur-[120px]"
          />

          <ProfilePortrait />

          {/* Floating glassmorphic metric chips */}
          <div className="relative z-10 mx-auto mt-6 grid w-full max-w-md grid-cols-3 gap-3">
            {heroStats.map((stat) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  className="group rounded-2xl border border-white/[0.03] bg-slate-900/30 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/25 hover:bg-slate-900/50"
                  key={stat.label}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-2 text-emerald-300">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <p className="mt-3 text-3xl font-bold tracking-tight text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-medium leading-tight text-slate-400">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.aside>
      </motion.div>
    </header>
  );
}
