import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from 'lucide-react';
import { submitLead } from '../../lib/api';
import { leadSchema, type LeadPayload } from '../../lib/validators';

const inputClass = 'w-full rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm text-vexel-ice outline-none transition placeholder:text-vexel-muted/55 focus:border-vexel-blue/60 focus:bg-white/[0.07]';

export function LeadForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { register, handleSubmit, formState: { errors }, reset } = useForm<LeadPayload>({
    resolver: zodResolver(leadSchema),
    defaultValues: { urgency: 'medium' },
  });

  async function onSubmit(values: LeadPayload) {
    try {
      setStatus('loading');
      await submitLead(values);
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="vexel-glass rounded-[2rem] p-5 sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nome" error={errors.name?.message}><input className={inputClass} placeholder="O seu nome" {...register('name')} /></Field>
        <Field label="Empresa" error={errors.company?.message}><input className={inputClass} placeholder="Nome da empresa" {...register('company')} /></Field>
        <Field label="WhatsApp" error={errors.whatsapp?.message}><input className={inputClass} placeholder="+258 ..." {...register('whatsapp')} /></Field>
        <Field label="Email" error={errors.email?.message}><input className={inputClass} placeholder="email@empresa.com" {...register('email')} /></Field>
        <Field label="Sector" error={errors.sector?.message}>
          <select className={inputClass} {...register('sector')}>
            <option value="">Escolher sector</option><option>Clínica</option><option>Restaurante</option><option>Escola</option><option>Advocacia</option><option>Loja</option><option>Serviços</option><option>Outro</option>
          </select>
        </Field>
        <Field label="Canal principal" error={errors.primaryChannel?.message}>
          <select className={inputClass} {...register('primaryChannel')}>
            <option value="">Escolher canal</option><option>WhatsApp</option><option>Instagram</option><option>Website</option><option>Telefone</option><option>Email</option>
          </select>
        </Field>
      </div>
      <div className="mt-4 grid gap-4">
        <Field label="O que pretende automatizar?" error={errors.mainNeed?.message}><textarea rows={3} className={inputClass} placeholder="Ex: marcações, respostas, leads, notificações..." {...register('mainNeed')} /></Field>
        <Field label="Urgência" error={errors.urgency?.message}>
          <select className={inputClass} {...register('urgency')}><option value="low">Baixa</option><option value="medium">Média</option><option value="high">Alta</option></select>
        </Field>
        <Field label="Mensagem adicional" error={errors.message?.message}><textarea rows={3} className={inputClass} placeholder="Detalhes opcionais" {...register('message')} /></Field>
      </div>
      <button disabled={status === 'loading'} className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-vexel-ice px-6 py-4 text-sm font-semibold text-vexel-bg transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60">
        <Send className="h-4 w-4" /> {status === 'loading' ? 'A enviar diagnóstico...' : 'Solicitar diagnóstico'}
      </button>
      {status === 'success' && <p className="mt-4 text-sm text-vexel-ice">Pedido registado. A equipa VEXEL entrará em contacto.</p>}
      {status === 'error' && <p className="mt-4 text-sm text-red-300">Não foi possível enviar. Tente novamente.</p>}
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return <label className="block"><span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-vexel-muted">{label}</span>{children}{error && <span className="mt-2 block text-xs text-red-300">{error}</span>}</label>;
}
