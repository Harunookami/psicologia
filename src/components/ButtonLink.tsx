import type { ReactNode } from "react";
import styles from './ButtonLink.module.css'

type ButtonLinkProps = {
    href: string
    children: ReactNode
    variant?: 'primary' | 'sand'
    size?: 'medium' | 'small'
    external?: boolean
}

export function ButtonLink({ href, children, variant = 'primary', size = 'medium', external = false }: ButtonLinkProps) {

    const className = `${styles.button} ${styles[size]} ${styles[variant]}`
    return (
        <a href={href} className={className} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>{children}</a>
    )
}