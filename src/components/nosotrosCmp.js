import React from "react";
import styled from "styled-components";

import Content from "./nosotros/nosotrosContent";

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  width: 100vw;
  @media (max-width: 425px) {
    height: 160vh;
  }
  @media (max-width: 320px) {
    height: 220vh;
  }
`;


const Nosotros = () => {
  return (
    <Wrapper>
      <Content 
        title={'Confianza'} 
        subtitle={'Desde un inicio ha sido nuestro motor de crecimiento y queremos que sea el diferencial con nuestros clientes.'}
        p_one={
          'Aunque normalmente nos definen como agencia start up, somos mucho más. Somos un proyecto empresarial que busca brindar a los clientes un aliado en sus procesos de transformación digital desde la etapa inicial hasta las etapas más avanzadas de maduración.'
        }
        p_two={
          'Nuestro alcance no se limita a diseñar una página web, pensamos en optimizar procesos de venta, comunicar información de una forma novedosa, mostrar el valor agregado de las marcas y planificar estrategias de mercadeo multicanal que aseguren una retorno de la inversión realizada.'
        }
        p_three={
          'Tenemos puntos centrales de operación en Bogotá y Medellin. Nuestros servicios llegan a toda Colombia buscando adaptarnos a las realidades de cada negocio según su contexto, nivel de crecimiento, ubicación y cualquier elemento del entorno que pueda impactar su transformación digital.'
        }
        p_four={
          'Faendi S.A.S es una empresa legalmente constituida con capital 100% colombiano.  Reúne profesionales de diversas disciplinas que han tenido experiencia con marcas de reconocimiento mundial y que ahora ponen su conocimiento al servicio de empresas e instituciones nacionales que quieren aprovechar las oportunidades que les da la tecnología.'
        }
      />
    </Wrapper>
  )
}

export default Nosotros