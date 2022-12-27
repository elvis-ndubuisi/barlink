/* Inherits QRcode Context */
import React from "react";
import QRPreview from "../QR/QRPreview";
import QRContext from "../../context/QRContext";
import styled from "styled-components";

const EyeAdvSetting = () => {
  const { state, dispatch } = React.useContext(QRContext);
  return (
    <Wrapper>
      <QRPreview />
      <section>settings tab</section>
    </Wrapper>
  );
};

/* Styled Components */
const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export default EyeAdvSetting;
