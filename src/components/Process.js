import React from "react"
import styled from "styled-components"
import TextBlock from "./TextBlock"
import { Wrapper, Title, Image } from "../styles"
import { Box, Flex, Text } from "../components"
import theme from "../styles/theme"

import mobile from "../assets/img/Mobile.svg"

const ImageBox = styled(Box)`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`

export default function Process() {
  return (
    <Wrapper id="features">
      <Title>
        <Text variant="h2">Easy Process With Best Features</Text>
        <Text variant="p">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words
        </Text>
      </Title>

      <Flex alignItems="center" flexWrap="wrap">
        <Box width={[1, 1, 1 / 3]} pr={[0, 0, 3]} mb={[30, 30, 0, 0]} textAlign={["center", "center", "left"]}>
          <TextBlock
            mb
            title="Loaded with features"
            details="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use."
          />
          <TextBlock
            title="Devices Friendly"
            details="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use."
          />
        </Box>

        <ImageBox width={[1, 1, 1 / 3]}>
          <Image width="100%" maxWidth="240px" height="auto" src={mobile} alt="Features" />
        </ImageBox>

        <Box className="last" width={[1, 1, 1 / 3]} pl={[0, 0, 3]} textAlign={["center", "center", "left"]}>
          <TextBlock
            mb
            title="Update Forever"
            details="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use."
          />
          <TextBlock
            title="Superb UX/UI"
            details="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use."
          />
        </Box>
      </Flex>
    </Wrapper>
  )
}