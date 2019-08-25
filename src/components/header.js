import React from "react";
import styled from "styled-components";

import Nav from "./header/nav";
import Logo from "./header/logo";
import Hamburguer from "./header/hamburguer";
import FaendiLogo from "../images/faendi-transparent-dark.png";
import FaendiIcon from "../images/faendi-icon.png";

const WINDOW_SIZE = window.screen.availWidth;
const SRC_IMG = WINDOW_SIZE >= '600px' ? FaendiLogo : FaendiIcon;

const StyledHeader = styled.header `
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1.5%;
  width: 100%;
  position: fixed;
  z-index: 2;
  @media (max-width: 425px) {
    background-color: #000;
  }
`;

const Header = () => (

  <StyledHeader>
    <Hamburguer />
    <Logo 
      src={SRC_IMG}
    />
    <Nav 
      home={'Home'}
      us={'Nosotros'}
      services={'Servicios'}
      //clients={'Clientes'}
      contact={'Contacto'}
    />
  </StyledHeader>
)

export default Header;
