import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiMail, FiTwitter } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { profile } from "../data/content";

const SOCIAL_ICONS: Record<string, React.ElementType> = { github: FiGithub, twitter: FiTwitter };
const whatsappDigits = `234${profile.whatsapp.replace(/^0/, "")}`;
const contactCards = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: FiMail },
  { label: "WhatsApp", value: profile.whatsapp, href: `https://wa.me/${whatsappDigits}`, icon: FaWhatsapp },
];

export default function Contact() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="contact" className="section">
      <div className="container-px">
        <SectionHeading eyebrow="Get In Touch" title="Let's build something" highlight="useful together." description="Need a frontend developer for a website, product interface, WordPress build, or ongoing remote collaboration? Tell me what you are working on." />
        <div className="mx-auto mt-16 grid max-w-3xl gap-6 sm:grid-cols-2">{contactCards.map((card, index) => <Reveal key={card.label} delay={index * 0.1}><motion.a href={card.href} target="_blank" rel="noreferrer" whileHover={reduceMotion ? undefined : { y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 22 }} className="glass glass-hover group flex h-full flex-col items-center gap-4 rounded-2xl p-8 text-center"><span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-2xl text-blue-400"><card.icon /></span><div><p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">{card.label}</p><p className="mt-2 break-all text-base font-semibold sm:text-lg">{card.value}</p></div><span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-blue-400 opacity-70 transition-opacity group-hover:opacity-100">Reach out <FiArrowUpRight /></span></motion.a></Reveal>)}</div>
        <Reveal delay={0.2}><div className="glass mx-auto mt-6 flex max-w-3xl flex-col items-center gap-4 rounded-2xl p-8 text-center sm:flex-row sm:justify-between sm:text-left"><div><p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">Find me online</p><p className="mt-2 text-lg font-semibold">See my code and follow my work</p></div><div className="flex gap-3">{profile.socials.map((social) => { const Icon = SOCIAL_ICONS[social.icon]; return <motion.a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} whileHover={reduceMotion ? undefined : { y: -4 }} className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-lg transition-colors hover:border-white/30 hover:text-blue-400"><Icon /></motion.a>; })}</div></div></Reveal>
      </div>
    </section>
  );
}
