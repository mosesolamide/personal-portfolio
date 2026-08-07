import { FiArrowLeft, FiDownload, FiExternalLink, FiGithub, FiMail, FiMapPin, FiPrinter } from "react-icons/fi";
import { experience, profile, projects, skillGroups } from "../data/content";

const cvPath = "/AKINTUNDE MOSES CVs.pdf";

export default function ResumePage() {
  return (
    <div className="resume-page min-h-screen bg-bg">
      <header className="border-b border-line bg-bg/90 backdrop-blur-xl print:hidden">
        <div className="container-px flex flex-wrap items-center justify-between gap-4 py-5">
          <a href="/" className="group inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-ink">
            <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
            Back to portfolio
          </a>
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => window.print()} className="btn-secondary px-4! py-2.5!" aria-label="Print resume">
              <FiPrinter />
              <span className="hidden sm:inline">Print</span>
            </button>
            <a href={cvPath} download="AKINTUNDE MOSES CVs.pdf" className="btn-primary px-5! py-2.5!">
              <FiDownload /> Download CV
            </a>
          </div>
        </div>
      </header>

      <main className="container-px py-12 sm:py-16 print:max-w-none print:p-0">
        <article className="resume-sheet mx-auto max-w-5xl overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_24px_80px_rgba(25,40,70,0.08)] print:max-w-none print:rounded-none print:border-0 print:shadow-none">
          <div className="border-b border-line bg-surface-2 p-8 sm:p-12 lg:p-14">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400">Frontend Developer</p>
                <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{profile.name}</h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                  I build responsive, accessible web experiences with React, TypeScript, Tailwind CSS, and WordPress, combining clean engineering with thoughtful visual design.
                </p>
              </div>
              <a href={cvPath} download="Akintunde-Moses-CV.pdf" className="btn-primary shrink-0 print:hidden">
                <FiDownload /> Download PDF
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-ink"><FiMail />{profile.email}</a>
              <span className="inline-flex items-center gap-2"><FiMapPin />{profile.location}</span>
              <a href="https://github.com/mosesolamide" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-ink"><FiGithub />github.com/mosesolamide</a>
            </div>
          </div>

          <div className="grid gap-12 p-8 sm:p-12 lg:grid-cols-[1.6fr_0.8fr] lg:p-14">
            <div className="space-y-12">
              <section aria-labelledby="experience-title">
                <h2 id="experience-title" className="resume-title">Experience</h2>
                <div className="mt-6 space-y-7">
                  {experience.map((item) => (
                    <div key={item.title} className="relative border-l border-line pl-6">
                      <span className="absolute -left-1 top-1.5 h-2 w-2 rounded-full bg-blue-400" />
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <span className="font-mono text-xs text-blue-600 dark:text-blue-400">{item.date}</span>
                      </div>
                      <p className="mt-1 text-sm font-medium text-muted">{item.org}</p>
                      <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section aria-labelledby="projects-title">
                <h2 id="projects-title" className="resume-title">Selected Work</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {projects.map((project) => (
                    <a key={project.title} href={project.live} target="_blank" rel="noreferrer" className="group rounded-xl border border-line bg-bg p-5 transition-colors hover:border-blue-500/50">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-semibold">{project.title}</h3>
                        <FiExternalLink className="mt-1 shrink-0 text-muted transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted">{project.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => <span key={tag} className="rounded-lg bg-surface-2 px-2.5 py-1 text-[11px] text-muted">{tag}</span>)}
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-10">
              <section aria-labelledby="skills-title">
                <h2 id="skills-title" className="resume-title">Core Skills</h2>
                <div className="mt-6 space-y-6">
                  {skillGroups.map((group) => (
                    <div key={group.category}>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">{group.category}</h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {group.skills.map((skill) => <span key={skill} className="rounded-lg border border-line bg-bg px-3 py-2 text-xs text-muted">{skill}</span>)}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section aria-labelledby="approach-title" className="rounded-2xl border border-blue-400/20 bg-blue-500/[0.07] p-6">
                <h2 id="approach-title" className="text-lg font-semibold">How I work</h2>
                <p className="mt-2 text-sm leading-6 text-muted">I build responsive interfaces with clean, maintainable code and keep performance, accessibility, and business goals in view from the start.</p>
              </section>
            </aside>
          </div>
        </article>
      </main>

      <footer className="pb-10 text-center text-xs text-muted-2 print:hidden">
        Last updated August 2026 · References available on request
      </footer>
    </div>
  );
}
