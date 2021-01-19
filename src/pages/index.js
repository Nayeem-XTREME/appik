import React from "react"

import { Layout, Cover, Process, HowItWorks, Pricing, Clients, Faq, Download, Contact } from "../components"

const IndexPage = () => (
  <Layout>
    <Cover />
    <Process />
    <HowItWorks />
    <Pricing />
    <Clients />
    <Faq />
    <Download />
    <Contact />
  </Layout>
)

export default IndexPage