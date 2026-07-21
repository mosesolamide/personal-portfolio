import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { stats } from "../data/content";
import { useCountUp } from "../hooks/useCountUp";

function StatCard({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { ref, value: count } = useCountUp(value);

  return (
    <Reveal delay={delay}>
      <div ref={ref} className="glass glass-hover rounded-2xl p-6 text-center sm:p-8">
        <p className="font-display text-4xl font-bold sm:text-5xl">
          <span className="accent-text">{count}</span>
          <span className="accent-text">{suffix}</span>
        </p>
        <p className="mt-2 text-sm text-muted">{label}</p>
      </div>
    </Reveal>
  );
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="About Me"
          title="Designing and building with"
          highlight="purpose."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <div className="space-y-6 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                I'm a frontend developer passionate about creating responsive, high-performance
                websites that combine clean code with beautiful design.
              </p>
              <p>
                I help businesses and brands establish a strong online presence through modern web
                experiences, from sleek marketing sites to interactive product dashboards.
              </p>
              <p>
                Whether it's a custom React application, a polished WordPress build, or a brand
                new UI design system, I focus on the details that make products feel premium,
                fast, and effortless to use.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {["Clean Code", "Pixel-Perfect UI", "Performance First", "SEO Friendly"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-muted"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
