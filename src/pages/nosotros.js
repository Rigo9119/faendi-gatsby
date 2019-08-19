import React from "react"

import Layout from "../components/layout"
import Content from "../components/nosotrosCmp"
import SEO from "../components/seo"

const NosotrosPage = (props) => (
  <Layout>
    <SEO 
      title="Empresa de Diseño Web y Marketing Digital" 
      description="Una empresa de diseño web y marketing digital con amplia experiencia en la industria. Queremos poner nuestro conocimiento a tu disposición. ¡Conócenos!"
      keywords="empresa de diseño web"
    />
    <Content />
  </Layout>
)

export default NosotrosPage