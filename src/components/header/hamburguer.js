import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: none;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;  
  width: 30%;
  padding-top: 5px;
  @media (max-width: 425px){
    display: flex;    
  }
`;

const Button = styled.button`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  border: none;
  text-decoration: none;
  cursor: pointer;
  background-color: #000;
  outline: none;
  padding-left: 2%;
`;

const Line = styled.div`
  width: 25px;
  height: 3px;
  background-color: #FFF;
  margin: 2.5px 0;
`;

const hamburguer = () => (
  <Wrapper>
    <Button>
      <Line />
      <Line />
      <Line />
    </Button>
  </Wrapper>
);


export default hamburguer;