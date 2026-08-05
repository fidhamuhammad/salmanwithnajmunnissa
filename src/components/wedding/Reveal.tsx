import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({
  overline,
  title,
}: {
  overline?: string;
  title: string;
}) {
  return (
    <Reveal className="mx-auto mb-10 max-w-2xl text-center">
      {overline ? (
        <p className="text-[0.7rem] uppercase tracking-[0.45em] text-muted-foreground">
          {overline}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-light tracking-wide sm:text-4xl">
        <span className="gold-text">{title}</span>
      </h2>
      <div className="gold-rule mx-auto mt-5 max-w-[10rem]" />
    </Reveal>
  );
}