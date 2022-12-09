import Link from "next/link";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import styled from "styled-components";
import Button, { IconButton } from "./Buttons";
import Wrapper from "./Wrapper";
import { useState, useEffect, useRef } from "react";
import Modal from "./Modal";

const StyledHeader = styled.header`
  background-color: transparent;

  & > * {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0.8em;
    padding-block: 1em;
    position: relative;

    .close {
      display: none;
    }

    .brand {
      font-weight: var(--fw-bold);
      font-size: 2rem;
    }
  }

  @media (max-width: 768px) {
    .brand {
      flex: 1;
    }
    nav {
      position: absolute;
      top: 80px;
      right: 0;
      z-index: 10;
      width: 100%;
      height: 60vh;
      background-color: var(--clr-white);
      color: var(--clr-dark);
      // display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      display: none;

      a {
        font-weight: var(--fw-medium);
        font-size: 1rem;
      }
    }
    nav.mobile {
      display: flex;
    }
  }
`;

const Navigation: React.FC = () => {
  let pageWidth = useRef(0);
  let navigation = useRef<HTMLElement>(null);
  const [menuActive, setMenuActive] = useState(false);
  const [mobile, setMobile] = useState(false);

  // Functions
  function handleNavigation(): void {
    setMenuActive(!menuActive);
    if (navigation.current) {
      navigation.current?.classList.toggle("mobile");
    }
  }

  useEffect(() => {
    // Check if screen fits mobile view.
    pageWidth.current = window.innerWidth;
    if (pageWidth.current <= 768) setMobile(true);
    // return () => {};
  }, []);

  return (
    <>
      <StyledHeader>
        <Wrapper>
          <Link href="/" className="brand">
            Barlink
          </Link>

          <nav ref={navigation}>
            <Link href="/">Home</Link>
            <Link href="/shortenurl">Shorten URL</Link>
            <Link href="/qrcode">QR code</Link>
            <Link href="/barcode">Barcode</Link>
          </nav>

          <Button primary={false}>Scan QR-code</Button>
          {mobile && (
            <IconButton onClick={() => handleNavigation()}>
              {menuActive ? <BiX size={25} /> : <BiMenuAltRight size={25} />}
            </IconButton>
          )}
        </Wrapper>
      </StyledHeader>
    </>
  );
};

export default Navigation;
