import styled from 'styled-components'
import theme from '../styles/theme'

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 37.5px 30px;
  min-height: ${({minHeight}) => minHeight};
  max-width: ${theme.breakpoints.xl};
  /* padding-bottom: 75px; */

  @media only screen and (max-width: ${theme.breakpoints.md}) {
    padding: 0 15px;
    padding-bottom: 70px;
  }
`

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