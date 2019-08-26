import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #FFF;
  display: none;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: 10px;
  width: 100vw;
  @media (max-width: 425px){
    display: flex;    
  }
`;
    {/*
      when we click the hamburguer menu
      it shoul toggle the display property 
      display: ${props.open === true ? flex : none}
    */}

const Menu = styled.nav`
  display: none;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  height: 25vh;
  left: 28%;
  top: 25%;
  @media (max-width: 425px){
    display: flex;    
  }
`;

const StyledLink = styled(Link)`
  color: #008a83;
  font-size:1.5rem;
  font-weight: bold;
  letter-spacing: 4px;
  text-decoration: none;
`;

const responsiveMenu = ({home, us, contact, services, portafolio}) => (
  <Wrapper>
    <Menu>
      <StyledLink to="/">{home}</StyledLink>
      <StyledLink to="/nosotros/">{us}</StyledLink>
      <StyledLink to="/servicios/">{services}</StyledLink>
  {/*
      <StyledLink to="/portafolio/">{portafolio}</StyledLink>
  */}
      <StyledLink to="/contacto/">{contact}</StyledLink>
    </Menu>
  </Wrapper>
)


export default responsiveMenu
