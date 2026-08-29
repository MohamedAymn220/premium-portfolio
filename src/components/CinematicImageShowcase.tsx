"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * CinematicImageShowcase — a premium, image-based showcase section.
 *
 * Uses the attached laptop reference image as the hero visual. All motion is
 * handled via lightweight CSS transforms + Framer Motion (already in the
 * project). No Three.js, no GLB, no fake 3D geometry.
 */
export function CinematicImageShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  // Check prefers-reduced-motion once
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Check if touch device (disable parallax on mobile/touch)
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  // Smooth lerp animation loop for mouse parallax
  useEffect(() => {
    if (reducedMotion || isTouchDevice) return;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      currentRef.current.x = lerp(currentRef.current.x, targetRef.current.x, 0.08);
      currentRef.current.y = lerp(currentRef.current.y, targetRef.current.y, 0.08);
      setTilt({ x: currentRef.current.x, y: currentRef.current.y });
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [reducedMotion, isTouchDevice]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reducedMotion || isTouchDevice || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Normalize to -1 … +1
      const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      // Very subtle: ±1.5° rotateY, ±1° rotateX
      targetRef.current = { x: ny * -1, y: nx * 1.5 };
    },
    [reducedMotion, isTouchDevice],
  );

  const handleMouseLeave = useCallback(() => {
    targetRef.current = { x: 0, y: 0 };
    setIsHovered(false);
  }, []);

  const shouldAnimate = !reducedMotion;

  return (
    <div className="w-full">
      {/* Section header — minimal */}
      <div className="mx-auto max-w-3xl text-center px-6 md:px-10 lg:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary">
          Selected Work
        </p>
        <h2
          id="showcase-heading"
          className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          Engineering production-grade web systems
        </h2>
        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
          Real projects. Real architecture. Built for scale.
        </p>
      </div>

      {/* Image container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative mx-auto mt-14 w-full"
        style={{ perspective: shouldAnimate ? "1200px" : undefined }}
      >
        {/* Subtle ambient glow behind the laptop */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[50%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.25), rgba(6, 182, 212, 0.15), transparent 70%)",
          }}
        />

        {/* Entrance animation wrapper */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 40, scale: 0.98 } : false}
          whileInView={shouldAnimate ? { opacity: 1, y: 0, scale: 1 } : undefined}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          {/* 3D tilt + idle float + hover scale container */}
          <motion.div
            animate={
              shouldAnimate && !isHovered
                ? {
                    y: [0, -2, 0],
                    transition: {
                      y: {
                        duration: 6,
                        repeat: Infinity,
                        repeatType: "mirror" as const,
                        ease: "easeInOut",
                      },
                    },
                  }
                : undefined
            }
            style={
              shouldAnimate
                ? {
                    transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? 1.01 : 1})`,
                    transformStyle: "preserve-3d" as const,
                    transition: "transform 0.1s linear",
                  }
                : undefined
            }
            className="relative mx-auto w-full"
          >
            {/* The actual laptop image */}
            <div
              className="relative w-full overflow-hidden transition-shadow duration-500 [mask-image:linear-gradient(to_bottom,transparent_0%,white_5%,white_95%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,white_5%,white_95%,transparent_100%)]"
              style={{
                boxShadow: isHovered
                  ? "0 30px 80px -20px rgba(0, 0, 0, 0.85), 0 0 40px -10px rgba(16, 185, 129, 0.15)"
                  : "0 20px 60px -15px rgba(0, 0, 0, 0.8)",
              }}
            >
              <Image
                src="/laptop-showcase.png"
                alt="Premium laptop displaying a modern web development project — cinematic dark environment with code editor UI"
                width={1024}
                height={621}
                quality={100}
                unoptimized={true}
                priority={false}
                sizes="100vw"
                className="block w-full h-auto"
              />
            </div>

            {/* The second image with identical structural wrapping, plus vertical spacing and edge fading */}
            <div
              className="relative w-full overflow-hidden transition-shadow duration-500 mt-16 md:mt-24"
              style={{
                boxShadow: isHovered
                  ? "0 30px 80px -20px rgba(0, 0, 0, 0.85), 0 0 40px -10px rgba(16, 185, 129, 0.15)"
                  : "0 20px 60px -15px rgba(0, 0, 0, 0.8)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
              }}
            >
              <Image
                src="/Gemini_Generated_Image_7i8mw87i8mw87i8m.jfif"
                alt="Premium laptop displaying a modern web development project — cinematic dark environment with code editor UI"
                width={1024}
                height={621}
                quality={100}
                unoptimized={true}
                priority={false}
                sizes="100vw"
                className="block w-full h-auto"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
