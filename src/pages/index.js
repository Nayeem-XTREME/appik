import React from "react"
import { Helmet } from "react-helmet"
import '../styles/index.css'

import { Layout, Cover, Process, HowItWorks, Faces, Pricing, Clients, Faq, Download, Contact, Footer } from "../components"

const IndexPage = () => (
  <div>

    <Helmet>
      <meta charSet="utf-8" />
      <title>Appik | Life Makes Easy</title>
    </Helmet>

    <Layout>
      <Cover />
      <Process />
      <HowItWorks />
      <Faces />
      <Pricing />
      <Clients />
      <Faq />
      <Download />
      <Contact />
      <Footer />
    </Layout>

  </div>
)

export default IndexPage