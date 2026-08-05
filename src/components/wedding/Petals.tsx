import { motion } from "motion/react";
import { useMemo } from "react";

/** Soft floating gold petals / particles across the page. */
export function Petals({ count = 14 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: (i * 97) % 100,
        size: 6 + ((i * 13) % 12),
        duration: 14 + ((i * 7) % 14),
        delay: (i * 1.7) % 12,
        drift: ((i % 5) - 2) * 30,
      })),
    [count],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {petals.map((p) => (
        <motion.span
          key={p.id}
          className="absolute top-[-8%] rounded-full bg-gold/35 blur-[1px]"
          style={{ left: `${p.left}%`, width: p.size, height: p.size * 0.7 }}
          initial={{ y: "-10vh", opacity: 0, rotate: 0 }}
          animate={{
            y: "115vh",
            x: [0, p.drift, -p.drift, 0],
            opacity: [0, 0.9, 0.9, 0],
            rotate: 360,
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}