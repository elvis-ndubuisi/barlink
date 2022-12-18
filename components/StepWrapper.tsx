import styled from "styled-components";

const StepWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  gap: 10px;
  margin-top: 1em;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default StepWrapper;
