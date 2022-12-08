import Image from "next/image";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import { profile_links } from "../libraries/data.js";
import {
  AiOutlineYoutube,
  AiOutlineGlobal,
  AiOutlineTwitter,
} from "react-icons/ai";

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
      > section:last-child {
        display: none;
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
          <h3>Hello there!</h3>
          <p>
            I&#8216;m Elvis Ndubuisi from Delta State, Nigeria. A self-taught
            JavaScript/Typescript web & mobile developer with passion for
            open-source projects, SASS platforms and undying love for Art; and
            currently making tutorial videos on{" "}
            <a href={profile_links.youtube} target="_blank" rel="noreferrer">
              YouTube
            </a>
            .
          </p>

          <p>
            The Barlink platform (version 1 was Baabar) was inspired my
            individuals on <a href="">Product Hunt</a> and{" "}
            <a href={profile_links.twitter} target="_blank" rel="noreferrer">
              Twitter
            </a>
            ; and the desire to make a brand for myself.
          </p>

          <p>
            I first started my journey as a 3d artist, sculptor and Unity game
            developer, learnt C#, zBrush and how to draw by hand, bought and
            sold my first drawing tablet and finally i&#8216;m here.
          </p>

          <p>Thank you for using the Barlink platform!</p>
        </section>
        <section>
          <Image
            src="/funny-coder.gif"
            alt="play display"
            width={300}
            height={300}
          />
        </section>
      </Wrapper>
    </StyledMe>
  );
};

export default MeProfile;
