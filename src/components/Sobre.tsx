import { SectionHeading } from '../components/SectionHeading'
import styles from './Sobre.module.css'

type Credencial = {
  titulo: string
  descricao: string
}

const credenciais: Credencial[] = [
  {
    titulo: 'Formação contínua',
    descricao: 'Especialização em TCC e estudos em ansiedade',
  },
  {
    titulo: 'Atuação ética',
    descricao: 'Prática orientada pelo Código de Ética do CFP',
  },
]

export function Sobre() {
  return (
    <section id="sobre" className={styles.sobre}>
      <div className={styles.inner}>
        <div>
          <SectionHeading
            eyebrow="Sobre mim"
            title="Escuta atenta, presença e respeito ao seu tempo."
          />
          <span className={styles.accent} aria-hidden="true">
            “
          </span>
        </div>

        <div className={styles.copy}>
          <p className={styles.lead}>
            Sou Marina, psicóloga clínica, e acredito que a terapia começa
            quando encontramos um espaço onde podemos ser quem somos, sem
            julgamentos.
          </p>
          <p>
            Minha prática é orientada pela Terapia Cognitivo-Comportamental
            (TCC), uma abordagem que nos ajuda a compreender como pensamentos,
            emoções e comportamentos se relacionam no dia a dia.
          </p>
          <p>
            Atendo adultos e adolescentes em diferentes momentos da vida —
            ansiedade, relacionamentos, mudanças, sobrecarga ou simplesmente o
            desejo de se conhecer melhor.
          </p>

          <dl className={styles.credentials}>
            {credenciais.map((credencial) => (
              <div key={credencial.titulo} className={styles.credential}>
                <dt>{credencial.titulo}</dt>
                <dd>{credencial.descricao}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}