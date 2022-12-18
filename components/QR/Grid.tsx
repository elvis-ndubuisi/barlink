import styled from "styled-components";

interface iGrid {
  colorGrid?: boolean;
}

const Grid = styled.div<iGrid>`
  display: grid;
  align-items: baseline;
  justify-content: center;
  grid-template-columns: ${(props) =>
    props.colorGrid
      ? "repeat(6, 1fr)"
      : "repeat(auto-fill, minmax(auto, 50px))"};
  gap: 8px;
`;

export default Grid;
