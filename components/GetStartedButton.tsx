import React from "react";
import styled from "styled-components";
import { BigButton } from "./Buttons";
import { motion } from "framer-motion";

const GetStartedButton = () => {
  return (
    <BigButton>
      <span>Get Started</span>
      <Holder>
        <Button>QR Code</Button>
        <Button>Shorten Link</Button>
        <Button>UnShorten Link</Button>
        <Button>Barcode</Button>
      </Holder>
    </BigButton>
  );
};

// Styled Component
const Holder = styled.div``;
const Button = styled.div`
  position: absolute;
`;

export default GetStartedButton;
