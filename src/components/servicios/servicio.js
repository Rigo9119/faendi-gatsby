import React from "react";
import Link from "gatsby-link"
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

const Title = styled.h2`
  color: #008A83;
  letter-spacing: 1px;
  max-width: 900px;
  font-size: 3rem;
`;

const Description = styled.p`
  color: #b0b0b0;
  font-size: 1rem;
  margin: 20px 0;
`;

const StyledLink = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
  color: #008A83;
  margin-top: 40px;
  width: 20%;
`;


const ServiciosContent = ({title, desc, to}) => (
  <Wrapper>
    <Title>{title}</Title>
    <Description>{desc}</Description>
    <StyledLink to={to}>{'Conoce más'}</StyledLink>
  </Wrapper>
)


export default ServiciosContent;