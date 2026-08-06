export const wedding = {
  bride: {
    name: "Najmunnisa",
    parents: { father: "Mr. Sulaiman Musliyar", mother: "Mrs. —" },
    phone: "+910000000000",
  },
  groom: {
    name: "Salman Khan",
    parents: { father: "Mr. Saleem", mother: "Mrs. —" },
    phone: "+910000000001",
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
  mapQuery:
    "Othayoth Purayil Hall, Arambram - Elettil Rd, Kizhakkoth, Kacherimukku, Kerala 673572",
  music: {
    title: "Soft Nasheed",
    src: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=relaxing-145038.mp3",
  },
} as const;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  wedding.mapQuery,
)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

export const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  wedding.mapQuery,
)}`;