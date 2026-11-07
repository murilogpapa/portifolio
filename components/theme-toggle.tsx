"use client";

import { Moon, Sun } from "lucide-react";
import { cn } from "./blueprint";

export function ThemeToggle({
  label,
  title,
  className = "",
}: {
  label: string;
  title: string;
  className?: string;
}) {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("tema", next);
    } catch {
      // Sem localStorage (modo privado antigo): o tema só não fica salvo.
    }
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", next === "light" ? "#fafafa" : "#0b0b0c");
  }

  // Os dois ícones ficam empilhados; o tema decide qual aparece, girando
  // um pra fora enquanto o outro gira pra dentro. Tudo via CSS, assim não
  // há diferença entre servidor e cliente.
  const icon =
    "absolute inset-0 m-auto transition-[rotate,scale,opacity] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none";

  return (
    <button type="button" onClick={toggle} aria-label={label} title={title} className={className}>
      <span aria-hidden="true" className="relative block size-[18px]">
        <Sun
          size={18}
          className={cn(icon, "rotate-90 scale-0 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100")}
        />
        <Moon
          size={18}
          className={cn(icon, "rotate-0 scale-100 opacity-100 dark:-rotate-90 dark:scale-0 dark:opacity-0")}
        />
      </span>
    </button>
  );
}
