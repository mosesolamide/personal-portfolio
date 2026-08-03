import { motion, useReducedMotion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { FaReact, FaWordpress } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { heroRoles, profile } from "../data/content";
import { useTypewriter } from "../hooks/useTypewriter";
import profileImage from "../assets/moses-portrait.png";

export default function Hero() {
  const role = useTypewriter(heroRoles);
  const reduceMotion = useReducedMotion();
  const entrance = (delay: number) => ({ initial: reduceMotion ? false : { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : delay } });
  return (
    <section id="home" className="relative flex min-h-[100dvh] items-center overflow-hidden bg-bg pb-20 pt-32">
      <div aria-hidden="true" className="absolute left-[-12rem] top-1/3 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="container-px grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div>
          <motion.span {...entrance(0)} className="eyebrow">Frontend Developer in Lagos</motion.span>
          <motion.h1 {...entrance(0.1)} className="mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
            I build fast, useful, and <span className="accent-text">beautiful web experiences.</span>
          </motion.h1>
          <motion.p {...entrance(0.2)} className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            I'm Akintunde Moses, a frontend developer who turns business ideas into responsive React applications, WordPress websites, and polished interfaces that work on every screen.
          </motion.p>
          <motion.div {...entrance(0.3)} className="mt-7 flex h-8 items-center gap-3 font-mono text-sm text-muted sm:text-base"><span className="text-ink">{"<"}</span><span className="accent-text font-semibold">{role}<span className="ml-0.5 inline-block w-[2px] animate-pulse bg-current align-middle">&nbsp;</span></span><span className="text-ink">{"/>"}</span></motion.div>
          <motion.div {...entrance(0.4)} className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary group">View My Work <FiArrowRight className="transition-transform group-hover:translate-x-1" /></a>
            <a href="/resume" className="btn-secondary group">View Resume <FiDownload className="transition-transform group-hover:translate-y-0.5" /></a>
          </motion.div>
          <motion.div {...entrance(0.55)} className="mt-14 flex items-center gap-6 text-muted/70"><span className="text-xs uppercase tracking-[0.3em]">Core stack</span><div className="flex items-center gap-4 text-2xl"><FaReact className="transition-colors hover:text-blue-400" /><SiTypescript className="transition-colors hover:text-blue-500" /><SiTailwindcss className="transition-colors hover:text-cyan-400" /><FaWordpress className="transition-colors hover:text-indigo-400" /></div></motion.div>
        </div>
        <motion.div initial={reduceMotion ? false : { opacity: 0, x: 32, rotate: 1 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ duration: reduceMotion ? 0 : 0.85, delay: reduceMotion ? 0 : 0.2 }} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/10 bg-surface-2 p-2 shadow-[0_35px_90px_rgba(0,0,0,0.45)] lg:max-w-md"><img src={profileImage} alt="Portrait of Akintunde Moses, Frontend Developer" className="h-full w-full rounded-[1.5rem] object-cover object-[center_38%]" /></div>
          <p className="mt-10 text-center text-sm text-muted"><span className="font-semibold text-ink">{profile.name}</span> | {profile.location}</p>
        </motion.div>
      </div>
    </section>
  );
}
