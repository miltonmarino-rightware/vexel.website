import { motion } from 'framer-motion';

export function BackgroundGrid() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="vexel-grid absolute inset-0 opacity-50" />
      <motion.div
        className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-vexel-blue/20 blur-[120px]"
        animate={{ x: [0, 80, 0], y: [0, 40, 0], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-24 top-12 h-[34rem] w-[34rem] rounded-full bg-vexel-violet/20 blur-[140px]"
        animate={{ x: [0, -70, 0], y: [0, 70, 0], opacity: [0.18, 0.38, 0.18] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[linear-gradient(120deg,transparent_20%,rgba(221,235,255,.10)_20.2%,transparent_21%,transparent_48%,rgba(138,108,255,.16)_48.2%,transparent_49%)]" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-vexel-bg to-transparent" />
    </div>
  );
}
