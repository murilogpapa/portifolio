"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
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

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Alternar entre tema claro e escuro"
      title="Alternar tema"
      className={`flex size-11 items-center justify-center rounded-full bg-[#1c1c1f] text-[#f2f2f3] transition-colors hover:bg-[#2a2a2e] ${className}`}
    >
      {/* O ícone certo aparece via CSS, assim não há diferença entre servidor e cliente. */}
      <Sun size={18} aria-hidden="true" className="hidden dark:block" />
      <Moon size={18} aria-hidden="true" className="dark:hidden" />
    </button>
  );
}
