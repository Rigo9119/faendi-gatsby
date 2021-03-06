import React from "react";
import styled from "styled-components";

import Input from "./form/input";
import TextArea from "./form/textArea";
import Submit from "./form/submit";

const Wrapper = styled.form `
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 50%;
  @media (max-width: 425px) {
    width: 90%;
  }
`;

// hacer refactor del nav  - componente aparte 
const Form = () => (
  <Wrapper>
    <Input
      name={'name'} 
      placeholder={'Nombre'} 
    />
    <Input
      name={'email'} 
      placeholder={'Email'} 
    />
    <Input
      name={'telephone'} 
      placeholder={'Teléfono'} 
    />
    <TextArea 
      name={'subject'}
      placeholder={'¿Comó podemos ayudarte?'}
      max={'500'}
      rows={'4'}
    />
    <Submit/>
  </Wrapper>
)

export default Form;