import { cn } from '../../lib/utils';

type LogoMarkProps = {
  className?: string;
  showText?: boolean;
};

export function LogoMark({ className, showText = true }: LogoMarkProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="relative h-10 w-12">
        <span className="absolute left-1 top-1 h-9 w-2 origin-bottom -rotate-35 rounded-full bg-gradient-to-b from-white via-vexel-ice to-vexel-silver shadow-[0_0_30px_rgba(221,235,255,.22)]" />
        <span className="absolute left-5 top-1 h-9 w-2 origin-bottom rotate-35 rounded-full bg-gradient-to-b from-white via-vexel-ice to-vexel-silver" />
        <span className="absolute left-6 top-5 h-5 w-2 origin-bottom rotate-35 rounded-full bg-gradient-to-b from-vexel-violet via-vexel-blue to-vexel-ice shadow-[0_0_28px_rgba(91,140,255,.55)]" />
      </div>
      {showText && <span className="text-sm font-semibold uppercase tracking-[0.35em] text-vexel-ice">VEXEL</span>}
    </div>
  );
}
