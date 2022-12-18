import styled from "styled-components";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: var(--fw-smbold);
  font-size: 1.2rem;
`;

export const HeaderBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: var(--fw-regular);
  font-family: inherit;
  font-size: inherit;
  outline: 0;
  border: none;
  background-color: transparent;
  color: inherit;
  cursor: pointer;
  font-size: 0.9rem;

  :hover,
  :focus {
    color: var(--clr-main);
  }
`;

export default Header;
