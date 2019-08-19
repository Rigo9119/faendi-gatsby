import React from "react";
import styled from "styled-components";

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
  width: 100%;
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