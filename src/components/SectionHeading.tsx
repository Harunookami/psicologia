import { Eyebrow } from "./Eyebrow"
import styles from './SectionHeading.module.css'

type SectionHeadingProps = {
    eyebrow: string
    title: string
    description?: string
    tone?: 'default' | 'light'
    layout?: 'stacked' | 'split'
}

export function SectionHeading({
    eyebrow, title, description, tone = 'default', layout = 'stacked',
}: SectionHeadingProps) {
    return (
        <div className={layout === 'split' ? styles.split : undefined}>
            <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
            <h2 className={styles.title}>{title}</h2>
            {description && <p className={styles.title}>{description}</p>}
        </div>
    )
}