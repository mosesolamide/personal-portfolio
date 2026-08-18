import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { projects } from "../data/content";

export default function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="Featured Work"
          title="Selected"
          highlight="projects."
          description="Real products and websites I have designed or developed for commerce, logistics, education, and professional services."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => {
            const featured = index === 0;

            return (
              <Reveal key={project.title} delay={(index % 2) * 0.1} className={featured ? "md:col-span-2" : undefined}>
                <motion.article
                  whileHover={reduceMotion ? undefined : { y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className={`glass glass-hover group h-full overflow-hidden rounded-2xl ${
                    featured
                      ? "md:grid md:min-h-[22rem] md:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]"
                      : "flex flex-col"
                  }`}
                >
                  <div
                    className={`relative w-full overflow-hidden bg-surface-2 ${
                      featured
                        ? "aspect-[16/10] border-b border-white/10 md:aspect-auto md:h-full md:border-b-0 md:border-r"
                        : "aspect-[16/10] border-b border-white/10"
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>

                  <div className={`flex flex-col p-6 sm:p-8 ${featured ? "justify-center" : "flex-1"}`}>
                    <h3 className="text-xl font-semibold transition-colors group-hover:text-blue-400">
                      {project.title}
                    </h3>
                    <p className={`mt-3 text-sm leading-relaxed text-muted ${featured ? "" : "flex-1"}`}>
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-muted">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white/[0.06] px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-white/[0.12]"
                    >
                      Live Preview <FiArrowUpRight />
                    </a>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
