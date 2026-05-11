import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare, PhoneCall, Zap } from 'lucide-react';
import { flowNodes, leadStates } from '../../data/content';
import { GlassCard } from '../ui/GlassCard';
import { SectionLabel } from '../ui/SectionLabel';

export function ExperienceSection() {
  return (
    <section id="experiência" className="vexel-section-fade relative overflow-hidden px-5 py-32 sm:px-8 lg:px-10">
      <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-vexel-blue/30 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Seamless experience</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="text-5xl font-semibold leading-tight tracking-[-0.06em] sm:text-6xl">
              <span className="vexel-metal-text">Uma camada inteligente entre clientes, equipa e operação.</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-vexel-muted">
              A experiência VEXEL conecta canais, dados, atendimento e decisões numa linha operacional contínua — sem fricção, sem ruído, sem processos soltos.
            </p>
          </div>

          <GlassCard className="relative overflow-hidden p-4 sm:p-6">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-vexel-blue/15 blur-[90px]" />
            <div className="grid gap-3 sm:grid-cols-3">
              {flowNodes.slice(0, 9).map((node, index) => (
                <motion.div
                  key={node}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className={index === 4 ? 'rounded-2xl border border-vexel-blue/35 bg-vexel-blue/10 p-4 text-center text-sm font-semibold text-vexel-ice shadow-glow' : 'rounded-2xl border border-white/10 bg-black/20 p-4 text-center text-sm text-vexel-muted'}
                >
                  {node}
                </motion.div>
              ))}
            </div>
            <div className="relative my-8 h-36 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]">
              <motion.div className="absolute left-8 top-1/2 h-px w-[86%] bg-gradient-to-r from-transparent via-vexel-blue to-transparent" />
              <div className="absolute inset-x-10 top-1/2 flex -translate-y-1/2 justify-between">
                {Array.from({ length: 8 }).map((_, i) => <span key={i} className="h-2 w-2 rounded-full border border-vexel-blue/40 bg-vexel-bg" />)}
              </div>
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.span
                  key={i}
                  className="absolute top-1/2 h-3 w-3 rounded-full bg-vexel-ice shadow-[0_0_32px_rgba(221,235,255,.85)]"
                  animate={{ left: ['8%', '88%'], opacity: [0, 1, 0] }}
                  transition={{ duration: 4.8, delay: i * 0.65, repeat: Infinity, ease: 'easeInOut' }}
                />
              ))}
              <p className="absolute bottom-5 left-6 text-xs uppercase tracking-[0.22em] text-vexel-muted">Data flow / routing / execution</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-4">
              {[MessageSquare, PhoneCall, Zap, CheckCircle2].map((Icon, i) => (
                <motion.div whileHover={{ y: -5 }} key={i} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <Icon className="h-5 w-5 text-vexel-blue" />
                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-vexel-muted">{leadStates[i]}</p>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
