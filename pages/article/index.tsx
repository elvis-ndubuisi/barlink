import Article from "../../components/Article/Article";
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import styled from "styled-components";
import { GoSearch } from "react-icons/go";
import Button from "../../components/Buttons";

interface iPost {
  slug: string;
  frontMatter: {
    title: string;
    excerpt: string;
    image: string;
  };
}

const SearchBar = styled.div`
  margin: 3em auto;
  max-width: 450px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: var(--radius-10);
  background-color: var(--clr-white);
  color: var(--clr-dark);
  padding: 1em 1em;
  border: solid 2px transparent;

  :hover,
  :focus-within {
    border-color: var(--clr-main);
  }

  input {
    background-color: transparent;
    outline: 0;
    border: none;
    font-weight: var(--fw-regular);
  }
`;

const Paginate = styled.div`
  max-width: 200px;
  margin: 2em auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
`;

const Main = styled.main``;

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

  return {
    props: {
      articles: articles,
    },
  };
}

export default function Home({ articles }: { articles: [object] }) {
  return (
    <>
      <Navigation />
      <Wrapper>
        <SearchBar>
          <GoSearch fontSize={24} />
          <input type="text" placeholder="Filter Articles" />
        </SearchBar>
        <Main>
          {articles.map((post: any) => (
            <Article key={post.slug} meta={post.frontMatter} slug={post.slug} />
          ))}
        </Main>
        <Paginate>
          <Button>Load More</Button>
        </Paginate>
      </Wrapper>
      <Footer />
    </>
  );
}
