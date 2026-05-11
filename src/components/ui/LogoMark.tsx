import { cn } from '../../lib/utils';

type LogoMarkProps = {
  className?: string;
  showText?: boolean;
  variant?: 'symbol' | 'wordmark';
};

export function LogoMark({ className, showText = true, variant = 'wordmark' }: LogoMarkProps) {
  const src = variant === 'symbol' || !showText ? '/brand/vexel-symbol.svg' : '/brand/vexel-wordmark.svg';
  const alt = variant === 'symbol' || !showText ? 'VEXEL symbol' : 'VEXEL logo';

  return (
    <div className={cn('flex items-center', className)}>
      <img
        src={src}
        alt={alt}
        className={cn(
          'block object-contain drop-shadow-[0_0_26px_rgba(141,171,255,.20)]',
          variant === 'symbol' || !showText ? 'h-11 w-11' : 'h-10 w-40 sm:w-44',
        )}
        loading="eager"
      />
    </div>
  );
}
