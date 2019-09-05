import React from "react";
import styled from "@emotion/styled";

const Content = styled.div`
  padding: 20px;
  position: absolute;
  right: 0;
  text-align: left;
  top: 50%;
  transform: translateY(-50%);
  left: 20%;
  width: 60%;
  z-index: 1;
  @media (max-width: 425px) {
    top: 45%;
    left: 8%;
    width: 90%;
  }
  @media (max-width: 320px) {
    top: 50%;
  }
`;

const Title = styled.h1`
  color: #008A83;
  letter-spacing: 1px;
  max-width: 900px;
  font-size: 3rem;
  @media (max-width: 425px) {
    font-size: 2rem;
    width: 80%;
  }
`;

const SubTitle = styled.h3`
  color: #818181;
  font-size: 1rem;
  margin: 20px 0;
  @media (max-width: 425px) {
    padding-right: 10%;
  }
`;

const Paragraph = styled.p`
  color: #b0b0b0;
  font-size: 1rem;
  margin: 20px 0;
  @media (max-width: 425px) {
    padding-right: 10%;
  }
`;

const NosotrosContent = ({title, subtitle, p_one, p_two, p_three, p_four}) => (
  <Content>      
    <Title>
      {title}
    </Title>
    <SubTitle>
      {subtitle}
    </SubTitle>
    <Paragraph>
      {p_one}
    </Paragraph>
    <Paragraph>
      {p_two}
    </Paragraph>
    <Paragraph>
      {p_three}
    </Paragraph>
    <Paragraph>
      {p_four}
    </Paragraph>
  </Content>
);

export default NosotrosContent;