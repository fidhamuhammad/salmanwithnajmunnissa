import floral from "@/assets/gold-floral.png";
import { Reveal } from "./Reveal";

export function Blessings() {
  return (
    <section id="blessings" className="veil-bg relative px-5 py-24 sm:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <img src={floral} alt="" aria-hidden width={1200} height={600} loading="lazy" className="mx-auto w-48 opacity-80" />
        <p className="mt-4 font-display text-2xl leading-relaxed sm:text-3xl">
          &ldquo;With the blessings of Allah and our beloved parents, we begin a new
          chapter — and your duas make it complete.&rdquo;
        </p>
        <div className="gold-rule mx-auto mt-8 max-w-[10rem]" />
      </Reveal>
    </section>
  );
}