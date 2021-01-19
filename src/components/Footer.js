import React from 'react'
import styled from 'styled-components'
import theme from '../styles/theme'

import { Wrapper, Button } from '../styles/MyStyles'
import { Box, Flex, Text } from "../components"

import { social } from '../data/social'
import logo from '../assets/logo/appikBlack.svg'

const Logo = styled.img`
  width: 98px;
  margin-bottom: 28px;
`

const Ul = styled.ul`
  list-style: none;
`

const Li = styled.li`
  text-decoration: none;
  line-height: 150%;
`

const Form = styled.form`
  position: relative;
  margin-bottom: 32px;
`

const Input = styled.input`
  height: 40px;
  width: 100%;
  padding: 0 24px;
  font-family: "Roboto", sans-serif;
  color: ${theme.colors.defaultText};
  border: 1px solid ${theme.colors.gray2};
  border-radius: 30px;
  outline: none;
`

const CustomButton = styled(Button)`
  height: 40px;
  min-width: 100px;
  position: absolute;
  font-family: 'Montserrat', sans-serif;
  right: 0;
  top: 0;
  bottom: 0;
`

const Social = styled.div`
  position: absolute;
  right: 30px;
`

const Img = styled.img`
  width: 30px;
  height: auto;
  margin-left: 18px;
`

export default function Footer() {
  return (
    <Wrapper>
      <Flex flexWrap="wrap" pt={75}>
        <Box width={1/3}>
          <Logo src={logo} alt="logo" />
          <Text variant="p" style={{ marginBottom: "28px" }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</Text>
          <Text variant="p">Copyright 2021. www.appik.com. All Rights Reserved.</Text>
        </Box>

        <Box width={1/3} pl={40}>
          <Text variant="h5" mb={36}>Useful Links</Text>
          <Flex flexWrap="wrap">
            <Box width={1/2}>
              <Ul>
                <Li>
                  <Text variant="p">Home</Text>
                </Li>
                <Li>
                  <Text variant="p">Pages</Text>
                </Li>
                <Li>
                  <Text variant="p">Features</Text>
                </Li>
                <Li>
                  <Text variant="p">How it works</Text>
                </Li>
                <Li>
                  <Text variant="p">App faces</Text>
                </Li>
              </Ul>
            </Box>
            <Box width={1/2}>
              <Ul>
                <Li>
                  <Text variant="p">Download</Text>
                </Li>
                <Li>
                  <Text variant="p">FAQ's</Text>
                </Li>
                <Li>
                  <Text variant="p">Support</Text>
                </Li>
                <Li>
                  <Text variant="p">Pricing</Text>
                </Li>
                <Li>
                  <Text variant="p">Contact us</Text>
                </Li>
              </Ul>
            </Box>
          </Flex>
        </Box>

        <Box width={1/3}>
          <Text variant="h5" mb={36}>Newsletter</Text>
          <Text variant="p" mb={4}>Subscribe our newsletter to get our update. We don't send span email to you.</Text>

          <Form>
            <Input id="email" name="email" type="email" required />
            <CustomButton>
              <Text fontFamily='Montserrat' fontWeight='bold' variant="p">SUBSCRIBE</Text>
            </CustomButton>
          </Form>

          <Social>
            { social.map(( logo, index ) => (
              <Img src={logo.src} alt={logo.alt} key={index} />
            )) }
          </Social>
        </Box>
      </Flex>
    </Wrapper>
  )
}
