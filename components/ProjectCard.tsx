"use client";

import Image from "next/image";
import { type ComponentType, type MouseEvent, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// --- Internal project assets (sourced from /public) ----------------------------
const learnupImages = ["/learnup1.png", "/learnup2.png"];
const teryaqImages = ["/teryaq1.png", "/teryaq2.png", "/teryaq3.png", "/teryaq4.png"];
const creditCardImages = ["/Card.png"];

// --- Public types --------------------------------------------------------------
export type ProjectKey = "learnup" | "teryaq" | "creditcard";

export type ProjectLink = {
  label: string;
  href: string;
  ariaLabel: string;
  variant: "default" | "outline";
  icon: ComponentType<{ className?: string }>;
};

// The carousel looks its images up by `projectKey`, so adding a new project is a
// one-line edit here plus a matching entry in the registry below.
const imageRegistry: Record<ProjectKey, string[]> = {
  learnup: learnupImages,
  teryaq: teryaqImages,
  creditcard: creditCardImages,
};

type ProjectCardProps = {
  /** Selects which /public image set the carousel plays. */
  projectKey: ProjectKey;
  title: string;
  description: string;
  /** Tech-stack chips rendered below the description. */
  tags: string[];
  /** Call-to-action links rendered in the card footer. */
  links: ProjectLink[];
  /** Auto-advance interval in milliseconds (default 4000ms). */
  intervalMs?: number;
  /** Caps the image height on large screens for a sleek banner strip. */
  isBanner?: boolean;
  className?: string;
};

/**
 * Bento-safe project block: an auto-playing image carousel on top, project
 * details below. No external carousel library — just a sliding track driven by
 * `setInterval` inside `useEffect`.
 */
export function ProjectCard({
  projectKey,
  title,
  description,
  tags,
  links,
  intervalMs = 4000,
  isBanner = false,
  className,
}: ProjectCardProps) {
  const images = imageRegistry[projectKey] ?? [];
  const isCreditCard = projectKey === "creditcard";
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-advance the carousel. The effect re-arms when the image count changes,
  // and pauses while the pointer is over the card.
  useEffect(() => {
    if (paused || images.length <= 1) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(id);
  }, [paused, images.length, intervalMs]);

  function handlePrev(e: MouseEvent) {
    e.stopPropagation();
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  function handleNext(e: MouseEvent) {
    e.stopPropagation();
    setIndex((prev) => (prev + 1) % images.length);
  }

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/[0.03] bg-slate-900/20 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-emerald-500/20 hover:bg-slate-900/30",
        className,
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* --- Carousel ------------------------------------------------------- */}
      <div
        aria-label={`${title} project screenshots`}
        aria-roledescription="carousel"
        className={cn(
          "relative aspect-video w-full overflow-hidden",
          isBanner && "lg:aspect-[2.5/1] lg:max-h-[350px]",
        )}
        role="region"
      >
        {/* Sliding track: each slide is full-width, translated by -index * 100% */}
        <div
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <div className="relative h-full w-full shrink-0" key={src}>
              {isCreditCard && (
                <Image
                  alt=""
                  aria-hidden="true"
                  className="object-cover object-center blur-2xl opacity-60 scale-110"
                  fill
                  priority={i === 0}
                  sizes="(min-width: 1024px) 80rem, 90vw"
                  src={src}
                />
              )}
              <Image
                alt={`${title} screenshot ${i + 1} of ${images.length}`}
                className={cn(
                  "object-center",
                  isCreditCard
                    ? "relative z-10 object-contain"
                    : "object-cover",
                )}
                fill
                priority={i === 0}
                sizes={isCreditCard ? "(min-width: 1024px) 80rem, 90vw" : "(min-width: 1024px) 50rem, (min-width: 640px) 90vw, 90vw"}
                src={src}
              />
            </div>
          ))}
        </div>

        {/* Bottom gradient keeps the indicator dots legible over bright shots */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/70 to-transparent"
        />

        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <span
                aria-hidden="true"
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === index ? "w-5 bg-emerald-400" : "w-1.5 bg-white/50",
                )}
                key={i}
              />
            ))}
          </div>
        )}

        {images.length > 1 && (
          <>
            <button
              aria-label="Previous image"
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/40 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-slate-950/70"
              onClick={handlePrev}
              type="button"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              aria-label="Next image"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/40 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-slate-950/70"
              onClick={handleNext}
              type="button"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {/* --- Details ------------------------------------------------------- */}
      <div className="flex flex-1 flex-col gap-5 p-6">
        <h3 className="text-2xl font-semibold tracking-tight text-white">
          {title}
        </h3>
        <p className="text-base leading-7 text-muted-foreground">
          {description}
        </p>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">
            Tech Stack
          </h4>
          <ul
            aria-label={`${title} technology stack`}
            className="mt-4 flex flex-wrap gap-2.5"
          >
            {tags.map((technology) => (
              <li
                className="rounded-lg border border-white/[0.04] bg-slate-900/30 px-2.5 py-1 text-xs font-medium text-slate-300 backdrop-blur-md transition-colors duration-200 hover:border-emerald-500/25 hover:text-white"
                key={`${title}-${technology}`}
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className="mt-auto flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:items-center">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <Button
                asChild
                className="w-full sm:w-auto"
                key={`${title}-${link.label}`}
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
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
