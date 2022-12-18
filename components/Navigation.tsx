import Link from "next/link";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import styled from "styled-components";
import Button, { IconButton } from "./Buttons";
import Wrapper from "./Wrapper";
import React from "react";
import { motion } from "framer-motion";
// import Modal from "./Modal";
// import Scan from "./Scan";

const variants = {
  open: {
    opacity: 1,
    x: 0,
  },
  closed: { opacity: 0, x: "-100%" },
};

const Navigation: React.FC = () => {
  let pageWidth = React.useRef(0);
  let navigation = React.useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [mobile, setMobile] = React.useState(false);
  const [scanModal, setScanModal] = React.useState(true);

  // Functions
  function handleNavigation(): void {
    navigation.current && navigation.current?.classList.toggle("mobile");
    setIsOpen(!isOpen);
  }

  function hm() {
    setScanModal(true);
  }

  React.useEffect(() => {
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

          {mobile ? (
            // Mobile Nav
            <motion.nav
              ref={navigation}
              animate={isOpen ? "open" : "closed"}
              variants={variants}
            >
              <Link href="/">Home</Link>
              <Link href="/shortenurl">Shorten URL</Link>
              <Link href="/qrcode">QR code</Link>
              {/* <Link href="/barcode">Barcode</Link> */}

              <BtnWrap>
                <Button primary={false}>Unshorten</Button>
                <Button primary={true}>Scan</Button>
              </BtnWrap>
            </motion.nav>
          ) : (
            // Desktop Nav
            <motion.nav ref={navigation}>
              <Link href="/">Home</Link>
              <Link href="/shortenurl">Shorten URL</Link>
              <Link href="/qrcode">QR code</Link>
              {/* <Link href="/barcode">Barcode</Link> */}

              <BtnWrap>
                <Button primary={false}>Unshorten</Button>
                <Button primary={true} handleClick={() => setScanModal(true)}>
                  Scan
                </Button>
              </BtnWrap>
            </motion.nav>
          )}

          <BtnWrap>
            <Button primary={false}>Unshorten</Button>
            <Button primary={true}>Scan</Button>
          </BtnWrap>
          {mobile && (
            <IconButton onClick={() => handleNavigation()}>
              {isOpen ? <BiX size={25} /> : <BiMenuAltRight size={25} />}
            </IconButton>
          )}
        </Wrapper>
      </StyledHeader>
      {/* <Modal onClose={() => setScanModal(false)} showModal={scanModal}>
        <Scan />
      </Modal> */}
    </>
  );
};

// Styled components
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

    nav {
      display: flex;
      align-items: center;
      gap: 1em;

      > div {
        display: none;
      }
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
      background-color: var(--clr-dark-gray);
      color: var(--clr-white);
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

      > div {
        display: flex;
      }
    }
  }
`;

const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Navigation;
