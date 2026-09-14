type IconProps = {
  className?: string;
};

export function MailIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3.2" y="5.2" width="17.6" height="13.6" rx="2.2" />
      <path d="m4 7.2 8 6.2 8-6.2" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 21s7-6.2 7-11.2A7 7 0 0 0 5 9.8C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.8" r="2.2" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7.2 3.8h3.1l1.4 3.5-2 1.2a12.6 12.6 0 0 0 5.8 5.8l1.2-2 3.5 1.4v3.1c0 .7-.5 1.4-1.2 1.5-7.2.9-13.3-5.2-12.4-12.4.1-.7.8-1.2 1.6-1.2Z" />
    </svg>
  );
}

export function GitHubIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.463 2 11.97c0 4.4 2.865 8.13 6.839 9.452.5.093.682-.216.682-.48 0-.237-.009-.866-.013-1.7-2.782.602-3.369-1.337-3.369-1.337-.454-1.152-1.11-1.459-1.11-1.459-.908-.618.069-.606.069-.606 1.004.07 1.532 1.03 1.532 1.03.892 1.524 2.341 1.084 2.91.829.091-.645.35-1.085.636-1.334-2.22-.252-4.555-1.107-4.555-4.928 0-1.09.39-1.98 1.03-2.678-.104-.252-.447-1.27.097-2.647 0 0 .84-.269 2.75 1.022A9.61 9.61 0 0 1 12 6.844c.85.004 1.705.114 2.504.336 1.909-1.291 2.748-1.022 2.748-1.022.546 1.377.203 2.395.1 2.647.64.698 1.028 1.588 1.028 2.678 0 3.83-2.339 4.673-4.566 4.92.359.309.679.918.679 1.852 0 1.335-.012 2.413-.012 2.741 0 .266.18.577.688.479C19.138 20.096 22 16.367 22 11.97 22 6.463 17.523 2 12 2Z" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46a2.48 2.48 0 0 0-.02-4.96ZM3.2 9.2h3.56V20.5H3.2V9.2Zm5.54 0h3.41v1.54h.05c.47-.9 1.63-1.84 3.36-1.84 3.6 0 4.26 2.37 4.26 5.45v6.15h-3.56v-5.45c0-1.3-.02-2.97-1.81-2.97-1.81 0-2.09 1.41-2.09 2.87v5.55H8.74V9.2Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <rect x="3.3" y="3.3" width="17.4" height="17.4" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.35" cy="6.65" r="1.05" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function DiscordIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.27 5.33A16.6 16.6 0 0 0 15.16 4c-.18.32-.39.75-.53 1.09a15.1 15.1 0 0 0-5.26 0A10 10 0 0 0 8.83 4 16.5 16.5 0 0 0 4.7 5.34C1.85 9.62 1.08 13.78 1.46 17.88a16.7 16.7 0 0 0 5.05 2.57c.41-.56.77-1.16 1.08-1.79a10.8 10.8 0 0 1-1.7-.83c.14-.1.28-.21.41-.32 3.27 1.53 6.82 1.53 10.06 0 .14.11.28.22.41.32-.54.32-1.11.6-1.7.83.31.63.67 1.23 1.08 1.79a16.6 16.6 0 0 0 5.06-2.57c.45-4.75-.76-8.87-3.64-12.55ZM8.7 14.85c-.99 0-1.81-.92-1.81-2.04 0-1.13.8-2.05 1.81-2.05s1.83.92 1.81 2.05c0 1.12-.8 2.04-1.81 2.04Zm6.6 0c-.99 0-1.81-.92-1.81-2.04 0-1.13.8-2.05 1.81-2.05s1.83.92 1.81 2.05c0 1.12-.79 2.04-1.81 2.04Z" />
    </svg>
  );
}

export function UserIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 12.2A4.6 4.6 0 1 0 12 3a4.6 4.6 0 0 0 0 9.2Zm0 1.8c-4.3 0-7.8 2.2-7.8 5v1.5h15.6V19c0-2.8-3.5-5-7.8-5Z" />
    </svg>
  );
}

export function GraduationCapIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m3 9.2 9-4.7 9 4.7-9 4.7-9-4.7Z" />
      <path d="M7.2 11.4v4.2c0 .4 2.1 2.2 4.8 2.2s4.8-1.8 4.8-2.2v-4.2" />
      <path d="M21 9.6v5.2" />
    </svg>
  );
}

