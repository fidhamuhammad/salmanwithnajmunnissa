import { useEffect, useState } from "react";
import { wedding } from "@/lib/wedding-config";

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor(ms / 3600000) % 24,
    minutes: Math.floor(ms / 60000) % 60,
    seconds: Math.floor(ms / 1000) % 60,
  };
}

export function Countdown({ compact = false }: { compact?: boolean }) {
  const target = new Date(wedding.date).getTime();
  const [time, setTime] = useState(() => diff(target));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setTime(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div className={compact ? "flex gap-2" : "flex flex-wrap justify-center gap-3 sm:gap-4"}>
      {units.map((u) => (
        <div
          key={u.label}
          className="glass-card min-w-[4.5rem] px-3 py-3 text-center sm:min-w-[5.5rem] sm:px-5 sm:py-4"
        >
          <div className="font-display text-2xl font-light tabular-nums sm:text-4xl">
            {mounted ? String(u.value).padStart(2, "0") : "--"}
          </div>
          <div className="mt-1 text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground">
            {u.label}
          </div>
        </div>
      ))}
    </div>
  );
}