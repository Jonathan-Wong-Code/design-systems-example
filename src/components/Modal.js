import styled from "styled-components";
import React from "react";
import { typeScale } from "../utils";
import { PrimaryButton } from "./Buttons";

export const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${theme => theme.formElementsBackground};
  color: ${theme => theme.textFormElementsBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`;

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  position: absolute;
  right: 40px;
  top: 40px;
  padding: 8px;
`;

export const SignUpModal = () => {
  return (
    <ModalWrapper>
      <SignUpHeader>Sign Up</SignUpHeader>
      <SignUpText>Sign up today to get access!</SignUpText>
      <PrimaryButton>Sign up</PrimaryButton>
      <CloseModalButton aria-label="close modal">Close</CloseModalButton>
    </ModalWrapper>
  );
};
