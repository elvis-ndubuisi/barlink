import styled from "styled-components";

const Filename = styled.div`
  border: solid 2px var(--clr-white);
  outline: 0;
  padding: 5px 0.8125em;
  border-radius: 5px;

  :focus {
    border-color: var(--clr-main);
  }
`;

export default Filename;
