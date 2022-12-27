import styled from "styled-components";

const StepWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  place-items: center;
  gap: 10px;
  margin-top: 1em;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default StepWrapper;
