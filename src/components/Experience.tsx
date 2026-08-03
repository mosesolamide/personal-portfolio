import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { experience } from "../data/content";

export default function Experience() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="experience" className="section">
      <div className="container-px">
        <SectionHeading eyebrow="My Journey" title="Experience &" highlight="growth." description="The work that has shaped how I build products, solve problems, and collaborate with teams." />
        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute bottom-2 left-[15px] top-2 w-px bg-blue-500/50 sm:left-1/2 sm:-translate-x-1/2" />
          <div className="space-y-10">{experience.map((entry, index) => <Reveal key={entry.title} delay={index * 0.1}><div className={`relative flex flex-col gap-4 sm:flex-row sm:items-start ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}><motion.span initial={reduceMotion ? false : { scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 300, damping: 15, delay: reduceMotion ? 0 : index * 0.1 }} className="absolute left-0 top-1.5 z-10 flex h-8 w-8 items-center justify-center rounded-full border-4 border-bg bg-blue-500 sm:left-1/2 sm:-translate-x-1/2"><span className="h-2 w-2 rounded-full bg-white" /></motion.span><div className="hidden sm:block sm:w-1/2" /><motion.article whileHover={reduceMotion ? undefined : { y: -5 }} className="glass glass-hover ml-12 rounded-2xl p-6 sm:ml-0 sm:w-1/2"><span className="eyebrow !py-1 !text-[11px]">{entry.date}</span><h3 className="mt-3 text-lg font-semibold">{entry.title}</h3><p className="mt-1 text-sm font-medium text-blue-400">{entry.org}</p><p className="mt-3 text-sm leading-relaxed text-muted">{entry.description}</p><div className="mt-4 flex flex-wrap gap-2">{entry.skills.map((skill) => <span key={skill} className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-muted">{skill}</span>)}</div><a href={entry.link} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400">Visit {entry.org} <FiArrowUpRight /></a></motion.article></div></Reveal>)}</div>
        </div>
      </div>
    </section>
  );
}
