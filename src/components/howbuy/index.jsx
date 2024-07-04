import React from "react";
import styled from "styled-components";

import bgOrange from "../../assets/howOrange.png";
import orangeList from "../../assets/orange.svg"; // Assuming this is your orange slice icon

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
`;

const Container = styled.div`
  position: relative;
  width: 75%;
  display: flex;
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

const Title = styled.h1`
  font-size: 100px;
  font-weight: 400;
  font-family: "Rubik Mono One", sans-serif;
  text-transform: uppercase;

  @media (max-width: 40em) {
    font-size: 37px;
  }
`;

const TitleSpan = styled.span`
  margin-top: 2%;
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

const HowToBuy = () => {
  return (
    <Section>
      <Title>
        How <TitleSpan>to</TitleSpan> <TitleSpan>buy?</TitleSpan>
      </Title>
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
      <BgIamge src={bgOrange} />
    </Section>
  );
};

export default HowToBuy;
