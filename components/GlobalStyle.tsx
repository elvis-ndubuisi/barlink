import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    /* Colors */
    --clr-main-dark: #5cac84;
    --clr-main: #64dca4;
    --clr-main-light: #89cfad;
    --clr-main-lighter: #e6e8e8;
    --clr-white: #ffffff;
    --clr-light: #eff1f1;
    --clr-light2: #f4f4f4;
    --clr-dark: #151515;
    --clr-dark-gray: #202020;
    --clr-gray: #2e2f2f;
    --clr-gray-light: #8a8a8a;

    --max-width: 1440px;

    /* Spacing */
    font-size: 1rem;
    --spacing-base: 1rem;
    --landing-height: 560px;
    --border-width: 1px;
    --border-width2: 2px;
    --border-width3: 3px;

    /* Properties */
    --radius: 5px;
    --radius-10: 10px;

    /* Fonts */
    --fw-regular: 400;
    --fw-medium: 500;
    --fw-smbold: 600;
    --fw-bold: 700;
    --fw-exbold: 800;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    /* Globals */
    line-height: 1.4rem;

    /* Url form */
    --url-border-size: 3px;
    --url-border-color: var(--clr-main);
    --url-form-max-width: 910px;
    --url-form-gap: 12px;
    --url-radius: var(--radius-10);
    --url-transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    :root {
      font-size: 0.9375rem;
    }
  }

  html,
  body {
    font-family: "Poppins", sans-serif;
    background-color: var(--clr-dark-gray);
    color: var(--clr-white);
    font-weight: var(--fw-medium);
    min-height: 100vh;
    overflow-x: hidden;
    line-height: 1.4;
  }

  body::-webkit-scrollbar {
    width: 0.4em;
  }
  
  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: var(--clr-main);
    outline: 1px solid var(--clr-main-lighter);
  }


  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    user-select: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    margin: 0 0.3rem;
    font-weight: var(--fw-regular);
    font-size: inherit;
    font-family: inherit;
  }

  a:hover,
  a:focus {
    color: var(--clr-main);
  }
  a:focus-visible {
    outline: groove 1px var(--clr-main);
  }

  input,
  textarea,
  label {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
  }

  button {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
  }
`;

export default GlobalStyle;
