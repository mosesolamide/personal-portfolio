import { motion } from "framer-motion";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="My Journey"
          title="Experience &"
          highlight="growth."
          description="A timeline of my freelance work, client projects, and continuous growth as a developer and designer."
        />

        <div className="relative mx-auto mt-16 max-w-3xl">
          {/* vertical line */}
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-10">
            {experience.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div
                  className={`relative flex flex-col gap-4 sm:flex-row sm:items-start ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* dot */}
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 15, delay: i * 0.1 }}
                    className="absolute left-0 top-1.5 z-10 flex h-8 w-8 items-center justify-center rounded-full border-4 border-bg bg-gradient-to-br from-blue-500 to-purple-500 sm:left-1/2 sm:-translate-x-1/2"
                  >
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </motion.span>

                  {/* spacer for alignment on desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  <div className="glass glass-hover ml-12 rounded-2xl p-6 sm:ml-0 sm:w-1/2">
                    <span className="eyebrow !py-1 !text-[11px]">{item.date}</span>
                    <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm font-medium text-blue-400">{item.org}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
