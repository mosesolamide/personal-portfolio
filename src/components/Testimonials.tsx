import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients"
          highlight="say."
          description="Feedback from clients and collaborators I've had the pleasure of working with."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="glass glass-hover flex h-full flex-col rounded-2xl p-7 sm:p-8"
              >
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <FiStar key={idx} className="fill-current" />
                  ))}
                </div>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-ink/90 sm:text-base">
                  “{t.quote}”
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 font-display text-sm font-semibold text-white">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
