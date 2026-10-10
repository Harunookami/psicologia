
type CartaoProps = {
    titulo: string;
    descricao: string;
}
export function Cartao({ titulo, descricao }: CartaoProps) {
    return (
        <article>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
        </article>
    )
}