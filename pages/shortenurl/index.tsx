import ArticleWrapper from "../../components/Article/ArticleWrapper";
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
import React, { SyntheticEvent } from "react";
import Wrapper from "../../components/Wrapper";
import Button, { StyledButton } from "../../components/Buttons";
import { AiOutlineLink } from "react-icons/ai";
import { GoSettings } from "react-icons/go";
import LandiingCaption from "../../components/LandiingCaption";
import { shortenUrl, faqShorten } from "../../libraries/data.js";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import validateUrl from "../../libraries/validateUrl";
import { toast } from "react-toastify";
import CustomQuery from "../../components/Modal/CustomQuery";
import Portal from "../../components/Modal/Portal";
import UrlResponse from "../../components/Modal/UrlResponse";
import BlogCard from "../../components/Article/BlogCard";
import HistoryList from "../../components/Modal/HistoryList";
import { event } from "nextjs-google-analytics";

export async function getStaticProps() {
  // Read markdows from directory
  let mdxFiles = fs.readdirSync(path.join("mdx"));
  let articles = mdxFiles.map((file) => {
    const slug = file.replace(".md", "");
    const meta = fs.readFileSync(path.join("mdx", file), "utf-8");
    const { data: frontMatter } = matter(meta);

    return { slug, frontMatter };
  });
  const selected = await articles.filter((file) =>
    file.frontMatter?.tag.includes("url")
  );

  return {
    props: { articles: selected },
  };
}

export default function Home({ articles }: { articles: [object] }) {
  const cache: string = "response";
  const [history, setHistory] = React.useState<any>([]);
  const [historyModal, setHistoryModal] = React.useState(false);
  const [fetching, setFetching] = React.useState(false);
  let [link, setLink] = React.useState("");
  const [custom, setCustom] = React.useState("");
  const [customModal, setCustomModal] = React.useState(false);
  let indicator = custom !== "" ? "active" : "";
  const [responseModal, setResponseModal] = React.useState(false);
  const [response, setResponse] = React.useState<{
    type: string;
    message?: string;
    result: { link: string; shortlink: string; altLink: string };
  }>({ type: "", result: { link: "", shortlink: "", altLink: "" } });

  function handleCustonization(event: SyntheticEvent): void {
    event.preventDefault();
    setCustomModal(true);
  }

  async function handleShortenURL() {
    if (link === "" || !validateUrl(link)) {
      toast.error("Input not accepted");
      setFetching(false);
    } else {
      setFetching(true);

      try {
        if (!link.startsWith("http")) {
          link = `http://${link}`;
        }
        const response = await fetch("/api/urlservice/shorten", {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            custom: custom ? custom : "",
            link: link,
          }),
        });
        const data = await response.json();
        // Check if an error response was received
        data?.type.includes("ERR")
          ? toast.error(`${data.message}`)
          : toast.success("Successful");

        // Pass data to UrlResponse Modal
        data?.result && handleResponseModal(data);
        data?.result && cacheResponse(data);
        event("Generated shortlink", {
          category: "shorten link",
          label: `Generated ${data?.shortlink} link`,
        });
      } catch (error) {
        toast.error("query error");
      }
    }
    setFetching(false);
  }

  function handleCustomModal(): void {
    setCustom("");
    setCustomModal(false);
  }

  function handleInputUpdate(event: React.ChangeEvent<HTMLInputElement>): void {
    setLink(event.target.value);
  }

  function handleResponseModal(data: {
    type: string;
    message?: string;
    result: { link: string; shortlink: string; altLink: string };
  }): void {
    setResponse(data);
    // Cache data to sessionStorage
    setResponseModal(true);
    let timer = setTimeout(() => {
      setResponseModal(false);
    }, 7000);
    toast.info("Your links are saved to history");
    // Clear input
    setCustom("");
    setLink("");
  }

  function cacheResponse(response: any): void {
    // Cache to sessionStorage.
    sessionStorage.setItem("response", JSON.stringify(response.result));
    // Add the response to the history array.
    setHistory((prev: any) => [...prev, response.result]);
  }

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
              <section style={{ position: "relative" }}>
                <Input>
                  <span>
                    <AiOutlineLink size={30} />
                  </span>
                  <input
                    type="text"
                    placeholder="https://paste-your-long-url-here..."
                    required={true}
                    value={link}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleInputUpdate(event)
                    }
                  />
                </Input>
                <Customize
                  as="div"
                  onClick={(event: SyntheticEvent) =>
                    handleCustonization(event)
                  }
                  title="customize URL"
                >
                  <span className={indicator}></span>
                  <GoSettings size={30} />
                </Customize>
                <Shorten
                  type="submit"
                  disabled={fetching}
                  onClick={() => handleShortenURL()}
                >
                  {fetching ? "Generating Link" : "Shorten URL"}
                </Shorten>
              </section>
              <small>
                By clicking “Shorten URL” you agree to barlink&#8216;s{" "}
                <Link href="/terms-of-use">Terms of use</Link> and{" "}
                <Link href="/privacy">Privacy Policy</Link>.
              </small>
            </ShortenForm>
            {/* Show history button is reponse data was cached to sessionStorage earlier */}
            {!(history.length < 1) && (
              <>
                <History role="button" onClick={() => setHistoryModal(true)}>
                  View History
                </History>
              </>
            )}
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
          {articles.map((post: any, idx: any) => (
            <BlogCard key={idx} article={post} />
          ))}
        </ArticleWrapper>

        <FaqWrapper data={faqShorten} />
      </>
      <Footer />

      <Portal showModal={customModal} onClose={() => handleCustomModal()}>
        <CustomQuery
          custom={custom}
          setter={setCustom}
          hideModal={setCustomModal}
        />
      </Portal>

      <Portal showModal={responseModal} onClose={() => setResponseModal(false)}>
        <UrlResponse data={response} />
      </Portal>

      <Portal showModal={historyModal} onClose={() => setHistoryModal(false)}>
        <HistoryList history={history} />
      </Portal>
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
  position: relative;

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

const Customize = styled(StyledButton)`
  height: 3.75em;
  aspect-ratio: 1;
  border-radius: var(--url-radius);
  display: grid;
  place-items: center;
  place-content: center;
  background-color: var(--clr-darker);
  cursor: pointer;
  border: solid var(--url-border-size) transparent;
  transition: var(--url-transition);
  position: relative;

  > * {
    color: var(--clr-main);
  }

  :hover,
  :focus {
    border-color: var(--clr-main);
  }

  span {
    position: absolute;
    top: 0px;
    right: 5px;
    z-index: 2;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: greenyellow;
    display: none;

    &.active {
      display: inline-block;
    }
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

const History = styled.span`
  text-decoration: underline;
  color: var(--clr-main);
  cursor: pointer;
  font-weight: var(--fw-regular);
  font-size: 0.9rem;
`;
