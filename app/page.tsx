"use client";

import { useEffect, useState } from "react";
import { MainCard } from "@/components/MainCard";
import { MobileHeader } from "@/components/MobileHeader";
import { Nav, type SectionId } from "@/components/Nav";
import { Sidebar } from "@/components/Sidebar";

const SECTIONS: SectionId[] = ["sobre", "aprendizado", "portfolio", "contato"];

function isSection(value: string): value is SectionId {
  return SECTIONS.includes(value as SectionId);
}

export default function Home() {
  const [section, setSection] = useState<SectionId>("sobre");

  useEffect(() => {
    const applyHash = () => {
      const id = window.location.hash.replace("#", "");
      if (isSection(id)) setSection(id);
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const onChange = (id: SectionId) => {
    setSection(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <main className="min-h-dvh bg-background">
      <div className="mx-auto flex w-full min-w-0 max-w-[430px] flex-col gap-3 overflow-x-hidden px-[18px] py-5 md:hidden">
        <MobileHeader />
        <Nav variant="mobile" section={section} onChange={onChange} />
        <MainCard section={section} />
      </div>

      <div className="mx-auto hidden min-h-dvh w-full max-w-[1520px] items-center gap-6 px-8 py-8 md:flex lg:gap-8 lg:px-12 xl:px-16">
        <Sidebar />
        <MainCard
          section={section}
          nav={<Nav variant="desktop" section={section} onChange={onChange} />}
        />
      </div>
    </main>
  );
}
