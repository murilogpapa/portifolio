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
  {
    id: "github" as const,
    label: "GitHub",
    href: "https://github.com/murilogpapa",
    display: "GitHub",
  },
  {
    id: "linkedin" as const,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/murilogiampiccolopapa/",
    display: "LinkedIn",
  },
  {
    id: "whatsapp" as const,
    label: "WhatsApp",
    href: "https://wa.me/5511944255805",
    display: "55 11944255805",
  },
  {
    id: "discord" as const,
    label: "Discord",
    href: null,
    display: "Muc",
  },
];

export type SocialId = (typeof socials)[number]["id"];
