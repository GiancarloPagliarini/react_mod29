import ParagrafoEstilo from "./style";

export type Props = {
  children: string;
  tipo?: "principal" | "secundario";
};

const Paragrafo = ({ children, tipo = "principal" }: Props) => (
  <ParagrafoEstilo tipo={tipo}>{children}</ParagrafoEstilo>
);

export default Paragrafo;
