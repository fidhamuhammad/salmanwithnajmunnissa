import { MessageCircle, Phone } from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";
import { wedding } from "@/lib/wedding-config";

const families = [
  { label: "Bride's Family", name: wedding.bride.parents.father, phone: wedding.bride.phone },
  { label: "Groom's Family", name: wedding.groom.parents.father, phone: wedding.groom.phone },
];

export function Contact() {
  return (
    <section id="contact" className="relative px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionTitle overline="We are here to help" title="Contact Us" />
        <div className="grid gap-6 sm:grid-cols-2">
          {families.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.1}>
              <div className="glass-card p-7 text-center">
                <p className="text-[0.65rem] uppercase tracking-[0.35em] text-muted-foreground">
                  {f.label}
                </p>
                <p className="mt-3 font-display text-xl">{f.name}</p>
                <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
                  <a
                    href={`tel:${f.phone}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-[1.03]"
                  >
                    <Phone className="size-3.5" /> Call
                  </a>
                  <a
                    href={`https://wa.me/${f.phone.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 px-5 py-2.5 text-[0.65rem] uppercase tracking-[0.2em] transition-colors hover:bg-accent"
                  >
                    <MessageCircle className="size-3.5" /> WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}