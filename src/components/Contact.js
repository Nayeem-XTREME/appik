import React from 'react'
import styled from 'styled-components'
import theme from '../styles/theme'

import { Wrapper, Button } from '../styles/MyStyles'
import { Box, Flex, Text } from "../components"

import Form from './ui/MyForm'

const Bg = styled.div`
  background-color: ${theme.colors.lightGray};
  padding: 37.5px 0;
`

const MyButton = styled(Button)`
  margin-bottom: 62px;
`

const CustomFlex = styled(Flex)`
  flex-direction: column;

  @media only screen and (max-width: ${theme.breakpoints.lg}) {
    flex-direction: row;
  }

  @media only screen and (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
  }
`

export default function Contact() {
  return (
    <Bg id="contact">
      <Wrapper>
        <Flex flexWrap="wrap">

          <Box width={[1, 1, 1, 1/2]} px={11} mx="auto">
            <Form title="Drop Us A Line &amp; Start Your Business" buttonText="SUBMIT" />
          </Box>

          <Box width={[0, 0, 0, 1/12]} px={[0, 0, 0, 11]}></Box>

          <Box width={[1, 1, 1, 5/12]} px={11} mx="auto">

            <Text variant="h4" mb={3}>Location</Text>
            <Text variant="p" mb={4}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</Text>
            <MyButton highlight>VIEW US ON GOOGLE MAP</MyButton>

            <CustomFlex>
              <Box width={[1, 1, 1/2, 1]} pr={[0, 0, 11, 0]}>
                <Text variant="h5" mb={2}>Address 1</Text>
                <Text variant="p" mb={[62, 62, 0, 62]}>
                  Silver Tower <br />
                  123/45. There are many variations of passages <br />
                  12, Jumpton Road, South Avenue. Germany. <br />
                  Ph. (123) 456 789 <br />
                  Email: help@dada’s.com
                </Text>
              </Box>

              <Box width={[1, 1, 1/2, 1]} pl={[0, 0, 11, 0]}>
                <Text variant="h5" mb={2}>Address 1</Text>
                <Text variant="p">
                  Silver Tower <br />
                  123/45. There are many variations of passages <br />
                  12, Jumpton Road, South Avenue. Germany. <br />
                  Ph. (123) 456 789 <br />
                  Email: help@dada’s.com
                </Text>
              </Box>
            </CustomFlex>
          </Box>
        </Flex>
      </Wrapper>
    </Bg>
  )
}