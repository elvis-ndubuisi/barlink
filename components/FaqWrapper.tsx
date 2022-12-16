import styled from "styled-components";
import Accordion from "./Accordion";
import Heading from "./Heading";
import Wrapper from "./Wrapper";

interface iProp {
  data: { question: string; answer: string }[];
}

const FaqWrapper = ({ data }: iProp) => {
  return (
    <StyledFaq>
      <Wrapper>
        <Heading>Frequently Asked Questions</Heading>
        <div>
          {data.map((item, idx) => (
            <Accordion
              question={item.question}
              answer={item.answer}
              key={idx}
            />
          ))}
        </div>
      </Wrapper>
    </StyledFaq>
  );
};

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

export default FaqWrapper;
