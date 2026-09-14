import Image from "next/image";
import { profile } from "@/lib/profile";

type AvatarProps = {
  size: "sidebar" | "header";
};

const sizeClass = {
  sidebar: "h-[186px] w-[186px]",
  header: "h-[92px] w-[92px]",
};

export function Avatar({ size }: AvatarProps) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-full bg-[#2c979f] ${sizeClass[size]}`}
    >
      <Image
        src="/avatar.png"
        alt={`${profile.firstName} ${profile.lastName}`}
        fill
        sizes={size === "sidebar" ? "186px" : "92px"}
        priority
        className="object-contain scale-[0.92]"
      />
    </div>
  );
}
