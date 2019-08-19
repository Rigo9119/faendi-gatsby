import React from "react";
import styled from "styled-components";

import ServiceContent from "../components/servicios/servicio"

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  width: 100vw; 
`;

const serviciosCmp = () => (
  <Wrapper>
    <ServiceContent 
      title={'hello'}
      desc={'ok'}
    />
    <ServiceContent 
      title={'hello 2'}
      desc={'ok 3'}
    />
  </Wrapper>
);

export default serviciosCmp;
