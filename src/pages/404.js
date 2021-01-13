import React from "react"

import { Layout } from "../components"
import { H1, P, Wrapper } from '../styles/GlobalStyles'

const NotFoundPage = () => (
  <Layout>
    <Wrapper>
      <H1>404: Not Found</H1>
      <P>You just hit a route that doesn&#39;t exist... the sadness.</P>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
