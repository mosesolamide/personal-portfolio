import { motion, useReducedMotion } from "framer-motion";
import { FiCheck, FiCode, FiGlobe } from "react-icons/fi";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { services } from "../data/content";

const ICONS: Record<string, React.ElementType> = { code: FiCode, globe: FiGlobe };

export default function Services() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="services" className="section">
      <div className="container-px">
        <SectionHeading eyebrow="What I Do" title="Services built for" highlight="real growth." description="I help founders, small businesses, and organizations turn their ideas into credible, fast, and easy-to-use digital products." />
        <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
          {services.map((service, index) => { const Icon = ICONS[service.icon]; return <Reveal key={service.title} delay={index * 0.12}><motion.article whileHover={reduceMotion ? undefined : { y: -8 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="glass glass-hover group relative h-full overflow-hidden rounded-2xl p-8"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-2xl text-blue-400"><Icon /></div><h3 className="mt-6 text-xl font-semibold">{service.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p><ul className="mt-6 space-y-3">{service.items.map((item) => <li key={item} className="flex items-center gap-3 text-sm text-ink/90"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/5 text-green-400"><FiCheck className="text-xs" /></span>{item}</li>)}</ul></motion.article></Reveal>; })}
        </div>
      </div>
    </section>
  );
}
