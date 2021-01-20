import React from 'react'

import { Box, Flex, Text } from "../components"
import { Wrapper, Title } from '../styles/MyStyles'

import { reviews } from '../data/client'

export default function Clients() {
  return (
    <Wrapper>
      <Title>
        <Text variant="h2">What Says Our Clients</Text>
        <Text variant="p">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.</Text>
      </Title>

      <Flex flexWrap="wrap">

        { reviews.map((item, index) => (
          <Box width={1/2} key={index} style={{ padding: "22.5px 11.25px" }}>
            <Flex alignItems='center' mb={20}>
              <Box width={2/12}>
                <img style={{ maxWidth: "85%", height: "auto" }} src={item.avatar} alt="avater"/>
              </Box>
              <Box width={10/12} ml={3}>
                <Text variant="h5" mb={1}>{item.name}</Text>
                <Text variant="p">{item.tag}</Text>
              </Box>
            </Flex>

            <Flex>
              <Box width={1} style={{ padding: "30px 12%", border: "0.75px solid #E8E8E8", borderRadius: "5px" }}>
                <Text variant="p">{item.review}</Text>
              </Box>
            </Flex>
          </Box>
        )) }

      </Flex>
    </Wrapper>
  )
}