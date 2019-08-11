import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header `
  background: crimson;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1.5%;
  width: 100%;
  position: fixed;
  z-index: 2;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;  
  width: 40%;
`;

const Logo = styled.img`
  width: 95%;
`;

const Menu = styled.nav`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  width: 60%;
`;

const StyledLink = styled(Link)`
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.8rem;
  text-decoration: none;
  width: 15%;
`;
// hacer refactor del nav  - componente aparte 
const Header = ({ siteTitle }) => (
  <StyledHeader>
    <LogoContainer>
      <Logo />
    </LogoContainer>
    <Menu>
      <StyledLink to="/index/">
        {'Home'}
      </StyledLink>
      <StyledLink to="/nosotros/">
        {'Nosotros'}
      </StyledLink>
      <StyledLink to="/contacto/">
        {'Contacto'}
      </StyledLink>
    </Menu>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
