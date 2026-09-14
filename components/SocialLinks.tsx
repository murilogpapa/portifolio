import type { ComponentType } from "react";
import {
  DiscordIcon,
  GitHubIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { socials, type SocialId } from "@/lib/profile";

const iconMap: Record<SocialId, ComponentType<{ className?: string }>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  whatsapp: WhatsAppIcon,
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
          ? "mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2"
          : isHeader
            ? "mt-2 flex items-center gap-2"
            : "mt-5 flex items-center justify-center gap-3"
      }
    >
      {socials.map((social) => {
        const Icon = iconMap[social.id];
        const display = social.display;
        const title =
          social.display === social.label
            ? social.label
            : `${social.label}: ${social.display}`;
        const className = isContact
          ? "flex items-center gap-3 rounded-[18px] bg-[#2a2a2a] px-4 py-3.5 text-[14px] text-[#cfcfcf] transition-colors hover:text-white"
          : isHeader
            ? "flex h-8 w-8 items-center justify-center rounded-lg bg-[#2a2a2a] text-[#cfcfcf] transition-colors hover:text-white"
            : "flex h-8 w-8 items-center justify-center text-[#9a9a9a] transition-colors hover:text-white";

        return (
          <li key={social.id}>
            {social.href ? (
              <a
                href={social.href}
                aria-label={title}
                title={title}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                <Icon className={isContact ? "h-5 w-5" : "h-[18px] w-[18px]"} />
                {isContact ? <span>{display}</span> : null}
              </a>
            ) : (
              <span aria-label={title} title={title} className={className}>
                <Icon className={isContact ? "h-5 w-5" : "h-[18px] w-[18px]"} />
                {isContact ? <span>{display}</span> : null}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
