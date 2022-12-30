import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

interface iProps {
  slug: string;
  meta: {
    title: string;
    excerpt: string;
    image: string;
  };
}

const Article = ({ slug, meta }: iProps) => {
  return (
    <Styled href={`/articles/${slug}`}>
      <Image
        src={meta.image}
        alt={meta.title}
        width={300}
        height={180}
        style={{ objectFit: "cover" }}
      />
      <div>
        <h3>{meta.title}</h3>
        <p>{meta.excerpt}</p>
      </div>
    </Styled>
  );
};

// Styled Components
const Styled = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4em;
  border-radius: var(--radius-10);
  cursor: pointer;
  background-color: var(--clr-white);
  max-width: 320px;
  overflow: hidden;
  color: var(--clr-dark);
  text-align: left;
  font-size: 0.9rem;
  border: solid 2px transparent;

  > div {
    padding: 0.3em;

    h3 {
      margin-bottom: 0.5em;
    }
  }

  &:hover {
    color: var(--clr-dark);
    border-color: var(--clr-main);
  }
`;

export default Article;
