import type { ReactNode } from "react";

export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/** Recuo horizontal padrão de tudo que fica dentro da coluna central. */
export const PX = "px-5 sm:px-8 lg:px-10";

/**
 * Estrutura de blueprint: coluna central com bordas verticais e laterais
 * hachuradas. As linhas horizontais vêm de `rule-t` em cada faixa.
 */
export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-x-clip">
      <div className="relative mx-auto max-w-[1360px] px-3 sm:px-6 lg:px-10">
        <div
          aria-hidden="true"
          className="hatch pointer-events-none absolute inset-y-0 left-0 w-3 border-l border-line sm:w-6 lg:w-10"
        />
        <div
          aria-hidden="true"
          className="hatch pointer-events-none absolute inset-y-0 right-0 w-3 border-r border-line sm:w-6 lg:w-10"
        />
        <div className="relative flex flex-col border-x border-line">{children}</div>
      </div>
    </div>
  );
}

/** Anotação em mono, estilo "classes do Tailwind" do blueprint. Some no celular. */
export function Note({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("rule-t hidden pt-2.5 pb-1.5 font-mono text-[11px] text-note sm:block", PX, className)}
    >
      {children}
    </div>
  );
}

/** Faixa vazia entre seções, com a linha do blueprint no topo. */
export function Spacer() {
  return <div aria-hidden="true" className="rule-t h-14 sm:h-20" />;
}

export function SectionHeader({
  id,
  title,
  subtitle,
  aside,
}: {
  id: string;
  title: string;
  subtitle?: string;
  aside?: ReactNode;
}) {
  return (
    <>
      <Note>{`<section id="${id}">`}</Note>
      <div
        data-reveal
        className={cn("rule-t flex flex-wrap items-end justify-between gap-4 py-8 sm:py-10", PX)}
      >
        <div className="flex flex-col gap-2.5">
          <h2 id={`${id}-titulo`} className="text-[2.1rem] font-semibold tracking-[-0.035em] sm:text-5xl">
            {title}
          </h2>
          {subtitle ? <p className="text-base text-muted sm:text-[17px]">{subtitle}</p> : null}
        </div>
        {aside}
      </div>
    </>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return <span className="rounded-lg bg-chip px-3 py-1.5 text-[13px] text-chip-fg">{children}</span>;
}

export function Dot() {
  return <span aria-hidden="true" className="mt-[9px] size-1.5 shrink-0 rounded-full bg-accent" />;
}
