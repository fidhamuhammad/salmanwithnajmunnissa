import { AnimatePresence, motion } from "motion/react";
import { Heart } from "lucide-react";
import { Countdown } from "./Countdown";
import { wedding } from "@/lib/wedding-config";

export function Splash({
  open,
  guest,
  onEnter,
}: {
  open: boolean;
  guest: string | null;
  onEnter: (withMusic: boolean) => void;
}) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="splash"
          className="veil-bg fixed inset-0 z-50 flex items-center justify-center overflow-hidden px-6"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-full max-w-xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="gold-text mb-6 font-display text-xl sm:text-2xl"
              dir="rtl"
              lang="ar"
            >
              بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-[0.7rem] uppercase tracking-[0.45em] text-muted-foreground"
            >
              Together with their families
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.6 }}
              className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-4xl font-light sm:text-6xl"
            >
              <span className="gold-text font-script">{wedding.groom.name}</span>
              <Heart className="size-5 shrink-0 fill-primary text-primary sm:size-7" />
              <span className="gold-text font-script">{wedding.bride.name}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="gold-rule mx-auto mt-7 max-w-[14rem]"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="mt-6 font-display text-lg tracking-wide text-muted-foreground sm:text-xl"
            >
              We invite you to celebrate our Nikah.
            </motion.p>

            {guest ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="mt-3 font-script text-2xl text-primary"
              >
                Dear {guest}, you are warmly invited.
              </motion.p>
            ) : null}

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.7 }}
              className="mt-10"
            >
              <Countdown />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
              className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <button
                onClick={() => onEnter(true)}
                className="w-full rounded-full bg-primary px-8 py-3 text-xs uppercase tracking-[0.3em] text-primary-foreground transition-transform duration-300 hover:scale-[1.03] sm:w-auto"
              >
                Open with music
              </button>
              <button
                onClick={() => onEnter(false)}
                className="w-full rounded-full border border-primary/40 px-8 py-3 text-xs uppercase tracking-[0.3em] text-foreground transition-colors hover:bg-accent sm:w-auto"
              >
                Open in silence
              </button>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}