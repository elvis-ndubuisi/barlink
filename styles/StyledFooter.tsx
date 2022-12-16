import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--clr-gray);
  padding: 0.8125em 0 2em;

  > * {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1em;
    }
  }
`;

export const Socials = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
  font-weight: var(--fw-smbold);
`;
