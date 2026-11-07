import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { featured, links, otherProjects, schoolProjects } from "@/lib/content";
import type { Featured, MiniProject } from "@/lib/content";
import { BrowserBar, LivePreview } from "./live-preview";
import { Chip, Dot, Note, PX, SectionHeader, Spacer, cn } from "./blueprint";

export function Projects() {
  return (
    <section id="projetos" aria-labelledby="projetos-titulo">
      <SectionHeader
        id="projetos"
        title="Projetos"
        subtitle="Dois deles estão rodando aqui dentro: pode rolar e clicar."
        aside={
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center gap-1.5 text-[15px] text-t3 transition-colors hover:text-fg"
          >
            Tudo no GitHub
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        }
      />

      {featured.map((project, i) => (
        <FeaturedProject key={project.id} project={project} reverse={i % 2 === 1} />
      ))}

      <Note>grid grid-cols-3 gap-px</Note>
      <MiniGroup title="Outros projetos" items={otherProjects} />
      <MiniGroup title="Faculdade e cursos" items={schoolProjects} />
      <Spacer />
    </section>
  );
}

function FeaturedProject({ project, reverse }: { project: Featured; reverse: boolean }) {
  return (
    <article
      id={project.id}
      aria-labelledby={`${project.id}-nome`}
      data-reveal
      className={cn(
        "rule-t grid",
        reverse
          ? "lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]"
          : "lg:grid-cols-[minmax(0,1fr)_minmax(0,1.55fr)]",
      )}
    >
      <div className={cn("flex flex-col gap-5 py-10 sm:py-12", PX, reverse && "lg:order-2")}>
        <div className="flex flex-wrap gap-2 font-mono text-xs tracking-[0.06em] uppercase">
          <span
            className={cn(
              "rounded-full px-2.5 py-1.5",
              project.highlight ? "bg-accent-soft text-accent" : "bg-chip text-muted",
            )}
          >
            {project.badge}
          </span>
          <span className="rounded-full bg-chip px-2.5 py-1.5 text-muted">{project.kind}</span>
        </div>
        <h3 id={`${project.id}-nome`} className="text-4xl font-semibold tracking-[-0.03em] sm:text-[40px]">
          {project.name}
        </h3>
        <p className="text-base leading-relaxed text-pretty text-t2 sm:text-[17px]">{project.description}</p>
        {project.bullets.length > 0 ? (
          <ul className="flex flex-col gap-3 text-[15px] leading-normal text-t3">
            {project.bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <Dot />
                {b}
              </li>
            ))}
          </ul>
        ) : null}
        <ul aria-label="Tecnologias" className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <li key={s}>
              <Chip>{s}</Chip>
            </li>
          ))}
        </ul>
        {project.live ? (
          <a
            href={project.live.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center gap-1.5 self-start text-[15px] font-medium text-accent hover:underline hover:underline-offset-4"
          >
            Abrir {project.live.label}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        ) : null}
      </div>

      <div
        className={cn(
          "hatch flex min-w-0 flex-col gap-2.5 border-t border-line p-3 sm:p-6 lg:border-t-0 lg:p-8",
          reverse ? "lg:order-1 lg:border-r" : "lg:border-l",
        )}
      >
        {project.live ? (
          <>
            <span aria-hidden="true" className="hidden font-mono text-[11px] text-note sm:block">
              {`<iframe src="${project.live.url}" />`}
            </span>
            <LivePreview url={project.live.url} label={project.live.label} title={project.name} />
          </>
        ) : project.image ? (
          <>
            <span aria-hidden="true" className="hidden font-mono text-[11px] text-note sm:block">
              {`<img src="${project.image.src}" />`}
            </span>
            <figure className="m-0 overflow-hidden rounded-[14px] border border-line-strong bg-card shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
              <BrowserBar label="Ficha de personagem · uso privado do grupo" />
              <Image
                src={project.image.src}
                alt={project.image.alt}
                width={project.image.width}
                height={project.image.height}
                sizes="(min-width: 1360px) 760px, (min-width: 1024px) 56vw, 100vw"
                className="block h-auto w-full"
              />
            </figure>
          </>
        ) : null}
      </div>
    </article>
  );
}

function MiniGroup({ title, items }: { title: string; items: MiniProject[] }) {
  return (
    <>
      <div className={cn("rule-t pt-7 pb-5", PX)}>
        <h3 className="font-mono text-xs font-medium tracking-[0.08em] text-dim uppercase">{title}</h3>
      </div>
      <ul data-reveal className="grid gap-px border-t border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => {
          const lastOdd = items.length % 2 === 1 && i === items.length - 1;
          const cell = "flex h-full flex-col gap-3 bg-bg py-7 px-5 sm:px-8";
          const body = (
            <>
              <span className="font-mono text-xs tracking-[0.06em] text-dim uppercase">{item.meta}</span>
              <span className="text-[22px] font-semibold tracking-[-0.02em]">{item.name}</span>
              <span className="text-[15px] leading-relaxed text-t3">{item.description}</span>
              <span className="mt-auto pt-2 font-mono text-xs text-dim">{item.stack}</span>
            </>
          );
          return (
            <li key={item.name} className={cn("flex", lastOdd && "sm:col-span-2 lg:col-span-1")}>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(cell, "group w-full transition-colors hover:bg-hover")}
                >
                  {body}
                  <span className="flex items-center gap-1.5 text-sm text-accent">
                    {item.cta ?? "Ver projeto"}
                    <ArrowRight
                      size={14}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </a>
              ) : (
                <div className={cn(cell, "w-full")}>{body}</div>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
