import styled from 'styled-components'
import DefaultButton from '../../components/Button'

export const Container = styled.header`
  height: 32px;
`

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.blue300};
  padding: 16px;
`

export const Title = styled.h2`
  color: white;
  font-size: 24px;
  line-height: 1.2;
`

export const Button = styled(DefaultButton)``
