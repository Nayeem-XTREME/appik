import { createGlobalStyle } from "styled-components"
import theme from '../styles/theme'

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
    font-size: 40px;
    font-weight: 700;
  }

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 36px;
    font-weight: 700;
  }

  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 28px;
    font-weight: 700;
  }

  h4 {
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: 700;
  }

  h5 {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 700;
  }

  h6 {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 700;
  }

  p {
    font-family: 'Roboto', 'Montserrat', sans-serif;
    color: ${theme.colors.defaultText};
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
  }
`

export default GlobalStyle