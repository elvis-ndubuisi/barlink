import Link from "next/link";
import Wrapper from "./Wrapper";
import { profile_links as profile } from "../libraries/data.js";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import { StyledFooter, Socials } from "./StyledFooter";
import Donate from "./Donate";

const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <div>
          <Link
            href="/"
            style={{ fontSize: "2rem", fontWeight: "var(--fw-bold)" }}
          >
            Barlink
          </Link>
        </div>

        <section
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            gap: "0.4em",
          }}
        >
          <Link href="/terms-of-use">Terms of use</Link>
          <Link href="/privacy">privacy</Link>
        </section>

        <section
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            gap: "0.4em",
          }}
        >
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
          <Donate />
        </section>

        <small>&#169; 2022, Ike Elvis Ndubuisi. All Right Reserved.</small>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;
