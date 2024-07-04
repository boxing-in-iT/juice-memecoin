import React from "react";
import styled from "styled-components";

import juice from "../../assets/juicenomics/juice.png";
import copyIcon from "../../assets/Copy.svg";

const Section = styled.section`
  margin-top: 30vh;
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

const SmartTitle = styled.p`
  font-size: 32px;
  font-weight: 400;
  font-family: "Rubik Mono One", sans-serif;
  text-transform: uppercase;

  @media (max-width: 40em) {
    text-align: center;
  }
`;

const Address = styled.p`
  font-size: 24px;
  font-weight: 400;
  font-family: "Rubik", sans-serif;

  @media (max-width: 40em) {
    font-size: 16px;
  }
`;

const CopyButton = styled.button`
  width: 174px;
  height: 59px;
  border: none;
  border-radius: 18px;
  background: #ffffff;
  color: #ee7e3c;
  font-size: 24px;
  font-weight: 600;
  font-family: "Rubik", sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 64em) {
    width: 105px !important;
    height: 35px !important;
    font-size: 18px;
  }

  img {
    margin-right: 8px;
    @media (max-width: 64em) {
      width: 16px;
      height: 16px;
    }
  }
`;

const Juicenomics = () => {
  const copyToClipboard = () => {
    const address = "RDficDZuhLo4NxZKMJJ9xfQ1yCY247k7UCPgzwKsoMC";
    navigator.clipboard
      .writeText(address)
      .then(() => {})
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <Section>
      <Container>
        <Title>Juicenomics</Title>
        <Supply>Total Supply:</Supply>
        <Numbers>777.777.777</Numbers>
        <SubTitle>
          No Taxes, No Bullshit. It’s that simple.
          <br /> LP tokens are burnt, and contract ownership is renounced.
        </SubTitle>
        <SmartTitle>smart contract adress:</SmartTitle>
        <Address>RDficDZuhLo4NxZKMJJ9xfQ1yCY247k7UCPgzwKsoMC</Address>
        <CopyButton onClick={copyToClipboard}>
          Copy <img src={copyIcon} alt="copy icon" />
        </CopyButton>
      </Container>
      <BgImage src={juice} />
    </Section>
  );
};

export default Juicenomics;
