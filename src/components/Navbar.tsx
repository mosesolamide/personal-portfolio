import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const NAV_LINKS = [
  { label: "About", href: "#about" }, { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" }, { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" }, { label: "Resume", href: "/resume" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="container-px">
        <div className={`relative flex items-center justify-between overflow-hidden rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-6 ${scrolled ? "border-white/10 bg-bg/70 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl" : "border-transparent bg-transparent"}`}>
          <motion.a href="#home" whileHover={reduceMotion ? undefined : { y: -2 }} className="text-base font-semibold">Akintunde Moses</motion.a>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => <motion.a key={link.href} href={link.href} whileHover={reduceMotion ? undefined : { y: -2 }} className="rounded-full px-3 py-2 text-xs font-medium text-muted transition-colors hover:bg-white/5 hover:text-ink xl:px-4 xl:text-sm">{link.label}</motion.a>)}
          </nav>
          <div className="hidden lg:block"><a href="#contact" className="btn-primary !px-5 !py-2.5 text-xs">Let's Talk</a></div>
          <motion.button type="button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((value) => !value)} whileTap={reduceMotion ? undefined : { scale: 0.9 }} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl lg:hidden">{open ? <HiX /> : <HiMenu />}</motion.button>
          <motion.div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-blue-500" style={{ scaleX: reduceMotion ? scrollYProgress : progress }} />
        </div>
      </div>
      <AnimatePresence>
        {open && <motion.div initial={reduceMotion ? false : { opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: reduceMotion ? 0 : 0.25 }} className="container-px mt-3 lg:hidden">
          <nav className="glass flex flex-col gap-1 p-4" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-white/5 hover:text-ink">{link.label}</a>)}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2 justify-center">Let's Talk</a>
          </nav>
        </motion.div>}
      </AnimatePresence>
    </header>
  );
}
