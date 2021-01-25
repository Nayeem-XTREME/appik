import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import theme from '../styles/theme'
import { Wrapper } from '../styles/MyStyles'

import logo from '../assets/logo/APPIK.svg'
import { navmenu } from '../data/navmenu'

const Background = styled.div`
  position: fixed;
  width: 100%;
  background-color: black;
  z-index: 900;
`

const MyWrapper = styled(Wrapper)`
  padding-bottom: 0;
  overflow: hidden;
  z-index: 1000;
`

const Nav = styled.nav`
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
  font-size: ${theme.fontSizes[2]}px;
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
`

const Img = styled.img`
  height: 24px;
`

const Header = () => {
  return (
    <Background>
      <MyWrapper>
        <Nav>
          <NavLink to="/"> <Img src={logo} alt="APPIK"/> </NavLink>
          <NavMenu>
            {navmenu.map( (x, i) => <NavLink to={x.link} key={i}> {x.title} </NavLink> )}
          </NavMenu>
        </Nav>
      </MyWrapper>
    </Background>
  )
}

export default Header