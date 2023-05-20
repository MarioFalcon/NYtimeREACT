import { FC } from 'react'
import type { Props } from './types'
import './styles.css'

const Button: FC<Props> = ({children}) => {
return <button className='customButton'>{children}</button>
    


}

export default Button