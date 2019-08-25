import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 50vw;
  @media (max-width: 425px) {
    width: 75vw;
  }
  @media (max-width: 600px) {
    width: 75vw;
  }
`;

const H1 = styled.h1`
  color: #008A83;
  font-size: 3rem;
  padding-bottom: 2% ;
  text-align: center;
  @media (max-width: 425px) {
    font-size: 2rem
  }
`;

const H3 = styled.h2`
  color: #818181;
  font-size: 1rem;
  padding: 1%;
  text-align: left;
  width: 90%;
  @media (max-width: 425px) {
    padding-top: 5%;
    width: 100%;
  }
`;

const P = styled.p`
  color: #b0b0b0;
  padding: 1%;
  width: 90%;
  @media (max-width: 425px) {
    padding-top: 5%;
    width: 100%;
  }
`;

const A = styled.a`
  color: #008A83;
  letter-spacing: 2px;
  padding: 1%;
  text-align: center;
  @media (max-width: 425px) {
    padding-top: 5%;
    width: 100%;
  }
`;

const Content = ({h_two, h_three, p_one, p_two, anchor}) => (
  <Wrapper>
    <H1>{h_two}</H1>
    <H3>{h_three}</H3>
    <P>{p_one}</P>
    <P>{p_two}</P>
    <A>{anchor}</A>
  </Wrapper>
)

export default Content