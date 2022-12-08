import styled from "styled-components";

interface iProps {
  lst: string | any;
  title: string;
  children: string;
}

const Styled = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625em;
  color: var(--clr-white);
  text-align: center;

  span {
    color: var(--clr-main);
    font-weight: var(--fw-exbold);
    font-size: 2rem;
  }

  h4 {
    font-weight: var(--fw-smbold);
    font-size: 1.125rem;
  }
`;

const StepCard = ({ lst, title, children }: iProps) => {
  return (
    <Styled>
      <span>{lst}</span>
      <h4>{title}</h4>
      <p>{children}</p>
    </Styled>
  );
};

export default StepCard;
