import { z } from 'zod';

export const leadSchema = z.object({
  name: z.string().min(2, 'Introduza o seu nome.'),
  company: z.string().min(2, 'Introduza o nome da empresa.'),
  whatsapp: z.string().min(7, 'Introduza um contacto válido.'),
  email: z.string().email('Email inválido.').optional().or(z.literal('')),
  sector: z.string().min(2, 'Escolha o sector.'),
  mainNeed: z.string().min(5, 'Explique o que pretende automatizar.'),
  primaryChannel: z.string().min(2, 'Escolha o canal principal.'),
  urgency: z.enum(['low', 'medium', 'high']),
  message: z.string().optional(),
});

export type LeadPayload = z.infer<typeof leadSchema>;
