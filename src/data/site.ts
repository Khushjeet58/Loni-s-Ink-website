export const navItems = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/booking", label: "Booking" },
  { href: "/aftercare", label: "Aftercare" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const galleryCategories = [
  "All",
  "Custom",
  "Fine Line",
  "Ornamental",
  "Memorial",
  "Anime",
  "Color",
  "Piercing",
  "PMU",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const galleryItems = [
  {
    title: "Custom Story Piece",
    category: "Custom",
    image: "/gallery/blackwork-forearm.png",
    artist: "Loni",
    size: "Custom tattoo brief",
  },
  {
    title: "Sunflower Fine Line",
    category: "Fine Line",
    image: "/gallery/fineline-botanical.png",
    artist: "Loni",
    size: "Minimal floral work",
  },
  {
    title: "Ornamental Red Black",
    category: "Ornamental",
    image: "/gallery/neo-traditional-color.png",
    artist: "Loni",
    size: "Decorative custom piece",
  },
  {
    title: "Blue Negative Band",
    category: "Color",
    image: "/gallery/neo-traditional-color.png",
    artist: "Loni",
    size: "Band tattoo concept",
  },
  {
    title: "Memorial Pet Tattoo",
    category: "Memorial",
    image: "/gallery/blackwork-forearm.png",
    artist: "Loni",
    size: "Personal memorial work",
  },
  {
    title: "Bojack Inspired",
    category: "Anime",
    image: "/gallery/fineline-botanical.png",
    artist: "Loni",
    size: "Illustrative custom idea",
  },
  {
    title: "Belly Piercing",
    category: "Piercing",
    image: "/gallery/studio-hero.png",
    artist: "Loni's Ink",
    size: "Hygienic piercing service",
  },
  {
    title: "Permanent Makeup",
    category: "PMU",
    image: "/gallery/studio-hero.png",
    artist: "Loni's Ink",
    size: "PMU studio service",
  },
] satisfies {
  title: string;
  category: Exclude<GalleryCategory, "All">;
  image: string;
  artist: string;
  size: string;
}[];

export const loniProfile = {
  name: "Loni",
  studio: "Loni's Ink",
  role: "Female tattoo artist and private studio owner",
  location: "C Road, Jodhpur",
  instagram: "https://www.instagram.com/lonis.ink/",
  handle: "@lonis.ink",
  tagline: "Flash and custom tattoos in a private Jodhpur studio.",
  books: "Books open",
  specialties: ["Custom tattoos", "Flash tattoos", "Fine line", "Ornamental", "Memorial tattoos", "Piercing", "PMU"],
};

export const reviews = [
  {
    name: "Public profile signal",
    rating: 0,
    text: "The profile repeatedly frames work around custom ideas, trust, and appointment booking.",
    service: "Instagram profile scan",
  },
  {
    name: "Booking signal",
    rating: 0,
    text: "Recent posts point visitors to DM for appointments, so this website now turns that intent into a cleaner booking form.",
    service: "Instagram caption pattern",
  },
  {
    name: "Work signal",
    rating: 0,
    text: "Visible public work topics include custom tattoos, fine-line florals, ornamental designs, memorial pieces, band tattoos, piercing, and PMU.",
    service: "Indexed public posts",
  },
];

export const faqItems = [
  {
    question: "Does getting a tattoo hurt?",
    answer:
      "Discomfort depends on placement, size, and your pain tolerance. During consultation we help you choose a placement and session plan that is realistic for your body.",
  },
  {
    question: "How is pricing decided?",
    answer:
      "Pricing is based on size, detail, placement, artist, color, and session time. Booking requests receive a transparent estimate before deposit.",
  },
  {
    question: "Is a deposit required?",
    answer:
      "Yes. Deposits reserve the artist's time and are applied to your final session price. Deposit terms are shared before payment.",
  },
  {
    question: "How long does healing take?",
    answer:
      "Most tattoos settle in two to four weeks, with deeper skin recovery continuing after that. Follow the aftercare plan and avoid swimming, soaking, and harsh sun.",
  },
  {
    question: "Do you offer touch ups?",
    answer:
      "Touch ups are reviewed after the tattoo is fully healed. Normal wear, aftercare issues, and major design changes are handled case by case.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Appointments can be moved with advance notice. Same-day cancellations and no-shows may lose the deposit because the artist's slot cannot be refilled.",
  },
];

export const aftercareSteps = [
  {
    title: "First 24 hours",
    body: "Keep the wrap on for the recommended window, wash hands before touching, and clean gently with mild soap.",
  },
  {
    title: "Days 2 to 7",
    body: "Apply a thin layer of recommended balm, avoid friction, and let flakes release naturally.",
  },
  {
    title: "Weeks 2 to 4",
    body: "Moisturize lightly, avoid direct sun and soaking, and send a healed photo for review if needed.",
  },
];

export const stats = [
  { value: "Jodhpur", label: "private studio location" },
  { value: "1:1", label: "directly with Loni" },
  { value: "Open", label: "books for custom tattoos" },
  { value: "PMU", label: "tattoo, piercing and makeup services" },
];

export const policies = {
  pricing:
    "Quotes are personalized after reviewing size, placement, detail, color, and Loni's availability.",
  preparation:
    "Sleep well, eat before your appointment, avoid alcohol the day before, and wear clothing that exposes the tattoo area comfortably.",
  aftercare:
    "Wash gently, moisturize lightly, avoid soaking and direct sun, and never pick peeling skin.",
  booking:
    "Submit the booking form with references, size, placement, budget, and preferred dates. The studio replies with availability and deposit details.",
};
