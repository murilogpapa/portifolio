"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, MousePointerClick } from "lucide-react";
import { BrowserBar } from "./live-preview";

/**
 * Print de página inteira numa janela de navegador que rola por dentro.
 * Começa travada (como o iframe) para não prender a rolagem da página.
 */
export function ScrollShot({
  src,
  alt,
  width,
  height,
  barLabel,
  href,
  text,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  barLabel: string;
  href?: string;
  text: { shot: string; openInNewTab: string; region: string; tap: string; click: string; sr: string };
}) {
  const [active, setActive] = useState(false);

  return (
    <div className="flex min-w-0 flex-col overflow-hidden rounded-[14px] border border-line-strong bg-card shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
      <BrowserBar label={barLabel}>
        <span className="font-mono text-[11px] whitespace-nowrap text-dim">{text.shot}</span>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={text.openInNewTab}
            className="flex size-9 shrink-0 items-center justify-center rounded-lg text-t3 transition-colors hover:bg-chip hover:text-fg"
          >
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        ) : null}
      </BrowserBar>

      <div className="relative h-[460px] bg-shot sm:h-[520px] lg:h-[560px]">
        <div
          role="region"
          aria-label={text.region}
          tabIndex={active ? 0 : -1}
          className={`absolute inset-0 ${active ? "overflow-y-auto" : "overflow-hidden"}`}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(min-width: 1360px) 760px, (min-width: 1024px) 56vw, 100vw"
            className="block h-auto w-full"
          />
        </div>
        {!active ? (
          <button
            type="button"
            onClick={() => setActive(true)}
            className="group absolute inset-0 flex items-end justify-center p-5"
          >
            <span className="flex items-center gap-2 rounded-full bg-black/85 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-white/15 backdrop-blur transition-transform group-hover:scale-105">
              <MousePointerClick size={16} aria-hidden="true" />
              <span className="sm:hidden">{text.tap}</span>
              <span className="hidden sm:inline">{text.click}</span>
              <span className="sr-only">{text.sr}</span>
            </span>
          </button>
        ) : null}
      </div>
    </div>
  );
}
