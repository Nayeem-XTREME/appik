import React from 'react'
import { Wrapper, Title } from '../styles/MyStyles'
import { Box, Flex, Text } from "../components"
import bitmap from '../assets/img/Bitmap.svg'

export default function Faq() {
  return (
    <Wrapper>
      <Title style={{ alignItems: "flex-start", padding: "0 11.25px" }}>
        <Text variant="h2">Frequently Ask Questions</Text>
        <Text variant="p" style={{ textAlign: "left" }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.</Text>
      </Title>

      <Flex flexWrap="wrap">
        <Box width={1/2} px={11.25}>
          <img style={{ maxWidth: "100%", width: "auto" }} src={bitmap} alt="bitmap" />
        </Box>
        <Box width={1/12} px={11.25}></Box>
        <Box width={5/12} px={11.25}>
          Collapsable
        </Box>
      </Flex>
    </Wrapper>
  )
}
