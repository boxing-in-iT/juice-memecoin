import React, { useState } from "react";
import styled from "styled-components";

import bgOrange from "../../assets/howOrange.png";
import orangeList from "../../assets/orange.svg"; // Assuming this is your orange slice icon
import copyIcon from "../../assets/Copy.svg";

import dots from "../../assets/juiceDots.svg";
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

  .img1 {
    transform: rotate(90deg);
    width: 7%;
    top: 30%;
    right: 30%;
  }
`;

const Container = styled.div`
  position: relative;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 auto;

  @media (max-width: 64em) {
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

const TitleContainer = styled.div`
  margin: 0 auto;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 100px;
  font-weight: 400;
  font-family: "Rubik Mono One", sans-serif;
  text-transform: uppercase;

  &:nth-child(2) {
    margin-top: 1.5em;
  }

  &:nth-child(3) {
    margin-top: 2.5em;
  }

  @media (max-width: 40em) {
    font-size: 37px;
  }
`;

const TitleSpan = styled.span`
  /* margin-top: 2em; */
`;

const HowBuyContainer = styled.div`
  width: 884.92px;
  height: 618.3px;
  background: #e05500;
  box-shadow: 0px 6px 0px 0px #00000040;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 25px;
  box-shadow: 0px 6px 0px 0px #00000040;
  padding: 20px; /* Added padding for content spacing */
`;

const HowList = styled.div`
  font-size: 28px;
  height: 100%;
  font-weight: 400;
  font-family: "Rubik", sans-serif;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;

  & > img {
    width: 95px; /* Adjust size as needed */
    margin-right: 10px;
    position: relative;
  }

  & > img::after {
    content: attr(data-number);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 28px;
    font-weight: bold;
    color: white;
  }

  @media (max-width: 40em) {
    font-size: 18px;

    & > img {
      width: 60px; /* Adjust size as needed */
      margin-right: 10px;
      position: relative;
    }
  }
`;

const BgIamge = styled.img`
  position: absolute;
  right: 0;
  top: 30%;

  @media (max-width: 40em) {
    width: 214px;
    top: 100%;
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
  background: ${(props) => (props.copied ? "#4CAF50" : "#ffffff")};
  color: ${(props) => (props.copied ? "#ffffff" : "#ee7e3c")};
  font-size: 24px;
  font-weight: 600;
  font-family: "Rubik", sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s, color 0.3s;

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

const HowToBuy = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const address = "RDficDZuhLo4NxZKMJJ9xfQ1yCY247k7UCPgzwKsoMC";
    navigator.clipboard
      .writeText(address)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000); // Сбрасываем состояние через 2 секунды
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  return (
    <Section>
      <TitleContainer>
        <Title>How</Title>
        <Title>to</Title>
        <Title style={{ color: "#0AC416" }}>buy?</Title>
      </TitleContainer>

      <Container>
        <HowBuyContainer>
          <HowList>
            <img src={orangeList} alt="Orange" data-number="1" />
            Create a crypto wallet (e.g., MetaMask).
          </HowList>
          <HowList>
            <img src={orangeList} alt="Orange" data-number="2" />
            Purchase some ETH or BNB on a trusted exchange.
          </HowList>
          <HowList>
            <img src={orangeList} alt="Orange" data-number="3" />
            Connect your wallet to a decentralized exchange (DEX) like Uniswap
            or PancakeSwap. Swap your ETH or BNB for $Juice.
          </HowList>
          <HowList>
            <img src={orangeList} alt="Orange" data-number="4" />
            Enjoy the refreshing benefits of holding $Juice!
          </HowList>
        </HowBuyContainer>
      </Container>
      <SmartTitle>smart contract adress:</SmartTitle>
      <Address>RDficDZuhLo4NxZKMJJ9xfQ1yCY247k7UCPgzwKsoMC</Address>
      <CopyButton copied={copied} onClick={copyToClipboard}>
        {copied ? "Copied!" : "Copy"} <img src={copyIcon} alt="copy icon" />
      </CopyButton>
      <BgIamge src={bgOrange} />
      <ImageBgdots className="img1" src={dots} />
    </Section>
  );
};

export default HowToBuy;
