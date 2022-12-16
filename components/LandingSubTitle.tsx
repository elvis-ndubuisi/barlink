import React from "react";
import styled from "styled-components";

const StyledSubTitle = styled.h2`
  color: var(--clr-main);
  font-weight: var(--fw-medium);
  font-size: 1.8rem;

  @media (max-widdth: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 640px) {
    font-size: 1.3rem;
  }
`;

const LandingSubTitle = ({ children }: any) => {
  return <StyledSubTitle>{children}</StyledSubTitle>;
};

export default LandingSubTitle;
