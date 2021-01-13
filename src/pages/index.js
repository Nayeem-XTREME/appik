import React from "react"
import Cover from '../components/custom/Cover'
import Process from '../components/custom/Process'
import HowItWorks from '../components/custom/HowItWorks.js'

import { Layout } from "../components"

const IndexPage = () => (
  <Layout>
    <Cover />
    <Process />
    <HowItWorks />
  </Layout>
)

export default IndexPage