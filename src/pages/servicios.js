import React from "react"

import Layout from "../components/layout"
import ServiceHero from "../components/hero"
import SEO from "../components/seo"

const NosotrosPage = (props) => (
  <Layout>
    <SEO 
      title="Marketing Digital y Diseño de Páginas Web Bogotá" 
      description="Somos el aliado ideal para diseño de páginas web, marketing digital y elaboración de infografías. Prestamos servicios en Bogotá, Medellín y toda Colombia."
      keywords="diseño, paginas web, bogota"
    />
    <ServiceHero 
      title_h1={'Diseño de Páginas Web'}
      description={'Creamos sitios web a tu medida para llegar a tus clientes de una forma diferente y puedas comunicar de manera eficaz el valor agregado de tu negocio.'}
      link={'Conoce más'}
      to={'/servicios/diseno-web'}
    />
    <ServiceHero 
      title={'SEO - Posicionamiento en buscadores'}
      description={'Aumentamos la presencia de tu marca en internet y te conectamos con tus posibles clientes.'}
      link={'Conoce más'}
      to={'/servicios/seo'}
    />
    <ServiceHero 
      title={'Tienda Virtual eCommerce'}
      description={'Implementamos un una tienda online donde tus clientes podrán comprar tus productos de forma fácil y rápida.'}
      link={'Conoce más'}
      to={'/servicios/e-commerce'}
    />
    <ServiceHero 
      title={'Infografías Digitales'}
      description={'Comunica grandes cantidades de información de una forma llamativa y entendible.'}
      link={'Conoce más'}
      to={'/servicios/infografia-digital'}
    />
  </Layout>
)

export default NosotrosPage