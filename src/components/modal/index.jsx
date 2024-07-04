import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 25px;
`;

const ModalContent = styled.div`
  position: relative;
  background: #ff8c46;

  /* margin: 15% auto; */
  margin: 0 auto;
  top: 10%;

  padding: 20px;
  border: 1px solid #888;
  border-radius: 25px;
  width: 80%;
  max-width: 800px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
  animation-name: animatetop;
  animation-duration: 0.4s;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
`;

const CloseButton = styled.span`
  position: absolute;
  right: 2%;
  top: 0;
  color: #000;
  float: right;
  font-size: 46px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Modal = ({ show, handleClose, children }) => {
  return (
    <ModalWrapper show={show}>
      <ModalContent>
        <CloseButton onClick={handleClose}>&times;</CloseButton>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
