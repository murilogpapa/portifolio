import { Avatar } from "@/components/Avatar";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { SocialLinks } from "@/components/SocialLinks";
import { profile } from "@/lib/profile";

export function Sidebar() {
  return (
    <aside className="flex w-[280px] shrink-0 flex-col items-center rounded-[24px] bg-card px-7 pb-8 pt-10 lg:w-[300px]">
      <Avatar size="sidebar" />

      <h1 className="mt-6 text-[34px] font-bold leading-none tracking-tight text-white">
        {profile.firstName}
      </h1>
      <p className="mt-2.5 text-[16px] leading-none text-[#bdbdbd]">
        {profile.lastName}
      </p>

      <div className="my-6 h-px w-full bg-[#2c2c2c]" />

      <ul className="flex w-full flex-col gap-4">
        <li>
          <a
            href={profile.emailHref}
            className="flex items-center gap-3 text-[13px] text-[#cfcfcf] transition-colors hover:text-white"
          >
            <MailIcon className="h-4 w-4 shrink-0 text-[#9a9a9a]" />
            <span className="truncate">{profile.email}</span>
          </a>
        </li>
        <li className="flex items-center gap-3 text-[13px] text-[#cfcfcf]">
          <PinIcon className="h-4 w-4 shrink-0 text-[#9a9a9a]" />
          <span>{profile.location}</span>
        </li>
        <li>
          <a
            href={profile.phoneHref}
            className="flex items-center gap-3 text-[13px] text-[#cfcfcf] transition-colors hover:text-white"
          >
            <PhoneIcon className="h-4 w-4 shrink-0 text-[#9a9a9a]" />
            <span>{profile.phone}</span>
          </a>
        </li>
      </ul>

      <SocialLinks variant="sidebar" />
    </aside>
  );
}
