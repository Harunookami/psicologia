import styles from './Eyebrow.module.css'
import type { ReactNode } from 'react'


type EyebrowProps = {
    children: ReactNode
    tone?: 'default' | 'light'
}
export function Eyebrow({
    children, tone = 'default'
}: EyebrowProps) {
    return (
        <p className={`${styles.eyebrow} ${styles[tone]}`}>{ children}</p>
    )
}