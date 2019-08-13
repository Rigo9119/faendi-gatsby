import Link from "gatsby-link";
import React from "react";
import styled from "styled-components";

const Content = styled.div`
  padding: 20px;
  position: absolute;
  right: 0;
  text-align: left;
  top: 50%;
  transform: translateY(-50%);
  left: 15%;
  width: 60%;
  z-index: 1;
`;

const Title = styled.h2`
    color: #fff;
    letter-spacing: 1px;
    max-width: 900px;
    font-size: 3.5rem;
`;

const SubTitle = styled.h3`
  color: #FFF;
  font-size: 2.125rem;
`;

const Description = styled.p`
  color: #FFF;
  font-size: 1.3rem;
  margin-top: 15px;
`;

const StyledLink = styled(Link)``;

const HeaderContent = ({title, subtitle, description, link}) => (
  <Content>      
    <Title>
      {title}
    </Title>
    <SubTitle>
      {subtitle}
    </SubTitle>
    <Description>
      {description}
    </Description>
    {link ? <StyledLink>{link}</StyledLink> : null}
  </Content>
);

export default HeaderContent;
