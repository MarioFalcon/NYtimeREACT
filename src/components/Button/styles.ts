import styled from 'styled-components'
// import { Props } from './types'

export const Container = styled.button`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.blue300};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.blue300};
  cursor: pointer;
  transition: all 200ms ease-in-out;
  padding: 8px 16px;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue300 ? theme.colors.blue300 : theme.colors.orange};
    color: white;
  }
`
