import type { LeadPayload } from './validators';

const apiUrl = import.meta.env.VITE_VEXEL_API_URL;

export async function submitLead(payload: LeadPayload) {
  if (!apiUrl) {
    await new Promise((resolve) => setTimeout(resolve, 700));
    console.info('[VEXEL mock lead]', payload);
    return { ok: true, mode: 'mock' };
  }

  const response = await fetch(`${apiUrl}/leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Não foi possível enviar o diagnóstico.');
  }

  return response.json();
}
