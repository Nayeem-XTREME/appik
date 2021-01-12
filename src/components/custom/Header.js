import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import theme from '../../styles/theme'
import { Wrapper } from '../../styles/GlobalStyles'

import logo from '../../assets/logo/APPIK.svg'
import { navmenu } from '../../data/navmenu'


const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <NavLink to="/"> <img src={logo} alt="APPIK"/> </NavLink>
        <NavMenu>
          {navmenu.map( (x, i) => <NavLink to={x.link} key={i}> {x.title} </NavLink> )}
        </NavMenu>
      </Nav>
    </Wrapper>
  )
}

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 10;
`

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  transition: all 0.2s;

  :not(:first-child) {
    margin-left: 30px;
  }

  img {
    width: 131px;
  }

  :hover {
    color: ${theme.colors.highlight};
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`

export default Header
