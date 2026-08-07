import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import floral from "@/assets/gold-floral.png";
import { Countdown } from "./Countdown";
import { wedding } from "@/lib/wedding-config";

export function Hero({ guest }: { guest: string | null }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  const date = new Date(wedding.date);
  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
  const dateLabel = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section ref={ref} id="home" className="veil-bg relative overflow-hidden">
      <div className="mx-auto max-w-3xl px-5 pb-20 pt-24 sm:px-8 lg:pt-28">
        <motion.div style={{ opacity: fade }} className="text-center">
          {guest ? (
            <p className="font-script text-2xl text-primary">Dear {guest},</p>
          ) : null}
          <p className="mt-2 text-[0.7rem] uppercase tracking-[0.45em] text-muted-foreground">
            Together with their families
          </p>
          <h1 className="mt-5 font-script text-5xl leading-[1.15] sm:text-7xl">
            <span className="gold-text">{wedding.groom.name}</span>
            <span className="mx-3 text-3xl text-primary sm:text-4xl">&amp;</span>
            <span className="gold-text">{wedding.bride.name}</span>
          </h1>
          <img
            src={floral}
            alt=""
            aria-hidden
            width={1200}
            height={600}
            className="mx-auto mt-2 w-56 opacity-80"
          />
          <p className="mt-4 font-display text-xl tracking-wide sm:text-2xl">
            {dayName}, {dateLabel}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {wedding.nikah.venue} &middot; {wedding.nikah.time}
          </p>
          <div className="mt-9 flex justify-center">
            <Countdown />
          </div>
        </motion.div>
      </div>
    </section>
  );
}