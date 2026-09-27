"use client";

import type { ReactNode } from "react";
import { siDiscord, siGithub, siWhatsapp } from "simple-icons";
import { BrandIcon } from "@/components/BrandIcon";
import { DiscordCopyButton } from "@/components/DiscordCopyButton";
import { socials, type SocialId } from "@/lib/profile";

function LinkedInMark({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function SocialGlyph({ id, className }: { id: SocialId; className: string }) {
  switch (id) {
    case "github":
      return <BrandIcon icon={siGithub} className={className} />;
    case "linkedin":
      return <LinkedInMark className={className} />;
    case "whatsapp":
      return <BrandIcon icon={siWhatsapp} className={className} />;
    case "discord":
      return <BrandIcon icon={siDiscord} className={className} />;
    default: {
      const _exhaustive: never = id;
      return _exhaustive;
    }
  }
}

type SocialLinksProps = {
  variant: "sidebar" | "header" | "contact";
};

export function SocialLinks({ variant }: SocialLinksProps) {
  const isHeader = variant === "header";
  const isContact = variant === "contact";

  return (
    <ul
      className={
        isContact
          ? "mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2"
          : isHeader
            ? "mt-3 grid w-fit grid-cols-2 gap-2 min-[400px]:flex min-[400px]:items-center min-[400px]:gap-3"
            : "mt-auto flex items-center justify-center gap-4 pt-6"
      }
    >
      {socials.map((social) => {
        const display = social.display;
        const title =
          social.display === social.label
            ? social.label
            : `${social.label}: ${social.display}`;
        const className = isContact
          ? "hit-area relative flex min-h-11 items-center gap-3 rounded-[18px] bg-[#2a2a2a] px-4 py-3.5 text-[14px] text-[#cfcfcf] transition-colors hover:text-white"
          : isHeader
            ? "hit-area relative inline-flex h-11 w-11 min-h-11 min-w-11 items-center justify-center rounded-lg bg-[#2a2a2a] text-[#cfcfcf] transition-colors hover:text-white"
            : "hit-area relative inline-flex h-11 w-11 min-h-11 min-w-11 items-center justify-center text-[#9a9a9a] transition-colors hover:text-white";
        const iconClass = isContact ? "size-[22px]" : "size-6";
        const icon: ReactNode = <SocialGlyph id={social.id} className={iconClass} />;

        return (
          <li key={social.id}>
            {social.id === "discord" ? (
              <DiscordCopyButton
                className={className}
                icon={icon}
                showLabel={isContact}
                display={display}
              />
            ) : social.href ? (
              <a
                href={social.href}
                aria-label={title}
                title={title}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {icon}
                {isContact ? <span>{display}</span> : null}
              </a>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
