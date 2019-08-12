import React from "react";
import styled from "styled-components";

import HeroContent from "./hero/heroContent";

const Wrapper = styled.div`
  background: url(${props => props.img_src});
  background-size: cover;
  height: 100vh;
  position: relative;
  width: 100vh; 
`;

const Video = styled.video`
  bottom: 0;
  min-height: 100%;
  min-width: 100%;
  position: absolute;
  right: 0;
  top: 0;
`;

const Hero = ({title, subtitle, description, video, link, img_src}) => {
  //dividir Hero en dos componentes Backgorund y Content
  return (
    <Wrapper img_src={img_src}>
    {video ? 
      <Video
        autoPlay="autoplay"
        playsInline
        muted="muted"
        loop="loop"
      >
        <source 
          src={video}
          type="video/mp4"
        />
      </Video> 
      :
      null}

      <HeroContent 
        title={title}
        subtitle={subtitle}
        description={description}
        link={link}
      />
    </Wrapper>
  )
}

export default Hero
