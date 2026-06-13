import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="Featured Work"
          title="Selected"
          highlight="projects."
          description="A selection of recent projects spanning SaaS dashboards, e-commerce, agency websites, and product UI design."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 0.1}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="glass glass-hover group flex h-full flex-col overflow-hidden rounded-2xl"
              >
                {/* Preview */}
                <div
                  className={`relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br ${project.accent} bg-surface-2`}
                >
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                    }}
                  />
                  {/* mock browser window */}
                  <div className="absolute inset-6 overflow-hidden rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.02] sm:inset-8">
                    <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-3 py-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                    </div>
                    <div className="space-y-3 p-4 sm:p-6">
                      <div className="h-3 w-2/5 rounded-full bg-white/15" />
                      <div className="h-2 w-4/5 rounded-full bg-white/10" />
                      <div className="h-2 w-3/5 rounded-full bg-white/10" />
                      <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                        <div className="h-12 rounded-lg bg-white/10 sm:h-16" />
                        <div className="h-12 rounded-lg bg-white/10 sm:h-16" />
                        <div className="h-12 rounded-lg bg-white/10 sm:h-16" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="text-xl font-semibold transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <a
                      href={project.live}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white/[0.06] px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-white/[0.12]"
                    >
                      Live Preview
                      <FiArrowUpRight />
                    </a>
                    <a
                      href={project.github}
                      aria-label={`${project.title} source code on GitHub`}
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-base transition-colors hover:bg-white/[0.06]"
                    >
                      <FiGithub />
                    </a>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
