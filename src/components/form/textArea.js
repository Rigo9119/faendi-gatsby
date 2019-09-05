import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 90%;
`;

const StyledArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
`;

const Input = ({name, placeholder, max, rows, cols}) => (
  <Wrapper>
    <StyledArea 
      type="text" 
      name={name} 
      placeholder={placeholder}
      max={max}
      rows={rows}
      cols={cols}
    />
  </Wrapper>
)

export default Input;