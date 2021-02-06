import styled from 'styled-components'
import theme from './theme'

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 75px;
  position: relative;
  text-align: center;

  h2 {
    margin-bottom: 20px;
  }

  @media only screen and (max-width: ${theme.breakpoints.md}) {
    margin-bottom: 50px;
  }
`
