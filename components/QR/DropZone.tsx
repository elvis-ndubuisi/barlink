import React from "react";
import styled from "styled-components";

const DropZone = ({ children }: any) => {
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
  let browseFile = React.useRef<HTMLInputElement>(null);
  let zone = React.useRef<HTMLDivElement>(null);
  let file = React.useRef<any>(null);
  let [dropText, setDropText] = React.useState<string>("Drag & Drop file");
  const [dropped, setDropped] = React.useState(false);

  // function fileDragDrop(event: any): void {
  //   console.log(event);
  //   let file = event.dataTransfer.files[0];
  // }

  function fileDragEnter(event: React.FormEvent<HTMLInputElement>): void {
    event.preventDefault();
    event.stopPropagation();
  }

  function fileDragLeave(event: React.DragEvent<HTMLDivElement>): void {
    event.preventDefault();
    event.stopPropagation();
    zone.current && zone.current.classList.remove("active");
    setDropText("Drag & Drop file");
  }

  function fileDragOver(event: React.DragEvent<HTMLDivElement>): void {
    event.stopPropagation();
    event.preventDefault();
    zone.current && zone.current.classList.add("active");
    setDropText("Release to upload");
  }

  function fileDrop(event: React.DragEvent<HTMLDivElement>): void {
    event.stopPropagation();
    event.preventDefault();

    const data = event.dataTransfer.files[0];

    handleData(data);
  }

  function selectedFile(event: any): void {
    file.current = event.target?.files[0];
    handleData(file.current);
  }

  function handleData(data: any): void {
    let { name, type } = data;
    let validType = ["image/jpeg", "image/png", "image/png", "image/svg+xml"];
    if (validType.includes(type)) {
      /* user seected wanted format */
      setDropText(name);
      zone.current && zone.current?.classList.add("dropped");
      // read file
      const reader = new FileReader();
      reader.onload = (e) => console.log(e);
      reader.readAsDataURL(data);
    } else {
      /* unwanted format selected */
      if (zone.current) {
        zone.current?.classList.remove("dropped");
        zone.current?.classList.add("error");
        setDropText("Invalid file Format");
      }
    }
  }
  return (
    <Styled
      onDragEnter={(event: React.DragEvent<HTMLInputElement>) =>
        fileDragEnter(event)
      }
      onDragLeave={(event: React.DragEvent<HTMLDivElement>) =>
        fileDragLeave(event)
      }
      onDragOver={(event: React.DragEvent<HTMLDivElement>) =>
        fileDragOver(event)
      }
      onDrop={(event: React.DragEvent<HTMLDivElement>) => fileDrop(event)}
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
