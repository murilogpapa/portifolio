"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "./blueprint";
import { LangSwitch } from "./lang-switch";
import { ThemeToggle } from "./theme-toggle";

type NavText = {
  navAria: string;
  menuOpen: string;
  menuClose: string;
  theme: string;
  themeTitle: string;
  langSwitch: string;
};

export function IslandNav({
  items,
  text,
  langHref,
  langShort,
  langCode,
}: {
  items: { href: string; label: string }[];
  text: NavText;
  langHref: string;
  langShort: string;
  langCode: string;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onClick);
    };
  }, [open]);

  const pill =
    "flex size-11 shrink-0 items-center justify-center rounded-full bg-[#1c1c1f] text-[#f2f2f3] transition-colors hover:bg-[#2a2a2e]";

  return (
    <header className="pointer-events-none sticky top-0 z-50 flex justify-center px-3 pt-3 pb-3 sm:pt-4">
      <div ref={wrapRef} className="pointer-events-auto relative max-w-full">
        <nav
          aria-label={text.navAria}
          className="animate-rise flex items-center gap-0.5 rounded-full border border-island-line bg-black p-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
        >
          <a
            href="#topo"
            className="flex items-center gap-2 rounded-full py-0.5 pr-3.5 pl-1.5 text-[15px] font-semibold text-[#f2f2f3]"
          >
            <Image src="/avatar-nav.png" alt="" width={40} height={40} preload className="size-10" />
            Murilo
          </a>
          <ul className="hidden items-center gap-0.5 md:flex">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-full px-3.5 py-3 text-sm text-[#b4b4bb] transition-colors hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <LangSwitch
            href={langHref}
            short={langShort}
            lang={langCode}
            label={text.langSwitch}
            className={cn(pill, "ml-1 w-auto min-w-11 px-3 font-mono text-[13px] font-medium")}
          />
          <ThemeToggle label={text.theme} title={text.themeTitle} className={cn(pill, "ml-0.5")} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? text.menuClose : text.menuOpen}
            className={cn(pill, "ml-0.5 md:hidden")}
          >
            <Burger open={open} />
          </button>
        </nav>

        <div
          id="menu-mobile"
          inert={!open}
          data-open={open}
          className={cn(
            "absolute top-full left-1/2 mt-2 w-[min(88vw,320px)] -translate-x-1/2 origin-top rounded-3xl border border-island-line bg-black p-2 shadow-[0_20px_50px_rgba(0,0,0,0.35)] md:hidden",
            "transition-[opacity,scale,translate,visibility] motion-reduce:transition-none",
            // Abre com desaceleração (chega suave) e fecha com a curva padrão,
            // pra a saída também dar pra ver em vez de sumir de uma vez.
            open
              ? "visible translate-y-0 scale-100 opacity-100 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              : "invisible -translate-y-2 scale-95 opacity-0 duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
          )}
        >
          <ul className="flex flex-col">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3.5 text-base text-[#f2f2f3] transition-colors hover:bg-white/10"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

/** Três tracinhos que viram um X: os de cima e de baixo giram, o do meio some. */
function Burger({ open }: { open: boolean }) {
  const line =
    "absolute left-0 h-[2px] w-[18px] rounded-full bg-current transition-[rotate,translate,opacity,scale] duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none";
  return (
    <span aria-hidden="true" className="relative block size-[18px]">
      <span className={cn(line, "top-[3px]", open && "translate-y-[5.5px] rotate-45")} />
      <span className={cn(line, "top-[8.5px]", open && "scale-x-0 opacity-0")} />
      <span className={cn(line, "top-[14px]", open && "-translate-y-[5.5px] -rotate-45")} />
    </span>
  );
}
