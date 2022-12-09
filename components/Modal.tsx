import styled from "styled-components";
import { IconButton } from "./Buttons";
import { GoX } from "react-icons/go";

interface iProps {
  title?: string;
  children: any;
}

const Modal = ({ title, children }: iProps) => {
  return (
    <StyledModal>
      <div>
        <Header>
          {title && <h3>{title}</h3>}
          <IconButton>
            <GoX size={30} />
          </IconButton>
        </Header>
        <>{children}</>
      </div>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: transparent;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 20;
  display: grid;
  place-items: center;
  place-content: center;

  > * {
    border-radius: 5px;
    padding: 1em;
    background-color: var(--clr-white);
    color: var(--clr-dark);
    max-width: 800px;
    margin: 0 0.5em;
  }

  > *:first-child {
    position: relative;
    right: 0;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;
`;

export default Modal;
