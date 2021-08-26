import React from 'react'
import '../styles/index.css'

import {
  SEO,
  Layout,
  Cover,
  Process,
  HowItWorks,
  Faces,
  Pricing,
  Clients,
  Faq,
  Download,
  Contact,
  Footer,
} from '../components'

const IndexPage = () => (
  <div>
    <Layout>
      <SEO title />
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
