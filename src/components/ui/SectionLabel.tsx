import type { ReactNode } from 'react';

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-vexel-silver">
      <span className="h-1.5 w-1.5 rounded-full bg-vexel-blue shadow-[0_0_18px_rgba(91,140,255,.9)]" />
      {children}
    </div>
  );
}
