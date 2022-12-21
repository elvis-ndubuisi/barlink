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
    <Styled href={`/article/${slug}`}>
      <Image src={meta.image} alt={meta.title} height={200} width={300} />
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
`;

export default Article;
