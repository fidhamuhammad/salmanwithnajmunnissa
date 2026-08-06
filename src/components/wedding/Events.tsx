import { CalendarPlus, Clock, MapPin, Shirt, Sparkles } from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";
import { wedding, mapLink } from "@/lib/wedding-config";

function googleCalendarLink(title: string, details: string, location: string, start: Date) {
  const end = new Date(start.getTime() + 4 * 3600000);
  const fmt = (d: Date) => d.toISOString().replace(/[-:]|\.\d{3}/g, "");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    details,
    location,
    dates: `${fmt(start)}/${fmt(end)}`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function icsHref(title: string, location: string, start: Date) {
  const end = new Date(start.getTime() + 4 * 3600000);
  const fmt = (d: Date) => d.toISOString().replace(/[-:]|\.\d{3}/g, "");
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    `SUMMARY:${title}`,
    `LOCATION:${location}`,
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\n");
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`;
}

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
                  {e.dressCode ? (
                    <li className="flex items-start gap-3">
                      <Shirt className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{e.dressCode}</span>
                    </li>
                  ) : null}
                </ul>
                <div className="mt-7 flex flex-wrap gap-2">
                  <a
                    href={googleCalendarLink(e.title, `${e.venue} — ${e.time}`, e.address, e.start)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-[1.03]"
                  >
                    <CalendarPlus className="size-3.5" /> Google
                  </a>
                  <a
                    href={icsHref(e.title, `${e.venue}, ${e.address}`, e.start)}
                    download={`${e.title.replace(/\s+/g, "-").toLowerCase()}.ics`}
                    className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] transition-colors hover:bg-accent"
                  >
                    <CalendarPlus className="size-3.5" /> Apple / Outlook
                  </a>
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