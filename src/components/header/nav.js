import Link from "gatsby-link";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.nav`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: end;
  width: 12%;
`;

const StyledLink = styled(Link)`
  color: #008a83;
  font-size: 0.8rem;
  letter-spacing: 4px;
  text-decoration: none;
  writing-mode: vertical-lr;
`;
/**
TODO 
add the clients and services links
 */
const Nav = ({home, us, contact, services, clients}) => (
    <Wrapper>
      <StyledLink to="/">
        {home}
      </StyledLink>
      <StyledLink to="/nosotros/">
        {us}
      </StyledLink>
      <StyledLink to="/servicios/">
        {services}
      </StyledLink>
{/*   
      <StyledLink to="/clientes/">
        {clients}
      </StyledLink> 
*/}
      <StyledLink to="/contacto/">
        {contact}
      </StyledLink>
    </Wrapper>
);


export default Nav;
