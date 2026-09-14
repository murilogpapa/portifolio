"use client";

import {
  GraduationCapIcon,
  MessageIcon,
  PaletteIcon,
  UserIcon,
} from "@/components/icons";

export type SectionId = "sobre" | "aprendizado" | "portfolio" | "contato";

const desktopItems: { id: SectionId; label: string }[] = [
  { id: "sobre", label: "Sobre" },
  { id: "aprendizado", label: "Aprendizado" },
  { id: "portfolio", label: "Portfólio" },
  { id: "contato", label: "Contato" },
];

const mobileItems: { id: SectionId; label: string; icon: typeof UserIcon }[] = [
  { id: "sobre", label: "Sobre", icon: UserIcon },
  { id: "aprendizado", label: "Aprendizado", icon: GraduationCapIcon },
  { id: "portfolio", label: "Portfólio", icon: PaletteIcon },
  { id: "contato", label: "Contato", icon: MessageIcon },
];

type NavProps = {
  variant: "desktop" | "mobile";
  section: SectionId;
  onChange: (section: SectionId) => void;
};

export function Nav({ variant, section, onChange }: NavProps) {
  if (variant === "mobile") {
    return (
      <nav
        aria-label="Seções"
        className="rounded-[24px] bg-card px-7 py-3.5"
      >
        <ul className="grid grid-cols-4 items-center">
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
                  className={`flex h-9 w-9 items-center justify-center rounded-xl transition-colors ${
                    active ? "text-accent" : "text-[#8d8d8d] hover:text-white"
                  }`}
                >
                  <Icon className="h-6 w-6" />
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
      className="rounded-bl-[24px] bg-nav px-7 py-[18px]"
    >
      <ul className="flex items-center gap-6">
        {desktopItems.map((item) => {
          const active = item.id === section;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onChange(item.id)}
                aria-current={active ? "page" : undefined}
                className={`text-[14px] font-medium tracking-tight transition-colors ${
                  active ? "text-accent" : "text-[#c8c8c8] hover:text-white"
                }`}
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
