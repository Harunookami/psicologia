import { Cartao } from './components/Cartao'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'

type Servico = {
  titulo: string
  descricao: string
}

const servicos: Servico[] = [
  {
    titulo: 'Psicoterapia individual',
    descricao: 'Um espaço de escuta para compreender emoções, relações e padrões que têm causado sofrimento.',
  },
  {
    titulo: 'Adolescentes',
    descricao: 'Acolhimento atento às mudanças dessa fase, com diálogo cuidadoso junto à família quando necessário.',
  },
  {
    titulo: 'Terapia de casal',
    descricao: 'Conversas mediadas para ampliar a compreensão, cuidar dos vínculos e construir novas possibilidades.',
  },
  {
    titulo: 'Atendimento online',
    descricao: 'A mesma escuta ética e reservada, por videochamada, para você estar onde se sentir mais confortável.',
  },
]

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {servicos.map((servico) => (
          <Cartao
            key={servico.titulo}
            titulo={servico.titulo}
            descricao={servico.descricao}
          />
        ))}
      </main>

    </>
  )
}

export default App