import Image from "next/image";
import { profile } from "@/lib/profile";

type AvatarProps = {
  size: "sidebar" | "header";
};

const LINKEDIN_URL = "https://www.linkedin.com/in/murilogiampiccolopapa/";

const sizeClass = {
  sidebar: "h-auto w-[186px]",
  header: "h-auto w-[92px]",
};

export function Avatar({ size }: AvatarProps) {
  return (
    <a
      href={LINKEDIN_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir LinkedIn de Murilo Giampiccolo Papa"
      className="avatar-link shrink-0"
    >
      <Image
        src="/avatar.png"
        alt={`${profile.firstName} ${profile.lastName}`}
        width={735}
        height={1080}
        preload
        sizes={size === "sidebar" ? "186px" : "92px"}
        className={`avatar-image object-contain ${sizeClass[size]}`}
      />
    </a>
  );
}
