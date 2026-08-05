import { Heart } from "lucide-react";
import { Reveal } from "./Reveal";
import { wedding } from "@/lib/wedding-config";

export function FooterSection() {
  return (
    <footer className="relative px-5 pb-32 pt-14 text-center sm:px-8">
      <Reveal>
        <Heart className="mx-auto size-5 fill-primary text-primary" />
        <p className="mt-5 font-script text-3xl">
          <span className="gold-text">
            {wedding.bride.name} &amp; {wedding.groom.name}
          </span>
        </p>
        <p className="mt-4 font-display text-lg text-muted-foreground">
          Your presence is the greatest gift.
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Thank you for celebrating with us
        </p>
      </Reveal>
    </footer>
  );
}