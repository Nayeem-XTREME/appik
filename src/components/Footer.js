import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import theme from '../styles/theme'

import { Wrapper, Button, Image } from '../styles'
import { Box, Flex, Text } from "../components"

import { social } from '../data/social'
import logo from '../assets/img/appikBlack.svg'

import { FaPlus, FaMinus } from 'react-icons/fa'

const LogoBox = styled(Box)`
  @media only screen and (max-width: ${theme.breakpoints.md}) {
    text-align: center;
    padding: 0 20px;
  }
`

const LinkBox = styled(Box)`
  @media only screen and (max-width: ${theme.breakpoints.md}) {
    text-align: center;
    margin-top: 30px;
    cursor: pointer;
    height: 30px;
    overflow: hidden;
    transition: all 0.2s ease-in-out;

    &.open {
      height: 356px;
      transition: all 0.2s ease-in-out;
    }
  }
`

const NewsletterBox = styled(Box)`
  @media only screen and (max-width: ${theme.breakpoints.md}) {
    text-align: center;
    margin-top: 30px;
  }
`

const Ul = styled.ul`
  list-style: none;
`

const Li = styled.li`
  text-decoration: none;
  line-height: 150%;

  @media only screen and (max-width: ${theme.breakpoints.md}) {
    margin-bottom: 10px;
  }
`

const Form = styled.form`
  position: relative;
  margin-bottom: 32px;
`

const Input = styled.input`
  width: 100%;
  padding: 10px 24px;
  font-family: "Roboto", sans-serif;
  color: ${theme.colors.defaultText};
  border: 1px solid ${theme.colors.gray2};
  border-radius: 30px;
  outline: none;

  @media only screen and (max-width: ${theme.breakpoints.lg}) {
    padding: 15px 24px;
  }
`

const CustomButton = styled(Button)`
  padding: 0 30px;
  min-width: 50px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 14px;
`

const Social = styled.div`
  margin-top: 4px;
  float: right;

  @media only screen and (max-width: ${theme.breakpoints.md}) {
    float: none;
  }
`

const SocialLogo = styled(Image)`
  transition: all 0.2s ease-in-out;

  :hover {
    transform: translateY(-2px);
    transition: all 0.2s ease-in-out;
  }
`

const SocialLink = styled(Link)`
  :not(:first-child) {
    margin-left: 18px;
  }

  @media only screen and (max-width: ${theme.breakpoints.md}) {
    :not(:first-child) {
      margin-left: 24px;
    }
  }
`

const MyLink = styled(Link)`
  text-decoration: none;

  .footer-link {
    transition: all 0.2s ease-in-out;
    :hover {
      color: ${theme.colors.highlight} !important;
    }
  }
`

const CopyText = styled(Text)`
  @media only screen and (max-width: ${theme.breakpoints.lg}) {
    text-align: center;
  }

  @media only screen and (max-width: ${theme.breakpoints.md}) {
    margin-top: 32px;
  }
`

const Plus = styled(FaPlus)`
  display: none;

  @media only screen and (max-width: ${theme.breakpoints.md}) {
    display: inline-block;
  }
`

const Minus = styled(FaMinus)`
  display: none;

  @media only screen and (max-width: ${theme.breakpoints.md}) {
    display: inline-block;
  }
`

export default function Footer() {

  const [linkbox, setLinkBox] = useState(false);

  return (
    <Wrapper>
      <Flex flexWrap="wrap" pt={37.5}>
        <LogoBox width={[1, 1, 1/2, 1/3]} pr={[0, 0, 5]}>
          <Link to="/"><Image width="98px" marginBottom="28px" src={logo} alt="logo" /></Link>
          <Text variant="p" mb={[18, 18, 28]}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</Text>
        </LogoBox>

        <LinkBox className={ linkbox ? "open" : "" } width={[1, 1, 1/2, 1/3]} pl={[0, 0, 0, 40]} >
          <Flex mb={28} justifyContent="center" alignItems='center' onClick={() => setLinkBox(!linkbox)}>
            <Text mr={3} variant="h5">Useful Links</Text>
            { linkbox ? <Minus /> : <Plus /> }
          </Flex>
          
          <Flex flexWrap="wrap">
            <Box width={[1, 1, 1/2, 1/2]}>
              <Ul>
                <Li>
                  <MyLink to="#index"><Text className="footer-link" variant="p">Home</Text></MyLink>
                </Li>
                <Li>
                  <MyLink to="#"><Text className="footer-link" variant="p">Pages</Text></MyLink>
                </Li>
                <Li>
                  <MyLink to="#features"><Text className="footer-link" variant="p">Features</Text></MyLink>
                </Li>
                <Li>
                  <MyLink to="#how-it-works"><Text className="footer-link" variant="p">How it works</Text></MyLink>
                </Li>
                <Li>
                  <MyLink to="#faces"><Text className="footer-link" variant="p">App faces</Text></MyLink>
                </Li>
              </Ul>
            </Box>
            <Box width={[1, 1, 1/2, 1/2]}>
              <Ul>
                <Li>
                  <MyLink to="#download"><Text className="footer-link" variant="p">Download</Text></MyLink>
                </Li>
                <Li>
                  <MyLink to="#faq"><Text className="footer-link" variant="p">FAQ's</Text></MyLink>
                </Li>
                <Li>
                  <MyLink to="#download"><Text className="footer-link" variant="p">Support</Text></MyLink>
                </Li>
                <Li>
                  <MyLink to="#pricing"><Text className="footer-link" variant="p">Pricing</Text></MyLink>
                </Li>
                <Li>
                  <MyLink to="#contact"><Text className="footer-link" variant="p">Contact us</Text></MyLink>
                </Li>
              </Ul>
            </Box>
          </Flex>
        </LinkBox>

        <NewsletterBox width={[1, 1, 1, 1/3]}>
          <Flex flexWrap="wrap">
            <Box width={1}>
              <Text variant="h5" mb={28}>Newsletter</Text>
              <Text variant="p" mb={4}>Subscribe our newsletter to get our update. We don't send span email to you.</Text>
            </Box>

            <Box width={[1, 1, 7/12, 1]}>
              <Form>
                <Input id="email" name="email" type="email" required />
                <CustomButton>SUBSCRIBE</CustomButton>
              </Form>
            </Box>

            <Box width={[1, 1, 5/12, 1]}>
              <Social>
                { social.map(( logo, index ) => (
                  <SocialLink to={logo.to} key={index}><SocialLogo width="100%" maxWidth="40px" height="auto" src={logo.src} alt={logo.alt} /></SocialLink>
                )) }
              </Social>
            </Box>
          </Flex>
        </NewsletterBox>
      </Flex>
      <CopyText variant="p" pb={37.5}>Copyright 2021. www.appik.com. All Rights Reserved.</CopyText>
    </Wrapper>
  )
}
