import Link from "next/link";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import { profile_links } from "../libraries/data.js";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";

const StyledFooter = styled.footer`
  background-color: var(--clr-gray);
  padding: 0.8125em 0 2em;

  > * {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1em;
    }
  }
`;

const Socials = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
  font-weight: var(--fw-smbold);
  font-size: 0.8125rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <Link href="/">Barlink</Link>

        <section>
          <Link href="/terms-of-use">Terms of use</Link>
          <Link href="/privary">privacy</Link>
        </section>

        <section>
          <Socials>
            <p>Get in touch</p>
            <a href={profile_links.twitter} target="_blank" rel="noreferrer">
              <AiOutlineTwitter size={25} />
            </a>
            <a href={profile_links.youtube} target="_blank" rel="noreferrer">
              <AiFillYoutube size={25} />
            </a>
            <a href={profile_links.linkedin} target="_blank" rel="noreferrer">
              <AiFillLinkedin size={25} />
            </a>
          </Socials>
        </section>

        <section>copyright</section>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;
