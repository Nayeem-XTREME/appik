import React from "react"
import { ThemeProvider } from "styled-components"
import styled from 'styled-components'

import Header from "./custom/Header"
import GlobalStyle from "../styles/GlobalStyles"
import theme from "../styles/theme"

const Layout = ({ children }) => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
        
      </ThemeProvider>
    </>
  )
}

export default Layout
