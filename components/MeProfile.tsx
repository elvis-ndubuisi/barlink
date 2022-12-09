import Image from "next/image";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import { profile_links } from "../libraries/data.js";
import Link from "next/link";

const StyledMe = styled.section`
  padding: 2em 0;

  > * {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1.25em;

    > section {
      display: flex;
      flex-direction: column;
      text-align: left;
      gap: 0.98rem;
      max-width: 700px;
    }

    > section:first-child a {
      text-decoration: underline;
      color: var(--clr-main);
    }

    @media (max-width: 768px) {
      flex-direction: column;
      .me {
        order: 1;
      }
    }
  }

  h3 {
    font-size: 1.875rem;
    font-weight: var(--fw-smbold);
  }
`;

const MeProfile = () => {
  return (
    <StyledMe>
      <Wrapper>
        <section>
          <h3>Hello there &#x1F44B;</h3>
          <p>
            My name is Elvis Ndubuisi from Delta State, Nigeria. I&#8216;m the
            maker of <Link href="/">BarLink</Link>. A self-taught
            JavaScript/Typescript web & mobile developer with passion for SaaS
            projects, Open-source and undying love for Art and Games; and
            currently making tutorial videos on{" "}
            <a href={profile_links.youtube} target="_blank" rel="noreferrer">
              YouTube
            </a>
            .
          </p>

          <p>
            The Barlink project (version 1 was Baabar) was inspired by
            individuals on{" "}
            <a
              href={profile_links.productHunt}
              target="_blank"
              rel="noreferrer"
            >
              Product Hunt
            </a>{" "}
            and{" "}
            <a href={profile_links.twitter} target="_blank" rel="noreferrer">
              Twitter
            </a>
            .
          </p>

          <p>
            I first started my journey as a 3d artist, sculptor and Unity game
            developer, learnt C#, zBrush and how to draw by hand, bought and
            sold my first drawing tablet and finally i&#8216;m here; enjoying
            launching fun and useful project.
          </p>

          <p>
            Thank you for using Barlink services and I hope you had fun using it
            more than i did when working on the project.
          </p>
        </section>
        <section>
          <Image
            src="/elvis_ndubuisi.jpeg"
            alt="play display"
            width={350}
            height={350}
            style={{
              aspectRatio: "1",
              objectFit: "cover",
              borderRadius: "5px",
              border: "solid 3px var(--clr-white)",
            }}
          />
        </section>
      </Wrapper>
    </StyledMe>
  );
};

export default MeProfile;
