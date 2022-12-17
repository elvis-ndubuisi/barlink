import ArticleWrapper from "../../components/ArticleWrapper";
import FaqWrapper from "../../components/FaqWrapper";
import Footer from "../../components/Footer";
import Head from "next/head";
import Heading from "../../components/Heading";
import Link from "next/link";
import Navbar from "../../components/Navigation";
import StepCard from "../../components/StepCard";
import StepWrapper from "../../components/StepWrapper";
import styled from "styled-components";
import LandingTitle from "../../components/LandingTitle";
import React from "react";
import Wrapper from "../../components/Wrapper";
import { StyledButton } from "../../components/Buttons";
import { AiOutlineLink } from "react-icons/ai";
import { GoSettings } from "react-icons/go";
import LandiingCaption from "../../components/LandiingCaption";
import { shortenUrl, faqShorten } from "../../libraries/data.js";

export default function Home() {
  const [invalidInput, setInvalidInput] = React.useState(true);
  const [hasCustomUrl, setHasCustomUrl] = React.useState(false);

  function handleCustonization(event: any): void {
    event.preventDefault();
  }

  function handleShortenURL(): void {}

  function validateUrlInput(): void {}

  return (
    <>
      <Head>
        <title>Shorten URL</title>
      </Head>
      <Navbar />
      <>
        <Showcase>
          <Wrapper>
            <LandingTitle>
              Simplify Your URLs. <br /> Easy way to share links.
            </LandingTitle>
            <LandiingCaption>
              Shorten it, it&#8216;s free - Fast - Secured - Long term link.
            </LandiingCaption>
            <ShortenForm onSubmit={(event) => event?.preventDefault()}>
              <section>
                <Input>
                  <span>
                    <AiOutlineLink size={30} />
                  </span>
                  <input
                    type="text"
                    placeholder="https://paste-your-long-url-here..."
                    required
                  />
                </Input>
                <Customize
                  as="div"
                  hasCustomUrl={hasCustomUrl}
                  onClick={(event) => handleCustonization(event)}
                  title="customize URL"
                >
                  <GoSettings size={30} />
                </Customize>
                <Shorten
                  type="submit"
                  disabled={invalidInput}
                  onClick={() => handleShortenURL()}
                >
                  Shorten URL
                </Shorten>
              </section>
              <small>
                By clicking “Shorten URL” you agree to barlink&#8216;s{" "}
                <Link href="/shortenurl/terms-of-use">Terms of use</Link> and{" "}
                <Link href="/shortenurl/pricary-policy">Privacy Policy</Link>.
              </small>
            </ShortenForm>
          </Wrapper>
        </Showcase>

        <section style={{ marginBottom: "2em" }}>
          <Wrapper>
            <Heading style={{ textAlign: "center" }}>
              Simple and fast URL shortener
            </Heading>
            <Parag>
              URLs shortened with Barlink URL shortener always remains the same
              so you don&#8216;t have to worry about any redirect conflict. Your
              shortened URLs can be used in social media platforms,
              advertisements, blogs, instant messages, publications, forums and
              other locations.
            </Parag>
            <StepWrapper>
              {shortenUrl.map((i, idx) => (
                <StepCard key={idx} lst={i.id} title={i.title}>
                  {i.desc}
                </StepCard>
              ))}
            </StepWrapper>
          </Wrapper>
        </section>

        <ArticleWrapper>
          {/* <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard /> */}
        </ArticleWrapper>

        <FaqWrapper data={faqShorten} />
      </>
      <Footer />
    </>
  );
}

// Styled components
const Showcase = styled.section`
  > * {
    min-height: var(--landing-height);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > p {
      margin: 1.8em 0;
    }
  }

  h1 {
    text-align: center;
  }
`;

const ShortenForm = styled.form`
  width: 100%;
  max-width: var(--url-form-max-width);

  > section {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: var(--url-form-gap);
    align-items: stretch;
    margin-bottom: 12px;
  }

  small {
    font-weight: var(--fw-medium);

    a {
      text-decoration: underline;
    }
  }
`;

const Input = styled.div`
  height: 3.75em;
  background-color: var(--clr-light);
  border-radius: var(--url-radius);
  overflow: hidden;
  flex: 1;
  min-width: 320px;
  display: flex;
  align-items: center;
  border: solid var(--url-border-size) transparent;
  transition: all 1s;

  :hover,
  :focus-within,
  :focus {
    border-color: var(--url-border-color);
  }

  > *:first-child {
    color: var(--clr-main);
    aspect-ratio: 1;
    display: grid;
    place-item: center;
    padding: 0.8em;
  }

  input {
    font-size: 1rem;
    height: inherit;
    outline: none;
    border: 0;
    font-family: inherit;
    font-weight: var(--fw-medium);
    background-color: transparent;
    flex: 1;
  }

  input::placeholder {
    font-size: 1rem;
    color: var(--clr-darker);
    opacity: 0.5;
  }
`;
interface custom {
  hasCustomUrl: boolean;
}
const Customize = styled(StyledButton)<custom>`
  height: 3.75em;
  aspect-ratio: 1;
  border-radius: var(--url-radius);
  display: grid;
  place-items: center;
  place-content: center;
  background-color: ${(props) =>
    props.hasCustomUrl ? "var(--clr-white)" : "var(--clr-darker)"};
  cursor: pointer;
  border: solid var(--url-border-size) transparent;
  transition: var(--url-transition);

  > * {
    color: var(--clr-main);
  }

  :hover,
  :focus {
    border-color: var(--clr-main);
  }
`;

const Shorten = styled(StyledButton)`
  height: 3.75em;
  background-color: var(--clr-main);
  color: var(--clr-light);
  font-weight: var(--fw-smbold);
  padding-inline: 20px;
  border-radius: var(--url-radius);
  border: solid var(--url-border-size) transparent;

  :disabled {
    cursor: not-allowed;
    opacity: 0.4;
    border-color: var(--clr-light);
  }

  :focus,
  :hover {
    border-color: var(--clr-light);
    transition: var(--url-transition);
  }

  @media (max-width: 640px) {
    flex: 1;
  }
`;

export const Parag = styled.div`
  max-width: 730px;
  margin-inline: auto;
  margin-bottom: 2em;
  text-align: center;
`;
