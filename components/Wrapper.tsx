import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin-inline: auto;
  padding-inline: 0.9375em;
`;

const Wrapper = ({ children }: any) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;
