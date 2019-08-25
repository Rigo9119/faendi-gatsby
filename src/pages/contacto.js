import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/contactContent"
import Form from "../components/form"

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  width: 100vw;
  @media (max-width: 320px) {
    height: 200vh;
  }
`;

const ContactoPage = (props) => (
  <Layout>
    <SEO 
      title="Cotización Páginas Web y Servicios de Marketing" 
      description="Cuéntanos acerca de las necesidades de tu negocio. Escríbenos y realiza la cotización de páginas web y servicios de marketing según tus requerimientos."
      keywords="cotizacion, pagina, web"
    />
      <Wrapper>
        <Content
          h_two = {'CONTÁCTANOS'}
          h_three= {
            'Cuéntanos qué quieres alcanzar y con gusto te ayudaremos a encontrar la mejor solución para tu necesidad. En el menor tiempo posible te responderemos con una propuesta de cómo podemos ayudarte.'
          }
          p_one={
            'En el menor tiempo posible te responderemos con una cotización y una propuesta de cómo podemos ayudarte.'
          }
          p_two={
            'Escríbenos a través del siguiente formulario o contáctanos a través de nuestro correo.'
          }
          anchor={'hello@faendi.co'}
        />
        <Form />
      </Wrapper>
    </Layout>
)

export default ContactoPage;