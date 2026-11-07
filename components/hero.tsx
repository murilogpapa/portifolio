import { ArrowUpRight, Download } from "lucide-react";
import { links, profile } from "@/lib/content";
import type { Content } from "@/lib/content";
import { Note, PX, Spacer, cn } from "./blueprint";

const eqBars = [
  { h: 9, delay: 0 },
  { h: 14, delay: 180 },
  { h: 11, delay: 360 },
  { h: 7, delay: 90 },
];

export function Hero({ c }: { c: Content }) {
  return (
    <section id="topo" aria-labelledby="titulo">
      <Note>rounded-full bg-black ring-1 ring-white/10</Note>
      <div className={cn("rule-t flex flex-wrap items-center gap-3 pt-4 pb-7", PX)}>
        <a
          href="#notchmuc"
          className="animate-rise flex max-w-full items-center gap-3.5 rounded-full border border-island-line bg-black py-2 pr-4 pl-2 transition-transform hover:-translate-y-0.5 sm:pr-5"
          style={{ animationDelay: "80ms" }}
        >
          <span aria-hidden="true" className="flex h-8 items-end gap-[3px] rounded-full bg-[#17171a] p-[9px]">
            {eqBars.map((bar, i) => (
              <span
                key={i}
                className="animate-eq block w-[3px] rounded-sm bg-[#7cb4ff]"
                style={{ height: bar.h, animationDelay: `${bar.delay}ms` }}
              />
            ))}
          </span>
          <span className="flex min-w-0 flex-col gap-0.5">
            <span className="font-mono text-[11px] tracking-[0.08em] text-[#8e8e96] uppercase">
              {c.ui.building}
            </span>
            <span className="text-[15px] font-medium text-[#f2f2f3]">
              NotchMuc<span className="hidden sm:inline">{c.ui.buildingDesc}</span>
            </span>
          </span>
          <ArrowUpRight size={16} aria-hidden="true" className="shrink-0 text-[#8e8e96]" />
        </a>
        <span
          className="animate-rise flex min-h-10 items-center gap-2.5 rounded-full bg-ok-bg px-4 text-sm font-medium text-ok-fg"
          style={{ animationDelay: "140ms" }}
        >
          <span aria-hidden="true" className="animate-ping-soft size-2 rounded-full bg-ok-dot" />
          {c.profile.status}
        </span>
      </div>

      <Note>text-8xl font-semibold tracking-tighter text-balance</Note>
      <div className={cn("rule-t pt-2 pb-5", PX)}>
        <h1
          id="titulo"
          className="animate-rise text-[2.75rem] leading-[1] font-semibold tracking-[-0.045em] text-balance sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.25rem]"
          style={{ animationDelay: "200ms" }}
        >
          {profile.name}
          <span className="block text-dim">{c.profile.role}</span>
        </h1>
      </div>

      <Note>
        text-xl/relaxed <span className="hidden dark:inline">text-zinc-300</span>
        <span className="dark:hidden">text-zinc-600</span> max-w-2xl
      </Note>
      <div className={cn("rule-t py-4", PX)}>
        <p
          className="animate-rise max-w-[680px] text-lg leading-relaxed text-pretty text-t2 lg:text-[21px]"
          style={{ animationDelay: "260ms" }}
        >
          {c.profile.summary}
        </p>
      </div>

      <div className={cn("rule-t py-5", PX)}>
        <div
          className="animate-rise flex flex-wrap items-center gap-3"
          style={{ animationDelay: "320ms" }}
        >
          <a
            href="#projetos"
            className="flex min-h-12 items-center rounded-full bg-btn-bg px-[22px] text-[15px] font-semibold text-btn-fg transition-opacity hover:opacity-90"
          >
            {c.ui.seeProjects}
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener"
            className="flex min-h-12 items-center gap-2 rounded-full border border-line-strong px-5 text-[15px] font-medium transition-colors hover:bg-chip"
          >
            <Download size={16} aria-hidden="true" />
            {c.ui.resume}
          </a>
          <div className="flex items-center">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center px-3 text-[15px] text-t3 transition-colors hover:text-fg"
            >
              GitHub
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center px-3 text-[15px] text-t3 transition-colors hover:text-fg"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className={cn("rule-t py-3.5", PX)}>
        <p className="font-mono text-[13px] leading-relaxed text-dim">{c.profile.meta}</p>
      </div>
      <Spacer />
    </section>
  );
}
