export const wedding = {
  bride: {
    name: "Najmunnisa",
    parents: { father: "Mr. Sulaiman Musliyar" },
  },
  groom: {
    name: "Salman Khan",
    parents: { father: "Mr. Saleem" },
  },
  /** Wedding date & time (local). */
  date: "2026-08-23T11:00:00",
  nikah: {
    title: "Nikah Ceremony",
    date: "Sunday, 23 August 2026",
    time: "11:00 AM – 3:00 PM",
    venue: "Othayoth Purayil Hall (9V2W+J96)",
    address: "Arambram - Elettil Rd, Kizhakkoth, Kacherimukku, Kerala 673572",
    dressCode: "Ivory, champagne & gold — formal traditional",
  },
  mapQuery: "Othayoth Purayil Hall, Arambram - Elettil Rd, Kizhakkoth, Kacherimukku, Kerala 673572",
  music: {
    title: "Al Jabiri (Slowed + Reverb) — Muhammad Al Muqit",
    src: "/audio/nasheed.mp3",
  },
} as const;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  wedding.mapQuery,
)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

export const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  wedding.mapQuery,
)}`;