export function PaletteIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3.2A8.8 8.8 0 0 0 4.4 16c.8 1.4 2.5 1.6 3.6.7.6-.5 1.4-.7 2.2-.6H12a4.4 4.4 0 0 0 0-8.8 8.8 8.8 0 0 1 8.8 8.8" />
      <circle cx="8.2" cy="9" r="1" fill="currentColor" stroke="none" />
      <circle cx="10.8" cy="6.8" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.4" cy="6.8" r="1" fill="currentColor" stroke="none" />
      <circle cx="16.8" cy="9.2" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MessageIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 5.5h14a1.8 1.8 0 0 1 1.8 1.8v8.2a1.8 1.8 0 0 1-1.8 1.8H9.2L5 20.5v-3.2H5A1.8 1.8 0 0 1 3.2 15.5V7.3A1.8 1.8 0 0 1 5 5.5Z" />
    </svg>
  );
}

export function ChevronLeftIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m14.5 5-7 7 7 7" />
    </svg>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m9.5 5 7 7-7 7" />
    </svg>
  );
}

export function TailwindMark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 54 33" fill="#38BDF8" aria-hidden="true">
      <path d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.05.51 3.52 2 5.14 3.65C30.56 13.05 33.09 15.6 39.15 15.6c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.05-.51-3.52-2-5.14-3.65C35.59 2.55 33.06 0 27 0ZM13.05 15.6C5.85 15.6 1.35 19.2-.45 26.4c2.7-3.6 5.85-4.95 9.45-4.05 2.05.51 3.52 2 5.14 3.65 2.47 2.65 5 5.2 11.06 5.2 7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.05-.51-3.52-2-5.14-3.65-2.47-2.65-5-5.2-11.06-5.2Z" />
    </svg>
  );
}

export function ReactMark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="-11.5 -10.23 23 20.46" aria-hidden="true">
      <circle r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" fill="none" strokeWidth="1">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function FigmaMark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 38 57" aria-hidden="true">
      <path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z" />
      <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z" />
      <path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19Z" />
      <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z" />
      <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z" />
    </svg>
  );
}

export function PhotoshopMark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 72 48" aria-hidden="true">
      <text
        x="36"
        y="36"
        textAnchor="middle"
        fill="#9BD4FF"
        fontSize="34"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
      >
        Ps
      </text>
    </svg>
  );
}

function LetterMark({
  className,
  label,
  fill,
  fontSize,
}: {
  className?: string;
  label: string;
  fill: string;
  fontSize: number;
}) {
  return (
    <svg className={className} viewBox="0 0 80 48" aria-hidden="true">
      <text
        x="40"
        y="34"
        textAnchor="middle"
        fill={fill}
        fontSize={fontSize}
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
      >
        {label}
      </text>
    </svg>
  );
}

export function HtmlMark({ className }: IconProps) {
  return <LetterMark className={className} label="HTML" fill="#E44D26" fontSize={20} />;
}

export function CssMark({ className }: IconProps) {
  return <LetterMark className={className} label="CSS" fill="#60A5FA" fontSize={22} />;
}

export function JsMark({ className }: IconProps) {
  return <LetterMark className={className} label="JS" fill="#F7DF1E" fontSize={28} />;
}

export function TsMark({ className }: IconProps) {
  return <LetterMark className={className} label="TS" fill="#3178C6" fontSize={28} />;
}

export function NextMark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <circle cx="40" cy="40" r="30" stroke="#f5f5f5" strokeWidth="4" />
      <path
        fill="#f5f5f5"
        d="M32 26h7.2l14.6 22.4V26H61v28h-7.2L39.2 31.6V54H32V26Z"
      />
    </svg>
  );
}

export function PythonMark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#3776AB"
        d="M23.7 4c-8.2 0-7.7 3.6-7.7 3.6v3.7h7.8v1.1H13.3S6 12.4 6 20.8s3.2 8.5 3.2 8.5h3.7V25s-.2-5 5.3-5H24V8.7S24.3 4 23.7 4Zm-4.3 2.5a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8Z"
      />
      <path
        fill="#FFD43B"
        d="M24.3 44c8.2 0 7.7-3.6 7.7-3.6v-3.7h-7.8v-1.1h10.5s7.3 0 7.3-8.4-3.2-8.5-3.2-8.5h-3.7V23s.2 5-5.3 5H24v11.3s-.3 4.7.3 4.7Zm4.3-2.5a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8Z"
      />
    </svg>
  );
}

export function ExternalLinkIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 5h5v5" />
      <path d="M20 4 11 13" />
      <path d="M17 13.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h4.5" />
    </svg>
  );
}
