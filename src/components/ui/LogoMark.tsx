import { cn } from '../../lib/utils';

type LogoMarkProps = {
  className?: string;
  showText?: boolean;
  variant?: 'symbol' | 'wordmark';
};

export function LogoMark({ className, variant = 'wordmark' }: LogoMarkProps) {
  const isSymbol = variant === 'symbol';

  return (
    <div className={cn('flex items-center', className)}>
      <img
        src={isSymbol ? '/brand/symbol.png' : '/brand/logo.png'}
        alt={isSymbol ? 'VEXEL symbol' : 'VEXEL logo'}
        className={cn(
          'block object-contain drop-shadow-[0_0_26px_rgba(141,171,255,.20)]',
          isSymbol ? 'h-20 w-20 sm:h-24 sm:w-24' : 'h-10 w-40 sm:h-12 sm:w-56',
        )}
        loading="eager"
      />
    </div>
  );
}
