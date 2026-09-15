"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillLogo } from "@/components/SkillLogo";
import { skillList, type Skill, type SkillLevel } from "@/lib/content";

const DESKTOP_VISIBLE = 4;
const DESKTOP_GAP = 16;
const MOBILE_PER_PAGE = 4;

function chunk<T>(items: readonly T[], size: number): T[][] {
  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size) as T[]);
  }
  return pages;
}

function levelFill(level: SkillLevel): number {
  if (level === "Básico") return 1;
  if (level === "Intermediário") return 2;
  return 3;
}

export function SkillsCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [viewportW, setViewportW] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [index, setIndex] = useState(0);
  const [instant, setInstant] = useState(false);
  const [locked, setLocked] = useState(false);
  const [openKey, setOpenKey] = useState<string | null>(null);

  const pages = useMemo(() => chunk(skillList, MOBILE_PER_PAGE), []);
  const pageCount = pages.length;

  useEffect(() => {
    const desktopMq = window.matchMedia("(min-width: 768px)");
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      setIsDesktop(desktopMq.matches);
      setReduced(motionMq.matches);
    };
    sync();
    desktopMq.addEventListener("change", sync);
    motionMq.addEventListener("change", sync);
    return () => {
      desktopMq.removeEventListener("change", sync);
      motionMq.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setViewportW(el.clientWidth);
    });
    ro.observe(el);
    setViewportW(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    setInstant(true);
    setLocked(false);
    if (reduced) {
      setIndex(0);
      return;
    }
    setIndex(isDesktop ? DESKTOP_VISIBLE : 1);
  }, [isDesktop, reduced]);

  useEffect(() => {
    if (!instant) return;
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setInstant(false));
    });
    return () => cancelAnimationFrame(id);
  }, [instant, index]);

  const desktopTrack = useMemo(() => {
    if (reduced) return [...skillList];
    return [
      ...skillList.slice(-DESKTOP_VISIBLE),
      ...skillList,
      ...skillList.slice(0, DESKTOP_VISIBLE),
    ];
  }, [reduced]);

  const mobileTrack = useMemo(() => {
    if (reduced || pageCount === 0) return pages;
    return [pages[pageCount - 1], ...pages, pages[0]];
  }, [pages, pageCount, reduced]);

  const cardW =
    viewportW > 0
      ? (viewportW - DESKTOP_GAP * (DESKTOP_VISIBLE - 1)) / DESKTOP_VISIBLE
      : 0;

  const shift = isDesktop
    ? index * (cardW + DESKTOP_GAP)
    : index * viewportW;

  useEffect(() => {
    if (!locked) return;
    const timeout = window.setTimeout(() => setLocked(false), 520);
    return () => window.clearTimeout(timeout);
  }, [locked, index]);

  useEffect(() => {
    if (!openKey) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenKey(null);
    };
    const onPointer = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("[data-skill-card]")) return;
      setOpenKey(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [openKey]);

  const go = useCallback(
    (dir: 1 | -1) => {
      setOpenKey(null);
      if (locked && !reduced) return;
      if (reduced) {
        if (isDesktop) {
          setIndex((value) => (value + dir + skillList.length) % skillList.length);
        } else {
          setIndex((value) => (value + dir + pageCount) % pageCount);
        }
        return;
      }
      setLocked(true);
      setIndex((value) => value + dir);
    },
    [isDesktop, locked, pageCount, reduced],
  );

  const onTransitionEnd = () => {
    if (reduced) {
      setLocked(false);
      return;
    }
    if (isDesktop) {
      const n = skillList.length;
      if (index >= n + DESKTOP_VISIBLE) {
        setInstant(true);
        setIndex(DESKTOP_VISIBLE);
      } else if (index < DESKTOP_VISIBLE) {
        setInstant(true);
        setIndex(index + n);
      }
    } else if (index >= pageCount + 1) {
      setInstant(true);
      setIndex(1);
    } else if (index <= 0) {
      setInstant(true);
      setIndex(pageCount);
    }
    setLocked(false);
  };

  const animate = !reduced && !instant && viewportW > 0;

  const toggle = (key: string) => {
    setOpenKey((current) => (current === key ? null : key));
  };

  return (
    <section className="mt-5 flex min-h-0 flex-1 flex-col md:mt-10 md:flex-none">
      <SectionTitle compact>Skills</SectionTitle>
      <div className="relative mt-5 flex min-h-[16rem] flex-1 flex-col md:mt-6 md:h-[168px] md:min-h-[168px] md:flex-none">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Skills anteriores"
          className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#0e0e0e]/75 text-white transition-colors hover:text-accent"
        >
          <ChevronLeft className="size-7" strokeWidth={2.2} aria-hidden="true" />
        </button>

        <div
          ref={viewportRef}
          className="relative mx-11 min-h-[16rem] flex-1 overflow-hidden md:mx-12 md:h-[168px] md:min-h-[168px] md:flex-none"
        >
          {isDesktop ? (
            <ul
              className={`flex h-full ${animate ? "skills-track" : "skills-track is-instant"}`}
              style={{
                gap: DESKTOP_GAP,
                transform:
                  cardW > 0 ? `translateX(-${shift}px)` : "translateX(0)",
              }}
              onTransitionEnd={onTransitionEnd}
            >
              {desktopTrack.map((skill, slot) => {
                const cardKey = `${skill.id}-d-${slot}`;
                return (
                  <li
                    key={cardKey}
                    className={`h-full shrink-0 ${openKey === cardKey ? "z-10" : "z-0"}`}
                    style={{ width: cardW > 0 ? cardW : undefined, flexBasis: cardW || undefined }}
                  >
                    <SkillCard
                      skill={skill}
                      cardKey={cardKey}
                      open={openKey === cardKey}
                      roundedClass="rounded-[24px]"
                      onToggle={() => toggle(cardKey)}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <div
              className={`absolute inset-y-0 left-0 flex h-full ${animate ? "skills-track" : "skills-track is-instant"}`}
              style={{
                transform: viewportW > 0 ? `translateX(-${shift}px)` : "translateX(0)",
              }}
              onTransitionEnd={onTransitionEnd}
            >
              {mobileTrack.map((page, pageIndex) => (
                <ul
                  key={`page-${pageIndex}`}
                  className="grid h-full shrink-0 grid-cols-2 grid-rows-2 gap-3"
                  style={{ width: viewportW > 0 ? viewportW : "100%" }}
                >
                  {page.map((skill, slot) => {
                    const cardKey = `${skill.id}-m-${pageIndex}-${slot}`;
                    return (
                      <li
                        key={cardKey}
                        className={`min-h-0 ${openKey === cardKey ? "z-10" : "z-0"}`}
                      >
                        <SkillCard
                          skill={skill}
                          cardKey={cardKey}
                          open={openKey === cardKey}
                          roundedClass="rounded-[22px]"
                          onToggle={() => toggle(cardKey)}
                        />
                      </li>
                    );
                  })}
                </ul>
              ))}
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Próximas skills"
          className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#0e0e0e]/75 text-white transition-colors hover:text-accent"
        >
          <ChevronRight className="size-7" strokeWidth={2.2} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}

function SkillCard({
  skill,
  cardKey,
  open,
  roundedClass,
  onToggle,
}: {
  skill: Skill;
  cardKey: string;
  open: boolean;
  roundedClass: string;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      data-skill-card={cardKey}
      aria-expanded={open}
      aria-label={`${skill.label}, nível ${skill.level}`}
      onClick={onToggle}
      className={`skill-scene h-full w-full cursor-pointer border-0 bg-transparent p-0 ${open ? "is-open" : ""}`}
    >
      <div className={`skill-inner h-full w-full ${open ? "is-flipped" : ""}`}>
        <div
          className={`skill-face skill-front ${roundedClass} ${skill.bg}`}
        >
          <SkillLogo id={skill.id} label={skill.label} />
        </div>
        <div className={`skill-face skill-back ${roundedClass} ${skill.bg}`}>
          <span className="text-[14px] font-semibold leading-tight text-white md:text-[15px]">
            {skill.label}
          </span>
          <span className="mt-1 text-[12px] leading-tight text-[#c8c8c8]">
            {skill.level}
          </span>
          <LevelDots level={skill.level} />
        </div>
      </div>
    </button>
  );
}

function LevelDots({ level }: { level: SkillLevel }) {
  const filled = levelFill(level);
  return (
    <span className="mt-2.5 flex items-center gap-1.5" aria-hidden="true">
      {[1, 2, 3].map((n) => (
        <span
          key={n}
          className={`h-1.5 w-1.5 rounded-full ${
            n <= filled ? "bg-white" : "bg-white/15"
          }`}
        />
      ))}
    </span>
  );
}
