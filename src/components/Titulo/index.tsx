import TituloEstilo from "./style"

export type Props = {
    children: string,
    fontSize?: string
}

const Titulo = (props: Props) => <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>

export default Titulo