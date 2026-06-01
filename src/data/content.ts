import { Bot, CalendarCheck, GitBranch, Headphones, LayoutDashboard, Building2, GraduationCap, Scale, Store, Stethoscope, Utensils, Workflow } from 'lucide-react';

export const services = [
  {
    icon: Bot,
    name: 'Atendimento Inteligente',
    text: 'Chatbots e canais digitais organizados para responder, qualificar e encaminhar clientes com consistência.',
  },
  {
    icon: Headphones,
    name: 'Comunicação Operacional',
    text: 'Voice AI e mensagens automáticas para confirmações, triagem, follow-ups e comunicação recorrente.',
  },
  {
    icon: Workflow,
    name: 'Execução de Processos',
    text: 'Workflows que ligam notificações, CRM, emails, tarefas internas e dados num fluxo claro de execução.',
  },
  {
    icon: CalendarCheck,
    name: 'Agenda e Organização',
    text: 'Marcações, lembretes e reagendamentos estruturados para reduzir falhas e trabalho manual.',
  },
  {
    icon: LayoutDashboard,
    name: 'Controlo Operacional',
    text: 'Dashboards e visão de comando para acompanhar leads, processos, automações e estado da operação.',
  },
];

export const industries = [
  { icon: Stethoscope, name: 'Clínicas' },
  { icon: Utensils, name: 'Restaurantes' },
  { icon: GraduationCap, name: 'Escolas' },
  { icon: Scale, name: 'Advogados' },
  { icon: Store, name: 'Lojas' },
  { icon: Building2, name: 'Imobiliárias' },
];

export const packages = [
  {
    name: 'Starter',
    ideal: 'Pequenos negócios',
    items: ['Chatbot simples', 'FAQ', 'Captação básica', 'Encaminhamento humano'],
  },
  {
    name: 'Professional',
    ideal: 'Atendimento recorrente',
    items: ['Fluxos personalizados', 'Agendamentos', 'Follow-ups', 'Relatório básico'],
  },
  {
    name: 'Business',
    ideal: 'Processos e integrações',
    items: ['Workflows', 'CRM / Sheets / Email', 'Dashboard básico', 'Optimização'],
  },
  {
    name: 'Enterprise',
    ideal: 'Operações maiores',
    items: ['Arquitectura custom', 'Voice AI', 'Dashboards avançados', 'Suporte prioritário'],
  },
];

export const flowNodes = ['WhatsApp', 'Instagram', 'Website', 'Telefone', 'Camada VEXEL', 'Chatbot', 'Agenda', 'Workflow', 'Dashboard'];

export const leadStates = ['Novo contacto', 'Diagnóstico', 'Proposta', 'Implementação', 'Activo'];

export const automationOptions = [
  { icon: GitBranch, label: 'Integrações' },
  { icon: Bot, label: 'Atendimento' },
  { icon: CalendarCheck, label: 'Agenda' },
  { icon: LayoutDashboard, label: 'Dashboard' },
];
