import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import hero from "@/assets/hero-couple.jpg";
import { Reveal, SectionTitle } from "./Reveal";

const photos = [
  { src: g1, alt: "The couple walking hand in hand through a sunlit field" },
  { src: g2, alt: "Engagement ring resting on ivory roses" },
  { src: hero, alt: "The couple in ivory and gold wedding attire" },
  { src: g3, alt: "Elegant ivory and gold wedding table setting" },
  { src: g4, alt: "The couple silhouetted under warm string lights" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionTitle overline="Moments we treasure" title="Our Gallery" />
        <div className="columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
          {photos.map((p, i) => (
            <Reveal key={p.alt} delay={(i % 3) * 0.08}>
              <button
                onClick={() => setActive(i)}
                className="group block w-full overflow-hidden rounded-2xl border border-border"
                aria-label={`Enlarge photo: ${p.alt}`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="w-full transition-transform duration-700 group-hover:scale-105"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null ? (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/80 p-5 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.img
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              src={photos[active]!.src}
              alt={photos[active]!.alt}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain"
            />
            <button
              onClick={() => setActive(null)}
              aria-label="Close photo"
              className="absolute right-5 top-5 rounded-full border border-border bg-card p-2"
            >
              <X className="size-5" />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}