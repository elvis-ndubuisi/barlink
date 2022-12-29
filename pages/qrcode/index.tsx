import QRCodeEditor from "../../components/QR/QRCodeEditor";
import Footer from "../../components/Footer";
import Head from "next/head";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navigation";
import StepCard from "../../components/StepCard";
import styled from "styled-components";
import LandingTitle from "../../components/LandingTitle";
import LandiingCaption from "../../components/LandiingCaption";
import Wrapper from "../../components/Wrapper";
import FaqWrapper from "../../components/FaqWrapper";
import StepWrapper from "../../components/StepWrapper";
import { Parag } from "../shortenurl";
import { generate_qrcode, faqQrcode } from "../../libraries/data.js";
import MobileQRCodeEditor from "../../components/QR/MobileQRCodeEditor";
import React from "react";
import { QRProvider } from "../../context/QRContext";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import ArticleWrapper from "../../components/Article/ArticleWrapper";
import BlogCard from "../../components/Article/BlogCard";

export async function getStaticProps() {
  /* Get markdown files from mdx directory */
  const files = fs.readdirSync(path.join("mdx"));
  /* Return filenames as slugs */
  const articles = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const mdxMeta = fs.readFileSync(path.join("mdx", filename), "utf-8");
    const { data: frontMatter } = matter(mdxMeta);

    return {
      slug,
      frontMatter,
    };
  });

  const selected = await articles.filter((file) =>
    file.frontMatter?.tag.includes("qrcode")
  );

  return {
    props: {
      articles: selected,
    },
  };
}

export default function Home({ articles }: { articles: [object] }) {
  let screenSize = React.useRef(0);
  const [isSmallScreen, setIsSmallScreen] = React.useState(true);

  React.useEffect(() => {
    screenSize.current = window.innerWidth;
    screenSize.current < 768 ? setIsSmallScreen(true) : setIsSmallScreen(false);
  }, []);

  return (
    <>
      <Head>
        <title>
          Barlink - Free URL shortener | Barcode and QR code generator
        </title>
      </Head>
      <Navbar />
      <>
        <Landing>
          <Wrapper>
            <LandingTitle>
              Generate <span>Dynamic QR Codes</span> in Seconds
            </LandingTitle>
            <LandiingCaption>
              Customize QR code looks, add your company or brand logo, change
              colors, download in different printable formats
            </LandiingCaption>
          </Wrapper>
        </Landing>

        <Wrapper>
          <QRProvider>
            {isSmallScreen ? <MobileQRCodeEditor /> : <QRCodeEditor />}
          </QRProvider>
        </Wrapper>

        <section style={{ marginBottom: "2em" }}>
          <Wrapper>
            <Heading style={{ textAlign: "center" }}>
              How Do I Generate A Free QR Code
            </Heading>
            <Parag>
              Generating your free QR codes is as easy as following these steps
            </Parag>
            <StepWrapper>
              {generate_qrcode.map((step, idx) => (
                <StepCard key={idx} lst={step.id} title={step.title}>
                  {step.desc}
                </StepCard>
              ))}
            </StepWrapper>
          </Wrapper>
        </section>

        <ArticleWrapper>
          {/* render 4 out of 5 qrcode tagged article */}
          {articles
            .map((article: any, idx: any) => (
              <BlogCard key={idx} article={article} />
            ))
            .slice(1)}
        </ArticleWrapper>

        <FaqWrapper data={faqQrcode} />
      </>
      <Footer />
    </>
  );
}

// Styled Components
const Landing = styled.section`
  min-height: calc(var(--landing-height) / 2);
  // background-color: var(--clr-white);
  // color: var(--clr-dark);

  > * {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1.5em;
    min-height: inherit;
  }
`;
