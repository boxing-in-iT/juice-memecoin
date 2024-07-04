import React from "react";
import styled from "styled-components";
import photo from "../../assets/aboutPhoto.png";

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

  .img1 {
    top: 25%;
    left: 5%;
  }

  .img2 {
    top: 65%;
    left: 10%;
  }

  .img3 {
    top: 20%;
    right: 7%;
  }

  .img4 {
    top: 70%;
    right: 15%;
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

  @media (max-width: 40em) {
    min-height: 50vh;
  }
`;

const Container = styled.div`
  position: relative;
  width: 75%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 85%;
  }

  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column-reverse;

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
  width: 50%;
  height: 100%;
  min-height: 60vh;
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

const Title = styled.h1`
  font-size: 100px;
  font-weight: 400;
  text-transform: uppercase;
  transform: rotate(5deg);
  font-family: "Rubik Mono One", sans-serif;

  /* margin-bottom: 1em; */
  margin: 0;
  padding: 0;

  @media (max-width: 40em) {
    font-size: 37px;
  }
`;

const SubTitle = styled.p`
  font-size: 28px;
  font-weight: 400;
  font-family: "Rubik", sans-serif;

  @media (max-width: 40em) {
    font-size: 16px;
  }
`;

const Image = styled.img`
  width: 500.14px;
  height: 669.5px;

  @media (max-width: 40em) {
    width: 235px;
    height: 314px;
  }
`;

const ImageBgdots = styled.img`
  position: absolute;
  @media (max-width: 64em) {
    display: none;
  }
`;

const MobileImgDots = styled.img`
  /* display: none; */
  /* width: 100%; */
  position: absolute;
  @media (max-width: 64em) {
    position: absolute;
    display: block;
  }
`;

const About = () => {
  return (
    <Section>
      <Container>
        <Box>
          <Image src={photo} alt="juice photo" />
        </Box>
        <Box>
          <Title>About</Title>
          <SubTitle>
            $Juice is the freshest meme coin in the crypto universe! Inspired by
            fun and fueled by community spirit, $Juice aims to bring a splash of
            joy to your digital wallet. Whether you're a seasoned trader or a
            crypto newbie, $Juice is here to add some zest to your portfolio.
          </SubTitle>
        </Box>

        {/*  */}
        {/* <MobileImgDots className="img5" src={mobileDots} />
        <MobileImgDots className="img6" src={mobileDots} />
        <MobileImgDots className="img7" src={mobileDots} />
        <MobileImgDots className="img8" src={mobileDots} /> */}
      </Container>
      <ImageBgdots className="img1" src={dots} />
      <ImageBgdots className="img2" src={dots} />
      <ImageBgdots className="img3" src={dots} />
      <ImageBgdots className="img4" src={dots} />
    </Section>
  );
};

export default About;
