import Link from "gatsby-link";
import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.footer`
  color: #FFF;
  padding: 3% 0;

  @media (max-width: 320px) {
    padding: 0;
  }
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

  @media (max-width: 320px) {
    margin-top: 5px;
  }
`;

const Phone = styled.p`
  margin-top: 15px;
  font-size: 1rem;

  @media (max-width: 320px) {
    margin-top: 15px;
  }
`;

const InfoContainer = ({title, email, phone}) => (
  <Wrapper>
    <StyledLink to="/contacto/">{title}</StyledLink>
    <Email>{email}</Email>
    <Phone>{phone}</Phone>
  </Wrapper>
);

export default InfoContainer;

