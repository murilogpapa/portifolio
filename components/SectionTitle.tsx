import type { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
  compact?: boolean;
};

export function SectionTitle({ children, compact = false }: SectionTitleProps) {
  return (
    <div>
      <h2 className="text-[28px] font-bold leading-none tracking-tight text-white md:whitespace-nowrap md:text-[32px]">
        {children}
      </h2>
      <div
        className={
          compact
            ? "mt-2 h-[5px] w-8 rounded-full bg-accent"
            : "mt-2.5 h-[6px] w-14 rounded-full bg-accent"
        }
      />
    </div>
  );
}
