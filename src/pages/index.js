import React from "react"
import { Link } from "gatsby"

import { Box, Flex, Layout, Text } from "../components"
import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <Text variant="h1" color="defaultText">
      Hi people
    </Text>
    <Text color="success">Welcome to your new Gatsby site.</Text>
    <Text>Now go build something great.</Text>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Flex Flex mx={[0, -2]} flexWrap="wrap">

      <Box width={[1, 1 / 3]} px={3} py={3}>
        <Box borderRadius="4px" bg="tomato" p={3}>
          <Text variant="h3" color="background">
            Hello There 1
          </Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
        </Box>
      </Box>

      <Box width={[1, 1 / 3]} px={3} py={3}>
        <Box borderRadius="4px" bg="tomato" p={3}>
          <Text variant="h3" color="background">
            Hello There 2
          </Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
        </Box>
      </Box>

      <Box width={[1, 1 / 3]} px={3} py={3}>
        <Box borderRadius="4px" bg="tomato" p={3}>
          <Text variant="h3" color="background">
            Hello There 3
          </Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
        </Box>
      </Box>

    </Flex>

  </Layout>
)

export default IndexPage
