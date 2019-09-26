import Link from "gatsby-link";
import React from "react";
import styled from "styled-components";

import Menu from "./menu";

const Content = styled.div`
  padding: 20px;
  position: absolute;
  right: 0;
  text-align: left;
  top: 50%;
  transform: translateY(-50%);
  left: 22%;
  width: 60%;
  z-index: 1;
  @media (max-width: 425px) {
    top: 45%;
    left: 6%;
    width: 90%;
  }
`;

const TitleH1 = styled.h1`
  color: #008A83;
  letter-spacing: 1px;
  max-width: 900px;
  font-size: 3rem;
  @media (max-width: 425px) {
    font-size: 2rem;
  }
`;

const TitleH2 = styled.h2`
  color: #008A83;
  letter-spacing: 1px;
  max-width: 900px;
  font-size: 3rem;
  @media (max-width: 425px) {
    font-size: 2rem;
  }
`;

const SubTitle = styled.h3`
  color: #818181;
  font-size: 2rem;
  margin: 20px 0;
  @media (max-width: 425px) {
    font-size: 1rem;
  }
`;

const Description = styled.p`
  color: #b0b0b0;
  font-size: 1.2rem;
  margin: 30px 0;
  @media (max-width: 425px) {
    font-size: 1rem;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
  color: #008A83;
  margin-top: 40px;
`;

const HeroContent = ({title_h1, title, subtitle, description, to, link, nav,to_one, to_two, to_three, to_four, link_one, link_two, link_three, link_four}) => (
  <Content>  
    {title_h1 ?
      <TitleH1>
        {title_h1}
      </TitleH1>
    : 
      <TitleH2>
        {title}
      </TitleH2>}    
    <SubTitle>
      {subtitle}
    </SubTitle>
    <Description>
      {description}
    </Description>
    {link ? <StyledLink to={to}>{link}</StyledLink> : null}
    {nav ? 
      <Menu 
        to_one={to_one}
        link_one={link_one}
        to_two={to_two}
        link_two={link_two}
        to_three={to_three}
        link_three={link_three}
        to_four={to_four}
        link_four={link_four}
      />: null}
  </Content>
);

export default HeroContent;
