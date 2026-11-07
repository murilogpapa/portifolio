import type { Content, TimelineItem } from "@/lib/content";
import { PX, SectionHeader, Spacer, cn } from "./blueprint";

export function Stack({ c }: { c: Content }) {
  return (
    <section id="stack" aria-labelledby="stack-titulo">
      <SectionHeader id="stack" title="Stack" subtitle={c.ui.stackSubtitle} />
      <dl data-reveal className="m-0 grid gap-px border-t border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {c.stack.map((group) => (
          <div key={group.area} className="flex flex-col gap-3 bg-bg px-5 py-7 sm:px-8">
            <dt className="font-mono text-xs font-medium tracking-[0.08em] text-accent uppercase">
              {group.area}
            </dt>
            <dd className="m-0 text-base leading-[1.7] text-chip-fg">{group.items}</dd>
          </div>
        ))}
      </dl>
      <Spacer />
    </section>
  );
}

export function Timeline({ c }: { c: Content }) {
  return (
    <section id="trajetoria" aria-labelledby="trajetoria-titulo">
      <SectionHeader id="trajetoria" title={c.ui.timelineTitle} />
      <div data-reveal className="rule-t grid lg:grid-cols-2">
        <TimelineColumn title={c.ui.experience} items={c.experience} />
        <TimelineColumn
          title={c.ui.education}
          items={c.education}
          className="border-t border-line lg:border-t-0 lg:border-l"
        />
      </div>
      <Spacer />
    </section>
  );
}

function TimelineColumn({
  title,
  items,
  className,
}: {
  title: string;
  items: TimelineItem[];
  className?: string;
}) {
  return (
    <div className={cn("flex min-w-0 flex-col pt-7 pb-3", PX, className)}>
      <h3 className="mb-2 font-mono text-xs font-medium tracking-[0.08em] text-dim uppercase">{title}</h3>
      <ol className="flex flex-col">
        {items.map((item) => (
          <li key={item.title} className="flex flex-col gap-1.5 border-t border-line py-5">
            <span className="font-mono text-[13px] text-dim">{item.period}</span>
            <span className="text-lg font-semibold sm:text-[19px]">{item.title}</span>
            <span className="text-[15px] leading-relaxed text-t3">{item.description}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
