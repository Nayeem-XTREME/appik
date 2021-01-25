import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import theme from '../styles/theme'
import { Wrapper } from '../styles/MyStyles'

import logo from '../assets/logo/APPIK.svg'
import menubar from '../assets/logo/MenuBar.svg'
import menubarclose from '../assets/logo/MenuBarClose.svg'

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

const Checkbox = styled.input`
  display: none;
`

const MobileMenu = styled.label`
  cursor: pointer;
  display: none;
  
  img {
    margin-top: 22px;
  }

  @media only screen and (max-width: ${theme.breakpoints.lg}) {
    display: block;
  }
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

          <Checkbox type="checkbox" id="check" />
          <MobileMenu for="check" className="mobile-menu">
            <img for="check" className="mobile-menu" src={menubar} alt="Menubar" />
          </MobileMenu>
        </Nav>
      </MyWrapper>
    </Background>
  )
}

export default Header