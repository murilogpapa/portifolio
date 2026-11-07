import { links, profile } from "@/lib/content";
import type { Content } from "@/lib/content";
import { Note, PX, cn } from "./blueprint";

const secondary =
  "flex min-h-12 items-center rounded-full border border-white/15 px-5 text-[15px] font-medium text-[#f2f2f3] transition-colors hover:bg-white/10";

export function Contact({ c }: { c: Content }) {
  return (
    <>
      <Note>{`<section id="contato">`}</Note>
      <section id="contato" aria-labelledby="contato-titulo" className="rule-t hatch p-3 sm:p-6 lg:p-10">
        <div
          data-reveal
          className="flex flex-col items-center gap-6 rounded-[28px] border border-island-line bg-black px-5 py-14 text-center text-[#f2f2f3] sm:rounded-[32px] sm:px-10 sm:py-20 lg:py-24"
        >
          <span className="flex min-h-9 items-center gap-2.5 rounded-full bg-[rgb(74_222_128/0.1)] px-4 text-sm font-medium text-[#86efac]">
            <span aria-hidden="true" className="animate-ping-soft size-2 rounded-full bg-[#4ade80]" />
            {c.profile.status}
          </span>
          <h2
            id="contato-titulo"
            className="text-4xl leading-[1.05] font-semibold tracking-[-0.035em] text-balance sm:text-5xl lg:text-6xl"
          >
            {c.ui.contactTitle}
          </h2>
          <p className="max-w-[560px] text-base leading-relaxed text-pretty text-[#b4b4bb] sm:text-lg">
            {c.ui.contactText}
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="border-b border-white/30 pb-1 text-xl font-medium tracking-[-0.01em] break-all transition-colors hover:border-white sm:text-[26px] lg:text-3xl"
          >
            {profile.email}
          </a>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className={secondary}>
              LinkedIn
            </a>
            <a href={links.github} target="_blank" rel="noopener noreferrer" className={secondary}>
              GitHub
            </a>
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className={secondary}>
              WhatsApp
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener"
              className="flex min-h-12 items-center rounded-full bg-[#f2f2f3] px-[22px] text-[15px] font-semibold text-[#0b0b0c] transition-opacity hover:opacity-90"
            >
              {c.ui.resume}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export function Footer() {
  return (
    <footer
      className={cn(
        "rule-t flex flex-wrap justify-between gap-3 pt-6 pb-10 font-mono text-[13px] text-dim",
        PX,
      )}
    >
      <span>{profile.fullName} · São Paulo</span>
      <span>murilogp.dev</span>
    </footer>
  );
}
