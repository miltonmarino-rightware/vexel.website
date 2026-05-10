import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

type PremiumButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'primary' | 'ghost';
};

export function PremiumButton({ children, className, variant = 'primary', ...props }: PremiumButtonProps) {
  return (
    <button
      className={cn(
        'group inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-semibold transition duration-300',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vexel-blue',
        variant === 'primary'
          ? 'border border-white/20 bg-white text-vexel-bg shadow-glow hover:scale-[1.02] hover:bg-vexel-ice'
          : 'border border-white/15 bg-white/[0.04] text-vexel-ice hover:bg-white/[0.08]',
        className,
      )}
      {...props}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </button>
  );
}
