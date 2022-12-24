import React from "react";
import styled from "styled-components";
import Filename from "./Filename";
import Buttons from "../Buttons";
import { Select } from "./Input";
import download from "../../libraries/download";

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
  const [format, setFormat] = React.useState<any>("png");
  const name = `barlink_qrcode.${format}`; /* downloaded qrcode name + ext */
  const hd = React.useRef<HTMLSelectElement>(null);

  return (
    <SdownloadSection>
      <Filename contentEditable={false}>{name}</Filename>
      <div
        style={{
          display: "inline-flex",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <Buttons
          handleClick={() => {
            download(format, name.split(`.${format}`)[0]);
          }}
        >
          Download{" "}
        </Buttons>
        <Select
          value={format}
          onChange={(event) => setFormat(event.target.value)}
        >
          <option value="svg">SVG</option>
          <option value="jpeg">Jpeg</option>
          <option value="png">Png</option>
          <option value="utf-8">UTF-8</option>
        </Select>
      </div>

      {/* <span
        style={{
          display: "inline-flex",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <DownloadFormat selected={true}>jpeg</DownloadFormat>
        <DownloadFormat selected={false}>svg</DownloadFormat>
        <DownloadFormat selected={false}>utf-8</DownloadFormat>
      </span> */}
    </SdownloadSection>
  );
};

export default DownloadSection;
