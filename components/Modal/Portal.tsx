import React, { MouseEvent } from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import { GoX } from "react-icons/go";
import { motion } from "framer-motion";

const Styled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(21, 21, 21, 0.9);
  display: flex;
  place-items: center;
  place-content: center;
  z-index: 5;
  padding: 0.5em;
`;

const ModalWrapper = styled.div`
  background-color: var(--clr-white);
  border-radius: 0.5em;
  width: inherit;
  max-width: 600px;
  padding: 2.5em 1em 1em 1em;
  position: relative;
  color: var(--clr-dark);
  font-weight: var(--fw-regular);
`;

const CloseBtn = styled.button`
  border: none;
  outline: 0;
  background-color: rgb(216, 38, 38);
  border-radius: 50%;
  display: grid;
  place-content: center;
  place-items: center;
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 0.5em;
  color: white;
  cursor: pointer;
`;

interface iProps {
  children: React.ReactNode;
  onClose: () => void;
  showModal: boolean;
}

let variants = {
  open: {
    opacity: 1,
    x: 0,
    duration: 1,
  },
  closed: { opacity: 0, x: "-100%" },
};

const Portal = ({ children, onClose, showModal }: iProps) => {
  const portalBg = React.useRef<HTMLDivElement | null>(null);
  const [isBrowser, setIsBrowser] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsBrowser(true);
  }, []);

  function handleClose(event: MouseEvent): void {
    if (event.target === portalBg?.current) {
      onClose();
    }
  }

  const Component = showModal ? (
    <>
      (
      <Styled
        onClick={(event) => handleClose(event)}
        ref={portalBg}
        animate={showModal ? "open" : "closed"}
        variants={variants}
        // onDrop={(event) => {
        //   event.preventDefault();
        //   event.stopPropagation();
        // }}
        // onDragEnter={(event) => {
        //   event.stopPropagation();
        //   event.preventDefault();
        // }}
        // onDragOver={(event) => {
        //   event.stopPropagation();
        //   event.preventDefault();
        // }}
      >
        <ModalWrapper>
          <CloseBtn onClick={onClose}>
            <GoX size={24} />
          </CloseBtn>
          {children}
        </ModalWrapper>
      </Styled>
      )
    </>
  ) : null;
  if (isBrowser) {
    return ReactDom.createPortal(
      Component,
      document.getElementById("portal") as HTMLElement
    );
  } else {
    return null;
  }
};

export default Portal;
