import React from "react"
import Cover from '../components/Cover'
import Process from '../components/Process'
import HowItWorks from '../components/HowItWorks'
import Pricing from '../components/Pricing'
import Clients from '../components/Clients'

import { Layout } from "../components"

const IndexPage = () => (
  <Layout>
    <Cover />
    <Process />
    <HowItWorks />
    <Pricing />
    <Clients />
  </Layout>
)

export default IndexPage