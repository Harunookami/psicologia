export type Atendimento = {
    id: string
    titulo: string
    descricao: string
}

export const atendimetos: Atendimento[] = [
     {
    id: 'individual',
    titulo: 'Psicoterapia individual',
    descricao:
      'Um espaço de escuta para compreender emoções, relações e padrões que têm causado sofrimento.',
  },
  {
    id: 'adolescentes',
    titulo: 'Adolescentes',
    descricao:
      'Acolhimento atento às mudanças dessa fase, com diálogo cuidadoso junto à família quando necessário.',
  },
  {
    id: 'casal',
    titulo: 'Terapia de casal',
    descricao:
      'Conversas mediadas para ampliar a compreensão, cuidar dos vínculos e construir novas possibilidades.',
  },
  {
    id: 'online',
    titulo: 'Atendimento online',
    descricao:
      'A mesma escuta ética e reservada, por videochamada, para você estar onde se sentir mais confortável.',
    },
  
]