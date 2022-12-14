import React from "react";
import styled from "styled-components";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Heading from "../../components/Heading";
import Image from "next/image";
import { ArticleJsonLd, NextSeo } from "next-seo";

interface iProps {
  frontMatter: { title: string; image: string; excerpt: string };
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
  frontMatter: { title, image, excerpt },
  slug,
  content,
}: iProps) {
  return (
    <>
      <NextSeo
        title={`${title}`}
        description={`${excerpt}`}
        openGraph={{
          title: `${title}`,
          description: `${excerpt}`,
          url: `https://www.example.com/articles/${title}`,
          type: "article",
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url="https://barlink.vercel.app/articles"
        title={`${title}`}
        images={[`https://example.com${image}`]}
        datePublished="2015-02-05T08:00:00+08:00"
        dateModified="2015-02-05T09:00:00+08:00"
        authorName="Ike Elvis Ndubuisi"
        description={excerpt}
      />
      <Navigation />
      <StyledArticle>
        <img
          src={image}
          alt={image}
          style={{
            width: "100%",
            height: "20rem",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "5px",
          }}
        />

        <Heading>{title}</Heading>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      </StyledArticle>
      <Footer />
    </>
  );
}

// Styled Component
const StyledArticle = styled.main`
  color: var(--clr-white);
  max-width: 1080px;
  margin: 2em auto;
  padding: 1em;
  border-radius: 15px;


  h2 {
    font-size: 2rem;
    font-weight: var(--fw-bold);
    text-align: center;
    margin-bottom: 0.4em;
  }

  p {
    max-width: 1000px;
    text-align: justify;
    font-weight: var(--fw-regular);
    font-size: 1rem;
    margin: 0.8em auto;

    a {
      text-decoration: underline;
      color: var(--clr-main);

      &:hover {
        color: var(--clr-white);
      }
    }
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

  li {
    margin: 0.5em 0;
    list-style: none;

    strong {
      color: var(--clr-main);
      font-size: 1.05rem;
    }
  }
`;
