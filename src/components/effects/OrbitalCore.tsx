import { motion } from 'framer-motion';
import { LogoMark } from '../ui/LogoMark';

export function OrbitalCore() {
  return (
    <div className="vexel-perspective relative mx-auto aspect-square w-full max-w-[34rem]">
      <motion.div
        className="vexel-orbit absolute inset-8 rounded-full border border-white/10 bg-white/[0.025] shadow-[0_0_100px_rgba(91,140,255,.20)]"
        animate={{ rotateX: [58, 62, 58], rotateZ: [0, 360] }}
        transition={{ rotateZ: { duration: 28, repeat: Infinity, ease: 'linear' }, rotateX: { duration: 8, repeat: Infinity, ease: 'easeInOut' } }}
      />
      <motion.div
        className="vexel-orbit absolute inset-16 rounded-full border border-vexel-blue/25"
        animate={{ rotateX: [68, 72, 68], rotateZ: [360, 0] }}
        transition={{ rotateZ: { duration: 22, repeat: Infinity, ease: 'linear' }, rotateX: { duration: 7, repeat: Infinity, ease: 'easeInOut' } }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full vexel-soft-ring p-px shadow-[0_0_120px_rgba(91,140,255,.26)]"
        animate={{ scale: [1, 1.04, 1], opacity: [0.78, 1, 0.78] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex h-full w-full items-center justify-center rounded-full border border-white/10 bg-vexel-bg/80 backdrop-blur-2xl">
          <LogoMark showText={false} className="scale-125" />
        </div>
      </motion.div>
      {['Chat', 'Agenda', 'Voice', 'Flow'].map((label, index) => (
        <motion.div
          key={label}
          className="absolute rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-xs uppercase tracking-[0.22em] text-vexel-muted shadow-panel backdrop-blur-xl"
          style={{
            left: index === 0 ? '2%' : index === 1 ? '66%' : index === 2 ? '8%' : '68%',
            top: index === 0 ? '20%' : index === 1 ? '25%' : index === 2 ? '70%' : '66%',
          }}
          animate={{ y: [0, -12, 0], opacity: [0.78, 1, 0.78] }}
          transition={{ duration: 4 + index * 0.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          {label}
        </motion.div>
      ))}
    </div>
  );
}
