import { motion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { FaReact, FaWordpress } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { profile, heroRoles } from "../data/content";
import { useTypewriter } from "../hooks/useTypewriter";
import BackgroundGlow from "./ui/BackgroundGlow";
import profileImage from "../assets/mosesimage.png";

export default function Hero() {
  const role = useTypewriter(heroRoles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      <BackgroundGlow />

      {/* grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

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
            <span className="gradient-text">beautiful digital experiences.</span>
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
            <span className="gradient-text font-semibold">
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

        {/* Right: profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative mx-auto aspect-square w-full max-w-sm lg:max-w-md">
            {/* glow ring */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-blue-500/40 via-purple-500/30 to-teal-400/30 opacity-60 blur-2xl" />

            {/* image frame */}
            <div className="glass relative h-full w-full overflow-hidden rounded-[2rem] p-2">
              <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#161629] via-[#10101c] to-[#0a0a12]">
                <img
                  src={profileImage}
                  alt="Portrait of Akintunde Moses, Frontend Developer"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* floating badge: role */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute -left-6 top-8 flex items-center gap-3 px-4 py-3 sm:-left-10"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                <FaReact className="text-lg" />
              </span>
              <div className="leading-tight">
                <p className="text-xs font-semibold">React.js</p>
                <p className="text-[11px] text-muted">Component Architecture</p>
              </div>
            </motion.div>

            {/* floating badge: experience */}
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="glass absolute -right-4 bottom-10 px-4 py-3 sm:-right-10"
            >
              <p className="text-2xl font-bold gradient-text">4+</p>
              <p className="text-[11px] text-muted">Years Experience</p>
            </motion.div>

            {/* floating badge: typescript */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="glass absolute -bottom-6 left-10 flex h-12 w-12 items-center justify-center rounded-2xl text-xl text-blue-400 sm:left-16"
            >
              <SiTypescript />
            </motion.div>
          </div>

          <p className="mt-10 text-center text-sm text-muted">
            <span className="font-semibold text-ink">{profile.name}</span> — {profile.location}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
