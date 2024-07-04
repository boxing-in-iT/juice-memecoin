import React from "react";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  min-height: 35vh;
  width: 100%;
  display: flex;
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
  width: 45%;
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

const SubTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;

  @media (max-width: 64em) {
    text-align: center;
  }
`;

const UnderFooter = () => {
  return (
    <Section>
      <Container>
        <SubTitle>
          $pepe coin has no association with Matt Furie or his creation Pepe the
          Frog. This token is simply paying homage to a meme we all love and
          recognize.
        </SubTitle>
        <SubTitle style={{ textAlign: "center" }}>
          $PEPE is a meme coin with no intrinsic value or expectation of
          financial return. There is no formal team or roadmap. the coin is
          completely useless and for entertainment purposes only.
        </SubTitle>
      </Container>
    </Section>
  );
};

export default UnderFooter;
