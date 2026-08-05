import { useState } from "react";
import confetti from "canvas-confetti";
import { toast } from "sonner";
import { z } from "zod";
import { Heart } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Reveal, SectionTitle } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  phone: z.string().trim().min(6, "Please enter a valid phone number").max(30),
  guests: z.number().int().min(1).max(20),
  attendance: z.enum(["attending", "not_attending", "maybe"]),
  message: z.string().trim().max(500).optional(),
});

const options = [
  { value: "attending", label: "Attending" },
  { value: "not_attending", label: "Not Attending" },
  { value: "maybe", label: "Maybe" },
] as const;

export function Rsvp({ guest }: { guest: string | null }) {
  const [name, setName] = useState(guest ?? "");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState(1);
  const [attendance, setAttendance] = useState<string>("attending");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse({ name, phone, guests, attendance, message });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("rsvps").insert({
      name: parsed.data.name,
      phone: parsed.data.phone,
      guests: parsed.data.guests,
      attendance: parsed.data.attendance,
      message: parsed.data.message || null,
    });
    setLoading(false);
    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }
    setDone(true);
    toast.success("Thank you! Your response has been received.");
    confetti({
      particleCount: 140,
      spread: 80,
      origin: { y: 0.7 },
      colors: ["#D9B36C", "#F3E7CE", "#FFFFFF", "#C79A4B"],
    });
  }

  const field =
    "w-full rounded-full border border-border bg-card/70 px-5 py-3 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-ring";

  return (
    <section id="rsvp" className="relative px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-2xl">
        <SectionTitle overline="Kindly respond" title="RSVP" />
        <Reveal>
          <div className="glass-card p-7 sm:p-10">
            {done ? (
              <div className="py-10 text-center">
                <Heart className="mx-auto size-8 fill-primary text-primary" />
                <p className="mt-5 font-display text-2xl">Thank you, {name.split(" ")[0]}!</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your response has been sent to the couple with love.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label htmlFor="rsvp-name" className="mb-2 block text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Full Name
                  </label>
                  <input id="rsvp-name" className={field} value={name} maxLength={100} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="rsvp-phone" className="mb-2 block text-xs uppercase tracking-[0.25em] text-muted-foreground">
                      Phone Number
                    </label>
                    <input id="rsvp-phone" inputMode="tel" className={field} value={phone} maxLength={30} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="rsvp-guests" className="mb-2 block text-xs uppercase tracking-[0.25em] text-muted-foreground">
                      Number of Guests
                    </label>
                    <input
                      id="rsvp-guests"
                      type="number"
                      min={1}
                      max={20}
                      className={field}
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                    />
                  </div>
                </div>
                <fieldset>
                  <legend className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Will you join us?
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {options.map((o) => (
                      <label
                        key={o.value}
                        className={`cursor-pointer rounded-full border px-5 py-2.5 text-xs uppercase tracking-[0.2em] transition ${
                          attendance === o.value
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border hover:bg-accent"
                        }`}
                      >
                        <input
                          type="radio"
                          name="attendance"
                          value={o.value}
                          checked={attendance === o.value}
                          onChange={() => setAttendance(o.value)}
                          className="sr-only"
                        />
                        {o.label}
                      </label>
                    ))}
                  </div>
                </fieldset>
                <div>
                  <label htmlFor="rsvp-message" className="mb-2 block text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Message (optional)
                  </label>
                  <textarea
                    id="rsvp-message"
                    rows={3}
                    maxLength={500}
                    className="w-full rounded-2xl border border-border bg-card/70 px-5 py-3 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-ring"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-primary px-8 py-4 text-xs uppercase tracking-[0.3em] text-primary-foreground transition-transform hover:scale-[1.01] disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Send Response"}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}