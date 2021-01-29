import React, { useState } from 'react'
import { Link } from "gatsby"
import styled from "styled-components"
import { Wrapper } from '../styles/MyStyles'
import theme from '../styles/theme'

import { navmenu } from '../data/navmenu'
import { platform } from '../data/platform'

const Nav = styled.nav`
  background: linear-gradient(rgba(110, 79, 204, 1), rgba(35, 79, 167, 1));
  width: 100%;
  position: fixed;
  z-index: 200;
  transition: all 0.3s;

  &.active {
    transform: translateY(0%);
    transition: all 0.3s;
  }

  &.closed {
    transform: translateY(-100%);
    transition: all 0.3s;
  }
`

const MyWrapper = styled(Wrapper)`
  position: relative;
  padding: 0;
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavMenu = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NavLink = styled(Link)`
  margin: 15px 0;
  list-style: none;
  text-decoration: none;
  color: #FFF;
  transition: all 0.2s;

  :hover {
    color: ${theme.colors.highlight};
  }
`

const Support = styled.div`
  position: absolute;
  bottom: 80px;
  left: 60px;

  @media only screen and (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`

const Image = styled.img`
  max-width: 46px;
  height: auto;
  margin-right: 40px;
`

export default function MobileNav({ status, mobileMenuHandler }) {

  return (
    <Nav className={ status ? "active" : "closed" }>
      <MyWrapper>
        <NavMenu>
          {navmenu.map( (x, i) => <NavLink className="navlink" to={x.link} key={i} onClick={mobileMenuHandler} > {x.title} </NavLink> )}
        </NavMenu>
        <Support>
          {platform.map((logo, i) => (
            <Image key={i} src={logo.src} alt={logo.alt} />
          ))}
        </Support>
      </MyWrapper>
    </Nav>
  )
}
