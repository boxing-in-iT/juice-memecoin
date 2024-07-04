import React from "react";
import welcomeJuice from "../../assets/welcome.png";
import styled from "styled-components";

import tg from "../../assets/socialLinks/tg.svg";
import twitter from "../../assets/socialLinks/twitter.svg";
import youtube from "../../assets/socialLinks/youtube.svg";

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
    </Section>
  );
};

export default Welcome;
