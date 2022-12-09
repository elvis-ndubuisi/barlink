import styled from "styled-components";
import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const Accordion = () => {
  const [active, setActive] = useState(false);

  function showAccordion(): void {
    setActive(!active);
  }

  return (
    <StyledAccordion>
      <AccordionBar onClick={() => showAccordion()}>
        <h4>accordin title</h4>
        {!active ? <BiChevronDown size={24} /> : <BiChevronUp size={24} />}
      </AccordionBar>
      {active && (
        <AccordionContent>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum,
            reiciendis dignissimos expedita accusamus reprehenderit ab facere
            asperiores veritatis quibusdam libero?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            debitis?
          </p>
        </AccordionContent>
      )}
    </StyledAccordion>
  );
};

const StyledAccordion = styled.div`
  margin-bottom: 0.5em;
`;

const AccordionBar = styled.section`
  background-color: var(--clr-light);
  height: 45px;
  width: 100%;
  padding: 0.4em;
  border-radius: 5px;
  color: var(--clr-dark);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-weight: var(--fw-medium);
  font-size: 0.9375rem;
  cursor: pointer;
  border: solid var(--border-width2) transparent;

  h4 {
    font-weight: inherit;
    text-transform: capitalize;

    ::selection {
      background-color: inherit;
    }
  }

  :hover,
  :focus {
    background-color: var(--clr-gray);
    border-color: var(--clr-main-light);
    color: var(--clr-light);
    transition: all 0.2s ease-out;
  }
`;

const AccordionContent = styled.article`
  font-size: 1rem;
  font-weight: var(--fw-regular);
  color: var(--clr-light2);
  max-width: 97%;
  margin-inline: auto;
  padding-top: 0.7em;

  > * {
    margin-bottom: 0.5em;
    color: inherit;
  }
`;

export default Accordion;
