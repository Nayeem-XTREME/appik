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

const FormBox = styled(Box)`
  background-color: white;
  border-radius: 6px;
  padding: 60px 80px;
`

const MyButton = styled(Button)`
  margin-bottom: ${props => props.marginBottom};
`

export default function Contact() {
  return (
    <Bg>
    <Wrapper>
      <Flex flexWrap="wrap">

        <FormBox width={1/2} px={11.25}>
          <Form title="Drop Us A Line &amp; Start Your Business" buttonText="SUBMIT" />
        </FormBox>

        <Box width={1/12} px={11.25}></Box>

        <Box width={5/12} px={11.25}>

          <Text variant="h2" mb={3}>Location</Text>
          <Text variant="p" fontSize={1} mb={4}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</Text>
          <MyButton highlight marginBottom="62px">VIEW US ON GOOGLE MAP</MyButton>

          <Text variant="h4" mb={2}>Address 1</Text>
          <Text variant="p" mb={62}>
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