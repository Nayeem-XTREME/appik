import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Scroll from 'react-scroll'
import { FaBars, FaMinus } from 'react-icons/fa'
import MobileNav from './MobileNav'
import theme from '../styles/theme'
import { Wrapper } from '../styles/MyStyles'

import logo from '../assets/logo/APPIK.svg'
import { navmenu } from '../data/navmenu'

const ScrollLink = Scroll.ScrollLink

const Background = styled.div`
  position: fixed;
  width: 100%;
  background: transparent;
  z-index: 900;
  transition: all 0.2s;

  &.active {
    background: linear-gradient(rgba(35, 79, 167, 1), rgba(110, 79, 204, 1));
    transition: all 0.2s ease-in-out;
  }
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

  :not(:first-child) {
    margin-left: 30px;
  }

  :hover {
    color: ${theme.colors.highlight};
  }
`

const NavMenu = styled.div`
  display: flex;

  @media only screen and (max-width: 1100px) {
    display: none;
  }
`

const Bars = styled(FaBars)`
  color: #FFF;
  display: none;
  transition: all 0.2s;

  @media only screen and (max-width: 1100px) {
    display: block;
    font-size: 30px;
    cursor: pointer;
  }
`

const Close = styled(FaMinus)`
  color: #FFF;
  display: none;
  transition: all 0.2s;

  @media only screen and (max-width: 1100px) {
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
    clicked: false,
    navbarActive: false
  }

  mobileMenuHandler = () => {
    this.setState({ clicked: !this.state.clicked });
    console.log(this.state.clicked);
  }

  changeNavBackground = () => {
    if (window.scrollY > 60) {
      this.setState({ navbarActive: true });
    } else {
      this.setState({ navbarActive: false });
    }
  }

  render() {

    window.addEventListener('scroll', this.changeNavBackground);

    return (
      <>
        <Background className={this.state.navbarActive ? 'active' : ''}>
          <MyWrapper>
            <Nav>
              <NavLink to="/"> <Image src={logo} alt="APPIK"/> </NavLink>
              { this.state.clicked ? <Close onClick={this.mobileMenuHandler} /> : <Bars onClick={this.mobileMenuHandler} />}
              <NavMenu className="active">
                {navmenu.map( (x, i) => <NavLink className="navlink" to={x.link} key={i} > {x.title} </NavLink> )}
              </NavMenu>
            </Nav>
          </MyWrapper>
        </Background>

        <MobileNav status={ this.state.clicked === true ? "active" : "closed" } />
      </>
    )
  }
}

export default Header