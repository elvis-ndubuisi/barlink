import Link from "next/link";
import styled from "styled-components";

interface iProp {
  article: { slug: string; frontMatter: { title: string; excerpt: string } };
}

const BlogCard = ({ article }: iProp) => {
  const { title, excerpt } = article.frontMatter;
  return (
    <StyledCard href={`article/${article.slug}`}>
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <p>Learn more</p>
    </StyledCard>
  );
};

const StyledCard = styled(Link)`
  border-radius: 5px;
  padding: 10px 16px;
  display: inline-block;
  border: solid 1px var(--clr-main);
  
  :hover,
  :focus,
  :focus-within {
    background-color: var(--clr-light);
    color: var(--clr-dark);
  }
  
  h3 {
    text-align: center;
    font-weight: var(--fw-smbold);
    font-size: 18px;
  }

  & *:nth-child(2) {
    margin: 16px 0;
  }

  p {
    text-align: left;
  }

  p:last-child {
    color: var(--clr-main);
  }
`;

export default BlogCard;
