import React from "react";
import styled from "styled-components";
import Buttons from "../Buttons";

const Scanner = styled.section`
  width: 100%;
`;

const DropZone = styled.div``;

const Scan = () => {
  const zone = React.useRef<HTMLDivElement | null>(null);
  return (
    <Scanner>
      <DropZone>
        <input type="file" hidden />
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
