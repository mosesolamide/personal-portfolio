import { motion, useReducedMotion } from "framer-motion";
import { SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiHtml5, SiCss, SiWordpress, SiElementor, SiCanva, SiGit, SiGithub, SiVite } from "react-icons/si";
import { FiVideo } from "react-icons/fi";
import { FaCut } from "react-icons/fa";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { skillGroups } from "../data/content";

const ICON_MAP: Record<string, { icon: React.ElementType; color: string }> = {
  "React.js": { icon: SiReact, color: "text-sky-400" }, TypeScript: { icon: SiTypescript, color: "text-blue-500" }, JavaScript: { icon: SiJavascript, color: "text-yellow-400" }, "Tailwind CSS": { icon: SiTailwindcss, color: "text-cyan-400" }, HTML5: { icon: SiHtml5, color: "text-orange-500" }, CSS3: { icon: SiCss, color: "text-blue-400" }, WordPress: { icon: SiWordpress, color: "text-indigo-400" }, Elementor: { icon: SiElementor, color: "text-pink-500" }, "Video Editing": { icon: FiVideo, color: "text-blue-400" }, CapCut: { icon: FaCut, color: "text-white" }, Canva: { icon: SiCanva, color: "text-teal-400" }, Git: { icon: SiGit, color: "text-orange-500" }, GitHub: { icon: SiGithub, color: "text-ink" }, Vite: { icon: SiVite, color: "text-purple-400" },
};
const container = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
const item = { hidden: { opacity: 0, y: 16, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1 } };

export default function Skills() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="skills" className="section">
      <div className="container-px">
        <SectionHeading eyebrow="My Toolbox" title="Skills &" highlight="technologies." description="The practical tools I use to design, build, optimize, and ship modern web products from start to finish." />
        <div className="mt-16 space-y-12">{skillGroups.map((group, groupIndex) => <Reveal key={group.category} delay={groupIndex * 0.08}><div><h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-muted">{group.category}</h3><motion.div variants={reduceMotion ? undefined : container} initial={reduceMotion ? false : "hidden"} whileInView={reduceMotion ? undefined : "show"} viewport={{ once: true, margin: "-60px" }} className="flex flex-wrap gap-4">{group.skills.map((skill) => { const entry = ICON_MAP[skill]; const Icon = entry?.icon; return <motion.div key={skill} variants={reduceMotion ? undefined : item} whileHover={reduceMotion ? undefined : { y: -4, scale: 1.04 }} transition={{ type: "spring", stiffness: 300, damping: 18 }} className="glass glass-hover flex items-center gap-3 rounded-xl px-5 py-3.5">{Icon && <Icon className={`text-xl ${entry.color}`} />}<span className="text-sm font-medium">{skill}</span></motion.div>; })}</motion.div></div></Reveal>)}</div>
      </div>
    </section>
  );
}
