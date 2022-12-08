import Link from "next/link";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import styled from "styled-components";
import Button, { IconButton } from "./Buttons";
import Wrapper from "./Wrapper";
import { useState, useEffect } from "react";
import { AiFillSecurityScan } from "react-icons/ai";

const StyledHeader = styled.header`
  background-color: transparent;

  & > * {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-block: 1em;
  }
`;

const BWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const Navigation: React.FC = () => {
  let pageWidth = 0;
  const [menuActive, setMenuActive] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    pageWidth = window.innerWidth;
    if (pageWidth <= 768) setMobile(true);
    // return () => {};
  }, [pageWidth]);

  return (
    <StyledHeader>
      <Wrapper>
        <Link href="/">Barlink</Link>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/shortenurl">URL Shortener</Link>
          <Link href="/qrcode">QR code</Link>
          <Link href="/barcode">Barcode</Link>
        </nav>
        <BWrapper>
          <Button primary={false}>Scan QR-code</Button>
        </BWrapper>
        {mobile && (
          <IconButton>
            {menuActive ? <BiX size={25} /> : <BiMenuAltRight size={25} />}
          </IconButton>
        )}
      </Wrapper>
    </StyledHeader>
  );
};

export default Navigation;
