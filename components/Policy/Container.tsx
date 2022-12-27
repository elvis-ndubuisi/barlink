import styled from "styled-components";

const Container = styled.main`
  margin: 1em 0;
`;

export const Heading = styled.h2`
  font-size: 2rem;
  font-weight: var(--fw-bold);
  text-align: center;
  margin-bottom: 0.4em;
`;

export const Dated = styled.small`
  text-align: center;
  display: block;
  font-size: 0.9rem;
  color: var(--clr-main);
  margin-bottom: 0.2em;
`;

export const Paragraph = styled.p`
  max-width: 1000px;
  text-align: justify;
  font-weight: var(--fw-regular);
  font-size: 1rem;
  margin: 0.8em auto;

  a {
    text-decoration: underline;
    color: var(--clr-main);

    :hover {
      color: var(--clr-white);
    }
  }
`;

export const SubHeading = styled.h3`
  font-weight: var(--fw-smbold);
  font-size: 1.6rem;
  margin: 0.5em 0;
  text-align: center;
`;

export default Container;
