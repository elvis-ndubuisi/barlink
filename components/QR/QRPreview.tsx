import React from "react";
import styled from "styled-components";
import { QRCode } from "react-qrcode-logo";
import QRContext from "../../context/QRContext";

export const Preview = styled.div`
  border-radius: 5px;
  width: 300px;
  max-width: 350px;
  aspect-ratio: 1;
  background-color: var(--clr-dark-gray);
  font-weight: var(--fw-exbold);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.875em;
  margin: auto;

  h3 {
    font-size: 1.1rem;
    color: var(--clr-white);
    margin: 0.5em 0;
  }

  > div {
    width; 100%;
    height: inherit;
  }
`;

const QRPreview = () => {
  const { state } = React.useContext(QRContext);
  return (
    <Preview>
      <h3>Live Preview</h3>
      <div>
        <QRCode
          value={state?.value}
          bgColor={state?.bgColor}
          fgColor={state?.fgColor}
          qrStyle={state?.qrStyle}
          quietZone={state?.quietZone}
          size={state?.size}
          ecLevel={state?.ecLevel}
          enableCORS={state?.enableCORs}
          logoImage={state?.logoImage}
          logoHeight={state?.logoHeight}
          logoWidth={state?.logoWidth}
          logoOpacity={state?.logoOpacity}
          removeQrCodeBehindLogo={state?.removeQrCodeBehindLogo}
          eyeColor={state?.eyeColor}
          eyeRadius={state?.eyeRadius}
          id={state?.id}
        />
      </div>
    </Preview>
  );
};

export default QRPreview;
