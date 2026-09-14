"use client";

import { useEffect, useRef } from "react";
import { ExternalLink, X } from "lucide-react";
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

  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  return (
    <div
      className={`project-scene w-full ${
        open ? "relative z-30" : "flex-1"
      } ${dimmed ? "opacity-40" : ""}`}
    >
      <div className={`project-inner h-full ${open ? "is-flipped" : ""}`}>
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
          <button
            ref={closeRef}
            type="button"
            aria-label="Fechar"
            tabIndex={open ? 0 : -1}
            onClick={onClose}
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-[#c8c8c8] transition-colors hover:bg-[#1e1e1e] hover:text-white"
          >
            <X className="size-4" strokeWidth={1.8} aria-hidden="true" />
          </button>
          <h3 className="pr-8 text-[17px] font-semibold text-white">
            {project.title}
          </h3>
          <p className="mt-3 max-w-full text-[13px] leading-relaxed break-words text-[#d0d0d0] md:text-[13.5px]">
            {project.back}
          </p>
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
