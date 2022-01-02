import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --hue-base: 227;
    --hue-header: 256;

    --background-color: hsl(var(--hue-base), 10%, 95%);
    --text-color: hsl(var(--hue-base), 16%, 64%);
    --titles-color: hsl(var(--hue-base), 28%, 29%);
    --shape-color: #ffffff;
    --header-color: hsl(var(--hue-header), 67%, 48%);
    --header-color-second: hsl(var(--hue-header), 100%, 60%);
    --cashin-color: hsl(158, 60%, 50%);
    --cashout-color: hsl(350, 78%, 54%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background-color);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

  }
    
  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background-color);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;

  }
`