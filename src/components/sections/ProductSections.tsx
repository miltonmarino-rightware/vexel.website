import { motion } from 'framer-motion';
import { Bot, CalendarDays, CheckCircle2, Headphones, Workflow } from 'lucide-react';
import { automationOptions, industries, packages } from '../../data/content';
import { GlassCard } from '../ui/GlassCard';
import { SectionLabel } from '../ui/SectionLabel';

export function ProductSections() {
  return (
    <>
      <section className="relative px-5 py-32 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <GlassCard className="relative overflow-hidden lg:col-span-2">
            <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-vexel-violet/10 blur-[90px]" />
            <Bot className="h-9 w-9 text-vexel-blue" />
            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-vexel-ice sm:text-5xl">Chatbots que atendem e convertem.</h2>
            <p className="mt-4 max-w-2xl text-vexel-muted">Uma conversa VEXEL não é só resposta automática. É triagem, qualificação, encaminhamento e execução.</p>
            <div className="mt-8 space-y-4 rounded-[1.75rem] border border-white/10 bg-black/20 p-5">
              <Message side="bot" text="Olá! Como podemos ajudar o seu negócio?" />
              <Message side="user" text="Quero marcar uma avaliação." />
              <Message side="bot" text="Perfeito. Temos disponibilidade às 10:00 ou 14:00." />
              <div className="rounded-2xl border border-vexel-blue/20 bg-vexel-blue/10 p-4 text-sm text-vexel-ice">
                Novo lead qualificado · encaminhado para diagnóstico
              </div>
            </div>
          </GlassCard>
          <GlassCard className="relative overflow-hidden">
            <Headphones className="h-9 w-9 text-vexel-blue" />
            <h3 className="mt-6 text-3xl font-semibold text-vexel-ice">Voice AI</h3>
            <p className="mt-4 text-vexel-muted">Chamadas inteligentes para confirmações, lembretes e triagem.</p>
            <div className="mt-8 flex h-28 items-center gap-1 overflow-hidden rounded-3xl border border-white/10 bg-black/20 p-5">
              {Array.from({ length: 28 }).map((_, i) => <motion.span key={i} className="w-1 rounded-full bg-vexel-blue/70" animate={{ height: [12, 42 + (i % 5) * 8, 12] }} transition={{ duration: 1.8, delay: i * 0.03, repeat: Infinity }} />)}
            </div>
            <p className="mt-5 text-xs uppercase tracking-[0.18em] text-vexel-muted">Assistente VEXEL · a ouvir</p>
          </GlassCard>
          <GlassCard>
            <CalendarDays className="h-9 w-9 text-vexel-blue" />
            <h3 className="mt-6 text-3xl font-semibold text-vexel-ice">Agenda 2026</h3>
            <p className="mt-4 text-vexel-muted">Marcações, confirmações, lembretes e reagendamentos com menos falhas.</p>
            <div className="mt-7 rounded-3xl border border-white/10 bg-black/20 p-4">
              <div className="mb-4 flex items-center justify-between text-sm text-vexel-muted"><span>Junho 2026</span><span>10:00</span></div>
              <div className="grid grid-cols-7 gap-2 text-center text-xs text-vexel-muted">
                {Array.from({ length: 30 }).map((_, i) => <span key={i} className={i === 11 ? 'rounded-lg bg-vexel-blue/30 py-2 text-vexel-ice ring-1 ring-vexel-blue/60' : 'py-2'}>{i + 1}</span>)}
              </div>
            </div>
          </GlassCard>
          <GlassCard className="lg:col-span-2">
            <Workflow className="h-9 w-9 text-vexel-blue" />
            <h3 className="mt-6 text-3xl font-semibold text-vexel-ice">Workflows que removem esforço manual.</h3>
            <p className="mt-4 max-w-2xl text-vexel-muted">Notificações, CRM, emails, dashboards e tarefas repetitivas ligados numa operação mais clara.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-4">
              {automationOptions.map(({ icon: Icon, label }) => <motion.div whileHover={{ y: -5 }} key={label} className="rounded-2xl border border-white/10 bg-black/20 p-4"><Icon className="h-5 w-5 text-vexel-blue" /><p className="mt-4 text-sm text-vexel-muted">{label}</p></motion.div>)}
            </div>
          </GlassCard>
        </div>
      </section>
      <section id="sectores" className="relative px-5 py-32 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Sectores</SectionLabel>
          <h2 className="max-w-4xl text-5xl font-semibold leading-tight tracking-[-0.06em] sm:text-6xl"><span className="vexel-metal-text">Feito para negócios que precisam de executar.</span></h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ icon: Icon, name }) => <GlassCard key={name}><Icon className="h-7 w-7 text-vexel-blue" /><h3 className="mt-5 text-xl font-semibold text-vexel-ice">{name}</h3><p className="mt-3 text-sm leading-6 text-vexel-muted">Fluxos de atendimento, agenda e automação desenhados para o sector.</p></GlassCard>)}
          </div>
        </div>
      </section>
      <section id="pacotes" className="relative px-5 py-32 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Pacotes</SectionLabel>
          <h2 className="max-w-4xl text-5xl font-semibold leading-tight tracking-[-0.06em] sm:text-6xl"><span className="vexel-metal-text">Comece simples. Evolua para comando operacional.</span></h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {packages.map((pack) => <GlassCard key={pack.name}><h3 className="text-2xl font-semibold text-vexel-ice">{pack.name}</h3><p className="mt-2 text-sm text-vexel-blue">{pack.ideal}</p><ul className="mt-6 space-y-3 text-sm text-vexel-muted">{pack.items.map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-vexel-blue" />{item}</li>)}</ul><p className="mt-7 rounded-full border border-white/10 px-4 py-2 text-center text-xs uppercase tracking-[0.18em] text-vexel-muted">Sob diagnóstico</p></GlassCard>)}
          </div>
        </div>
      </section>
    </>
  );
}

function Message({ side, text }: { side: 'bot' | 'user'; text: string }) {
  return <div className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm ${side === 'bot' ? 'bg-white/[0.08] text-vexel-ice' : 'ml-auto bg-vexel-blue/25 text-vexel-ice'}`}>{text}</div>;
}
