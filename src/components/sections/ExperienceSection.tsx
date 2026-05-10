import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare, PhoneCall, Zap } from 'lucide-react';
import { flowNodes, leadStates } from '../../data/content';
import { GlassCard } from '../ui/GlassCard';
import { SectionLabel } from '../ui/SectionLabel';

export function ExperienceSection() {
  return (
    <section id="experiência" className="relative px-5 py-28 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Seamless experience</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <h2 className="text-5xl font-semibold leading-tight tracking-[-0.06em] sm:text-6xl">
              <span className="vexel-metal-text">Uma camada inteligente entre clientes, equipa e operação.</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-vexel-muted">
              O website da VEXEL também demonstra o que a empresa faz: transformar canais soltos em fluxos claros, conectados e prontos para executar.
            </p>
          </div>

          <GlassCard className="overflow-hidden">
            <div className="grid gap-3 sm:grid-cols-3">
              {flowNodes.slice(0, 9).map((node, index) => (
                <motion.div
                  key={node}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center text-sm text-vexel-muted"
                >
                  {node}
                </motion.div>
              ))}
            </div>
            <div className="relative my-8 h-28 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]">
              <motion.div className="absolute left-8 top-1/2 h-px w-[86%] bg-gradient-to-r from-transparent via-vexel-blue to-transparent" />
              {[0, 1, 2, 3].map((i) => (
                <motion.span
                  key={i}
                  className="absolute top-1/2 h-3 w-3 rounded-full bg-vexel-ice shadow-[0_0_32px_rgba(221,235,255,.85)]"
                  animate={{ left: ['8%', '88%'], opacity: [0, 1, 0] }}
                  transition={{ duration: 4.2, delay: i * 0.8, repeat: Infinity, ease: 'easeInOut' }}
                />
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-4">
              {[MessageSquare, PhoneCall, Zap, CheckCircle2].map((Icon, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <Icon className="h-5 w-5 text-vexel-blue" />
                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-vexel-muted">{leadStates[i]}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
