import React from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "Mohamed is an exceptional backend engineer. His ability to architect scalable solutions with Django and Python is truly impressive. He delivered our API ahead of schedule and with zero critical bugs.",
    name: "Ahmed Youssef",
    role: "Tech Lead @ TechNova",
    initial: "A",
    color: "bg-emerald-500",
  },
  {
    id: 2,
    quote:
      "Working with Mohamed was a breeze. He understands both the frontend and backend deeply, making integration seamless. Highly recommend his expertise for any full-stack development needs.",
    name: "Fatima Al-Sayed",
    role: "Senior Product Manager",
    initial: "F",
    color: "bg-cyan-500",
  },
  {
    id: 3,
    quote:
      "Mohamed's attention to detail and commitment to clean code practices stand out. He revamped our database architecture, improving query performance by over 40% in our core services.",
    name: "Marcus Jensen",
    role: "CTO @ InnovateCorp",
    initial: "M",
    color: "bg-indigo-500",
  },
  {
    id: 4,
    quote:
      "An outstanding developer who consistently delivers production-ready solutions. Mohamed is a great team player and communicates complex technical concepts clearly to non-technical stakeholders.",
    name: "Karim Hassan",
    role: "Engineering Manager",
    initial: "K",
    color: "bg-blue-500",
  },
  {
    id: 5,
    quote:
      "Mohamed brought a fresh perspective to our project. His React skills combined with his deep backend knowledge make him an incredibly valuable full-stack asset to any team.",
    name: "Omar Farouk",
    role: "Startup Founder",
    initial: "O",
    color: "bg-purple-500",
  },
  {
    id: 6,
    quote:
      "I was particularly impressed by Mohamed's dedication to optimizing our systems. He doesn't just write code; he builds robust, maintainable architecture that scales beautifully.",
    name: "Nour El-Din",
    role: "Lead Architect",
    initial: "N",
    color: "bg-rose-500",
  },
];

export function Testimonials() {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="overflow-hidden py-20">
      <div className="mb-12 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          What people are saying
        </h2>
        <p className="text-slate-400">
          A few words from professionals I&apos;ve worked with.
        </p>
      </div>

      {/* Marquee Wrapper with Edge Fade */}
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        {/* Marquee Track */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="w-[400px] md:w-[480px] flex-shrink-0 p-6 md:p-8 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between mx-3 transition-colors hover:bg-slate-900/60"
            >
            {/* Top Part */}
            <p className="text-slate-300 leading-relaxed">
              &quot;{testimonial.quote}&quot;
            </p>

            {/* Bottom Part */}
            <div className="flex items-center gap-4 mt-6">
              {/* Avatar */}
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white font-bold ${testimonial.color}`}
              >
                {testimonial.initial}
              </div>

              {/* Name & Role */}
              <div className="flex flex-col">
                <span className="text-white font-semibold">
                  {testimonial.name}
                </span>
                <span className="text-slate-500 text-sm">
                  {testimonial.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
