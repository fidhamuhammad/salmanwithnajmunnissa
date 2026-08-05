import { MapPin } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { Reveal, SectionTitle } from "./Reveal";
import { mapEmbedUrl, mapLink, wedding } from "@/lib/wedding-config";

export function MapSection() {
  return (
    <section id="location" className="relative px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionTitle overline="Find your way" title="The Venue" />
        <Reveal>
          <div className="glass-card overflow-hidden p-3">
            <iframe
              title="Wedding venue map"
              src={mapEmbedUrl}
              loading="lazy"
              className="h-[20rem] w-full rounded-[1rem] border-0 sm:h-[24rem]"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <a
              href={mapLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-xs uppercase tracking-[0.3em] text-primary-foreground transition-transform hover:scale-[1.02] sm:w-auto"
            >
              <MapPin className="size-4" /> Open in Google Maps
            </a>
            <div className="glass-card flex items-center gap-4 p-4">
              <div className="rounded-md bg-card p-2">
                <QRCodeSVG value={mapLink} size={72} bgColor="transparent" fgColor="currentColor" />
              </div>
              <div className="text-xs text-muted-foreground">
                Scan for directions
                <br />
                <span className="text-foreground">{wedding.nikah.venue}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}