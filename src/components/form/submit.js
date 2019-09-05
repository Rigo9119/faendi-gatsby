import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin-top: 20px;
  width: 50%;
`;

const StyledSubmit = styled.input`
  background-color: #008a83;
  color: #FFF;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;

  &:hover {
  background-color: #0f0f0f;
  color: #FFF;
  }
`;

const Submit = () => (
  <Wrapper>
    <StyledSubmit 
      type="submit" 
      value="Enviar"
    />
  </Wrapper>
)

export default Submit;