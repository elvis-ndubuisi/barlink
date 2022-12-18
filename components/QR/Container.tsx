import styled from "styled-components";

interface iContainer {
  noJustify?: boolean;
}

const Container = styled.div<iContainer>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: ${(props) => !props.noJustify && "space-between"};
  gap: 2em;
  min-height: inherit;
`;

export default Container;
