import React from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const StyledCaption = styled(motion.p)`
  max-width: 700px;
  font-weight: var(--fw-medium);
  text-align: center;
  font-size: 1.125rem;
`;

const Char = styled(motion.span)`
  display: inline-block;
  margin-right: 0.25em;
  white-space: nowrap;
`;

const variants = {
  hidden: { opacity: 0, y: "0.25em" },
  visible: {
    opacity: 1,
    y: "0em",
    transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

const LandiingCaption = ({ children }: any) => {
  const ctrls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  React.useEffect(() => {
    if (inView) ctrls.start("visible");
    if (!inView) ctrls.start("hidden");
  }, [ctrls, inView]);

  return (
    <StyledCaption>
      {children
        ?.toString()
        .split(" ")
        .map((char: any, idx: any) => (
          <Char
            ref={ref}
            aria-hidden="true"
            key={idx}
            initial="hidden"
            animate={ctrls}
            variants={variants}
          >
            {char}
          </Char>
        ))}
    </StyledCaption>
  );
};

export default LandiingCaption;
