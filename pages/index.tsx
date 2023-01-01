import ArticleWrapper from "../components/Article/ArticleWrapper";
import BlogCard from "../components/Article/BlogCard";
import FaqWrapper from "../components/FaqWrapper";
import Footer from "../components/Footer";
import Head from "next/head";
import LandingTitle from "../components/LandingTitle";
import LandingSubTitle from "../components/LandingSubTitle";
import LandiingCaption from "../components/LandiingCaption";
import Navigation from "../components/Navigation";
import Wrapper from "../components/Wrapper";
import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";
import { BigButton } from "../components/Buttons";
import Donate from "../components/Donate";
import MeProfile from "../components/MeProfile";
import Heading from "../components/Heading";
import { faqHome } from "../libraries/data.js";
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { HiChevronLeft } from "react-icons/hi2";
import Router from "next/router";
import { NextSeo } from "next-seo";

const caption_variants = {
  hidden: { opacity: 0, x: -40, transition: { duration: 0.9 } },
  visible: { opacity: 1, x: 0 },
};

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
    file.frontMatter?.tag.includes("home")
  );

  return {
    props: {
      articles: selected,
    },
  };
}

export default function Home({ articles }: { articles: [object] }) {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: false });
  const ctrl = useAnimation();
  const [gettingStarted, setGettingStarted] = React.useState(false);

  React.useEffect(() => {
    if (inView) ctrl.start("visible");
    if (!inView) ctrl.start("hidden");
  }, [ctrl, inView]);

  return (
    <>
      {/* <Head>
        <title>
          Barlink - Free URL shortener | Barcode and QR code generator
        </title>
      </Head> */}
      <NextSeo
        description="This example uses more of the available config options."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://www.url.ie/a",
          title: "Open Graph Title",
          description: "Open Graph Description",
          // images: [
          //   {
          //     url: "https://www.example.ie/og-image-01.jpg",
          //     width: 800,
          //     height: 600,
          //     alt: "Og Image Alt",
          //     type: "image/jpeg",
          //   },
          //   {
          //     url: "https://www.example.ie/og-image-02.jpg",
          //     width: 900,
          //     height: 800,
          //     alt: "Og Image Alt Second",
          //     type: "image/jpeg",
          //   },
          //   { url: "https://www.example.ie/og-image-03.jpg" },
          //   { url: "https://www.example.ie/og-image-04.jpg" },
          // ],
          siteName: "SiteName",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />

      <Navigation />
      <>
        {/* showcase */}
        <Showcase>
          <Wrapper>
            <LandingSubTitle>Your all-in-one Generator</LandingSubTitle>
            <LandingTitle>
              Generate <span>Dynamic QR codes</span>, <span>Barcodes</span> and{" "}
              <span>Shorten Links</span>.
            </LandingTitle>
            <LandiingCaption>
              Create fully customizable QR codes with your brand colors and
              logo, product barcodes. Turn long boring links to short
              memorizable links. Download generated contents in several
              printable formats and high-quality.
            </LandiingCaption>

            <ShowcaseButtons>
              {!gettingStarted && (
                <BigButton
                  primary={true}
                  onClick={() => setGettingStarted(!gettingStarted)}
                >
                  Get started <BiChevronRight size={25} />
                </BigButton>
              )}
              {gettingStarted && (
                <StartWrapper>
                  <StartButton
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={() => Router.push("/shortenurl")}
                  >
                    <p>Shorten URL</p>
                    <span>Generate short link easily</span>
                  </StartButton>
                  <StartButton
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={() => Router.push("/qrcode")}
                  >
                    <p>Create QR Code</p>
                    <span>Fully customizable QR Code</span>
                  </StartButton>

                  <BackButton onClick={() => setGettingStarted(false)}>
                    <HiChevronLeft size={24} />
                  </BackButton>
                </StartWrapper>
              )}
              <Donate />
            </ShowcaseButtons>
          </Wrapper>
        </Showcase>
        {/* caption */}
        <CaptionSection>
          <Wrapper>
            <CaptionText
              variants={caption_variants}
              animate={ctrl}
              initial="hidden"
              ref={ref}
            >
              Your all-in-one platform to build interactive experience with your
              audience. Generate QR codes for sharing and embeding into your
              websites. Printable Barcodes for your products labeling. Provides
              your customers with unique links and tailored experience.
            </CaptionText>
          </Wrapper>
        </CaptionSection>
        {/* product detail */}
        <NoteSection>
          <Wrapper>
            <Note>
              <Heading>Full Customisable QR Code</Heading>
              <p>
                Add editable QR Codes on anything you want with full branding
                and customization feature
              </p>
              <p>
                A QR code is a two dimensional barcode that stores information
                in black and white dots (called data pixels or “QR code
                modules”). Besides the black and white version, you can also
                create a colored QR code. To make your QR code even better, you
                can also get a QR code with a logo.
              </p>
            </Note>
            <Note>
              <Heading>Short URLs - Simple & Fast</Heading>
              <p>
                Barlink transforms long, ugly looking links from top sites on
                the internet into nice, memorable, short URLs. Just paste the
                long URL and with the click of a button, your short URL is
                generated.
              </p>
              <p>
                Your shortened URLs can be used in publications, documents,
                advertisements, blogs, forums, instant messages, and other
                locations.
              </p>
            </Note>
          </Wrapper>
        </NoteSection>
        {/* blog section */}
        <ArticleWrapper>
          {articles.map((post: any, idx: any) => (
            <BlogCard key={idx} article={post} />
          ))}
        </ArticleWrapper>
        {/* FAQs */}
        <FaqWrapper data={faqHome} />
        {/* profile */}
        <MeProfile />
      </>
      <Footer />
    </>
  );
}

const Showcase = styled.section`
  > * {
    min-height: var(--landing-height);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      margin: 1em 0;
    }
  }
`;

const ShowcaseButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  position: relative;
`;

const StartWrapper = styled.div`
  // position: absolute;
  // top: -80%;
  // right: 50%;
  // transform: translateX(50%);
  display: flex;
  align-items: center;
  gap: 0.6em;
  // z-index: 5;
`;

const StartButton = styled(motion.div)`
  background-color: var(--clr-white);
  border-radius: 0.3em;
  padding: 0.4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: var(--clr-dark);
  width: 150px;
  text-align: center;
  cursor: pointer;

  :hover {
    border: solid 2px var(--clr-main);
  }

  p {
    font-weight: var(--fw-medium);
    margin: 0;
  }

  span {
    display: block;
    font-weight: var(--fw-regular);
    font-size: 0.8rem;
  }
`;

const BackButton = styled.div`
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  background-color: var(--clr-gray);
  color: var(--clr-white);
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }
`;

const CaptionSection = styled.section`
  background-color: var(--clr-light);
  color: var(--clr-dark);
  padding: 0.5em 0;
`;

const CaptionText = styled(motion.p)`
  max-width: 740px;
  font-weight: var(--fw-smbold);
  font-size: 1.875rem;
  line-height: 141.5%;
  text-align: center;
  margin: 1.8em auto;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const NoteSection = styled.section`
  > * {
    padding-block: 2em;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    gap: 1.25rem;
    flex-wrap: wrap;
    background-color: var(--clr-white);
    color: var(--clr-dark);
  }
`;

const Note = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 593px;
`;
