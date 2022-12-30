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
import useFilter from "../../hooks/useFilter";
import Image from "next/image";
import { pageview } from "../../libraries/analytics";

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
  padding: 0 1em;
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
    width: 100%;
    padding: 1em 0;
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

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 300px));
  justify-content: center;
  gap: 1em;
  min-height: 80vh;
  margin-bottom: 2em;
  align-items: stretch;
`;

const NoArticle = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 80vh;
`;

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

  // FIXME: paginated article.

  return {
    props: {
      articles: articles,
    },
  };
}

export default function Home({ articles }: { articles: [object] }) {
  const [filter, setFilter] = React.useState("");
  const filteredArticles = useFilter(articles, filter);

  React.useEffect(() => {
    pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Navigation />
      <Wrapper>
        <SearchBar>
          <GoSearch fontSize={24} />
          <input
            type="text"
            placeholder="Filter Articles"
            onChange={(event) => setFilter(event.target.value)}
          />
        </SearchBar>
        {!(filteredArticles.length < 1) ? (
          <>
            <Main>
              {filteredArticles.map((post: any) => (
                <Article
                  key={post.slug}
                  meta={post.frontMatter}
                  slug={post.slug}
                />
              ))}
            </Main>
          </>
        ) : (
          <>
            <NoArticle>
              <Image
                src="/assets/bloom-a-man-looks-at-a-blank-sheet-of-paper-in-puzzlement.png"
                alt="a-man-looks-at-a-blank-sheet-of-paper-in-puzzlement"
                width={300}
                height={300}
                style={{ objectFit: "contain" }}
              />
              <h2>No Article name matched: {filter}</h2>
            </NoArticle>
          </>
        )}
        {/* <Paginate>
                <Button>Load More</Button>
              </Paginate> */}
      </Wrapper>
      <Footer />
    </>
  );
}
