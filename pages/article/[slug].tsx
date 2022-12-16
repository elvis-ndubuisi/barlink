import React from "react";
import styled from "styled-components";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";

export default function Article() {
  return (
    <>
      <Navigation />
      <Wrapper>
        <StyledArticle>
          <h1>heading 1</h1>
          <h2>heading 2</h2>
          <h3>heading 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et
            molestiae corporis quo ipsam repudiandae pariatur ipsa obcaecati
            beatae iure!
          </p>
          <a href="">link tag</a>
        </StyledArticle>
      </Wrapper>
      <Footer />
    </>
  );
}

// Styled Component
const StyledArticle = styled.main`
  h1 {
    font-weight: var(--fw-bold);
    font-size: 2.4rem;
  }
  p {
    font-weight: var(--fw-regular);
  }
`;
