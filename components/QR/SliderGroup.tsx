import styled from "styled-components";

const SliderGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  width: 100%;
  margin: 0.5em 0;

  span {
    font-size: 1rem;
    color: var(--clr-dark);
    padding: 0.3em 0.5em;
    background-color: var(--clr-main-lighter);
    border-radius: 5px;
    min-width: 50px;
  }

  input[type="range"] {
  }
`;

export default SliderGroup;
