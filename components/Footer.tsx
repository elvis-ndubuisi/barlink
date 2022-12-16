import Link from "next/link";
import Wrapper from "./Wrapper";
import { profile_links as profile } from "../libraries/data.js";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import { StyledFooter, Socials } from "../styles/StyledFooter";

// const StyledFooter = styled.footer`
//   background-color: var(--clr-gray);
//   padding: 0.8125em 0 2em;

//   > * {
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: space-between;

//     @media (max-width: 768px) {
//       flex-direction: column;
//       gap: 1em;
//     }
//   }
// `;

// const Socials = styled.nav`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   gap: 10px;
//   margin: 10px 0;
//   font-weight: var(--fw-smbold);
// `;

const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <Link
          href="/"
          style={{ fontSize: "2rem", fontWeight: "var(--fw-bold)" }}
        >
          Barlink
        </Link>

        <section>
          <Link href="/terms-of-use">Terms of use</Link>
          <Link href="/privacy">privacy</Link>
        </section>

        <section>
          <Socials>
            <p>Find Me</p>
            <a href={profile.twitter} target="_blank" rel="noreferrer">
              <AiOutlineTwitter size={25} />
            </a>
            <a href={profile.youtube} target="_blank" rel="noreferrer">
              <AiFillYoutube size={25} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <AiFillLinkedin size={25} />
            </a>
          </Socials>
        </section>

        <small>&#169; 2022, Ike Elvis Ndubuisi. All Right Reserved.</small>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;
