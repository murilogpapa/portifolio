import type { ComponentType } from "react";
import {
  DiscordIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/icons";
import { socials, type SocialId } from "@/lib/profile";

const iconMap: Record<SocialId, ComponentType<{ className?: string }>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  discord: DiscordIcon,
};

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
          ? "mt-5 grid grid-cols-2 gap-3"
          : isHeader
            ? "mt-2 flex items-center gap-2"
            : "mt-5 flex items-center justify-center gap-3"
      }
    >
      {socials.map((social) => {
        const Icon = iconMap[social.id];
        const placeholder = social.href === "#";
        return (
          <li key={social.id}>
            <a
              href={social.href}
              aria-label={social.label}
              title={placeholder ? "TODO: URL real" : social.label}
              target={placeholder ? undefined : "_blank"}
              rel={placeholder ? undefined : "noreferrer"}
              className={
                isContact
                  ? "flex items-center gap-3 rounded-[18px] bg-[#2a2a2a] px-4 py-3.5 text-[14px] text-[#cfcfcf] transition-colors hover:text-white"
                  : isHeader
                    ? "flex h-8 w-8 items-center justify-center rounded-lg bg-[#2a2a2a] text-[#cfcfcf] transition-colors hover:text-white"
                    : "flex h-8 w-8 items-center justify-center text-[#9a9a9a] transition-colors hover:text-white"
              }
            >
              <Icon className={isContact ? "h-5 w-5" : "h-[18px] w-[18px]"} />
              {isContact ? <span>{social.label}</span> : null}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
