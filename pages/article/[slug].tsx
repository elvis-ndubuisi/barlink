import React from "react";
import styled from "styled-components";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Heading from "../../components/Heading";

interface iProps {
  frontMatter: { title: string };
  slug: string;
  content: string;
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("mdx"));

  const paths = files.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const mdxMeta = fs.readFileSync(path.join("mdx", slug + ".md"), "utf-8");

  const { data: frontMatter, content } = matter(mdxMeta);
  return {
    props: {
      frontMatter,
      slug,
      content,
    },
  };
}

export default function Article({
  frontMatter: { title },
  slug,
  content,
}: iProps) {
  return (
    <>
      <Navigation />
      <StyledArticle>
        <Heading>{title}</Heading>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      </StyledArticle>
      <Footer />
    </>
  );
}

// Styled Component
const StyledArticle = styled.main`
  background-color: var(--clr-white);
  color: var(--clr-dark-gray);
  max-width: 1080px;
  margin: 2em auto;
  padding: 1em;
  border-radius: 15px;


  h2 {
    font-weight: var(--fw-bold);
    font-size: 2.4rem;
    text-align: center;
    background-colr: blue;
    color: yellow;
  }
  p {
    font-weight: var(--fw-regular);
  }
  a {
    text-decoration: underline;
    text-color: var(--clr-main);
    font-family; inherit;
    font-weight: inherit;
  }
  img {
    display: block
    max-width: 100%;
    object-fit: cover;
    object-posiitin: center;
  }

  ul, ol {
    margin-left: 1.5em;
  }
`;
