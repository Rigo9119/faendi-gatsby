import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Faendi" />
    <Hero 
      title={'TRANSFORMA TU NEGOCIO Y DIGITALIZA TU EMPRESA'}
      subtitle={'Un nuevo aliado para ayudarte en el proceso de transformación digital'}
      description={
        'Somos una agencia digital con sede en Bogotá, prestamos servicios a toda Colombia. Nuestra especialidad es el desarrollo web y estrategias de marketing digital, nuestra búsqueda es visibilizar tu marca para superar tus objetivos de negocio.'
      }
      video={'https://youtu.be/Rvvsw21PgIk'}
    />
    <Hero 
      title={'TRANSFORMA TU NEGOCIO Y DIGITALIZA TU EMPRESA'}
      subtitle={'Un nuevo aliado para ayudarte en el proceso de transformación digital'}
      description={
        'Somos una agencia digital con sede en Bogotá, prestamos servicios a toda Colombia. Nuestra especialidad es el desarrollo web y estrategias de marketing digital, nuestra búsqueda es visibilizar tu marca para superar tus objetivos de negocio.'
      }
      img={Image}
      link={'ver mas'}
    />
  </Layout>
)

export default IndexPage
