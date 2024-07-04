import React from "react";
import styled from "styled-components";

import juice from "../../assets/juicenomics/juice.png";

const Section = styled.section`
  position: relative;
  min-height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  @media (max-width: 1450px) {
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
  margin-bottom: 0;
  text-shadow: -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff,
    1px 1px 0 #ffffff, /* Обводка текста белым цветом */ 0px 4px 4.7px #6a2800;

  @media (max-width: 40em) {
    font-size: 37px;
  }
`;

const Numbers = styled.p`
  font-size: 36px;
  font-weight: 400;
  font-family: "Rubik Mono One", sans-serif;
  margin: 0;
  margin-top: 1%;
  @media (max-width: 40em) {
    font-size: 24px;
  }
`;

const Supply = styled.p`
  font-size: 32px;
  font-weight: 400;
  font-family: "Rubik", sans-serif;
  margin: 0;
  margin-top: 4%;

  @media (max-width: 40em) {
    font-size: 19px;
  }
`;

const SubTitle = styled.p`
  font-size: 22px;
  font-weight: 400;
  font-family: "Rubik", sans-serif;
  text-align: center;
  margin: 0;
  margin-top: 3%;

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
    <Section id="tokenomic">
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
