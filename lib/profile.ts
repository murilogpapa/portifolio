export const profile = {
  firstName: "Murilo",
  lastName: "Giampiccolo Papa",
  email: "murilopapag@gmail.com",
  emailHref: "mailto:murilopapag@gmail.com",
  location: "São Paulo - Brasil",
  phone: "+55 11 94425-5805",
  phoneHref: "tel:+5511944255805",
} as const;

export const socials = [
  { id: "github" as const, label: "GitHub", href: "#" }, // TODO: URL real
  { id: "linkedin" as const, label: "LinkedIn", href: "#" }, // TODO: URL real
  { id: "instagram" as const, label: "Instagram", href: "#" }, // TODO: URL real
  { id: "discord" as const, label: "Discord", href: "#" }, // TODO: URL real
];

export type SocialId = (typeof socials)[number]["id"];
