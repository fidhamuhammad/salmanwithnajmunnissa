import { Reveal, SectionTitle } from "./Reveal";
import { wedding } from "@/lib/wedding-config";

export function Story() {
  return (
    <section id="story" className="relative px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionTitle overline="How it began" title="Our Story" />
        <div className="relative pl-8 sm:pl-0">
          <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-primary/30 sm:left-1/2" />
          {wedding.story.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div
                className={`relative mb-8 sm:w-1/2 ${
                  i % 2 === 0 ? "sm:pr-10 sm:text-right" : "sm:ml-auto sm:pl-10"
                }`}
              >
                <span
                  className={`absolute -left-8 top-3 size-3.5 rounded-full border-2 border-primary bg-background sm:left-auto ${
                    i % 2 === 0 ? "sm:-right-[7px]" : "sm:-left-[7px]"
                  }`}
                />
                <div className="glass-card p-6 transition-transform duration-500 hover:-translate-y-1">
                  <p className="text-[0.65rem] uppercase tracking-[0.35em] text-primary">{s.year}</p>
                  <h3 className="mt-2 font-display text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}