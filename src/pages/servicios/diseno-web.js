
import React from "react"

import Layout from "../../components/layout"
import Hero  from "../../components/hero"
import SEO from "../../components/seo"

const DesignPage = (props) => (
  <Layout>
    <SEO 
      title="Marketing Digital y Diseño de Páginas Web Bogotá" 
      description="Somos el aliado ideal para diseño de páginas web, marketing digital y elaboración de infografías. Prestamos servicios en Bogotá, Medellín y toda Colombia."
      keywords="diseño, paginas web, bogota"
    />
    <Hero 
      title_h1={'Diseño de Páginas Web'}
      description={'Diseñamos sitios web administrables, páginas de fácil navegación, intuitivas, desarrolladas con estándares de calidad actuales, amigables para Google; tiendas en línea, landing page, sitios personalizados, ofrecemos soporte técnico, administración de contenidos, estrategias de comunicación y posicionamiento para aumentar el tráfico de visitantes en los Sitios Web. Estamos ubicados en Bogotá, Colombia y ofrecemos nuestros servicios a empresas de cualquier lugar del mundo.'}
    />
  </Layout>
)

export default DesignPage