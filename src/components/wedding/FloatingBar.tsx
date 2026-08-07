import { useEffect, useRef, useState } from "react";
import { Copy, Moon, Music, Pause, Share2, Sun } from "lucide-react";
import { toast } from "sonner";
import { wedding } from "@/lib/wedding-config";

export function FloatingBar({ autoPlayMusic }: { autoPlayMusic: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (!autoPlayMusic || !audioRef.current) return;
    audioRef.current.volume = 0.35;
    audioRef.current
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }, [autoPlayMusic]);

  function toggleMusic() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.volume = 0.35;
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => toast.error("Music could not be played on this device."));
    }
  }

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  }

  async function share() {
    const url = window.location.href;
    const data = {
      title: `${wedding.bride.name} & ${wedding.groom.name} — Wedding Invitation`,
      text: "You are warmly invited to our wedding.",
      url,
    };
    if (navigator.share) {
      try {
        await navigator.share(data);
        return;
      } catch {
        /* dismissed */
      }
    }
    window.open(`https://wa.me/?text=${encodeURIComponent(`${data.text} ${url}`)}`, "_blank");
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Invitation link copied");
    } catch {
      toast.error("Could not copy the link");
    }
  }

  const btn =
    "glass-card grid size-11 place-items-center rounded-full transition-transform duration-300 hover:scale-110";

  return (
    <>
      <audio ref={audioRef} src={wedding.music.src} loop preload="none" />
      <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-2.5">
        <button onClick={toggleMusic} className={btn} aria-label={playing ? "Pause music" : "Play music"}>
          {playing ? <Pause className="size-4 text-primary" /> : <Music className="size-4 text-primary" />}
        </button>
        <button onClick={toggleTheme} className={btn} aria-label="Toggle dark mode">
          {dark ? <Sun className="size-4 text-primary" /> : <Moon className="size-4 text-primary" />}
        </button>
        <button onClick={share} className={btn} aria-label="Share invitation">
          <Share2 className="size-4 text-primary" />
        </button>
        <button onClick={copyLink} className={btn} aria-label="Copy invitation link">
          <Copy className="size-4 text-primary" />
        </button>
      </div>
    </>
  );
}