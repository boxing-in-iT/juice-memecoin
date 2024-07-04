import React, { useState } from "react";
import styled from "styled-components";

import logo from "../../assets/$Juice.svg";
import logoMobile from "../../assets/logoMobile.svg";

const HeaderWrapper = styled.header`
  width: 100vw;
  /* z-index: 1000; */
  padding-top: 2%;
  overflow-x: hidden;
`;

const NavBar = styled.nav`
  width: 75%;
  /* min-height: 10vh; */
  /* border-radius: 10px; */
  /* background: #ff8c46; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* box-shadow: 0px 4px 0px 0px #00000040; */
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

// const Logo = styled.h1`
//   background-image: linear-gradient(118.98deg, #ff6000 32.18%, #eb6413 64.14%);
//   -webkit-background-clip: text;
//   background-clip: text;
//   color: transparent;
//   text-transform: uppercase;
//   font-family: "Rubik Mono One", sans-serif;
//   font-size: 32px;
//   font-weight: 400;
//   text-shadow: 5px 5px 0px #d96418,
//     /* основная тень */ 10px 10px 0px rgba(0, 0, 0, 0.15); /* дополнительная тень */
// `;

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
    /* background-color: black; */
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
    font-size: 20px;
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

const Header = () => {
  const [click, setClick] = useState(false);
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
        {/* <Logo>$Juice</Logo> */}
        <Logo className="desktop" src={logo} />
        <Logo className="mobile" src={logoMobile} />
        <Menu click={click}>
          <CloseMenu className="mobile" onClick={() => setClick(false)}>
            <div />
            <div />
          </CloseMenu>
          <MenuItems>About</MenuItems>
          <MenuItems>How to buy</MenuItems>
          <MenuItems>JuiceNomics</MenuItems>
          <MenuItems>Roadmaps</MenuItems>
        </Menu>
        <Button>Pre-sale</Button>
      </NavBar>
    </HeaderWrapper>
  );
};

export default Header;
