import { motion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { FaReact, FaWordpress } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { profile, heroRoles } from "../data/content";
import { useTypewriter } from "../hooks/useTypewriter";
import profileImage from "../assets/moses-portrait.png";

export default function Hero() {
  const role = useTypewriter(heroRoles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-bg pt-32 pb-20"
    >
      <div className="container-px grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        {/* Left: text content */}
        <div>
          {/* <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Available for new projects
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl xl:text-[4.25rem]"
          >
            I build modern, fast, and{" "}
            <span className="accent-text">beautiful digital experiences.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            Frontend Developer specializing in React, TypeScript, Tailwind CSS, WordPress, and
            UI-focused web solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-7 flex h-8 items-center gap-3 font-mono text-sm text-muted sm:text-base"
          >
            <span className="text-ink">{"<"}</span>
            <span className="accent-text font-semibold">
              {role}
              <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-current align-middle">
                &nbsp;
              </span>
            </span>
            <span className="text-ink">{"/>"}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-primary group">
              View My Work
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="btn-secondary group">
              Let's Work Together
              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-14 flex items-center gap-6 text-muted/70"
          >
            <span className="text-xs uppercase tracking-[0.3em]">Tech Stack</span>
            <div className="flex items-center gap-4 text-2xl">
              <FaReact className="transition-colors hover:text-blue-400" />
              <SiTypescript className="transition-colors hover:text-blue-500" />
              <SiTailwindcss className="transition-colors hover:text-cyan-400" />
              <FaWordpress className="transition-colors hover:text-indigo-400" />
            </div>
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/10 bg-surface-2 p-2 lg:max-w-md">
            <img
              src={profileImage}
              alt="Portrait of Akintunde Moses, Frontend Developer"
              className="h-full w-full rounded-[1.5rem] object-cover object-[center_38%]"
            />
          </div>

          <p className="mt-10 text-center text-sm text-muted">
            <span className="font-semibold text-ink">{profile.name}</span> | {profile.location}
          </p>
        </div>
      </div>
    </section>
  );
}
