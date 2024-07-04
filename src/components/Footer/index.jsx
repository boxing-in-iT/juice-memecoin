import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100vw;
  border-top: 12px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  @media (max-width: 64em) {
    border-top: 8px solid white;
    padding: 0;
  }
`;

const FooterContent = styled.div``;

const SubTitle = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: white;
  @media (max-width: 64em) {
    font-size: 16px;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <SubTitle>&copy; 2024 by Pepe. All rights reserved.</SubTitle>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
