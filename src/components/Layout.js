import React from "react"
import { ThemeProvider } from "styled-components"
import styled from 'styled-components'

import Header from "./header"
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
  margin: 0 auto;
  max-width: 1200px;
`

export default Layout
