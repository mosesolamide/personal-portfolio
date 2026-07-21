import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
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
          description="A selection of live websites built for education, small businesses, and professional web services."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 0.1}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="glass glass-hover group flex h-full flex-col overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/10 bg-surface-2">
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="text-xl font-semibold transition-colors group-hover:text-blue-400">
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
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white/[0.06] px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-white/[0.12]"
                    >
                      Live Preview
                      <FiArrowUpRight />
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
