import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FaBars, FaMinus } from 'react-icons/fa'
import MobileNav from './MobileNav'
import theme from '../styles/theme'
import { Wrapper, Image } from '../styles'

import logo from '../assets/img/APPIK.svg'
import { navmenu } from '../data/navmenu'

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
  padding-top: 0;
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
  color: #fff;
  display: none;
  transition: all 0.2s;

  @media only screen and (max-width: 1100px) {
    display: block;
    font-size: 30px;
    cursor: pointer;
  }
`

const Close = styled(FaMinus)`
  color: #fff;
  display: none;
  transition: all 0.2s;

  @media only screen and (max-width: 1100px) {
    display: block;
    font-size: 30px;
    cursor: pointer;
  }
`

const Header = () => {
  const [clicked, setClicked] = useState(false)
  const [navbarActive, setNavbarActive] = useState(false)

  const mobileMenuHandler = () => {
    setClicked(!clicked)
  }

  useEffect(() => {
    if (window) {
      const changeNavBackground = () => {
        if (window.scrollY > 60) {
          setNavbarActive(true)
        } else {
          setNavbarActive(false)
        }
      }
      window.addEventListener('scroll', changeNavBackground)

      return () => {
        window.removeEventListener('scroll', changeNavBackground)
      }
    }
  }, [navbarActive])

  return (
    <>
      <Background className={navbarActive ? 'active' : ''}>
        <MyWrapper>
          <Nav>
            <NavLink to="/">
              {' '}
              <Image height="24px" src={logo} alt="APPIK" />{' '}
            </NavLink>
            {clicked ? (
              <Close onClick={mobileMenuHandler} />
            ) : (
              <Bars onClick={mobileMenuHandler} />
            )}
            <NavMenu className="active">
              {navmenu.map((x, i) => (
                <NavLink className="navlink" to={x.link} key={i}>
                  {' '}
                  {x.title}{' '}
                </NavLink>
              ))}
            </NavMenu>
          </Nav>
        </MyWrapper>
      </Background>

      <MobileNav
        mobileMenuHandler={mobileMenuHandler}
        status={clicked === true ? true : false}
      />
    </>
  )
}

export default Header
