import { Flower2 } from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";
import { wedding } from "@/lib/wedding-config";

const families = [
  { label: "Groom's Parents", people: wedding.groom.parents, name: wedding.groom.name },
  { label: "Bride's Parents", people: wedding.bride.parents, name: wedding.bride.name },
];

export function Parents() {
  return (
    <section id="families" className="relative px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionTitle overline="With the blessings of" title="Our Beloved Families" />
        <div className="grid gap-6 sm:grid-cols-2">
          {families.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.12}>
              <div className="glass-card h-full p-8 text-center transition-transform duration-500 hover:-translate-y-1">
                <Flower2 className="mx-auto size-7 text-primary" />
                <p className="mt-4 text-[0.65rem] uppercase tracking-[0.35em] text-muted-foreground">
                  {f.label}
                </p>
                <p className="mt-4 font-display text-xl">{f.people.father}</p>
                <div className="gold-rule mx-auto mt-5 max-w-[6rem]" />
                <p className="mt-4 font-script text-lg text-primary">{f.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}