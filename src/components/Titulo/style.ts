import styled from 'styled-components'

import { Props } from '.'

const TituloEstilo = styled.h3<Props>`
    font-size: ${(props: Props) => props.fontSize ? props.fontSize : '14px'};
    margin-bottom: 16px;
`

export default TituloEstilo