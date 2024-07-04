import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100vw;
  border-top: 12px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const FooterContent = styled.div``;

const SubTitle = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: white;
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
