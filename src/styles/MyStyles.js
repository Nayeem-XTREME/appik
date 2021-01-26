import styled from 'styled-components'
import theme from '../styles/theme'

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 30px;
  max-width: ${theme.breakpoints.xl};
  padding-bottom: 75px;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 75px;
  position: relative;

  h2 {
    margin-bottom: 20px;
  }

  p {
    text-align: center;
  }
`

export const Button = styled.button`
  min-width: 200px;
  background-color: ${({ highlight }) => ( highlight ? theme.colors.highlight : theme.colors.lightGray )};
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 32px;
  transition: all 0.2s;
  padding: 16px 36px;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;

  :hover {
    background-color: ${({ highlight }) => ( highlight ? '#FFE500' : theme.colors.highlight )};
  }

  @media only screen and (max-width: ${theme.breakpoints.md}) {
    font-size: 13px;
  }
`