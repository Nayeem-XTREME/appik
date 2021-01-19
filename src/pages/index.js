import React from "react"

import { Layout, Cover, Process, HowItWorks, Pricing, Clients, Faq, Download, Contact, Footer } from "../components"

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
    <Footer />
  </Layout>
)

export default IndexPage