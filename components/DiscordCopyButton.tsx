"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const DISCORD_NICK = "muc";
const COPIED_MS = 1800;

function copyText(text: string): Promise<boolean> {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text).then(
      () => true,
      () => copyTextFallback(text),
    );
  }
  return Promise.resolve(copyTextFallback(text));
}

function copyTextFallback(text: string): boolean {
  const el = document.createElement("textarea");
  el.value = text;
  el.setAttribute("readonly", "");
  el.style.position = "fixed";
  el.style.top = "0";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.focus();
  el.select();
  el.setSelectionRange(0, text.length);
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }
  document.body.removeChild(el);
  return ok;
}

type DiscordCopyButtonProps = {
  className: string;
  icon: ReactNode;
  showLabel: boolean;
  display: string;
};

export function DiscordCopyButton({
  className,
  icon,
  showLabel,
  display,
}: DiscordCopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const onClick = () => {
    void copyText(DISCORD_NICK).then((ok) => {
      if (!ok) return;
      setCopied(true);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setCopied(false), COPIED_MS);
    });
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Copiar nick do Discord: muc"
      title={copied ? "Nick copiado" : "Copiar nick do Discord: muc"}
      className={`cursor-pointer ${className}`}
    >
      {icon}
      {showLabel ? <span>{copied ? "Nick copiado" : display}</span> : null}
      <span aria-live="polite" className="sr-only">
        {copied ? "Nick copiado" : ""}
      </span>
      {!showLabel && copied ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-0 bottom-[calc(100%+6px)] z-10 whitespace-nowrap rounded-md bg-[#2a2a2a] px-2 py-1 text-[11px] font-medium text-white"
        >
          Nick copiado
        </span>
      ) : null}
    </button>
  );
}
