import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;  
  width: 40%;
`;

const Img = styled.img`
  height: 10%;
  width: 30%;
`;

const Logo = ({src}) => (
  <Wrapper>
    <Link to="/">
      <Img src={src} alt={"Logo Faendi"}/>
    </Link>
  </Wrapper>
);


export default Logo;
