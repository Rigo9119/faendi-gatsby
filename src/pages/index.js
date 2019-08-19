import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import SEO from "../components/seo"

const IndexPage = (props) => (
  <Layout>
    <SEO 
      title="Agencia Digital Bogotá" 
      description="Somos una empresa de desarrollo web y marketing digital enfocada en resultados. Queremos potenciar tu negocio. ¡Entra ya!"
      keywords="empresa de diseño web"
    />
    <Hero 
      title_h1={'TRANSFORMA TU NEGOCIO Y DIGITALIZA TU EMPRESA'}
      subtitle={'Un nuevo aliado para ayudarte en el proceso de transformación digital'}
      description={
        'Somos una agencia digital con sede en Bogotá, prestamos servicios a toda Colombia. Nuestra especialidad es el desarrollo web y estrategias de marketing digital, nuestra búsqueda es visibilizar tu marca para superar tus objetivos de negocio'
      }
      link={'Ver más'}
      to={'/nosotros/'}
    />
    <Hero 
      title={'LA IMPORTANCIA DE TENER EL ALIADO IDEAL'}
      subtitle={'Tenemos la capacidad de adaptarnos a las necesidades de tu negocio'}
      description={
        'En Faendi contamos con profesionales altamente experimentados en la industria. Hemos tenido la oportunidad de trabajar con marcas reconocidas a nivel mundial y queremos poner esa experiencia a disposición de las compañías que están en proceso de digitalización y que requieren de un aliado para sus estrategias de marketing'
      }
    />
    <Hero 
      title={'DISEÑO WEB Y MARKETING DIGITAL'}
      subtitle={'Un nuevo aliado para ayudarte en el proceso de transformación digital'}
      description={
        'Desarrollamos productos digitales como páginas web y aplicaciones móviles, enfocados en satisfacer las necesidades comerciales de nuestros clientes en los mercados nacionales e internacionales, asegurando un trabajo de calidad'
      }
      nav
      link_one={'Diseño de Páginas Web'}
      to_one={'/servicios/'}
      link_two={'SEO - Posicionamiento en buscadores'}
      to_two={'/servicios/'}
      link_three={'Tienda Virtual eCommerce'}
      to_three={'/servicios/'}
      link_four={'Infografías Digitales'}
      to_four={'/servicios/'}
    />
  </Layout>
)

export default IndexPage
