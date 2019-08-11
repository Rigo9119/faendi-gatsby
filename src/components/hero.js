import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: url(${props => props.img});
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

const Content = styled.div`
  padding: 20px;
  position: absolute;
  right: 0;
  text-align: left;
  top: 50%;
  transform: translateY(-50%);
  left: 15%;
  width: 60%;
  z-index: 1;
`;

const Title = styled.h2`
    color: #fff;
    letter-spacing: 1px;
    max-width: 900px;
    font-size: 3.5rem;
`;

const SubTitle = styled.h3`
  color: #FFF;
  font-size: 2.125rem;
`;

const Description = styled.p`
  color: #FFF;
  font-size: 1.3rem;
  margin-top: 15px;
`;

const StyledLink = styled(Link)``;

const Hero = ({title, subtitle, description, video, img, link}) => {
  //dividir Hero en dos componentes Backgorund y Content
  return (
    <Wrapper>
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
      <Content img={img}>      
        <Title>
          {title}
        </Title>x
        <SubTitle>
          {subtitle}
        </SubTitle>
        <Description>
          {description}
        </Description>
        {link ? <StyledLink>{link}</StyledLink> : null}
      </Content>
    </Wrapper>
  )
}

export default Hero
