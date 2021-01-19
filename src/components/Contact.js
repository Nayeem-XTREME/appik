import React from 'react'
import styled from 'styled-components'
import theme from '../styles/theme'

import { Wrapper, Button } from '../styles/MyStyles'
import { Box, Flex, Text } from "../components"

import Form from './ui/MyForm'

const Bg = styled.div`
  background-color: ${theme.colors.lightGray};
  padding-top: 75px;
`

export default function Contact() {
  return (
    <Bg>
    <Wrapper>
      <Flex flexWrap="wrap">

        <Box style={{ backgroundColor: "white", borderRadius: "6px", padding: "60px 79px" }} width={1/2} px={11.25}>
          <Form title="Drop Us A Line &amp; Start Your Business" buttonText="SUBMIT" />
        </Box>

        <Box width={1/12} px={11.25}></Box>

        <Box width={5/12} px={11.25}>

          <Text variant="h2" mb={3}>Location</Text>
          <Text variant="p" fontSize={1} mb={4}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</Text>
          <Button highlight style={{ marginBottom: "62.25px" }}>VIEW US ON GOOGLE MAP</Button>

          <Text variant="h4" mb={2}>Address 1</Text>
          <Text variant="p" mb={62.25}>
            Silver Tower <br />
            123/45. There are many variations of passages <br />
            12, Jumpton Road, South Avenue. Germany. <br />
            Ph. (123) 456 789 <br />
            Email: help@dada’s.com
          </Text>

          <Text variant="h4" mb={2}>Address 1</Text>
          <Text variant="p">
            Silver Tower <br />
            123/45. There are many variations of passages <br />
            12, Jumpton Road, South Avenue. Germany. <br />
            Ph. (123) 456 789 <br />
            Email: help@dada’s.com
          </Text>

        </Box>

      </Flex>
    </Wrapper>
    </Bg>
  )
}