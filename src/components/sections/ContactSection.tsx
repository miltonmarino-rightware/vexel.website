import { LeadForm } from '../forms/LeadForm';
import { SectionLabel } from '../ui/SectionLabel';

export function ContactSection() {
  return (
    <section id="contacto" className="relative px-5 py-28 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionLabel>Diagnóstico</SectionLabel>
          <h2 className="text-5xl font-semibold leading-tight tracking-[-0.06em] sm:text-6xl">
            <span className="vexel-metal-text">Pronto para automatizar?</span>
            <span className="vexel-blue-text block">Fale com a VEXEL.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-vexel-muted">
            Vamos analisar o seu atendimento, agenda e processos para desenhar a solução certa: Chatbot, Agenda, Workflow, Voice AI ou Command.
          </p>
          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 text-sm text-vexel-muted">
            <p className="font-semibold text-vexel-ice">Backend-ready</p>
            <p className="mt-2">Este formulário já está preparado para comunicar com uma API Dart Frog através de VITE_VEXEL_API_URL.</p>
          </div>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}
