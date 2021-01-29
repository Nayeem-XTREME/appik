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
    scroll-behavior: smooth;
    scroll-padding-top: 60px;
  }

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    font-weight: 700;

    @media only screen and (max-width: ${theme.breakpoints.lg}) {
      font-size: 36px;
    }

    @media only screen and (max-width: ${theme.breakpoints.md}) {
      font-size: 28px;
    }
  }

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 36px;
    font-weight: 700;

    @media only screen and (max-width: ${theme.breakpoints.lg}) {
      font-size: 28px;
    }

    @media only screen and (max-width: ${theme.breakpoints.md}) {
      font-size: 24px;
    }
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

    @media only screen and (max-width: ${theme.breakpoints.md}) {
      font-size: 20px;
    }
  }

  h5 {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 700;

    @media only screen and (max-width: ${theme.breakpoints.md}) {
      font-size: 16px;
    }
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