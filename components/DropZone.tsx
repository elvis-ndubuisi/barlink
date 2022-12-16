import React from "react";
import styled from "styled-components";

const DropZone = ({ children }: any) => {
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
  let browseFile = React.useRef<HTMLInputElement>(null);
  let zone = React.useRef<HTMLDivElement>(null);
  let file = React.useRef<any>(null);
  let [dropText, setDropText] = React.useState<string>("Drag & Drop file");
  const [dropped, setDropped] = React.useState(false);

  function fileDragOver(event: any): void {
    zone.current && zone.current.classList.add("active");
    setDropText("Release to upload");
  }

  function fileDragLeave(event: any): void {
    zone.current && zone.current.classList.remove("active");
    setDropText("Drag & Drop file");
  }

  function fileDragDrop(event: any): void {
    console.log(event);
    let file = event.dataTransfer.files[0];
  }

  function selectedFile(event: any): void {
    console.log(event.target.files[0]);
    zone.current && zone.current.classList.add("dropped");
    file.current = event.target?.files[0];
    setDropText(event.target?.files[0].name);
    // let file = console.log(event.target?.files[0]);
    handleFile(file.current);
  }

  function handleFile(file: any): void {
    let fileExt = file.type;
    let validType = ["image/jpeg", "image/jpg", "image/png"];
    if (validType.includes(fileExt)) {
      /* user selected image file format */
    } else {
      /* wrong format selected */
      zone.current?.classList.remove("dropped");
      zone.current?.classList.add("error");
    }
  }
  return (
    <Styled
      onDragOver={(event) => fileDragOver(event)}
      onDragLeave={(event) => fileDragLeave(event)}
      onDrop={(e) => {
        e.preventDefault();
      }}
      ref={zone}
    >
      <header>{dropText}</header>
      <button onClick={() => browseFile.current?.click()}>Browse File</button>
      <input
        type="file"
        hidden
        ref={browseFile}
        onChange={(event) => selectedFile(event)}
      />
    </Styled>
  );
};

const Styled = styled.div`
  width: inherit;
  font-size: 0.8125rem;
  border: 2px dashed var(--clr-main);
  padding: 1em 0.5em;
  background-color: var(--clr-gray);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  &.active {
    border: 2px solid #fff;
  }

  &.error {
    border-color: red;
  }
  &.dropped {
    border: solid 2px green;
  }
  button {
    background-color: transparent;
    color: var(--clr-main);
    outline: 0;
    border: none;
  }
`;

export default DropZone;
