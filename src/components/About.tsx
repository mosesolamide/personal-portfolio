import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { stats } from "../data/content";
import { useCountUp } from "../hooks/useCountUp";

function StatCard({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { ref, value: count } = useCountUp(value);
  return <Reveal delay={delay}><div ref={ref} className="glass glass-hover rounded-2xl p-6 text-center sm:p-8"><p className="font-display text-4xl font-bold sm:text-5xl"><span className="accent-text">{count}{suffix}</span></p><p className="mt-2 text-sm text-muted">{label}</p></div></Reveal>;
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-px">
        <SectionHeading eyebrow="About Me" title="Building the web with" highlight="purpose." description="I combine frontend engineering, visual judgment, and business thinking to create websites people can understand and enjoy using." />
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <div className="space-y-6 text-base leading-relaxed text-muted sm:text-lg">
              <p>I'm a frontend developer based in Lagos, Nigeria, with hands-on experience building responsive products for businesses and organizations.</p>
              <p>I work with React, TypeScript, Tailwind CSS, WordPress, and modern design tools to take projects from an early idea to a dependable, polished launch.</p>
              <p>My focus is simple: clean code, strong mobile experiences, fast performance, accessible interfaces, and results that support the client's real goals.</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">{["Clean Code", "Responsive UI", "Performance First", "SEO Friendly"].map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-muted">{tag}</span>)}</div>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 sm:gap-6">{stats.map((stat, index) => <StatCard key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} delay={index * 0.1} />)}</div>
        </div>
      </div>
    </section>
  );
}
