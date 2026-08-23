"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { type ComponentType } from "react";
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
  return (
    <motion.div
      animate={{ opacity: 1, x: 0 }}
      className="relative mx-auto w-full max-w-md flex justify-center lg:justify-start"
      initial={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative w-80 h-[26rem] sm:w-96 sm:h-[32rem] lg:w-[480px] lg:h-[600px] mx-auto lg:mx-0 lg:-mt-20 flex items-end justify-center">
        {/* The Static Profile Image */}
        <div className="relative z-10 w-full h-full pointer-events-none">
          <Image
            alt="Mohamed Ayman software engineer profile portrait"
            className="object-contain object-bottom w-full h-full pointer-events-none"
            fill
            priority
            quality={100}
            sizes="(min-width: 1024px) 480px, (min-width: 640px) 80vw, 90vw"
            src={profileImageSrc}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <header className="relative w-full overflow-x-hidden sm:overflow-x-visible">
      <motion.div
        animate="visible"
        className="relative grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12"
        initial="hidden"
        variants={containerVariants}
      >
        {/* LEFT COLUMN — floating minimalist typography */}
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="relative z-10 flex flex-col items-center sm:items-start"
          initial={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex w-fit items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-center text-sm font-medium text-slate-300 backdrop-blur-md sm:text-left"
            variants={itemVariants}
          >
            <span className="pulse-dot" aria-hidden="true" />
            Backend / Full-Stack Intern Candidate
          </motion.div>

          <motion.h1
            id="hero-heading"
            className="mt-8 text-balance text-center text-[clamp(3rem,8vw,6.5rem)] font-black leading-[0.92] tracking-[-0.05em] text-white sm:text-left"
            variants={itemVariants}
          >
            Mohamed Ayman
            <span className="sr-only" dir="rtl" lang="ar">
              {" "}
              (مهندس محمد أيمن)
            </span>
          </motion.h1>

          <motion.h2
            className="mt-8 max-w-xl text-center text-lg font-medium leading-8 text-slate-300 sm:text-left sm:text-xl lg:text-2xl lg:leading-9"
            variants={itemVariants}
          >
            Full-Stack Developer | Backend (Django) & Frontend (React)
          </motion.h2>

          <motion.p
            className="mt-6 max-w-xl text-center text-base leading-7 text-slate-400 sm:text-left sm:text-lg sm:leading-8"
            variants={itemVariants}
          >
            Software Engineer specializing in building scalable web applications. Proficient in architecting robust backend systems and RESTful APIs using Python & Django, alongside crafting responsive, dynamic user interfaces with React. Dedicated to clean code practices, optimized database architecture, and delivering end-to-end, production-ready solutions.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-center sm:justify-start"
            variants={itemVariants}
          >
            <motion.div whileHover={{ y: -3, scale: 1.015 }} whileTap={{ scale: 0.985 }}>
              <Button
                asChild
                className="group relative h-13 overflow-hidden rounded-full bg-white px-7 text-slate-950 transition-colors duration-300 before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:-z-10 before:bg-emerald-500 before:transition-all before:duration-300 hover:text-white hover:before:w-full"
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
                className="group relative h-13 overflow-hidden rounded-full border border-white/[0.12] bg-white/[0.03] px-7 text-white backdrop-blur-md transition-colors duration-300 before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:-z-10 before:bg-cyan-500/20 before:transition-all before:duration-300 hover:border-cyan-300/40 hover:before:w-full"
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
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:justify-start"
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
            className="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start"
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
        </motion.div>

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
