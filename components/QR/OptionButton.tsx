import React from "react";
import styled from "styled-components";

interface iProps {
  children: any;
  type?: string;
  handlePreset?: () => void;
}

const Wrap = styled.span`
  display: inline-grid;
  text-transform: lowercase;
  text-align: center;
  gap: 2px;
`;

const Styled = styled.button`
  outline: 0;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: var(--clr-white);
  color: var(--clr-dark);
  aspect-ratio: 1;
  width: 48px;
  margin: auto;
  display: grid;
  place-items: center;

  &.active,
  :hover,
  :focus {
    color: var(--clr-main);
  }
`;

export const ColorSwatch = styled(Styled)`
  width: 30px;
  padding: 3px;
  transition: all 0.3s ease-in-out;

  :hover {
    transform: scale(1.2);
  }
`;

const OptionButton = ({ children, type, handlePreset }: iProps) => {
  return (
    <Wrap>
      <Styled onClick={handlePreset}>{children}</Styled>
      <small>{type}</small>
    </Wrap>
  );
};

export default OptionButton;
