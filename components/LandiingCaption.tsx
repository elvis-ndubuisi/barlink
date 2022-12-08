import React from "react";
import styled from "styled-components";

const StyledCaption = styled.p`
  max-width: 700px;
  font-weight: var(--fw-medium);
  text-align: center;
  font-size: 1.125rem;
`;

const LandiingCaption = ({ children }: any) => {
  return <StyledCaption>{children}</StyledCaption>;
};

export default LandiingCaption;
