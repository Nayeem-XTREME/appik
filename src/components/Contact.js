import React from 'react'
import styled from 'styled-components'
import theme from '../styles/theme'

import { Wrapper, Button } from '../styles/MyStyles'
import { Box, Flex, Text } from "../components"

const Bg = styled.div`
  background-color: ${theme.colors.lightGray};
  padding: 60px 0;
`

const Form = styled.form`
  overflow: hidden;
`

const Input = styled.input`
  width: 100%;
  margin-bottom: 22.5px;
  padding: 12px 0;
  border: none;
  border-bottom: 1px solid #D2D4D2;
  outline: none;

  font-family: 'Roboto', 'Montserrat', sans-serif;
  font-size: ${theme.fontSizes[0]};
`

const Textarea = styled.textarea`
  max-width: 100%;
  min-width: 100%;
  display: block;
  margin-bottom: 37.5px;
  padding: 12px 0;
  border: none;
  border-bottom: 1px solid #D2D4D2;
  outline: none;

  font-family: 'Roboto', 'Montserrat', sans-serif;
  font-size: ${theme.fontSizes[0]};
`

export default function Contact() {
  return (
    <Bg>
    <Wrapper>
      <Flex flexWrap="wrap">

        <Box style={{ backgroundColor: "white", borderRadius: "6px", padding: "60px 79px" }} width={1/2} px={11.25}>
          <Form>

            <Text variant="h2" mb={43}>Drop Us A Line &amp; Start Your Business</Text>

            <label for="name">
              <Text variant="p">Name</Text>
            </label>
            <Input type="text" id="name" name="name" required />

            <label for="email">
              <Text variant="p">Email</Text>
            </label>
            <Input type="email" id="email" name="email" required />

            <label for="subject">
              <Text variant="p">Subject</Text>
            </label>
            <Input type="text" id="subject" name="subject" required />

            <label for="message">
              <Text variant="p">Message</Text>
            </label>
            <Textarea type="text" id="message" name="message" required />

            <Button highlight type="submit">
              <Text variant="h5">SUBMIT</Text>
            </Button>
          </Form>
        </Box>

        <Box width={1/12} px={11.25}></Box>

        <Box width={5/12} px={11.25}>

          <Text variant="h2" mb={3}>Location</Text>
          <Text variant="p" fontSize={1} mb={4}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</Text>
          <Button highlight style={{ marginBottom: "62.25px" }}>
            <Text variant="h5">VIEW US ON GOOGLE MAP</Text>
          </Button>

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