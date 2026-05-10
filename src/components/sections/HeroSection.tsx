import { motion } from 'framer-motion';
import { Bot, CalendarCheck, GitBranch, Headphones, Sparkles } from 'lucide-react';
import { PremiumButton } from '../ui/PremiumButton';
import { GlassCard } from '../ui/GlassCard';

const chips = [
  { icon: Bot, label: 'Chatbots' },
  { icon: CalendarCheck, label: 'Agendamentos' },
  { icon: GitBranch, label: 'Workflows' },
  { icon: Headphones, label: 'Voice AI' },
];

export function HeroSection() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-vexel-silver">
            <Sparkles className="h-4 w-4 text-vexel-blue" />
            Automação inteligente para empresas
          </div>

          <h1 className="max-w-5xl text-6xl font-semibold leading-[0.95] tracking-[-0.07em] sm:text-7xl lg:text-8xl">
            <span className="vexel-metal-text block">Operational</span>
            <span className="vexel-metal-text block">Intelligence.</span>
            <span className="vexel-blue-text block">Executed.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-vexel-muted sm:text-xl">
            Sistemas que atendem, organizam e executam: chatbots, agendamentos, workflows e Voice AI para negócios que precisam de operar com precisão.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#contacto"><PremiumButton>Configurar a minha automação</PremiumButton></a>
            <a href="#serviços"><PremiumButton variant="ghost">Ver serviços</PremiumButton></a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {chips.map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-vexel-muted">
                <Icon className="mb-3 h-5 w-5 text-vexel-blue" />
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }} className="relative">
          <div className="absolute inset-0 rounded-[3rem] bg-vexel-blue/20 blur-[90px]" />
          <GlassCard className="relative overflow-hidden p-5 sm:p-7">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-vexel-muted">VEXEL Command</p>
                <h3 className="mt-2 text-2xl font-semibold text-vexel-ice">Operational Dashboard</h3>
              </div>
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-vexel-blue/80" />
                <span className="h-3 w-3 rounded-full bg-vexel-violet/80" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-vexel-muted">Leads qualificados</p>
                <p className="mt-4 text-5xl font-semibold text-vexel-ice">248</p>
                <div className="mt-5 h-2 rounded-full bg-white/10"><div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-vexel-blue to-vexel-violet" /></div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-vexel-muted">Automações activas</p>
                <p className="mt-4 text-5xl font-semibold text-vexel-ice">32</p>
                <div className="mt-5 grid grid-cols-8 gap-1">{Array.from({ length: 24 }).map((_, i) => <span key={i} className="h-10 rounded-full bg-gradient-to-t from-vexel-blue/20 to-vexel-ice/60" style={{ height: `${18 + (i % 6) * 7}px` }} />)}</div>
              </div>
            </div>

            <div className="mt-4 rounded-3xl border border-white/10 bg-black/20 p-5">
              <div className="flex items-center justify-between text-sm text-vexel-muted"><span>WhatsApp</span><span>Agenda</span><span>Workflow</span><span>Dashboard</span></div>
              <div className="relative mt-6 h-20 overflow-hidden rounded-2xl bg-white/[0.03]">
                <motion.div className="absolute left-4 top-1/2 h-px w-[88%] bg-gradient-to-r from-transparent via-vexel-blue to-transparent" animate={{ opacity: [0.25, 0.9, 0.25] }} transition={{ duration: 2.4, repeat: Infinity }} />
                <motion.div className="absolute top-1/2 h-3 w-3 rounded-full bg-vexel-ice shadow-[0_0_28px_rgba(221,235,255,.9)]" animate={{ left: ['8%', '88%', '8%'] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
