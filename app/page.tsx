"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { MainCard } from "@/components/MainCard";
import { MobileHeader } from "@/components/MobileHeader";
import { Nav, type SectionId } from "@/components/Nav";
import { Sidebar } from "@/components/Sidebar";

const SECTIONS: SectionId[] = ["sobre", "aprendizado", "portfolio", "contato"];

function isSection(value: string): value is SectionId {
  return SECTIONS.includes(value as SectionId);
}

function readSection(): SectionId {
  if (typeof window === "undefined") return "sobre";
  const id = window.location.hash.replace("#", "");
  return isSection(id) ? id : "sobre";
}

function writeSection(id: SectionId) {
  document.documentElement.setAttribute("data-section", id);
}

export default function Home() {
  const [section, setSection] = useState<SectionId>("sobre");

  useLayoutEffect(() => {
    writeSection(section);
  }, [section]);

  useLayoutEffect(() => {
    const id = readSection();
    writeSection(id);
    setSection(id);
  }, []);

  useEffect(() => {
    const applyHash = () => {
      const id = window.location.hash.replace("#", "");
      if (isSection(id)) setSection(id);
    };
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const onChange = (id: SectionId) => {
    writeSection(id);
    setSection(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <main className="min-h-dvh bg-background">
      <div className="mx-auto flex min-h-dvh w-full min-w-0 max-w-[430px] flex-col gap-4 overflow-x-hidden px-5 py-5 md:hidden">
        <MobileHeader />
        <Nav variant="mobile" section={section} onChange={onChange} />
        <MainCard variant="mobile" section={section} />
      </div>

      <div className="desktop-shell">
        <div className="desktop-stage">
          <div className="desktop-stage-inner">
            <Sidebar />
            <MainCard
              variant="desktop"
              section={section}
              nav={
                <Nav variant="desktop" section={section} onChange={onChange} />
              }
            />
          </div>
        </div>
      </div>
    </main>
  );
}
