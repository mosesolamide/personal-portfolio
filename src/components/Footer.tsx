import { FiArrowUp, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { FaDribbble } from "react-icons/fa";
import { profile } from "../data/content";

const SOCIAL_ICONS: Record<string, React.ElementType> = {
  github: FiGithub,
  linkedin: FiLinkedin,
  twitter: FiTwitter,
  dribbble: FaDribbble,
};

const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-px flex flex-col items-center gap-8 py-12 sm:flex-row sm:justify-between">
        <a href="#home" className="flex items-center gap-2 text-base font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 font-display text-sm font-bold text-white">
            {profile.initials}
          </span>
          {profile.name}
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
          {FOOTER_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {profile.socials.map((social) => {
            const Icon = SOCIAL_ICONS[social.icon];
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 transition-all hover:-translate-y-1 hover:border-white/30 hover:text-blue-400"
              >
                <Icon />
              </a>
            );
          })}
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 transition-all hover:-translate-y-1 hover:border-white/30 hover:text-blue-400"
          >
            <FiArrowUp />
          </a>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-center text-xs text-muted-2">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
