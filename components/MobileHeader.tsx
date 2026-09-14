import { Avatar } from "@/components/Avatar";
import { SocialLinks } from "@/components/SocialLinks";
import { profile } from "@/lib/profile";

export function MobileHeader() {
  return (
    <header className="flex items-center gap-4 rounded-[24px] bg-card px-4 py-4">
      <Avatar size="header" />
      <div className="min-w-0">
        <h1 className="text-[26px] font-bold leading-none tracking-tight text-white">
          {profile.firstName}
        </h1>
        <p className="mt-1.5 text-[14px] leading-none text-[#bdbdbd]">
          {profile.lastName}
        </p>
        <SocialLinks variant="header" />
      </div>
    </header>
  );
}
