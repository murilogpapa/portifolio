"use client";

import { useState } from "react";
import { ExternalLink, Lock, MousePointerClick } from "lucide-react";

/**
 * Janela de navegador com o site rodando num iframe.
 * Começa "travada" para a rolagem da página não ficar presa dentro do iframe;
 * um clique (ou toque) libera a interação.
 */
export type LivePreviewText = {
  live: string;
  openInNewTab: string;
  loading: string;
  iframeTitle: string;
  tap: string;
  click: string;
  sr: string;
};

export function LivePreview({ url, label, text }: { url: string; label: string; text: LivePreviewText }) {
  const [active, setActive] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="flex min-w-0 flex-col overflow-hidden rounded-[14px] border border-line-strong bg-card shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
      <BrowserBar label={label}>
        <span className="flex items-center gap-1.5 font-mono text-[11px] whitespace-nowrap text-ok-fg">
          <span aria-hidden="true" className="animate-ping-soft size-1.5 rounded-full bg-ok-dot" />
          {text.live}
        </span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={text.openInNewTab}
          className="flex size-9 shrink-0 items-center justify-center rounded-lg text-t3 transition-colors hover:bg-chip hover:text-fg"
        >
          <ExternalLink size={16} aria-hidden="true" />
        </a>
      </BrowserBar>

      <div className="relative h-[460px] bg-shot sm:h-[520px] lg:h-[560px]">
        {!loaded ? (
          <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-dim">
            {text.loading}
          </div>
        ) : null}
        <iframe
          src={url}
          title={text.iframeTitle}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          referrerPolicy="strict-origin-when-cross-origin"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
          className={`absolute inset-0 size-full border-0 transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          } ${active ? "" : "pointer-events-none"}`}
        />
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

export function BrowserBar({ label, children }: { label: string; children?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 border-b border-line px-3 py-2.5">
      <span aria-hidden="true" className="hidden gap-1.5 sm:flex">
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="size-2.5 rounded-full bg-line-strong" />
      </span>
      <span className="flex min-w-0 flex-1 items-center gap-2 rounded-lg bg-chip px-3 py-1.5 font-mono text-xs text-t3">
        <Lock size={12} aria-hidden="true" className="shrink-0" />
        <span className="truncate">{label}</span>
      </span>
      {children}
    </div>
  );
}
