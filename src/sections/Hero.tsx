
import { MessageCircle } from 'lucide-react'
import { ButtonLink } from '../components/ButtonLink'
import { WHATSAPP_URL } from '../data/contato'
import styles from './Hero.module.css'
import retrato from '../assets/retrato.png'
import { Eyebrow } from '../components/Eyebrow'

export function Hero() {
    return (
        <section id="inicio" className={styles.hero}>
            <div className={styles.inner}>
                <div>
                   <Eyebrow>Psicoterapia para adultos e adolescentes</Eyebrow>
                    <h1 className={styles.title}>
                        Um lugar seguro para falar sobre <em>o que pesa.</em>
                    </h1>
                    <p className={styles.description}>
                        Psicoterapia presencial e online. O primeiro passo pode ser só uma conversa.
                    </p>

                    <ButtonLink href={WHATSAPP_URL} external>
                        <MessageCircle size={20} aria-hidden='true' />
                        Agendar pelo WhatsApp
                    </ButtonLink>

                    <p className={styles.availability}>
                        <span className={styles.dot} aria-hidden='true' />
                        Agenda aberta para novos pacientes
                    </p>
                </div>
                <div className={styles.portrait}>
                    <div className={styles.backdrop} aria-hidden="true" />
                        <div className={styles.frame}>
                            <img src={retrato} alt="Retrato da psicologa Marina Alves, sorrindo" className={styles.photo} />
                        </div>

                        <div className={styles.card}>
                            <span className={styles.cardLabel}></span>
                            <strong className={styles.cardName}>Dra. Marina Alves</strong>
                            <small className={styles.cardInfo}>CRP 00/00000</small>
                        </div>
                </div>
            </div>
        </section>
    )
}