import Link from "gatsby-link";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  color: #FFF;
  padding: 3% 0;
`;

const StyledLink = styled(Link)`
  color: #FFF;
  font-size: 2rem;
  text-decoration: none;
  & :hover {
    color: #11dfff;
  }
`;

const Email = styled.p`
  margin-top: 15px;
  font-size: 1rem;
`;

const Phone = styled.p`
  margin-top: 15px;
  font-size: 1rem;
`;

const InfoContainer = ({title, email, phone}) => (
  <Wrapper>
    <StyledLink to="/contact/">{title}</StyledLink>
    <Email>{email}</Email>
    <Phone>{phone}</Phone>
  </Wrapper>
);

export default InfoContainer;

