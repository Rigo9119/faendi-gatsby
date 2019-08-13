import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  color: #FFF;
  font-size: 1rem;
  padding: 0 0 3% 0;
`;
const DateContainer = ({date}) => (
  <Wrapper>    
    ©{date} Copyright Faendi 
    <br /> 
    Agencia Digital Web, Bogotá, Colombia
  </Wrapper>
);


export default DateContainer;
