import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding-left: 2%;
  width: 48%;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
`;

const H2 = styled.h2`
  color: #008A83;
  text-orientation: upright;
  writing-mode: vertical-lr;
`;
const TextContainer = styled.div`
  width: 80%;
`;

const H3 = styled.h3`
  padding: 0% 4% 4% 4%;
`;

const P = styled.p`
  padding: 2% 4%;
`;

const A = styled.a`
  padding: 2% 4%;
`;

const Content = ({h_two, h_three, p_one, p_two,anchor}) => (
  <Wrapper>
    <TitleContainer>
      <H2>{h_two}</H2>
    </TitleContainer>
    <TextContainer>
      <H3>{h_three}</H3>
      <P>{p_one}</P>
      <P>{p_two}</P>
      <A>{anchor}</A>
    </TextContainer>
  </Wrapper>
)

export default Content