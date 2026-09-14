"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CssMark,
  FigmaMark,
  HtmlMark,
  JsMark,
  MailIcon,
  NextMark,
  PhoneIcon,
  PhotoshopMark,
  PinIcon,
  PythonMark,
  ReactMark,
  SqlMark,
  TailwindMark,
  TsMark,
} from "@/components/icons";
import { PortfolioSection } from "@/components/PortfolioSection";
import { SocialLinks } from "@/components/SocialLinks";
import type { SectionId } from "@/components/Nav";
import {
  aboutParagraphs,
  learningItems,
  skillList,
  type SkillId,
} from "@/lib/content";
import { profile } from "@/lib/profile";

const titles: Record<SectionId, string> = {
  sobre: "Sobre mim",
  aprendizado: "Aprendizado",
  portfolio: "Portfólio",
  contato: "Contato",
};

const skillMarks: Record<SkillId, ReactNode> = {
  html: <HtmlMark className="h-10 w-[72px]" />,
  css: <CssMark className="h-10 w-[72px]" />,
  js: <JsMark className="h-10 w-[64px]" />,
  ts: <TsMark className="h-10 w-[64px]" />,
  react: <ReactMark className="h-[74px] w-[74px]" />,
  next: <NextMark className="h-[72px] w-[72px]" />,
  tailwind: <TailwindMark className="h-14 w-[92px]" />,
  python: <PythonMark className="h-[70px] w-[70px]" />,
  sql: <SqlMark className="h-[70px] w-[70px]" />,
  figma: <FigmaMark className="h-[66px] w-[44px]" />,
  photoshop: <PhotoshopMark className="h-[72px] w-[72px]" />,
};

type MainCardProps = {
  section: SectionId;
  nav?: ReactNode;
};

