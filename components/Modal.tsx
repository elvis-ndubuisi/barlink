import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { GoX } from "react-icons/go";

const Styled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(21, 21, 21, 0.9);
  display: grid;
  place-items: center;
  place-content: center;
  z-index: 2;
`;

const ModalWrapper = styled.div`
  background-color: var(--clr-white);
  border-radius: 0.5em;
  max-width: 400px;
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

const modalRoot = document.getElementById("modal") as HTMLElement;

const Modal = ({
  children,
  onClose,
  showModal,
}: {
  children?: React.ReactNode;
  onClose: () => void;
  showModal: boolean;
}) => {
  const root = React.useRef<HTMLElement | null>(null);
  const modalBg = React.useRef<HTMLDivElement>(null);

  if (!root.current) root.current = document.createElement("div");

  function handleClose(event: any): void {
    if (event.target === modalBg?.current) {
      onClose();
    }
  }

  // React.useEffect(() => {
  //   const el = root.current!;
  //   modalRoot.appendChild(el);

  //   return () => modalRoot.removeChild(el);
  // }, []);

  // Modal Component
  const modalComponent = showModal ? (
    <Styled onClick={(event) => handleClose(event)} ref={modalBg}>
      <ModalWrapper>
        <CloseBtn onClick={onClose}>
          <GoX size={24} />
        </CloseBtn>
        {children}
      </ModalWrapper>
    </Styled>
  ) : null;

  if (root.current) {
    return createPortal(modalComponent, root.current);
  } else {
    return null;
  }
};

export default Modal;
