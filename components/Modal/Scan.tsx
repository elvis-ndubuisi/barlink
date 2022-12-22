import React, { FormEvent } from "react";
import styled from "styled-components";
import Buttons from "../Buttons";
import { motion } from "framer-motion";

const Scanner = styled.section`
  width: 100%;

  > p {
    margin-bottom: 0.5em;
    text-align: center;
  }
`;

const DropZone = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  margin-bottom: 0.5em;
  background-color: var(--clr-gray);
  height: 80px;
  color: var(--clr-white);
  border: dashed 2px var(--clr-main);
  border-radius: 0.5em;

  button {
    background-color: transparent;
    color: var(--clr-main);
    outline: 0;
    border: none;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }

  &.over {
    background-color: var(--clr-dark-gray);
  }
`;

const Scan = () => {
  const bfile = React.useRef<HTMLInputElement | null>(null);
  const zone = React.useRef<HTMLDivElement | null>(null);
  const file = React.useRef<any>(null);
  const [filename, setFilename] = React.useState<string>("");
  const [text, setText] = React.useState<string>("Drag & Drop file");

  function dragEnter(event: React.DragEvent<HTMLDivElement>): void {
    event.preventDefault();
    event.stopPropagation();
  }

  function dragOver(event: React.DragEvent<HTMLDivElement>): void {
    event.stopPropagation();
    event.preventDefault();
    zone.current && zone.current.classList.add("over");
    setText("Release to Upload");
  }

  function dragLeave(event: React.DragEvent<HTMLDivElement>): void {
    event.preventDefault();
    event.stopPropagation();
    zone.current && zone.current.classList.remove("over");
    setText("Drag & Drop file");
  }

  function dragDrop(event: React.DragEvent<HTMLDivElement>): void {
    event.stopPropagation();
    event.preventDefault();

    handleData(event.dataTransfer?.files[0]);
  }

  function handleData(data: any): void {
    let { name, type } = data;
    let validType = ["image/jpeg", "image/png", "image/png", "image/svg+xml"];
    if (validType.includes(type)) {
      setText(`${name.slice(0, 15)}...`);
      setFilename(`${name.split(".")[0]} is selected`);
      zone.current && zone.current?.classList.add("dropped");
      // read file
      const reader = new FileReader();
      reader.readAsDataURL(data);
      reader.onloadend = (event) => {
        console.log(event);
      };
    } else {
      // file not supported
      // TODO: alert file formart error via toastify.
      if (zone.current) {
        zone.current?.classList.remove("dropped");
        zone.current?.classList.remove("over");
        setText("Drag & Drop file");
      }
    }
  }

  return (
    <Scanner>
      <p>{filename ? filename : "No File selected"}</p>
      {/* TODO: add pop animation on zone hover */}
      <DropZone
        onDragEnter={(event) => dragEnter(event)}
        onDragLeave={(event) => dragLeave(event)}
        onDrop={(event) => dragDrop(event)}
        onDragOver={(event) => dragOver(event)}
        ref={zone}
      >
        <h3>{text}</h3>
        <button onClick={() => bfile.current?.click()}> Browse file</button>
        <input
          type="file"
          hidden
          ref={bfile}
          onChange={(event) =>
            handleData(event.target.files && event.target.files[0])
          }
        />
      </DropZone>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Buttons primary={false} dark={true}>
          Scan via camera
        </Buttons>
        <Buttons primary={true}>Scan file</Buttons>
      </div>
    </Scanner>
  );
};

export default Scan;
