import React from "react"
import { ThemeProvider } from "styled-components"
import styled from 'styled-components'

import Header from "./custom/Header"
import GlobalStyle from "../styles/GlobalStyles"
import theme from "../styles/theme"

const Layout = ({children}) => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Header />
          <main>{children}</main>
        </Wrapper>
        
      </ThemeProvider>
    </>
  )
}

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1600px;
`

export default Layout
