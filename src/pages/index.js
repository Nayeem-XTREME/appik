import React from "react"
import Cover from '../components/custom/Cover'
import Process from '../components/custom/Process'
import HowItWorks from '../components/custom/HowItWorks'
import Pricing from '../components/custom/Pricing'

import { Layout } from "../components"

const IndexPage = () => (
  <Layout>
    <Cover />
    <Process />
    {/* <HowItWorks /> */}
    {/* <Pricing /> */}
  </Layout>
)

export default IndexPage