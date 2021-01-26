import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from 'react-icons/fa'
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
  z-index: 100;
`

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: ${theme.fontSizes[2]}px;
  transition: all 0.2s;

  &.active {
    color: ${theme.colors.highlight};
  }

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

  @media only screen and (max-width: ${theme.breakpoints.lg}) {
    display: none;
  }
`

const Bars = styled(FaBars)`
  color: #FFF;
  display: none;

  @media only screen and (max-width: ${theme.breakpoints.lg}) {
    display: block;
    font-size: 30px;
    cursor: pointer;
  }
`

const Image = styled.img`
  height: 24px;
`

class Header extends Component {

  state = {
    
  }

  render() {
    return (
      <Background>
        <MyWrapper>
          <Nav>
            <NavLink to="/"> <Image src={logo} alt="APPIK"/> </NavLink>
            <Bars />
            <NavMenu className="active">
              {navmenu.map( (x, i) => <NavLink className="navlink" to={x.link} key={i} activeStyle> {x.title} </NavLink> )}
            </NavMenu>
          </Nav>
        </MyWrapper>
      </Background>
    )
  }

}

export default Header