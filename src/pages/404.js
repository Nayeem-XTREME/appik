import React from "react"

import { Wrapper } from '../styles/MyStyles'
import { Layout, Text } from "../components"

const NotFoundPage = () => (
  <Layout>
    <Wrapper>
      <Text variant="h1">404: Not Found</Text>
      <Text variant="p">You just hit a route that doesn&#39;t exist... the sadness.</Text>
    </Wrapper>
  </Layout>
)

export default NotFoundPage