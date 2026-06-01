import { motion } from 'framer-motion';
import { Bot, CalendarCheck, GitBranch, Headphones, LayoutDashboard, MessageSquare, Sparkles } from 'lucide-react';
import { OrbitalCore } from '../effects/OrbitalCore';
import { PremiumButton } from '../ui/PremiumButton';

const chips = [
  { icon: Bot, label: 'Atendimento' },
  { icon: MessageSquare, label: 'Comunicação' },
  { icon: GitBranch, label: 'Operação' },
  { icon: LayoutDashboard, label: 'Controlo' },
];

const capabilities = [
  { icon: MessageSquare, label: 'WhatsApp' },
  { icon: Headphones, label: 'Voice AI' },
  { icon: CalendarCheck, label: 'Workflows' },
  { icon: LayoutDashboard, label: 'Dashboards' },
];

export function HeroSection() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-10">
      <div className="absolute left-1/2 top-28 h-px w-[84%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-vexel-silver">
            <Sparkles className="h-4 w-4 text-vexel-blue" />
            Operational Intelligence
          </div>

          <h1 className="max-w-5xl text-6xl font-semibold leading-[0.92] tracking-[-0.075em] sm:text-7xl lg:text-8xl">
            <span className="vexel-metal-text block">Operational</span>
            <span className="vexel-metal-text block">Intelligence.</span>
            <span className="vexel-blue-text block">Executed.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-vexel-muted sm:text-xl">
            A VEXEL constrói sistemas de Operação Inteligente que conectam atendimento, comunicação, processos e execução numa única camada operacional.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#contacto"><PremiumButton>Solicitar Diagnóstico Operacional</PremiumButton></a>
            <a href="#experiência"><PremiumButton variant="ghost">Ver Camada VEXEL</PremiumButton></a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {chips.map(({ icon: Icon, label }) => (
              <motion.div whileHover={{ y: -4, scale: 1.02 }} key={label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-vexel-muted backdrop-blur-xl">
                <Icon className="mb-3 h-5 w-5 text-vexel-blue" />
                <span className="text-sm">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }} className="relative">
          <div className="absolute inset-0 rounded-full bg-vexel-blue/20 blur-[120px]" />
          <OrbitalCore />
          <div className="mt-6 grid gap-4 sm:grid-cols-4">
            {capabilities.map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-panel backdrop-blur-xl">
                <Icon className="h-5 w-5 text-vexel-blue" />
                <p className="mt-4 text-sm font-semibold text-vexel-ice">{label}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-vexel-muted">capacidade</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
