import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Splash } from "@/components/wedding/Splash";
import { Petals } from "@/components/wedding/Petals";
import { Hero } from "@/components/wedding/Hero";
import { Parents } from "@/components/wedding/Parents";
import { Events } from "@/components/wedding/Events";
import { MapSection } from "@/components/wedding/MapSection";
import { Rsvp } from "@/components/wedding/Rsvp";
import { Blessings } from "@/components/wedding/Blessings";
import { Contact } from "@/components/wedding/Contact";
import { FooterSection } from "@/components/wedding/FooterSection";
import { FloatingBar } from "@/components/wedding/FloatingBar";
import { wedding } from "@/lib/wedding-config";

const title = `${wedding.bride.name} & ${wedding.groom.name} — Wedding Invitation`;
const description = `Together with their families, ${wedding.bride.name} and ${wedding.groom.name} invite you to celebrate their wedding. Ceremony, reception, venue map and RSVP.`;

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>) => ({
    guest: typeof search["guest"] === "string" ? search["guest"].slice(0, 40) : undefined,
  }),
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Invitation,
});

function Invitation() {
  const { guest } = Route.useSearch();
  const guestName = guest ? guest.replace(/[^\p{L}\p{N}\s'.-]/gu, "").trim() || null : null;
  const [splashOpen, setSplashOpen] = useState(true);
  const [music, setMusic] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Petals />
      <Splash
        open={splashOpen}
        guest={guestName}
        onEnter={(withMusic) => {
          setMusic(withMusic);
          setSplashOpen(false);
        }}
      />
      <div className="relative z-10">
        <Hero guest={guestName} />
        <Parents />
        <Events />
        <MapSection />
        <Rsvp guest={guestName} />
        <Blessings />
        <Contact />
        <FooterSection />
      </div>
      <FloatingBar autoPlayMusic={music} />
    </main>
  );
}
