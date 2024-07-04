import React from "react";
import welcomeJuice from "../../assets/welcome.png";
import styled from "styled-components";

import tg from "../../assets/socialLinks/tg.svg";
import twitter from "../../assets/socialLinks/twitter.svg";
import youtube from "../../assets/socialLinks/youtube.svg";

import dots from "../../assets/juiceDots.svg";
import mobileDots from "../../assets/mobileDots.svg";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #ffffff;
  @media (max-width: 40em) {
    min-height: 50vh;
  }

  .img1 {
    top: 25%;
    left: 20%;
  }

  .img2 {
    top: 50%;
    left: 30%;
  }

  .img3 {
    top: 30%;
    right: 20%;
  }

  .img4 {
    top: 50%;
    right: 30%;
  }

  .img5 {
    top: 40%;
    right: 0;
  }

  .img6 {
    top: 50%;
    left: 5%;
  }

  .img7 {
    top: 30%;
    left: 6%;
  }
`;

const Container = styled.div`
  position: relative;
  width: 75%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 85%;
  }

  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;
    margin-top: 2em;

    & > *:last-child {
      width: 80%;
    }
  }

  @media (max-width: 40em) {
    & > *:last-child {
      width: 90%;
    }
  }
`;

const Box = styled.div`
  width: 85%;
  height: 100%;
  min-height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    min-height: 25vh;
  }

  @media (max-width: 30em) {
    z-index: 100;

    width: 70%;
  }
`;

const SubTitle = styled.p`
  font-size: 28px;
  font-weight: 400;
  font-family: "Rubik", sans-serif;
  text-align: center;

  @media (max-width: 40em) {
    font-size: 18px;
  }
`;

const SocialLinks = styled.div`
  width: 30%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 40em) {
    width: 50%;
  }

  @media (max-width: 30em) {
    z-index: 100;

    width: 70%;
  }
`;

const SocialImage = styled.img`
  cursor: pointer;
`;

const Image = styled.img`
  @media (max-width: 40em) {
    width: 401px;
    height: 401px;
  }
`;

const ImageBgdots = styled.img`
  position: absolute;
  @media (max-width: 64em) {
    display: none;
  }
`;

const MobileImgDots = styled.img`
  display: none;
  /* width: 100%; */
  position: absolute;
  @media (max-width: 64em) {
    position: absolute;
    display: block;
  }
`;

const Welcome = () => {
  return (
    <Section>
      <Container>
        <Box>
          <Image src={welcomeJuice} />
        </Box>
        <Box>
          <SubTitle>
            The most memeable memecoin in existence. The dogs have had their
            day, it’s time for Juise to take reign.
          </SubTitle>
          <SocialLinks>
            <SocialImage src={tg} />
            <SocialImage src={youtube} />
            <SocialImage src={twitter} />
          </SocialLinks>
        </Box>
      </Container>
      <ImageBgdots className="img1" src={dots} />
      <ImageBgdots className="img2" src={dots} />
      <ImageBgdots className="img3" src={dots} />
      <ImageBgdots className="img4" src={dots} />
      {/*  */}
      <MobileImgDots className="img5" src={mobileDots} />
      <MobileImgDots className="img6" src={mobileDots} />
      <MobileImgDots className="img7" src={mobileDots} />
      <MobileImgDots className="img8" src={mobileDots} />
    </Section>
  );
};

export default Welcome;
