import styled from "styled-components";

const Input = styled.input`
  font-size: 0.875rem;
  background-color: var(--clr-dark-gray);
  color: var(--clr-white);
  outline: 0;
  border: none;
  border-radius: 5px;
  width: 100%;
  max-width: 500px;
  padding: 0.875em;
  border: solid 1px transparent;

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

export const Textarea = styled.textarea`
  font-size: 0.875rem;
  background-color: var(--clr-dark-gray);
  color: var(--clr-white);
  outline: 0;
  border: none;
  border-radius: 5px;
  width: 100%;
  max-width: 500px;
  width: 100%;
  padding: 0.875em;
  border: solid 1px transparent;

  :placeholder {
    text-transform: uppercase;
    font-weight: var(--fw-smbold);
  }

  :focus,
  :hover {
    border-color: var(--clr-main);
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4em;
`;

export const Select = styled.select`
  outline: 0;
  background-color: inherit;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  borde: none;
  padding: 0 0.3em;
  font-family: inherit;

  option {
    color: var(--clr-dark);
    padding: 0 0.3em;
  }
`;

export default Input;
