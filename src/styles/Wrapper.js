import styled from 'styled-components'
import theme from './theme'

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 36px 30px;
  min-height: ${({ minHeight }) => minHeight};
  max-width: ${theme.breakpoints.xl};

  @media only screen and (max-width: ${theme.breakpoints.md}) {
    padding: 35px 15px;
  }
`
