"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillLogo } from "@/components/SkillLogo";
import { skillList } from "@/lib/content";

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

export function SkillsCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [viewportW, setViewportW] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [index, setIndex] = useState(0);
  const [instant, setInstant] = useState(false);
  const [locked, setLocked] = useState(false);

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

  const go = useCallback(
    (dir: 1 | -1) => {
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
              {desktopTrack.map((skill, slot) => (
                <li
                  key={`${skill.id}-d-${slot}`}
                  className={`flex h-full shrink-0 items-center justify-center rounded-[24px] ${skill.bg}`}
                  style={{ width: cardW > 0 ? cardW : undefined, flexBasis: cardW || undefined }}
                >
                  <span className="sr-only">{skill.label}</span>
                  <SkillLogo id={skill.id} label={skill.label} />
                </li>
              ))}
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
                  {page.map((skill, slot) => (
                    <li
                      key={`${skill.id}-m-${pageIndex}-${slot}`}
                      className={`flex min-h-0 items-center justify-center rounded-[22px] ${skill.bg}`}
                    >
                      <span className="sr-only">{skill.label}</span>
                      <SkillLogo id={skill.id} label={skill.label} />
                    </li>
                  ))}
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
