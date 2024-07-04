import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import juice from "../../assets/juicenomics/juice.png";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #ffffff;
  @media (max-width: 40em) {
    min-height: 50vh;
    margin-top: 30vh;
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

const Title = styled.h1`
  font-size: 100px;
  font-weight: 400;
  text-transform: uppercase;
  font-family: "Rubik Mono One", sans-serif;

  @media (max-width: 40em) {
    font-size: 37px;
  }
`;

const Numbers = styled.p`
  font-size: 36px;
  font-weight: 400;
  font-family: "Rubik Mono One", sans-serif;
  @media (max-width: 40em) {
    font-size: 24px;
  }
`;

const Supply = styled.p`
  font-size: 32px;
  font-weight: 400;
  font-family: "Rubik", sans-serif;

  @media (max-width: 40em) {
    font-size: 19px;
  }
`;

const SubTitle = styled.p`
  font-size: 22px;
  font-weight: 400;
  font-family: "Rubik", sans-serif;
  text-align: center;

  @media (max-width: 40em) {
    font-size: 18px;
  }
`;

const BgImage = styled.img`
  position: absolute;
  width: 20%;
  top: 40%;
  left: 0;

  @media (max-width: 40em) {
    display: none;
  }
`;

const Juicenomics = () => {
  return (
    <Section>
      <Container>
        <Title>
          <span style={{ color: "#0AC416" }}>Juice</span>nomics
        </Title>
        <Supply>Total Supply:</Supply>
        <Numbers>777.777.777</Numbers>
        <SubTitle>
          No Taxes, No Bullshit. It’s that simple.
          <br /> LP tokens are burnt, and contract ownership is renounced.
        </SubTitle>
      </Container>
      <BgImage src={juice} />
    </Section>
  );
};

export default Juicenomics;
