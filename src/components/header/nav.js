import Link from "gatsby-link";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.nav`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: end;
  width: 10%;
`;

const StyledLink = styled(Link)`
  color: crimson;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 4px;
  text-decoration: none;
  writing-mode: vertical-lr;
`;
const Nav = ({home, us, contact}) => (
    <Wrapper>
      <StyledLink to="/index/">
        {home}
      </StyledLink>
      <StyledLink to="/nosotros/">
        {us}
      </StyledLink>
      <StyledLink to="/contacto/">
        {contact}
      </StyledLink>
    </Wrapper>
);


export default Nav;
