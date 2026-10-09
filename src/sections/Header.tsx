
import styles from './Header.module.css'
import { ButtonLink } from '../components/ButtonLink'
import { WHATSAPP_URL } from '../data/contato'

type NavLink = {
    href: string;
    label: string;
}

const links: NavLink[] = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#atendimentos', label: 'Atendimentos' },
    { href: '#como-funciona', label: 'Como funciona' },
    { href: '#duvidas', label: 'Duvidas' },
]

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <a href="#inicio" className={styles.brand}>
                    <span className={styles.brandMark} aria-hidden='true'>
                        <span className={styles.leaf} />
                        <span className={styles.leaf} />
                    </span>
                    <span className={styles.brandName}>
                        Clínica Escuta
                    </span>
                </a>
                <nav className={styles.nav} aria-label='Navegação principal'>
                    {links.map((link) => (
                        <a key={link.href} href={link.href} className={styles.navLink}>
                            {link.label}
                        </a>
                    ))}
                </nav>

                <ButtonLink href={WHATSAPP_URL} size="small" external>Agendar</ButtonLink>
            </div>

        </header>
    )
}