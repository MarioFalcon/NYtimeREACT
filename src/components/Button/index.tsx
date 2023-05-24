import { FC } from 'react'
import { Container } from "./styles";
import type { Props } from './types'

const Button: FC<Props> = ({children, onClick}) => {
return <Container onClick={onClick}>{children}</Container>
    
}

export default Button