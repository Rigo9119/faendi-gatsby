import React from "react";
import Link from "gatsby-link"
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 425px) {
    flex-flow: column wrap;
  }
`;

const NavLink = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
  color: #008A83;
  margin-top: 40px;
  width: 20%;
  @media (max-width: 425px) {
    margin-top: 10px;
    width: 100%;
  }  
`;

const Menu = ({to_one, to_two, to_three, to_four, link_one, link_two, link_three, link_four}) => (
    <Wrapper>
        <NavLink to={to_one}>{link_one}</NavLink>
        <NavLink to={to_two}>{link_two}</NavLink>
        <NavLink to={to_three}>{link_three}</NavLink>
        <NavLink to={to_four}>{link_four}</NavLink>
    </Wrapper>
  );


export default Menu;
