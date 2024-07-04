import React, { useState } from "react";
import styled from "styled-components";

import logo from "../../assets/$Juice.svg";
import logoMobile from "../../assets/logoMobile.svg";
import Modal from "../modal";
import copyIcon from "../../assets/Copy.svg";

const HeaderWrapper = styled.header`
  width: 100vw;
  padding-top: 2%;
  overflow-x: hidden;
`;

const NavBar = styled.nav`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;
  margin-top: 2em;
  .mobile {
    display: none;
  }

  @media (max-width: 64em) {
    gap: 1rem;
    width: 90%;
    padding: 0;
    .desktop {
      display: none;
    }

    .mobile {
      display: flex;
    }
  }
`;

const Logo = styled.img`
  width: 25%;
  @media (max-width: 64em) {
    width: 50%;
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media (max-width: 64em) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    margin: 0 auto;
    height: 100vh;
    z-index: 10000;
    background: #ff8c46;
    border-radius: 15px;
    transform: ${(props) =>
      props.click ? "translateY(0)" : "translateY(100%)"};
    transition: all 0.3s ease;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 10em;
    gap: 1em;
    align-items: flex-start;
    box-shadow: 120px black;
    display: ${(props) => (props.click ? "block" : "none")};
  }
`;

const MenuItems = styled.li`
  margin: 0 1rem;
  color: #ffffff;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;

  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 4px;
    background: #0ac416;
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }

  @media (max-width: 64em) {
    font-size: 16px;
    font-weight: 600;
  }
`;

const Button = styled.button`
  background: #0ac416;
  border: 1px solid #ffffff;
  border-radius: 7px;
  padding: 10px 20px;
  text-transform: uppercase;
  color: white;
  font-family: "Rubik Mono One", sans-serif;
  font-size: 21px;
  font-weight: 900;
  width: 200px;
  height: 55px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;

  @media (max-width: 64em) {
    width: 150px;
    height: 40px;
    font-size: 18px;
    padding: 0;
    font-weight: 400;
  }

  &:hover {
    background: #0fd61f;
    transform: scale(1.1);
  }
`;

const HamburgerMenu = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  cursor: pointer;

  div {
    width: 2rem;
    height: 2px;
    background-color: white;
    transition: transform 0.3s ease, opacity 0.3s ease;

    &:nth-child(1) {
      transform: ${(props) =>
        props.click ? "rotate(45deg) translateY(6px)" : "translateY(0)"};
    }

    &:nth-child(2) {
      opacity: ${(props) => (props.click ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${(props) =>
        props.click ? "rotate(-45deg) translateY(-6px)" : "translateY(0)"};
    }
  }
`;

const CloseMenu = styled.div`
  width: 3rem;
  height: 2rem;
  position: absolute;
  top: 2rem;
  right: 4rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 2rem;
    height: 2px;
    background-color: white;
    position: absolute;
    transform: rotate(45deg);

    &:nth-child(2) {
      transform: rotate(-45deg);
    }
  }
`;

const Title = styled.h1`
  color: #fff;
  font-size: 50px;
  font-weight: 400;
  font-family: "Rubik Mono One", sans-serif;
  text-transform: uppercase;
  margin: 0 auto;
  text-shadow: -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff,
    1px 1px 0 #ffffff, /* Обводка текста белым цветом */ 0px 4px 4.7px #6a2800;

  @media (max-width: 64em) {
    font-size: 30px;
  }
`;

const HowBuyContainer = styled.div`
  background: #e05500;
  box-shadow: 0px 6px 0px 0px #00000040;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 25px;
  box-shadow: 0px 6px 0px 0px #00000040;
  padding: 20px; /* Added padding for content spacing */

  @media (max-width: 64em) {
    width: 90%;
    height: auto;
    /* height: 273px; */
    margin: 0 auto;
    margin-top: 2em;
  }
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
  color: #ffffff;

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
  font-size: 15px;
  font-weight: 400;
  font-family: "Rubik", sans-serif;
  color: white;

  @media (max-width: 40em) {
    font-size: 14px;
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

const Header = () => {
  const [click, setClick] = useState(false);
  const [copied, setCopied] = useState(false);

  const [showModal, setShowModal] = useState(false);

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

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    setClick(!click);
  };

  return (
    <HeaderWrapper>
      <NavBar>
        <HamburgerMenu
          className="mobile"
          click={click}
          onClick={() => setClick(!click)}
        >
          <div />
          <div />
          <div />
        </HamburgerMenu>
        <Logo className="desktop" src={logo} />
        <Logo className="mobile" src={logoMobile} />
        <Menu click={click}>
          <CloseMenu className="mobile" onClick={() => setClick(false)}>
            <div />
            <div />
          </CloseMenu>
          <MenuItems onClick={() => scrollTo("about")}>About</MenuItems>
          <MenuItems onClick={() => scrollTo("how")}>How to buy</MenuItems>
          <MenuItems onClick={() => scrollTo("tokenomic")}>
            JuiceNomics
          </MenuItems>
          <MenuItems onClick={() => scrollTo("roadmap")}>Roadmaps</MenuItems>
        </Menu>
        <Button onClick={() => setShowModal(true)}>Pre-sale</Button>
      </NavBar>
      <Modal show={showModal} handleClose={() => setShowModal(false)}>
        <Title>How to buy?</Title>
        <HowBuyContainer>
          <HowList>1. Create a crypto wallet (e.g., MetaMask).</HowList>
          <HowList>2. Purchase some ETH or BNB on a trusted exchange.</HowList>
          <HowList>
            3. Connect your wallet to a decentralized exchange (DEX) like
            Uniswap or PancakeSwap. Swap your ETH or BNB for $Juice.
          </HowList>
          <HowList>4. Enjoy the refreshing benefits of holding $Juice!</HowList>
        </HowBuyContainer>
        <SmartTitle>smart contract adress:</SmartTitle>
        <Address>RDficDZuhLo4NxZKMJJ9xfQ1yCY247k7UCPgzwKsoMC</Address>
        <CopyButton copied={copied} onClick={copyToClipboard}>
          {copied ? "Copied!" : "Copy"} <img src={copyIcon} alt="copy icon" />
        </CopyButton>
      </Modal>
    </HeaderWrapper>
  );
};

export default Header;
