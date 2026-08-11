import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { Splash } from "@/components/wedding/Splash";
import { Petals } from "@/components/wedding/Petals";
import { Hero } from "@/components/wedding/Hero";
import { Parents } from "@/components/wedding/Parents";
import { Events } from "@/components/wedding/Events";
import { MapSection } from "@/components/wedding/MapSection";
import { Blessings } from "@/components/wedding/Blessings";
import { FooterSection } from "@/components/wedding/FooterSection";
import { FloatingBar } from "@/components/wedding/FloatingBar";
import { wedding } from "@/lib/wedding-config";

const title = `${wedding.groom.name} & ${wedding.bride.name} — Nikah Invitation`;
const description = `Together with their families, ${wedding.groom.name} and ${wedding.bride.name} invite you to their Nikah on Sunday, 23 August 2026 at ${wedding.nikah.venue}. Venue map and directions.`;

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
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [musicPlaying, setMusicPlaying] = useState(false);

  function handleEnter(withMusic: boolean) {
    setSplashOpen(false);
    if (!withMusic) return;

    // Must be called synchronously within this click-originated handler
    // (no awaits before it) so iOS Safari treats it as a user gesture.
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.35;
    audio
      .play()
      .then(() => setMusicPlaying(true))
      .catch(() => {
        setMusicPlaying(false);
        toast.error("Music could not be played on this device.");
      });
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Petals />
      <Splash open={splashOpen} guest={guestName} onEnter={handleEnter} />
      <div className="relative z-10">
        <Hero guest={guestName} />
        <Parents />
        <Events />
        <MapSection />
        <Blessings />
        <FooterSection />
      </div>
      <FloatingBar audioRef={audioRef} playing={musicPlaying} onPlayingChange={setMusicPlaying} />
    </main>
  );
}
