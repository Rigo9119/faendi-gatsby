import React from "react";
import styled from "@emotion/styled";

import HeroContent from "./hero/heroContent";

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  width: 100vw;
  @media (max-width: 425px) {
    height: 120vh;
  }
`;


const Hero = ({title_h1, title,subtitle, description, to, link, nav, to_one, to_two, to_three, to_four, link_one, link_two, link_three, link_four}) => {
  return (
    <Wrapper>
      <HeroContent 
        title_h1={title_h1}
        title={title}
        subtitle={subtitle}
        description={description}
        link={link}
        to={to}
        nav={nav}
        to_one={to_one}
        link_one={link_one}
        to_two={to_two}
        link_two={link_two}
        to_three={to_three}
        link_three={link_three}
        to_four={to_four}
        link_four={link_four}
      />
    </Wrapper>
  )
}

export default Hero
