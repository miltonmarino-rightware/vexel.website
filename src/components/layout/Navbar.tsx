import { motion } from 'framer-motion';
import { PremiumButton } from '../ui/PremiumButton';
import { LogoMark } from '../ui/LogoMark';

const navItems = ['Serviços', 'Experiência', 'Sectores', 'Pacotes'];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-6"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-vexel-bg/72 px-4 py-3 shadow-panel backdrop-blur-2xl sm:px-5">
        <a href="#top" aria-label="VEXEL home">
          <LogoMark />
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-vexel-muted transition hover:text-vexel-ice">
              {item}
            </a>
          ))}
        </div>

        <a href="#contacto" className="hidden sm:block">
          <PremiumButton className="px-4 py-2 text-xs">Diagnóstico</PremiumButton>
        </a>
      </nav>
    </motion.header>
  );
}
