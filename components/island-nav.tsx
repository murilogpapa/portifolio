"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/content";
import { ThemeToggle } from "./theme-toggle";

export function IslandNav() {
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

  return (
    <header className="pointer-events-none sticky top-0 z-50 flex justify-center px-3 pt-3 pb-3 sm:pt-4">
      <div ref={wrapRef} className="pointer-events-auto relative max-w-full">
        <nav
          aria-label="Principal"
          className="animate-rise flex items-center gap-0.5 rounded-full border border-island-line bg-black p-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
        >
          <a
            href="#topo"
            className="flex items-center gap-2.5 rounded-full py-2 pr-3.5 pl-2 text-[15px] font-semibold text-[#f2f2f3]"
          >
            <Image
              src="/avatar-nav.png"
              alt=""
              width={30}
              height={30}
              preload
              className="size-[30px] rounded-full bg-[#f2f2f3]"
            />
            Murilo
          </a>
          <ul className="hidden items-center gap-0.5 md:flex">
            {nav.map((item) => (
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
          <ThemeToggle className="ml-1" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="ml-0.5 flex size-11 items-center justify-center rounded-full bg-[#1c1c1f] text-[#f2f2f3] transition-colors hover:bg-[#2a2a2e] md:hidden"
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </nav>

        {open ? (
          <div
            id="menu-mobile"
            className="animate-rise absolute top-full left-1/2 mt-2 w-[min(88vw,320px)] -translate-x-1/2 rounded-3xl border border-island-line bg-black p-2 shadow-[0_20px_50px_rgba(0,0,0,0.35)] md:hidden"
            style={{ animationDuration: "0.35s" }}
          >
            <ul className="flex flex-col">
              {nav.map((item) => (
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
        ) : null}
      </div>
    </header>
  );
}
