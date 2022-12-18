import styled from "styled-components";
import Filename from "./Filename";
import Buttons from "../Buttons";

interface iDownloadFormat {
  selected: boolean;
}

const SdownloadSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.875em;
  align-items: stretch;
`;

export const DownloadFormat = styled.button<iDownloadFormat>`
  display: inline-flex;
  place-content: center;
  outline: none;
  border: 0;
  text-transform: uppercase;
  background-color: transparent;
  color: ${(props) =>
    props.selected ? "var(--clr-main)" : "var(--clr-white)"};
  text-decoration: ${(props) => (props.selected ? "underline" : "none")};
  cursor: pointer;

  :hover {
    color: var(--clr-main);
  }
`;

const DownloadSection = () => {
  return (
    <SdownloadSection>
      <Filename contentEditable={false}>name_of_file.jpg</Filename>
      <Buttons>Download SVG</Buttons>
      <span
        style={{
          display: "inline-flex",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <DownloadFormat selected={true}>jpeg</DownloadFormat>
        <DownloadFormat selected={false}>svg</DownloadFormat>
        <DownloadFormat selected={false}>utf-8</DownloadFormat>
      </span>
    </SdownloadSection>
  );
};

export default DownloadSection;
