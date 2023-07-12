import styled from "styled-components";

import { Props } from ".";

const ParagrafoEstilo = styled.p<Props>`
  color: ${(props) =>
    props.tipo === "principal" ? "#282A35" : "#949494"};
  font-size: 14px;
  line-height: 22px;
`;
export default ParagrafoEstilo;
