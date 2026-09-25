export function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-background pt-9 pb-6">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Col 1 */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="text-[#d4ff3f] font-mono font-bold text-lg">{"</>"}</span>
              <span className="font-semibold text-white">Mohamed Ayman</span>
            </div>
            <p className="text-[13px] text-slate-300 leading-relaxed max-w-xs">
              Full-stack developer building scalable Django backends and React interfaces.
            </p>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[11px] uppercase tracking-wider text-slate-500 font-mono">Quick links</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#experience" className="text-[13px] text-slate-300 hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#tech-stack" className="text-[13px] text-slate-300 hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-[13px] text-slate-300 hover:text-white transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[13px] text-slate-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[11px] uppercase tracking-wider text-slate-500 font-mono">Resources</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="/Mohamed_Ayman_Backend_Intern_CV.docx" download className="text-[13px] text-slate-300 hover:text-white transition-colors">
                  Download CV
                </a>
              </li>
              <li>
                <a href="https://github.com/MohamedAymn220" target="_blank" rel="noopener noreferrer" className="text-[13px] text-slate-300 hover:text-white transition-colors">
                  View GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/mohamedaymanabdelfatah" target="_blank" rel="noopener noreferrer" className="text-[13px] text-slate-300 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:mohamedayman21172@gmail.com" className="text-[13px] text-slate-300 hover:text-white transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[11px] uppercase tracking-wider text-slate-500 font-mono">Status</h3>
            <div className="flex flex-col gap-2 mt-1">
              <div className="flex items-center gap-3">
                <span className="pulse-dot pulse-dot--lime" aria-hidden="true" />
                <span className="text-[13px] text-slate-300">Available for internships</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="pulse-dot pulse-dot--cyan" aria-hidden="true" />
                <span className="text-[13px] text-slate-300">Available for remote work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-9 border-t border-white/[0.08] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[13px] text-slate-500">
            &copy; 2026 Mohamed Ayman. All rights reserved.
          </p>
          <p className="text-[13px] text-slate-500">
            Cairo, Egypt
          </p>
        </div>
      </div>
    </footer>
  );
}
