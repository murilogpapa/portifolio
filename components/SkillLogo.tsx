import { Sparkles } from "lucide-react";
import {
  siC,
  siCss,
  siGit,
  siHtml5,
  siJavascript,
  siNextdotjs,
  siReact,
  siSwift,
  siTailwindcss,
  siTypescript,
  siVite,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";
import { BrandIcon } from "@/components/BrandIcon";
import type { SkillId } from "@/lib/content";

type SkillLogoProps = {
  id: SkillId;
  label: string;
};

const ICON = "h-[58px] w-[58px] md:h-[64px] md:w-[64px]";
const ICON_LG = "h-[68px] w-[68px] md:h-[74px] md:w-[74px]";

export function SkillLogo({ id, label }: SkillLogoProps) {
  switch (id) {
    case "html":
      return <Si icon={siHtml5} />;
    case "css":
      return <Si icon={siCss} />;
    case "js":
      return <Si icon={siJavascript} />;
    case "ts":
      return <Si icon={siTypescript} />;
    case "react":
      return <Si icon={siReact} className={ICON_LG} size={74} />;
    case "next":
      return <Si icon={siNextdotjs} fill="#f5f5f5" className={ICON_LG} size={74} />;
    case "tailwind":
      return <Si icon={siTailwindcss} />;
    case "vite":
      return <Si icon={siVite} />;
    case "python":
      return <PythonMark />;
    case "sql":
      return <TypeMark label="SQL" color="#F2C94C" size="text-[28px] md:text-[32px]" />;
    case "java":
      return <TypeMark label="Java" color="#E76F00" size="text-[28px] md:text-[32px]" />;
    case "c":
      return <Si icon={siC} className={ICON_LG} size={74} />;
    case "figma":
      return <FigmaMark />;
    case "photoshop":
      return <TypeMark label="Ps" color="#31A8FF" size="text-[40px] md:text-[44px]" />;
    case "swift":
      return <Si icon={siSwift} />;
    case "git":
      return <Si icon={siGit} />;
    case "ia":
      return <AiMark />;
    default: {
      const _exhaustive: never = id;
      return <span className="sr-only">{label ?? _exhaustive}</span>;
    }
  }
}

function Si({
  icon,
  fill,
  className = ICON,
  size = 64,
}: {
  icon: SimpleIcon;
  fill?: string;
  className?: string;
  size?: number;
}) {
  return (
    <BrandIcon
      icon={icon}
      fill={fill ?? `#${icon.hex}`}
      className={className}
      size={size}
    />
  );
}

function TypeMark({
  label,
  color,
  size,
}: {
  label: string;
  color: string;
  size: string;
}) {
  return (
    <span
      className={`select-none font-extrabold tracking-tight ${size}`}
      style={{ color }}
    >
      {label}
    </span>
  );
}

function FigmaMark() {
  return (
    <svg
      viewBox="0 0 38 57"
      width={41}
      height={62}
      className="h-[62px] w-[41px] md:h-[68px] md:w-[45px]"
      aria-hidden="true"
    >
      <path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z" />
      <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z" />
      <path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19Z" />
      <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z" />
      <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z" />
    </svg>
  );
}

function AiMark() {
  return (
    <span className="flex flex-col items-center">
      <Sparkles
        className="h-[52px] w-[52px] text-[#c4b5fd] md:h-[58px] md:w-[58px]"
        strokeWidth={1.5}
        fill="currentColor"
        aria-hidden="true"
      />
      <span className="mt-1.5 select-none text-[12px] font-semibold tracking-[0.18em] text-white md:text-[13px]">
        IA
      </span>
    </span>
  );
}

function PythonMark() {
  return (
    <svg
      viewBox="0 0 256 255"
      width={70}
      height={70}
      className="h-[70px] w-[70px] md:h-[76px] md:w-[76px]"
      aria-hidden="true"
    >
      <path
        fill="#3776AB"
        d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.252s34.51.651 34.51-33.319V33.97S194.67.072 126.916.072ZM92.802 19.66a11.01 11.01 0 0 1 11.008 11.008 11.01 11.01 0 0 1-11.008 11.012 11.01 11.01 0 0 1-11.012-11.012 11.01 11.01 0 0 1 11.012-11.007Z"
      />
      <path
        fill="#FFD343"
        d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.128H127.6v-8.745h86.441s41.486 4.705 41.486-60.71c0-65.417-36.21-63.097-36.21-63.097h-21.61v30.356s1.165 36.21-35.632 36.21h-61.252s-34.51-.651-34.51 33.319v56.013s-5.235 33.897 62.518 33.897Zm34.114-19.588a11.01 11.01 0 0 1-11.012-11.007 11.01 11.01 0 0 1 11.012-11.012 11.01 11.01 0 0 1 11.007 11.012 11.01 11.01 0 0 1-11.007 11.007Z"
      />
    </svg>
  );
}
