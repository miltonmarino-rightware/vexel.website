import { Bot, CalendarCheck, GitBranch, Headphones, LayoutDashboard, Building2, GraduationCap, Scale, Store, Stethoscope, Utensils, Workflow } from 'lucide-react';

export const services = [
  {
    icon: Bot,
    name: 'VEXEL Chatbot',
    text: 'Atendimento automático para WhatsApp, Instagram, Facebook e website.',
  },
  {
    icon: CalendarCheck,
    name: 'VEXEL Agenda',
    text: 'Marcações, confirmações, lembretes e reagendamentos com menos falhas.',
  },
  {
    icon: Workflow,
    name: 'VEXEL Workflow',
    text: 'Fluxos inteligentes para notificações, CRM, emails, dados e dashboards.',
  },
  {
    icon: Headphones,
    name: 'VEXEL Voice',
    text: 'Chamadas inteligentes para confirmações, triagem e lembretes.',
  },
  {
    icon: LayoutDashboard,
    name: 'VEXEL Command',
    text: 'Central operacional para leads, processos, automações e controlo.',
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

export const flowNodes = ['WhatsApp', 'Instagram', 'Website', 'Telefone', 'VEXEL Layer', 'Chatbot', 'Agenda', 'Workflow', 'Dashboard'];

export const leadStates = ['Novo', 'Diagnóstico', 'Proposta', 'Implementação', 'Activo'];

export const automationOptions = [
  { icon: GitBranch, label: 'Integrações' },
  { icon: Bot, label: 'Atendimento' },
  { icon: CalendarCheck, label: 'Agenda' },
  { icon: LayoutDashboard, label: 'Dashboard' },
];
