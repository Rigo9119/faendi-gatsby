import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px;
  position: absolute;
  right: 0;
  text-align: left;
  top: 50%;
  transform: translateY(-50%);
  left: 20%;
  width: 60%;
  z-index: 1;
`;

const Content = styled.div``;
const Title = styled.h2``;
const Square = styled.div``;
const Description = styled.p``;


const ServiciosContent = ({title, desc}) => (
  <Wrapper>
    <Content>
      <Title>{title}</Title>
      <Square></Square>
      <Description>{desc}</Description>
    </Content>
  </Wrapper>
)


export default ServiciosContent;
