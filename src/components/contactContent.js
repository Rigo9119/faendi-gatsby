import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const H2 = styled.h2`
  color: #008A83;
  padding-bottom: 3% ;
  text-align: center;
`;

const H3 = styled.h3`
  padding: 2% 4%;
  text-align: left;
  width: 90%;
`;

const P = styled.p`
  padding: 2% 4%;
  width: 90%;
`;

const A = styled.a`
  color: #008A83;
  letter-spacing: 2px;
  padding: 2%;
  text-align: center;
`;

const Content = ({h_two, h_three, p_one, p_two,anchor}) => (
  <Wrapper>
    <H2>{h_two}</H2>
    <H3>{h_three}</H3>
    <P>{p_one}</P>
    <P>{p_two}</P>
    <A>{anchor}</A>
  </Wrapper>
)

export default Content