"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { PortfolioSection } from "@/components/PortfolioSection";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillsCarousel } from "@/components/SkillsCarousel";
import { SocialLinks } from "@/components/SocialLinks";
import type { SectionId } from "@/components/Nav";
import { aboutParagraphs, learningItems } from "@/lib/content";
import { profile } from "@/lib/profile";

const titles: Record<SectionId, string> = {
  sobre: "Sobre mim",
  aprendizado: "Aprendizado",
  portfolio: "Portfólio",
  contato: "Contato",
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
      <div className="flex shrink-0 items-start justify-between">
        <div className={`px-5 pt-5 md:px-8 ${nav ? "md:pt-[18px]" : "md:pt-6"}`}>
          <SectionTitle>{titles[section]}</SectionTitle>
        </div>
        {nav}
      </div>

      <div
        className={`flex w-full min-h-0 min-w-0 max-w-full flex-1 flex-col px-5 pb-5 md:px-8 md:pb-8 ${
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

function AboutSection() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="mt-4 flex w-full min-w-0 max-w-full flex-col gap-6 text-[14.5px] leading-[1.7] break-words text-[#d0d0d0] md:max-w-3xl md:text-[15px] md:leading-[1.75]">
        {aboutParagraphs.map((paragraph) => (
          <p key={paragraph} className="max-w-full">
            {paragraph}
          </p>
        ))}
      </div>
      <SkillsCarousel />
    </div>
  );
}

function LearningSection() {
  return (
    <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
      {learningItems.map((item) => (
        <li key={item.id} className="rounded-[24px] bg-[#2a2a2a] px-5 py-5">
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
    <div className="mt-4 max-w-xl">
      <p className="text-[14.5px] leading-[1.7] text-[#d0d0d0] md:text-[15px] md:leading-[1.75]">
        Me chama por e-mail, telefone, WhatsApp ou redes.
      </p>
      <ul className="mt-5 flex flex-col gap-3">
        <li>
          <a
            href={profile.emailHref}
            className="flex items-center gap-3 rounded-[18px] bg-[#2a2a2a] px-4 py-3.5 text-[14px] text-[#cfcfcf] transition-colors hover:text-white"
          >
            <Mail
              className="size-[22px] shrink-0 text-[#9a9a9a]"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <span>{profile.email}</span>
          </a>
        </li>
        <li>
          <a
            href={profile.phoneHref}
            className="flex items-center gap-3 rounded-[18px] bg-[#2a2a2a] px-4 py-3.5 text-[14px] text-[#cfcfcf] transition-colors hover:text-white"
          >
            <Phone
              className="size-[22px] shrink-0 text-[#9a9a9a]"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <span>{profile.phone}</span>
          </a>
        </li>
        <li className="flex items-center gap-3 rounded-[18px] bg-[#2a2a2a] px-4 py-3.5 text-[14px] text-[#cfcfcf]">
          <MapPin
            className="size-[22px] shrink-0 text-[#9a9a9a]"
            strokeWidth={1.75}
            aria-hidden="true"
          />
          <span>{profile.location}</span>
        </li>
      </ul>
      <SocialLinks variant="contact" />
    </div>
  );
}
