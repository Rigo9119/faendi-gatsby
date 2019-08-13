import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
`;

const StyledInput = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  outline: none;
  width: 100%;
`;

const Input = ({name, placeholder}) => (
  <Wrapper>
    <StyledInput 
      type="text" 
      name={name} 
      placeholder={placeholder}
    />
  </Wrapper>
)

export default Input;