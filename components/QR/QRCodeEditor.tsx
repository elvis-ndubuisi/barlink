import Buttons from "../Buttons";
import Container from "./Container";
import ColorMenu from "./ColorMenu";
import DownloadSection from "./DownloadSection";
import EyeRadius from "./EyeRadius";
import InputGroup from "./InputGroup";
import React from "react";
import SelectType from "./SelectType";
import styled from "styled-components";
import QRPreview from "./QRPreview";
import QRLogo from "./QRLogo";
import QRAdvSettings from "./QRAdvSettings";
import { QTypeProvider } from "../../context/QTypeContext";

const QRCodeEditor = () => {
  return (
    <StyledWrapper>
      <QTypeProvider>
        <Container noJustify={true}>
          <SelectType />
          {/* Logo menu */}
          <QRLogo />
        </Container>

        <Container>
          {/* Enter Details */}
          <InputGroup />
          <section>
            <QRPreview />
          </section>
          {/* Advanced Settings */}
          <QRAdvSettings />
        </Container>
      </QTypeProvider>

      <Container noJustify={true}>
        {/* EyeRadius Menu */}
        <EyeRadius />
        {/* Colors Menu */}
        <ColorMenu />
        <DownloadSection />
      </Container>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  border-radius: var(--url-radius);
  max-width: 966px;
  min-height: 400px;
  margin: 3em auto;
  background-color: var(--clr-dark);
  color: var(--clr-white);
  padding: 1em;
  display: grid;
  grid-template-columns: minmax(200px, 250px) 1fr minmax(200px, 250px);
  gap: 0.8em;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
`;

export default QRCodeEditor;

// const target = event.target;
// const value = target.type === "checkbox" ? target.checked : target.value;
// const name = target.name;
