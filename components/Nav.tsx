"use client";

import {
  Briefcase,
  GraduationCap,
  MessageCircle,
  User,
  type LucideIcon,
} from "lucide-react";

export type SectionId = "sobre" | "aprendizado" | "portfolio" | "contato";

const desktopItems: { id: SectionId; label: string }[] = [
  { id: "sobre", label: "Sobre" },
  { id: "aprendizado", label: "Aprendizado" },
  { id: "portfolio", label: "Portfólio" },
  { id: "contato", label: "Contato" },
];

const mobileItems: { id: SectionId; label: string; icon: LucideIcon }[] = [
  { id: "sobre", label: "Sobre", icon: User },
  { id: "aprendizado", label: "Aprendizado", icon: GraduationCap },
  { id: "portfolio", label: "Portfólio", icon: Briefcase },
  { id: "contato", label: "Contato", icon: MessageCircle },
];

type NavProps = {
  variant: "desktop" | "mobile";
  section: SectionId;
  onChange: (section: SectionId) => void;
};

export function Nav({ variant, section, onChange }: NavProps) {
  if (variant === "mobile") {
    return (
      <nav aria-label="Seções" className="rounded-[24px] bg-card px-5 py-4">
        <ul className="grid grid-cols-4 items-center gap-1">
          {mobileItems.map((item) => {
            const active = item.id === section;
            const Icon = item.icon;
            return (
              <li key={item.id} className="flex justify-center">
                <button
                  type="button"
                  onClick={() => onChange(item.id)}
                  aria-label={item.label}
                  aria-current={active ? "page" : undefined}
                  data-nav={item.id}
                  suppressHydrationWarning
                  className="nav-link flex h-11 w-11 items-center justify-center rounded-xl text-[#8d8d8d] transition-colors hover:text-white"
                >
                  <Icon className="size-6" strokeWidth={1.75} aria-hidden="true" />
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  return (
    <nav
      aria-label="Seções"
      className="rounded-bl-[24px] bg-nav px-8 py-[18px]"
    >
      <ul className="flex items-center gap-8">
        {desktopItems.map((item) => {
          const active = item.id === section;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onChange(item.id)}
                aria-current={active ? "page" : undefined}
                data-nav={item.id}
                suppressHydrationWarning
                className="nav-link text-[15px] font-medium tracking-tight text-[#c8c8c8] transition-colors hover:text-white"
              >
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
