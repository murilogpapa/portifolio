// Tipos e dados que não mudam com o idioma. Os textos ficam em
// content-pt.ts e content-en.ts; edite lá para mudar copy, projetos,
// stack ou trajetória sem mexer nos componentes.

import { pt } from "./content-pt";
import { en } from "./content-en";

export type Locale = "pt" | "en";

export const locales: Record<
  Locale,
  { path: string; htmlLang: string; og: string; short: string; name: string }
> = {
  pt: { path: "/", htmlLang: "pt-BR", og: "pt_BR", short: "PT", name: "Português" },
  en: { path: "/en", htmlLang: "en", og: "en_US", short: "EN", name: "English" },
};

export const profile = {
  name: "Murilo G. Papa",
  fullName: "Murilo Giampiccolo Papa",
  email: "murilopapag@gmail.com",
  site: "https://murilogp.dev",
} as const;

export const links = {
  github: "https://github.com/murilogpapa",
  linkedin: "https://www.linkedin.com/in/murilogiampiccolopapa/",
  whatsapp: "https://wa.me/5511944255805",
} as const;

export type Featured = {
  id: string;
  name: string;
  badge: string;
  kind: string;
  highlight?: boolean;
  description: string;
  bullets: string[];
  stack: string[];
  /** Link público do projeto, se houver. */
  site?: { url: string; label: string };
  /**
   * O que aparece na janela de navegador:
   * - live: o site rodando num iframe
   * - image: um print; com `scroll` a janela rola pela página inteira
   */
  preview:
    | { kind: "live" }
    | {
        kind: "image";
        src: string;
        alt: string;
        width: number;
        height: number;
        barLabel: string;
        scroll?: boolean;
      };
};

export type MiniProject = {
  name: string;
  meta: string;
  description: string;
  stack: string;
  href?: string;
  cta?: string;
};

export type TimelineItem = { period: string; title: string; description: string };

export type Content = {
  meta: { title: string; description: string };
  profile: { role: string; summary: string; meta: string; status: string; resume: string };
  nav: { href: string; label: string }[];
  featured: Featured[];
  otherProjects: MiniProject[];
  schoolProjects: MiniProject[];
  stack: { area: string; items: string }[];
  experience: TimelineItem[];
  education: TimelineItem[];
  /** Textos de interface. `{name}` e `{label}` são trocados com `fill`. */
  ui: {
    skip: string;
    navAria: string;
    menuOpen: string;
    menuClose: string;
    theme: string;
    themeTitle: string;
    langSwitch: string;
    building: string;
    buildingDesc: string;
    seeProjects: string;
    resume: string;
    projectsTitle: string;
    projectsSubtitle: string;
    allOnGithub: string;
    openSite: string;
    tech: string;
    otherProjects: string;
    schoolProjects: string;
    viewProject: string;
    live: string;
    openInNewTab: string;
    loading: string;
    iframeTitle: string;
    tapToInteract: string;
    clickToInteract: string;
    srInteract: string;
    shot: string;
    shotRegion: string;
    tapToScroll: string;
    clickToScroll: string;
    srScroll: string;
    stackSubtitle: string;
    timelineTitle: string;
    experience: string;
    education: string;
    contactTitle: string;
    contactText: string;
  };
};

const contents: Record<Locale, Content> = { pt, en };

export function getContent(locale: Locale): Content {
  return contents[locale];
}

/** Troca `{chave}` pelos valores: fill("Abrir {label}", { label: "x" }). */
export function fill(text: string, vars: Record<string, string>) {
  return text.replace(/\{(\w+)\}/g, (_, key: string) => vars[key] ?? "");
}
