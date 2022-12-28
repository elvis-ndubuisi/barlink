import styled from "styled-components";
import React, { useState } from "react";
import { GoPlus, GoDash } from "react-icons/go";
import { motion } from "framer-motion";

interface iProp {
  question: string;
  answer: string;
}

const Accordion = ({ question, answer }: iProp) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledAccordion>
      <AccordionBar
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
      >
        <h4>{question}</h4>
        {!isOpen ? <GoPlus size={24} /> : <GoDash size={24} />}
      </AccordionBar>
      {isOpen && (
        <AccordionContent
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {answer.split("\n").map((ans, idx) => (
            <p key={idx}>{ans}</p>
          ))}
        </AccordionContent>
      )}
    </StyledAccordion>
  );
};

const StyledAccordion = styled.div`
  margin-bottom: 0.5em;
`;

const AccordionBar = styled(motion.section)`
  background-color: var(--clr-light);
  height: 45px;
  width: 100%;
  padding: 0.4em 1em;
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

const AccordionContent = styled(motion.article)`
  font-size: 0.9rem;
  font-weight: var(--fw-regular);
  color: var(--clr-light2);
  max-width: 97%;
  margin-inline: auto;
  padding-top: 0.7em;
  // for animation
  opacity: 0;

  > * {
    margin-bottom: 1em;
    color: inherit;
  }
`;

export default Accordion;
