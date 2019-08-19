import React from "react"

import Layout from "../../components/layout"
import Hero  from "../../components/hero"
import SEO from "../../components/seo"

const NosotrosPage = (props) => (
  <Layout>
    <SEO 
      title="Marketing Digital y Diseño de Páginas Web Bogotá" 
      description="Somos el aliado ideal para diseño de páginas web, marketing digital y elaboración de infografías. Prestamos servicios en Bogotá, Medellín y toda Colombia."
      keywords="diseño, paginas web, bogota"
    />
    <Hero 
      title_h1={'Infografías digitales'}
      description={'La infografía es una visualización de datos o ideas que transmite una información compleja al público de manera que pueda ser consumida de forma rápida y fácil de entender. La información de tu infografía no sólo debería ser fácil de entender, sino también interesante'}
    />
  </Layout>
)

export default NosotrosPage