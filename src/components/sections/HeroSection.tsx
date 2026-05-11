import { motion } from 'framer-motion';
import { Bot, CalendarCheck, GitBranch, Headphones, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { OrbitalCore } from '../effects/OrbitalCore';
import { PremiumButton } from '../ui/PremiumButton';

const chips = [
  { icon: Bot, label: 'Chatbots' },
  { icon: CalendarCheck, label: 'Agendamentos' },
  { icon: GitBranch, label: 'Workflows' },
  { icon: Headphones, label: 'Voice AI' },
];

export function HeroSection() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-10">
      <div className="absolute left-1/2 top-28 h-px w-[84%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-vexel-silver">
            <Sparkles className="h-4 w-4 text-vexel-blue" />
            Seamless automation systems
          </div>

          <h1 className="max-w-5xl text-6xl font-semibold leading-[0.92] tracking-[-0.075em] sm:text-7xl lg:text-8xl">
            <span className="vexel-metal-text block">Operational</span>
            <span className="vexel-metal-text block">Intelligence.</span>
            <span className="vexel-blue-text block">Executed.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-vexel-muted sm:text-xl">
            Automação inteligente para empresas que precisam atender melhor, organizar processos e executar com precisão — sem parecer uma operação comum.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#contacto"><PremiumButton>Configurar a minha automação</PremiumButton></a>
            <a href="#experiência"><PremiumButton variant="ghost">Ver experiência</PremiumButton></a>
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
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Metric icon={Zap} label="Tempo poupado" value="72%" />
            <Metric icon={ShieldCheck} label="Fluxos seguros" value="24/7" />
            <Metric icon={Bot} label="Leads activos" value="248" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Metric({ icon: Icon, label, value }: { icon: typeof Zap; label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-panel backdrop-blur-xl">
      <Icon className="h-5 w-5 text-vexel-blue" />
      <p className="mt-4 text-2xl font-semibold text-vexel-ice">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-vexel-muted">{label}</p>
    </div>
  );
}
