import React from "react";
import styled from "styled-components";

import Nav from "./header/nav";
import Logo from "./header/logo";
import FaendiLogo from "../images/faendi-logo.png";

const StyledHeader = styled.header `
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1.5%;
  width: 100%;
  position: fixed;
  z-index: 2;
`;

// hacer refactor del nav  - componente aparte 
const Header = () => (
  <StyledHeader>
    <Logo 
      src={FaendiLogo}
    />
    <Nav 
      home={'Home'}
      us={'Nosotros'}
      services={'Servicios'}
      clients={'Clientes'}
      contact={'Contacto'}
    />
  </StyledHeader>
)

export default Header;
