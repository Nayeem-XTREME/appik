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
`
export const H1 = styled.h1`
  color: ${({ white }) => ( white ? '#FFF' : "#000" )};
  font-family: 'Montserrat', sans-serif;
  font-size: 50px;
  font-weight: 700;
`

export const H2 = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 36px;
  font-weight: 700;
`

export const H3 = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  font-weight: 700;
`

export const H4 = styled.h4`
  color: ${({ highlight }) => ( highlight ? '#FFC600' : '#000' )};
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 700;
`

export const H5 = styled.h5`
  color: ${({ white }) => ( white ? '#FFF' : "#000" )};
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 700;
`
export const H6 = styled.h6`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 700;
`
export const P = styled.p`
  font-family: 'Roboto', 'Montserrat', sans-serif;
  color: ${theme.colors.defaultText};
  font-size: 14px;
  font-weight: 400;
`

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 40px;
  max-width: 1640px;

  margin-bottom: 100px;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  position: relative;

  P {
    width: 785px;
    text-align: center;
  }
`

export const Button = styled.button`
  width: 245px;
  height: 64px;
  background-color: ${theme.colors.highlight};
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 32px;
  transition: all 0.2s;
  padding: 20px;

  :hover {
    background-color: #FFF;
  }
`

export default GlobalStyle