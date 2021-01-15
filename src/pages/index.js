import React from "react"
import Cover from '../components/Cover'
import Process from '../components/Process'
import HowItWorks from '../components/HowItWorks'
import Pricing from '../components/Pricing'

import { Layout } from "../components"

const IndexPage = () => (
  <Layout>
    <Cover />
    <Process />
    <HowItWorks />
    <Pricing />
  </Layout>
)

export default IndexPage