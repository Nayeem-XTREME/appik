import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
// import Text from "./Text"
import { theme } from '../styles/theme'

import logo from '../assets/img/APPIK.svg'
import { navmenu } from '../data/navmenu'


const Header = () => {
  return (
    <Nav>
      <NavLink to="/"> <img src={logo} alt="APPIK"/> </NavLink>
      <NavMenu>
        {navmenu.map( (x, i) => <NavLink to={x.link} key={i}> {x.title} </NavLink> )}
      </NavMenu>
    </Nav>
  )
}

const Nav = styled.nav`
  background: gray;
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  position: relative;
`

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;

  :not(:first-child) {
    margin-left: 30px;
  }

  img {
    width: 131px;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`

export default Header
