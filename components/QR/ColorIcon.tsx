import styled from "styled-components";

interface iColorSwatch {
  swatchColor: string;
  isCustomize?: boolean;
}

const ColorIcon = styled.div<iColorSwatch>`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-color: ${(props) => props.swatchColor};
`;

export default ColorIcon;
