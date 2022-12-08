import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import Wrapper from "./Wrapper";

const StyledWrapper = styled.section`
  padding: 2em 0;

  h2 {
    text-align: center;
  }
`;

const Articles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 0.875em;
`;

const ArticleWrapper = ({ children }: any) => {
  return (
    <StyledWrapper>
      <Wrapper>
        <Heading>Articles</Heading>
        <Articles>{children}</Articles>
      </Wrapper>
    </StyledWrapper>
  );
};

export default ArticleWrapper;
