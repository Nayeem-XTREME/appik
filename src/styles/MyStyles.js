import styled from 'styled-components'
import theme from '../styles/theme'

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 30px;
  max-width: ${theme.breakpoints.xl};
  margin-bottom: 75px;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 75px;
  position: relative;

  h2 {
    margin-bottom: 20.25px;
  }

  p {
    width: 588px;
    text-align: center;
  }
`

export const Button = styled.button`
  min-width: 200px;
  height: 48px;
  background-color: ${({ highlight }) => ( highlight ? theme.colors.highlight : theme.colors.lightGray )};
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 32px;
  transition: all 0.2s;
  padding: 0 36px;

  :hover {
    background-color: ${({ highlight }) => ( highlight ? '#FFF' : theme.colors.highlight )};
  }
`