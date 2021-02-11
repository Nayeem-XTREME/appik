import React from 'react'
import styled from 'styled-components'
import { Box, Flex, Text } from '../components'
import { Wrapper, Title, Image } from '../styles'
import ListItem from './ListItem'
import { how } from '../data/how'
import theme from '../styles/theme'

import control from '../assets/img/Control.svg'
import bg from '../assets/img/bg.svg'

const Background = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: 0 220px;
  background-size: auto 460px;

  @media only screen and (max-width: ${theme.breakpoints.md}) {
    background: none;
  }
`

const MobileImage = styled(Image)`
  @media only screen and (max-width: ${theme.breakpoints.lg}) {
    margin: 0 auto;
    margin-bottom: 75px;
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`

export default function HowItWorks() {
  return (
    <Background id="how-it-works">
      <Wrapper>
        <Title>
          <Text variant="h2">How it Works</Text>
          <Text variant="p">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words
          </Text>
        </Title>

        <Flex flexWrap="wrap">
          <Box width={[1, 1, 1, 1 / 2]}>
            <MobileImage
              width="100%"
              maxWidth="240px"
              height="auto"
              marginLeft="130px"
              src={control}
              alt="Control"
            />
          </Box>

          <Box width={[1, 1, 1, 1 / 2]}>
            {how.map((item, index) => {
              if (index === how.length - 1)
                return (
                  <ListItem
                    key={index}
                    img={item.src}
                    alt={item.alt}
                    title={item.title}
                    details={item.details}
                  />
                )
              else
                return (
                  <ListItem
                    mb
                    key={index}
                    img={item.src}
                    alt={item.alt}
                    title={item.title}
                    details={item.details}
                  />
                )
            })}
          </Box>
        </Flex>
      </Wrapper>
    </Background>
  )
}
