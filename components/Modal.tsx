import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { GoX } from "react-icons/go";

// const Styled = styled.section`
//   positin: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: center;
//   background-color: rgba(0,0,0,0.7);

//   .modal {
//     background-color: white;
//   width: 100%;
//   height: 100%;
//   border:radius: 15px;
//   padding: 20px;
//   z-index: 100;
//   }

//   .header {
//     display: flex;
//     justify-content: flex-end;
//     font-size: 25px;
//   }

//   .body {
//     padding-top: 10px;
//   }
// `;

// const Modal = ({
//   show,
//   onClose,
//   children,
// }: {
//   show: any;
//   onClose: any;
//   children: any;
// }) => {
//   const [isBrowser, setIsBroswer] = React.useState(false);

//   function handleClick(event: any): void {
//     event.preventDefault();
//     onClose();
//   }

//   React.useEffect(() => {
//     setIsBroswer(true);

//     return () => {};
//   }, []);

//   const modalContent = show ? (
//     <Styled>
//       <div className="modal">
//         <div className="header">
//           <a href="#" onClick={handleClick}>
//             <button>close</button>
//           </a>
//         </div>
//         <div className="body">{children}</div>
//       </div>
//     </Styled>
//   ) : null;

//   if (isBrowser) {
//     return ReactDom.createPortal(
//       modalContent,
//       document.getElementById("modal")
//     );
//   } else {
//     return null;
//   }
// };

// export default Modal;
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

const Modal = ({
  children,
  onClose,
  showModal,
}: {
  children: any;
  onClose: () => void;
  showModal: boolean;
}) => {
  let modalBg = React.useRef<HTMLDivElement>(null);

  const [isBrowser, setIsBroswer] = React.useState(false);

  function handleClose(event: any): void {
    if (event.target === modalBg?.current) {
      onClose();
    }
  }

  React.useEffect(() => {
    setIsBroswer(true);
  }, []);

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

  if (isBrowser) {
    // return createPortal<DocumentFragment>(
    //   modalComponent,
    //   document?.getElementById("modal")
    // );
    return;
  } else {
    return null;
  }
};

export default Modal;
