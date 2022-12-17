import React from "react";
import styled from "styled-components";

const Scanner = styled.section``;

const Scan = () => {
  return (
    <Scanner>
      <div>drop zone</div>
      <div>
        <button>scan via camera</button>
        <button>scan</button>
      </div>
    </Scanner>
  );
};

export default Scan;
