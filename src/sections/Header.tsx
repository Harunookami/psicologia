import '../styles/variables.css'
import styles from '../styles/header.module.css'

export function Header() {
    return (
        <div className={styles.header}>
            <a href="#inicio" className={styles.brand} aria-hidden='true'>
                <span className={styles.brandMark}>
                    <span className={styles.leaf} />
                    <span className={styles.leaf}/>
                    <span className={styles.leaf} />
                </span>
                <span className={styles.title}>
                    Clínica Escuta
                </span>
            </a>
            <nav className={styles.nav} >
                <a href="#sobre">Sobre</a>
                <a href="#atendimentos">Atendimentos</a>
                <a href="#comoFunciona">Como funciona</a>
                <a href="#duvidas">Dúvidas</a>
            </nav>
        </div>
    )
}