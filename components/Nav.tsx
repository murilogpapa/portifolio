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
      className="min-w-0 rounded-bl-[24px] bg-nav px-5 py-5 lg:px-8 xl:w-1/2 xl:shrink-0 xl:px-12"
    >
      <ul className="flex w-full items-center justify-evenly gap-2 lg:gap-4 xl:gap-8">
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
                className="nav-link whitespace-nowrap text-[15px] font-semibold tracking-tight text-[#c8c8c8] transition-colors hover:text-white xl:text-[16px]"
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
