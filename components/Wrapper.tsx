import styled from "styled-components";
import { motion } from "framer-motion";

const StyledWrapper = styled(motion.div)`
  width: 100%;
  max-width: 1440px;
  margin-inline: auto;
  padding-inline: 0.9375em;
`;

const Wrapper = ({ children, variants }: any) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;
