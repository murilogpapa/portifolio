"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, X } from "lucide-react";
import { useFlipPhase } from "@/components/useFlipPhase";
import {
  projects,
  type FlipProject,
  type LinkProject,
} from "@/lib/content";

type PortfolioSectionProps = {
  openId: string | null;
  onOpen: (id: string) => void;
  onClose: () => void;
};

export function PortfolioSection({
  openId,
  onOpen,
  onClose,
}: PortfolioSectionProps) {
  useEffect(() => {
    if (!openId) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openId, onClose]);

  return (
    <>
      {openId ? (
        <button
          type="button"
          aria-label="Fechar card"
          className="fixed inset-0 z-20 bg-black/60"
          onClick={onClose}
        />
      ) : null}
      <ul
        className={`mt-2 grid grid-cols-1 items-start gap-3 lg:grid-cols-3 ${
          openId ? "relative z-30" : ""
        }`}
      >
        {projects.map((project) => (
          <li key={project.id} className="flex min-w-0">
            {project.kind === "link" ? (
              <LinkProjectCard project={project} dimmed={Boolean(openId)} />
            ) : (
              <FlipProjectCard
                project={project}
                open={openId === project.id}
                dimmed={Boolean(openId) && openId !== project.id}
                onOpen={() => onOpen(project.id)}
                onClose={onClose}
              />
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

function LinkProjectCard({
  project,
  dimmed,
}: {
  project: LinkProject;
  dimmed: boolean;
}) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex min-h-[200px] w-full flex-1 flex-col rounded-[24px] bg-[#2a2a2a] px-5 py-5 transition-all hover:bg-[#323232] ${
        dimmed ? "opacity-40" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[17px] font-semibold text-white">{project.title}</h3>
        <ExternalLink
          className="mt-0.5 size-4 shrink-0 text-[#8d8d8d]"
          strokeWidth={1.75}
          aria-hidden="true"
        />
      </div>
      <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-[#c8c8c8]">
        {project.summary}
      </p>
      <StackList items={project.stack} />
      <span className="mt-3 text-[11px] font-medium text-[#8d8d8d]">
        Abrir site
      </span>
    </a>
  );
}

function FlipProjectCard({
  project,
  open,
  dimmed,
  onOpen,
  onClose,
}: {
  project: FlipProject;
  open: boolean;
  dimmed: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [reduced, setReduced] = useState(false);
  const { flipped, settled, snap, animating, onFlipEnd } = useFlipPhase(
    open,
    reduced,
  );

  useEffect(() => {
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(motionMq.matches);
    sync();
    motionMq.addEventListener("change", sync);
    return () => motionMq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  const innerClass = [
    "project-inner h-full",
    flipped ? "is-flipped" : "",
    settled ? "is-settled" : "",
    snap ? "is-snap" : "",
    animating ? "is-animating" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={`relative w-full ${
        open ? "z-30" : "flex-1"
      } ${dimmed ? "opacity-40" : ""}`}
    >
      {open ? (
        <button
          ref={closeRef}
          type="button"
          aria-label="Fechar"
          onClick={onClose}
          className="hit-area absolute right-1.5 top-1.5 z-40 flex h-11 w-11 min-h-11 min-w-11 items-center justify-center rounded-full text-[#c8c8c8] transition-colors hover:bg-[#1e1e1e] hover:text-white"
        >
          <X className="size-4" strokeWidth={1.8} aria-hidden="true" />
        </button>
      ) : null}
      <div className={`project-scene w-full ${open ? "" : "h-full"}`}>
        <div className={innerClass} onTransitionEnd={onFlipEnd}>
          <div className="project-face project-front h-full">
            <button
              type="button"
              aria-expanded={open}
              aria-controls={`${project.id}-details`}
              tabIndex={open ? -1 : 0}
              onClick={() => (open ? onClose() : onOpen())}
              className="flex min-h-[200px] h-full w-full flex-col rounded-[24px] bg-[#2a2a2a] px-5 py-5 text-left transition-colors hover:bg-[#323232]"
            >
              <h3 className="text-[17px] font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-[#c8c8c8]">
                {project.summary}
              </p>
              <StackList items={project.stack} />
              <span className="mt-3 text-[11px] font-medium text-[#8d8d8d]">
                Ver detalhes
              </span>
            </button>
          </div>

          <div
            id={`${project.id}-details`}
            className="project-face project-back rounded-[24px] bg-[#2a2a2a] px-5 py-5"
            aria-hidden={!open}
          >
            <h3 className="pr-12 text-[17px] font-semibold text-white">
              {project.title}
            </h3>
            <p className="mt-3 max-w-full text-[13px] leading-relaxed break-words text-[#d0d0d0] md:text-[13.5px]">
              {project.back}
            </p>
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={open ? 0 : -1}
                onClick={(event) => event.stopPropagation()}
                className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-medium text-[#8d8d8d] transition-colors hover:text-white"
              >
                Ver no GitHub
                <ExternalLink
                  className="size-3 shrink-0"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function StackList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full bg-[#1e1e1e] px-3 py-1 text-[11px] font-medium text-[#d0d0d0]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
