import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  font-size: 3rem;
  font-weight: var(--fw-exbold);
  max-width: 770px;
  margin-inline: auto;
  text-align: center;

  span {
    color: var(--clr-main);
  }

  @media (max-width: 768px) {
    font-size: 2.7rem;
  }

  @media (max-width: 640px) {
    font-size: 2rem;
    line-height: 1.2;
  }
`;

const LandingTitle = ({ children }: any) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default LandingTitle;
