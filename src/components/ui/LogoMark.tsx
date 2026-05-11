import { cn } from '../../lib/utils';

type LogoMarkProps = {
  className?: string;
  showText?: boolean;
  variant?: 'symbol' | 'wordmark';
};

export function LogoMark({ className, variant = 'wordmark' }: LogoMarkProps) {
  return (
    <div className={cn('flex items-center', className)}>
      <img
        src="/brand/logo.png"
        alt="VEXEL logo"
        className={cn(
          'block object-contain drop-shadow-[0_0_26px_rgba(141,171,255,.20)]',
          variant === 'symbol' ? 'h-16 w-36 sm:h-20 sm:w-44' : 'h-10 w-40 sm:h-12 sm:w-52',
        )}
        loading="eager"
      />
    </div>
  );
}
