import styled from "styled-components";

interface iColorSwatch {
  swatchColor: string;
  isCustomize?: boolean;
}

interface iGrid {
  colorGrid?: boolean;
}

interface iContainer {
  noJustify?: boolean;
}

export const StyledWrapper = styled.section`
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

export const Container = styled.div<iContainer>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: ${(props) => !props.noJustify && "space-between"};
  gap: 2em;
  min-height: inherit;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: var(--fw-smbold);
  font-size: 1.2rem;
`;

export const HeaderBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: var(--fw-regular);
  font-family: inherit;
  font-size: inherit;
  outline: 0;
  border: none;
  background-color: transparent;
  color: inherit;
  cursor: pointer;
  font-size: 0.9rem;

  :hover,
  :focus {
    color: var(--clr-main);
  }
`;

export const Divider = styled.div`
  height: 2px;
  background-color: var(--clr-gray);
  width: 100%;
  margin: 0.3em 0 1em;
`;

export const DownloadSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.875em;
  align-items: stretch;
`;

export const FileName = styled.div`
  border: solid 2px var(--clr-white);
  outline: 0;
  padding: 5px 0.8125em;
  border-radius: 5px;

  :focus {
    border-color: var(--clr-main);
  }
`;

// export const Preview = styled.div`
//   border-radius: 5px;
//   width: 300px;
//   max-width: 350px;
//   aspect-ratio: 1;
//   background-color: var(--clr-white);
//   font-weight: var(--fw-exbold);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 0.875em;
//   margin: auto;

//   h3 {
//     font-size: 1.1rem;
//     color: var(--clr-dark);
//     margin: 0.5em 0;
//   }

//   > div {
//     width; 100%;
//     height: inherit;
//   }
// `;

export const Grid = styled.div<iGrid>`
  display: grid;
  align-items: baseline;
  justify-content: center;
  grid-template-columns: ${(props) =>
    props.colorGrid
      ? "repeat(5, 1fr)"
      : "repeat(auto-fill, minmax(auto, 50px))"};
  gap: 8px;
`;

export const Input = styled.input`
  font-size: 0.875rem;
  background-color: var(--clr-dark-gray);
  color: var(--clr-white);
  outline: 0;
  border: none;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  padding: 0.875em;

  :placeholder {
    text-transform: uppercase;
    font-weight: var(--fw-smbold);
  }

  :focus,
  :hover {
    border-color: var(--clr-main);
  }

  /* Styling the Checkbox Input */
  &[type="checkbox"] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    appearance: none;
    /* For iOS < 15 to remove gradient background */
    background-color: #fff;
    /* Not removed via appearance */
    margin: 0;
    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid currentColor;
    border-radius: 0.15em;
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;
  }

  &[type="checkbox"]::before {
    content: "";
    width: 0.9em;
    height: 0.9em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--clr-main);

    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }

  &[type="checkbox"]:checked::before {
    transform: scale(1);
  }

  &[type="checkbox"]:focus {
    outline: max(2px, 0.15em) solid var(--clr-main);
    // outline-offset: max(2px, 0.15em);
  }

  /* Styling the Range Input */
  &[type="range"] {
    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
    width: 100%; /* Specific width is required for Firefox. */
    background: transparent; /* Otherwise white in Chrome */
  }

  &[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  &[type="range"]:focus {
    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
  }

  &[type="range"]::-ms-track {
    width: 100%;
    cursor: pointer;

    /* Hides the slider so custom styles can be added */
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  /* Special styling for WebKit/Blink */
  &[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
    margin-top: -14px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; /* Add cool effects to your sliders! */
  }

  /* All the same stuff for Firefox */
  &[type="range"]::-moz-range-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }

  /* All the same stuff for IE */
  &[type="range"]::-ms-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }

  &[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    // box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    // background: #3071a9;
    background: var(--clr-main-lighter);
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }

  &[type="range"]:focus::-webkit-slider-runnable-track {
    // background: #367ebd;
    background: var(--clr-main);
  }

  &[type="range"]::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    // box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    // background: #3071a9;
    background: var(--clr-main-lighter);
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }

  &[type="range"]::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }
  &[type="range"]::-ms-fill-lower {
    background: #2a6495;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  &[type="range"]:focus::-ms-fill-lower {
    background: #3071a9;
  }
  &[type="range"]::-ms-fill-upper {
    background: #3071a9;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  &[type="range"]:focus::-ms-fill-upper {
    background: #367ebd;
  }
`;

// const DropZone = styled.div`
//   width: inherit;
//   font-size: 0.8125rem;
//   border: 2px dashed var(--clr-main);
//   padding: 1em 0.5em;
//   background-color: var(--clr-gray);
//   border-radius: 5px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: row;

//   .active {
//     border: 2px solid #fff;
//   }
//   button {
//     background-color: transparent;
//     color: var(--clr-main);
//     outline: 0;
//     border: none;
//   }
// `;

export const Color = styled.div<iColorSwatch>`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-color: ${(props) => props.swatchColor};
`;

export const SliderGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  width: 100%;
  margin: 0.5em 0;

  span {
    font-size: 1rem;
    color: var(--clr-dark);
    padding: 0.3em 0.5em;
    background-color: var(--clr-main-lighter);
    border-radius: 5px;
    min-width: 50px;
  }

  input[type="range"] {
  }
`;
