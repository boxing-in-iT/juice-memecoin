import React from "react";
import styled from "styled-components";

import juice from "../../assets/roadmap/juice.png";

import dots from "../../assets/juiceDots.svg";
import greenDots from "../../assets/juiceGreenDots.svg";
import mobileDots from "../../assets/mobileDots.svg";

const Section = styled.section`
  position: relative;
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
`;

const Container = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 85%;
  }

  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;

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
  font-family: "Rubik Mono One", sans-serif;
  text-transform: uppercase;
  transform: rotate(350deg);
  color: #0ac416;
  text-shadow: -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff,
    1px 1px 0 #ffffff, /* Обводка текста белым цветом */ 0px 4px 4.7px #6a2800;

  @media (max-width: 40em) {
    font-size: 57px;
  }
`;

const PhaseContainer = styled.div`
  width: 495px;
  height: 266px;
  background: #e05500;
  box-shadow: 0px 6px 0px 0px #00000040;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 25px;

  @media (max-width: 40em) {
    width: 294px;
    height: 168px;
  }
`;

const Phase = styled.p`
  margin-left: 20%;
  font-size: 22px;
  font-weight: 400;
  font-family: "Rubik Mono One", sans-serif;
  text-align: left;

  @media (max-width: 40em) {
    font-size: 13px;
  }
`;

const PhaseLittle = styled.span`
  font-size: 22px;
  font-weight: 400;
  font-family: "Rubik", sans-serif;

  @media (max-width: 40em) {
    font-size: 13px;
  }
`;

const Image = styled.img`
  @media (max-width: 40em) {
    width: 259px;
    height: 303px;
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

const RoadMap = () => {
  return (
    <Section id="roadmap">
      <Title>Roadmap</Title>
      <Container>
        <Box>
          <PhaseContainer>
            <Phase>
              Phase 1: <PhaseLittle>Meme</PhaseLittle>
            </Phase>
            <Phase>
              Phase 2: <PhaseLittle>Vibe and HODL</PhaseLittle>
            </Phase>
            <Phase>
              Phase 3: <PhaseLittle>Meme Takeover</PhaseLittle>
            </Phase>
          </PhaseContainer>
        </Box>
        <Box>
          <Image src={juice} />
        </Box>
      </Container>
      <ImageBgdots className="img1" src={greenDots} />
    </Section>
  );
};

export default RoadMap;
