export const wedding = {
  bride: {
    name: "Aaliyah",
    parents: { father: "Mr. Imran Rahman", mother: "Mrs. Sofia Rahman" },
    phone: "+15550001111",
  },
  groom: {
    name: "Zayn",
    parents: { father: "Mr. Kamal Hussain", mother: "Mrs. Amina Hussain" },
    phone: "+15550002222",
  },
  /** Wedding date & time (local). */
  date: "2026-12-12T16:00:00",
  nikah: {
    title: "Nikah Ceremony",
    date: "Saturday, 12 December 2026",
    time: "4:00 PM",
    venue: "The Grand Rosewood Hall",
    address: "128 Marigold Avenue, Springfield",
    dressCode: "Ivory, champagne & gold — formal traditional",
  },
  reception: {
    title: "Walima Reception",
    date: "Sunday, 13 December 2026",
    time: "7:00 PM",
    venue: "Rosewood Garden Terrace",
    address: "128 Marigold Avenue, Springfield",
    dressCode: "Elegant formal",
  },
  mapQuery: "The Grand Rosewood Hall, 128 Marigold Avenue, Springfield",
  music: {
    title: "Soft Instrumental",
    src: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=relaxing-145038.mp3",
  },
  story: [
    {
      year: "2022",
      title: "How We Met",
      text: "A quiet evening, a shared table at a family gathering, and a conversation that never really ended.",
    },
    {
      year: "2024",
      title: "The Engagement",
      text: "Under warm lanterns and with both families beside us, we promised the beginning of forever.",
    },
    {
      year: "2026",
      title: "Our Wedding",
      text: "With the blessings of Allah and our parents, we begin our life together — and we want you there.",
    },
  ],
} as const;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  wedding.mapQuery,
)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

export const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  wedding.mapQuery,
)}`;