import React from "react";
import Link from "gatsby-link";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;  
  width: 40%;
  @media (max-width: 425px){
    justify-content: flex-end;
    width: 20%;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 425px){
    justify-content: flex-end;
    align-items: flex-end;
    padding-right: 10%;
  }
`;

const Img = styled.img`
  height: 10%;
  width: 30%;
  @media (max-width: 425px){
    height: 35%;
    width: 35%;    
  }
`;

const Logo = ({src}) => (
  <Wrapper>
    <StyledLink to="/">
      <Img src={src} alt={"Logo Faendi"}/>
    </StyledLink>
  </Wrapper>
);


export default Logo;