export function MainCard({ section, nav }: MainCardProps) {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

  useEffect(() => {
    if (section !== "portfolio") {
      setOpenProjectId(null);
      return;
    }
    const card = new URLSearchParams(window.location.search).get("flip");
    if (card === "ordem-files" || card === "painel-3d-muc") {
      setOpenProjectId(card);
    }
  }, [section]);

  const flipping = section === "portfolio" && openProjectId !== null;

  return (
    <article
      className={`relative flex min-h-0 min-w-0 w-full flex-1 flex-col rounded-[24px] bg-card md:min-h-[640px] ${
        flipping ? "overflow-x-hidden md:overflow-visible" : "overflow-hidden"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className={`px-6 pt-6 md:px-8 ${nav ? "md:pt-[18px]" : "pt-6"}`}>
          <SectionTitle>{titles[section]}</SectionTitle>
        </div>
        {nav}
      </div>

      <div
        className={`flex w-full min-w-0 max-w-full flex-1 flex-col px-6 pb-6 md:px-8 md:pb-8 ${
          flipping ? "overflow-x-hidden md:overflow-visible" : "overflow-x-hidden"
        }`}
      >
        {section === "sobre" ? <AboutSection /> : null}
        {section === "aprendizado" ? <LearningSection /> : null}
        {section === "portfolio" ? (
          <PortfolioSection
            openId={openProjectId}
            onOpen={setOpenProjectId}
            onClose={() => setOpenProjectId(null)}
          />
        ) : null}
        {section === "contato" ? <ContactSection /> : null}
      </div>
    </article>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div>
      <h2 className="text-[28px] font-bold leading-none tracking-tight text-white md:text-[30px]">
        {children}
      </h2>
      <div className="mt-2.5 h-[4px] w-8 rounded-full bg-accent" />
    </div>
  );
}

function AboutSection() {
  return (
    <>
      <div className="mt-1 w-full min-w-0 max-w-full space-y-4 overflow-hidden pr-4 text-[13.5px] leading-[1.7] break-words text-[#d0d0d0] md:max-w-3xl md:pr-0 md:text-[14.5px] md:leading-[1.75]">
        {aboutParagraphs.map((paragraph) => (
          <p key={paragraph} className="max-w-full">
            {paragraph}
          </p>
        ))}
      </div>
      <SkillsCarousel />
    </>
  );
}

function LearningSection() {
  return (
    <ul className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
      {learningItems.map((item) => (
        <li
          key={item.id}
          className="rounded-[24px] bg-[#2a2a2a] px-5 py-5"
        >
          <p className="text-[12px] font-medium uppercase tracking-wide text-accent">
            {item.status}
          </p>
          <h3 className="mt-2 text-[17px] font-semibold leading-snug text-white">
            {item.title}
          </h3>
          <p className="mt-1.5 text-[13.5px] text-[#c8c8c8]">{item.place}</p>
        </li>
      ))}
    </ul>
  );
}

function ContactSection() {
  return (
    <div className="mt-2 max-w-xl">
      <p className="text-[14.5px] leading-[1.75] text-[#d0d0d0]">
        Me chama por e-mail, telefone, WhatsApp ou redes.
      </p>
      <ul className="mt-5 flex flex-col gap-3">
        <li>
          <a
            href={profile.emailHref}
            className="flex items-center gap-3 rounded-[18px] bg-[#2a2a2a] px-4 py-3.5 text-[14px] text-[#cfcfcf] transition-colors hover:text-white"
          >
            <MailIcon className="h-4 w-4 shrink-0 text-[#9a9a9a]" />
            <span>{profile.email}</span>
          </a>
        </li>
        <li>
          <a
            href={profile.phoneHref}
            className="flex items-center gap-3 rounded-[18px] bg-[#2a2a2a] px-4 py-3.5 text-[14px] text-[#cfcfcf] transition-colors hover:text-white"
          >
            <PhoneIcon className="h-4 w-4 shrink-0 text-[#9a9a9a]" />
            <span>{profile.phone}</span>
          </a>
        </li>
        <li className="flex items-center gap-3 rounded-[18px] bg-[#2a2a2a] px-4 py-3.5 text-[14px] text-[#cfcfcf]">
          <PinIcon className="h-4 w-4 shrink-0 text-[#9a9a9a]" />
          <span>{profile.location}</span>
        </li>
      </ul>
      <SocialLinks variant="contact" />
    </div>
  );
}

function SkillsCarousel() {
  const [offset, setOffset] = useState(0);
  const [visible, setVisible] = useState(2);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const sync = () => setVisible(media.matches ? 4 : 2);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const slides = useMemo(() => {
    return Array.from({ length: visible }, (_, index) => {
      return skillList[(offset + index) % skillList.length];
    });
  }, [offset, visible]);

  const prev = () =>
    setOffset((value) => (value - 1 + skillList.length) % skillList.length);
  const next = () => setOffset((value) => (value + 1) % skillList.length);

  return (
    <section className="mt-8 md:mt-10">
      <SectionTitle>Skills</SectionTitle>
      <div className="relative mt-5 w-full min-w-0 max-w-full overflow-hidden">
        <button
          type="button"
          onClick={prev}
          aria-label="Skills anteriores"
          className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#0e0e0e]/70 text-white transition-colors hover:text-accent"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>

        <ul className="flex w-full min-w-0 items-center justify-center gap-3 overflow-hidden px-9 md:justify-between md:gap-5 md:px-10">
          {slides.map((skill) => (
            <li
              key={`${skill.id}-${offset}`}
              className={`flex h-[100px] min-w-0 flex-1 items-center justify-center rounded-[22px] md:h-[124px] md:w-[124px] md:flex-none md:rounded-[24px] ${skill.bg}`}
            >
              <span className="sr-only">{skill.label}</span>
              {skillMarks[skill.id]}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={next}
          aria-label="Próximas skills"
          className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#0e0e0e]/70 text-white transition-colors hover:text-accent"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
