import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;  
  width: 40%;
`;

const Img = styled.img`
  width: 95%;
`;

const Logo = ({src}) => (
  <Wrapper>
    <Img src={src}/>
  </Wrapper>
);


export default Logo;
