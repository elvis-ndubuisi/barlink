import React from "react";
import styled from "styled-components";
import QRContext from "../../context/QRContext";
import { toast } from "react-toastify";

interface iProp {
  addedImage: Function;
}

const DropZone = ({ addedImage }: iProp) => {
  let browseFile = React.useRef<HTMLInputElement>(null);
  let zone = React.useRef<HTMLDivElement>(null);
  let [dropText, setDropText] = React.useState<string>("Drag & Drop file");

  const { dispatch } = React.useContext(QRContext);

  function fileDragEnter(event: React.DragEvent<HTMLInputElement>): void {
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

  function handleData(data: any): void {
    let { name, type } = data;
    let validType = ["image/jpeg", "image/png", "image/png", "image/svg+xml"];
    if (validType.includes(type)) {
      /* user seected wanted format */
      setDropText(`${name.slice(0, 15)}...`);
      zone.current && zone.current?.classList.add("dropped");
      // read file
      const reader = new FileReader();
      reader.readAsDataURL(data);
      reader.onloadend = (event) => {
        dispatch({
          type: "MOD_LOGO_IMAGE",
          payload: { logoImage: reader.result },
        });
        addedImage(true);
      };
    } else {
      /* unwanted format selected */
      toast.error("Invalid file format");
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
        onChange={(event) =>
          handleData(event.target.files && event.target.files[0])
        }
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
