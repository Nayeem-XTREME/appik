import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import theme from '../styles/theme'
import { Wrapper } from '../styles/MyStyles'

import logo from '../assets/logo/APPIK.svg'
import { navmenu } from '../data/navmenu'

const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <NavLink to="/"> <img style={{ height: "24px" }} src={logo} alt="APPIK"/> </NavLink>
        <NavMenu>
          {navmenu.map( (x, i) => <NavLink to={x.link} key={i}> {x.title} </NavLink> )}
        </NavMenu>
      </Nav>
    </Wrapper>
  )
}

const Nav = styled.nav`
  background: transparent;
  height: 60px;
  display: flex;
  justify-content: space-between;
  z-index: 10;
`

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: ${theme.fontSizes[0]}px;
  transition: all 0.2s;

  :not(:first-child) {
    margin-left: 30px;
  }

  :hover {
    color: ${theme.colors.highlight};
    text-decoration: none;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
`

export default Header