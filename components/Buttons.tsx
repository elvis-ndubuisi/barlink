import React from "react";
import styled from "styled-components";

interface iButton {
  primary?: boolean;
  dark?: boolean;
}

export const StyledButton = styled.button<iButton>`
  outline: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.8em;
  font-size: 1em;
  font-weight: var(--fw-medium);
  background-color: transparent;
  border: solid 2px var(--clr-main);
  border-radius: var(--radius);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

export const BigButton = styled(StyledButton)<iButton>`
  font-weight: var(--fw-smbold);
  height: 3.25em;
  padding: 0 1.25em;
  gap: 1.25em;
  justify-content: center;
  letter-spacing: 2px;
  background-color: ${(props) =>
    props.primary ? "var(--clr-white)" : "transparent"};
  border-color: ${(props) =>
    props.primary ? "var(--clr-white)" : "transparent"};
  color: ${(props) => (props.primary ? "var(--clr-dark)" : "var(--clr-main)")};

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: -50px;
    z-index: -1;
    width: 150%;
    height: 100%;
    background-color: var(--clr-main);
    transform: scaleX(0) skewX(35deg);
    transform-origin: left;
    transition: transform 0.7s;
  }

  &:hover,
  &:focus {
    border-color: var(--clr-main);
    color: ${(props) => !props.primary && "var(--clr-white)"};
    transition: border 0.7s;
  }

  &:hover::before {
    transform: scaleX(1) skewX(35deg);
  }
`;

export const IconButton = styled(StyledButton)`
  display: grid;
  place-items: center;
  place-content: center;
  color: var(--clr-main);
  padding: 0.5em;
  transition: all 0.8s;
  aspect-ratio: 1;

  :hover,
  :focus {
    background-color: var(--clr-main);
    color: var(--clr-white);
  }
`;

const Button = styled(StyledButton)<iButton>`
  min-width: 80px;
  font-size: 0.9375rem;
  font-weight: var(--fw-smbold);
  color: ${(props) => (props.dark ? "var(--clr-dark)" : "var(--clr-white)")};
  padding: 8px 14px;
  background-color: ${(props) =>
    props.primary ? "var(--clr-main)" : "var(--clr-darker)"};

  :hover {
    color: ${(props) => !props.primary && "var(--clr-main)"};
    opacity: ${(props) => props.primary && "0.6"};
    transition: all 0.6s;
  }
`;

export default Button;
