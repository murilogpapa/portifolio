"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { PortfolioSection } from "@/components/PortfolioSection";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillsCarousel } from "@/components/SkillsCarousel";
import { SocialLinks } from "@/components/SocialLinks";
import type { SectionId } from "@/components/Nav";
import { aboutParagraphs, isProjectId, learningItems } from "@/lib/content";
import { profile } from "@/lib/profile";

const titles: Record<SectionId, string> = {
  sobre: "Sobre mim",
  aprendizado: "Aprendizado",
  portfolio: "Portfólio",
  contato: "Contato",
};

type MainCardProps = {
  variant: "desktop" | "mobile";
  section: SectionId;
  nav?: ReactNode;
};

export function MainCard({ variant, section, nav }: MainCardProps) {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

  useEffect(() => {
    if (section !== "portfolio") {
      setOpenProjectId(null);
      return;
    }
    const card = new URLSearchParams(window.location.search).get("flip");
    if (card && isProjectId(card)) setOpenProjectId(card);
  }, [section]);

  return (
    <article
      className={`relative flex min-h-0 min-w-0 flex-col overflow-hidden rounded-[24px] bg-card ${
        variant === "desktop" ? "desktop-main w-full" : "w-full flex-1"
      }`}
    >
      <div className="flex shrink-0 items-start justify-between">
        <div
          className={`min-w-0 shrink-0 px-5 pt-5 lg:px-6 xl:px-8 ${
            nav ? "lg:pt-5" : "lg:pt-6"
          }`}
        >
          {(Object.entries(titles) as [SectionId, string][]).map(
            ([id, label]) => (
              <div key={id} className="section-title" data-panel={id}>
                <SectionTitle>{label}</SectionTitle>
              </div>
            ),
          )}
        </div>
        {nav}
      </div>

      <div
        className={`flex min-h-0 w-full min-w-0 max-w-full flex-1 flex-col overflow-x-hidden px-5 pb-5 lg:overflow-y-auto lg:px-6 lg:pb-6 xl:px-8 xl:pb-8`}
      >
        <div className="section-panel" data-panel="sobre">
          <AboutSection variant={variant} />
        </div>
        <div className="section-panel" data-panel="aprendizado">
          <LearningSection />
        </div>
        <div className="section-panel" data-panel="portfolio">
          <PortfolioSection
            openId={openProjectId}
            onOpen={setOpenProjectId}
            onClose={() => setOpenProjectId(null)}
          />
        </div>
        <div className="section-panel" data-panel="contato">
          <ContactSection />
        </div>
      </div>
    </article>
  );
}

function AboutSection({ variant }: { variant: "desktop" | "mobile" }) {
  return (
    <div
      className={
        variant === "mobile" ? "flex min-h-0 flex-1 flex-col" : "flex flex-col"
      }
    >
      <div className="mt-4 flex w-full min-w-0 max-w-full flex-col gap-6 text-[14.5px] font-semibold leading-[1.7] break-words text-[#d0d0d0] md:max-w-3xl md:text-[15px] md:leading-[1.75]">
        {aboutParagraphs.map((paragraph) => (
          <p key={paragraph} className="max-w-full">
            {paragraph}
          </p>
        ))}
      </div>
      <SkillsCarousel variant={variant} />
    </div>
  );
}

function LearningSection() {
  return (
    <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
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
      <p className="text-[14.5px] font-semibold leading-[1.7] text-[#d0d0d0] md:text-[15px] md:leading-[1.75]">
        Me chama por e-mail, telefone, WhatsApp ou redes.
      </p>
      <ul className="mt-5 flex flex-col gap-3">
        <li>
          <a
            href={profile.emailHref}
            className="hit-area relative flex min-h-11 items-center gap-3 rounded-[18px] bg-[#2a2a2a] px-4 py-3.5 text-[14px] text-[#cfcfcf] transition-colors hover:text-white"
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
            className="hit-area relative flex min-h-11 items-center gap-3 rounded-[18px] bg-[#2a2a2a] px-4 py-3.5 text-[14px] text-[#cfcfcf] transition-colors hover:text-white"
          >
            <Phone
              className="size-[22px] shrink-0 text-[#9a9a9a]"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <span>{profile.phone}</span>
          </a>
        </li>
        <li className="flex min-h-11 items-center gap-3 rounded-[18px] bg-[#2a2a2a] px-4 py-3.5 text-[14px] text-[#cfcfcf]">
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
