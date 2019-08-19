import React from "react"

import Layout from "../components/layout"
import Content from "../components/serviciosCmp"
import SEO from "../components/seo"

const NosotrosPage = (props) => (
  <Layout>
    <SEO title="Marketing Digital y Diseño de Páginas Web Bogotá" />
    <Content 
      title1={'Diseño de Páginas Web'}
      title2={'SEO - Posicionamiento en buscadores'}
      title3={'Tienda Virtual eCommerce'}
      title4={'Infografías Digitales'}
      desc1={'Creamos sitios web a tu medida para llegar a tus clientes de una forma diferente y puedas comunicar de manera eficaz el valor agregado de tu negocio.'}
      desc2={'Aumentamos la presencia de tu marca en internet y te conectamos con tus posibles clientes.'}
      desc3={'Implementamos un una tienda online donde tus clientes podrán comprar tus productos de forma fácil y rápida.'}
      desc4={'Comunica grandes cantidades de información de una forma llamativa y entendible.'}
      to1={'/'}
      to2={'/'}
      to3={'/'}
      to4={'/'}
    />
  </Layout>
)

export default NosotrosPage