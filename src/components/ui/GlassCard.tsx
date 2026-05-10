import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        'vexel-glass rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-glow',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
