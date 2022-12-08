import styled from "styled-components";
import Accordion from "./Accordion";
import Heading from "./Heading";
import Wrapper from "./Wrapper";

const StyledFaq = styled.section`
  padding: 2em 0;

  h2 {
    text-align: center;
  }

  > div {
    max-width: 800px;
    margin: auto;
  }
`;

const FaqWrapper = () => {
  return (
    <StyledFaq>
      <Wrapper>
        <Heading>Frequently Asked Questions</Heading>
        <div>
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
        </div>
      </Wrapper>
    </StyledFaq>
  );
};

export default FaqWrapper;
