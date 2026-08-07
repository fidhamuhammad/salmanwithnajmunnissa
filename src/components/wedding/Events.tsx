import { Clock, MapPin, Sparkles } from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";
import { wedding, mapLink } from "@/lib/wedding-config";

const events = [{ ...wedding.nikah, start: new Date(wedding.date) }];

export function Events() {
  return (
    <section id="events" className="relative px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionTitle overline="Save the moment" title="Nikah Ceremony" />
        <div className="mx-auto grid max-w-2xl gap-6">
          {events.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.12}>
              <div className="glass-card flex h-full flex-col p-8">
                <Sparkles className="size-6 text-primary" />
                <h3 className="mt-4 font-display text-2xl">{e.title}</h3>
                <div className="gold-rule my-5 max-w-[5rem]" />
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>
                      {e.date}
                      <br />
                      <span className="text-muted-foreground">{e.time}</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>
                      {e.venue}
                      <br />
                      <span className="text-muted-foreground">{e.address}</span>
                    </span>
                  </li>
                </ul>
                <div className="mt-7 flex flex-wrap gap-2">
                  <a
                    href={mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] transition-colors hover:bg-accent"
                  >
                    <MapPin className="size-3.5" /> Directions
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