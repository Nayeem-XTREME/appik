import { createGlobalStyle } from "styled-components"
import theme from '../styles/theme'
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Montserrat', sans-serif;
  }

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 37.5px;
    font-weight: 700;
  }

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 27px;
    font-weight: 700;
  }

  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 22.5px;
    font-weight: 700;
  }

  h4 {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 700;
  }

  h5 {
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-weight: 700;
  }

  h6 {
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 700;
  }

  p {
    font-family: 'Roboto', 'Montserrat', sans-serif;
    color: ${theme.colors.defaultText};
    font-size: 10.5px;
    font-weight: 400;
  }
`

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
  width: 184px;
  height: 48px;
  background-color: ${({ highlight }) => ( highlight ? theme.colors.highlight : theme.colors.lightGray )};
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 32px;
  transition: all 0.2s;
  padding: 15px;

  :hover {
    background-color: ${({ highlight }) => ( highlight ? '#FFF' : theme.colors.highlight )};
  }
`

export default GlobalStyle