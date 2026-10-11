import { Eyebrow } from "./Eyebrow"
import styles from  './SectionHeading.module.css'

type SectionHeadingProps = {
    eyebrow: string
    title: string
    description?: string
    tone?: 'default' | 'light'
}

export function SectionHeading({
eyebrow, title, description, tone = 'default',
}: SectionHeadingProps) {
    return (
        <div>
            <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
            <h2 className={styles.title}>{title}</h2>
            {description && <p className={styles.title }>{ description}</p>}
        </div>
    )
}