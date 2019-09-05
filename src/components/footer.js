import React from "react";
import styled from "@emotion/styled";

import InfoContainer from "./footer/infoContainer"
import DateContainer from "./footer/dateContainer"

const Wrapper = styled.footer`
  align-content: flex-start;
  background-color: #232324;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0 3%;
  text-align: center;
  width: 100vw;
  @media (max-width: 320px) {
    padding: 5%;
  }
`;

const Footer = ({title, email, phone, date}) => (
  <Wrapper>
    <InfoContainer 
      title={title}
      email={email}
      phone={phone}
    />
    <DateContainer 
      date={date}
    />
  </Wrapper>
)

export default Footer