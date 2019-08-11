import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  align-content: flex-start;
  background-color: #232324;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  padding: 0 5%;
  text-align: left;
  width: 100%;
`;

const InfoContainer = styled.footer`
  color: #FFF;
  padding: 4.5% 0;
`;

const StyledLink = styled(Link)`
  color: #FFF;
  font-size: 2.5rem;
  text-decoration: none;
`;

const Email = styled.p`
  margin-top: 15px;
  font-size: 1.5rem;
`;

const Phone = styled.p`
  margin-top: 15px;
  font-size: 1.5rem;
`;

const DateContainer = styled.div`
  color: #FFF;
  font-size: 1.5rem;
  padding: 0 0 4.5% 0;
`;

const Footer = ({title, email, phone, date}) => (
  <Wrapper>
    <InfoContainer>
      <StyledLink to="/contact/">{title}</StyledLink>
      <Email>{email}</Email>
      <Phone>{phone}</Phone>
    </InfoContainer>
    <DateContainer>    
      ©{date} Copyright Faendi - Agencia Digital Web, Bogotá, Colombia
    </DateContainer>
  </Wrapper>
)

export default Footer